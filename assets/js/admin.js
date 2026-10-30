/* ==========================================================================
 * SUMFORGE · admin.js —— 后台交互（严谨模式）
 * 功能：菜单高亮 · 表格全选 · 行操作 · 筛选 · 分页 · 审核通过/驳回 ·
 *      权限勾选 · 弹层确认 · Toast · 图表填充 · 数据刷新（mock/real 双通道）
 * ========================================================================== */
(function (w, d) {
  'use strict';
  var A = w.RFAdmin = w.RFAdmin || {};

  /* ---------- Toast ---------- */
  A.toast = function (msg, ms) {
    var t = d.getElementById('a-toast');
    if (!t) {
      t = d.createElement('div'); t.id = 'a-toast';
      t.style.cssText = 'position:fixed;left:50%;top:70px;transform:translateX(-50%);background:#1F2D3D;color:#fff;' +
        'padding:9px 16px;border-radius:4px;font-size:13px;z-index:999;display:none;box-shadow:0 4px 14px rgba(0,0,0,.2)';
      d.body.appendChild(t);
    }
    t.textContent = msg; t.style.display = 'block';
    clearTimeout(t._tm); t._tm = setTimeout(function () { t.style.display = 'none'; }, ms || 1800);
  };

  /* ---------- 确认弹层 ---------- */
  A.confirm = function (title, desc, onOk) {
    var m = d.getElementById('a-modal');
    if (!m) {
      m = d.createElement('div'); m.id = 'a-modal';
      m.style.cssText = 'position:fixed;inset:0;background:rgba(15,25,38,.45);z-index:900;display:none;align-items:center;justify-content:center';
      m.innerHTML = '<div style="width:340px;background:#fff;border-radius:6px;overflow:hidden;box-shadow:0 12px 32px rgba(0,0,0,.18)">' +
        '<div style="padding:14px 16px;font-size:15px;font-weight:600;color:#1F2D3D" class="t"></div>' +
        '<div style="padding:0 16px 14px;font-size:13px;color:#5A6B80;line-height:1.6" class="c"></div>' +
        '<div style="padding:10px 16px;background:#F7F9FC;display:flex;justify-content:flex-end;gap:8px;border-top:1px solid #E3E8EF">' +
        '<button class="a-btn" data-no>取消</button><button class="a-btn pri" data-yes>确定</button></div></div>';
      d.body.appendChild(m);
      m.addEventListener('click', function (e) {
        if (e.target === m || e.target.hasAttribute('data-no')) m.style.display = 'none';
        if (e.target.hasAttribute('data-yes')) { m.style.display = 'none'; if (m._ok) m._ok(); }
      });
    }
    m.querySelector('.t').textContent = title;
    m.querySelector('.c').textContent = desc || '';
    m._ok = onOk; m.style.display = 'flex';
  };

  /* ---------- 表格全选 ---------- */
  function bindCheckAll() {
    d.querySelectorAll('table[data-tb]').forEach(function (tb) {
      var all = tb.querySelector('th input[type=checkbox]');
      var rows = tb.querySelectorAll('td input[type=checkbox]');
      if (!all) return;
      all.addEventListener('change', function () { rows.forEach(function (r) { r.checked = all.checked; }); syncSel(tb); });
      rows.forEach(function (r) { r.addEventListener('change', function () { syncSel(tb); }); });
    });
  }
  function syncSel(tb) {
    var n = tb.querySelectorAll('td input[type=checkbox]:checked').length;
    var box = d.querySelector('[data-sel-count]');
    if (box) box.textContent = n ? ('已选择 ' + n + ' 项') : '';
  }

  /* ---------- 行操作：通过 / 驳回 / 删除 / 启停 ---------- */
  function bindRowOps() {
    d.body.addEventListener('click', function (e) {
      var a = e.target.closest('[data-op]'); if (!a) return;
      e.preventDefault();
      var op = a.getAttribute('data-op'), id = a.getAttribute('data-id'), name = a.getAttribute('data-name') || id;
      var API = (w.RF && w.RF.api && w.RF.api.admin) ? w.RF.api.admin : null;
      if (op === 'approve') {
        A.confirm('审核通过', '确认通过「' + name + '」的审核？通过后内容将立即对外可见。', function () {
          if (API) API.approve(id, {}).then(function () { markRow(a, '已通过', 'g'); A.toast('已通过'); });
          else { markRow(a, '已通过', 'g'); A.toast('已通过'); }
        });
      } else if (op === 'reject') {
        A.confirm('驳回', '确认驳回「' + name + '」？请确保在备注中写明原因。', function () {
          if (API) API.reject(id, { reason: '不符合发布规范' }).then(function () { markRow(a, '已驳回', 'r'); A.toast('已驳回'); });
          else { markRow(a, '已驳回', 'r'); A.toast('已驳回'); }
        });
      } else if (op === 'delete') {
        A.confirm('删除确认', '删除后不可恢复，确认删除「' + name + '」？', function () {
          var tr = a.closest('tr'); if (tr) tr.remove(); A.toast('已删除');
        });
      } else if (op === 'toggle') {
        var on = a.textContent.indexOf('启用') > -1;
        a.textContent = on ? '禁用' : '启用';
        a.className = 'a-btn sm' + (on ? '' : ' pri');
        A.toast(on ? '已启用' : '已禁用');
      } else if (op === 'assign') {
        A.confirm('分派工单', '将工单分派给对应处理人（技术支持组 / 模块工程组 / 商务组）。', function () { A.toast('已分派'); });
      } else if (op === 'top') {
        var t = a.textContent.indexOf('置顶') > -1;
        a.textContent = t ? '取消置顶' : '置顶';
        A.toast(t ? '已置顶' : '已取消置顶');
      } else {
        A.toast('操作已记录：' + op);
      }
    });
  }
  function markRow(a, text, cls) {
    var tr = a.closest('tr'); if (!tr) return;
    var cell = tr.querySelector('td.state');
    if (cell) cell.innerHTML = '<span class="a-tag ' + cls + '">' + text + '</span>';
  }

  /* ---------- 筛选 / 搜索 ---------- */
  function bindFilter() {
    d.querySelectorAll('[data-a-filter]').forEach(function (bar) {
      var btn = bar.querySelector('[data-a-search]');
      if (!btn) return;
      btn.addEventListener('click', function () {
        var vals = [];
        bar.querySelectorAll('input,select').forEach(function (el) { if (el.value) vals.push(el.value); });
        A.toast(vals.length ? ('筛选：' + vals.join(' / ')) : '已重置筛选');
      });
      var reset = bar.querySelector('[data-a-reset]');
      if (reset) reset.addEventListener('click', function () {
        bar.querySelectorAll('input,select').forEach(function (el) { el.value = ''; }); A.toast('已重置');
      });
    });
  }

  /* ---------- 分页 ---------- */
  function bindPager() {
    d.querySelectorAll('.a-pg').forEach(function (pg) {
      pg.querySelectorAll('a[data-p]').forEach(function (a) {
        a.addEventListener('click', function (e) {
          e.preventDefault();
          pg.querySelectorAll('a').forEach(function (x) { x.classList.remove('on'); });
          a.classList.add('on');
          A.toast('第 ' + a.getAttribute('data-p') + ' 页');
        });
      });
    });
  }

  /* ---------- 权限矩阵勾选 ---------- */
  function bindPerms() {
    d.querySelectorAll('.chk').forEach(function (c) {
      c.addEventListener('click', function () { c.classList.toggle('on'); });
    });
    d.querySelectorAll('[data-perm-all]').forEach(function (b) {
      b.addEventListener('click', function () {
        var on = b.getAttribute('data-perm-all') === '1';
        b.closest('table').querySelectorAll('.chk').forEach(function (c) { c.classList.toggle('on', on); });
        b.setAttribute('data-perm-all', on ? '0' : '1');
        b.textContent = on ? '取消全选' : '全选';
      });
    });
  }

  /* ---------- 图表填充（纯 CSS 柱） ---------- */
  function fillChart() {
    d.querySelectorAll('[data-chart]').forEach(function (box) {
      var raw = box.getAttribute('data-chart') || '30,44,38,62,55,78,66';
      var arr = raw.split(',').map(Number);
      var max = Math.max.apply(null, arr);
      box.innerHTML = arr.map(function (v, i) {
        return '<div class="cl' + (i === arr.length - 1 ? ' hl' : '') + '"><i style="height:' + Math.round(v / max * 150) + 'px"></i><span>' + (i + 1) + '月</span></div>';
      }).join('');
    });
  }

  /* ---------- 菜单高亮 ---------- */
  function bindMenu() {
    var cur = d.body.getAttribute('data-menu');
    if (cur) d.querySelectorAll('.a-side a').forEach(function (a) { a.classList.toggle('on', a.getAttribute('data-menu') === cur); });
  }

  function init() {
    bindCheckAll(); bindRowOps(); bindFilter(); bindPager(); bindPerms(); fillChart(); bindMenu();
    if (w.RF && w.RF.setLang) w.RF.setLang(w.RF.lang || 'zh');
    var y = d.getElementById('a-year'); if (y) y.textContent = new Date().getFullYear();
  }
  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', init); else init();
})(window, document);
