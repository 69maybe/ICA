tableBody.append(`
  <tr>
    <td>${sv.mssv}</td>
    <td>${sv.ten}</td>
    <td>${sv.lop}</td>
    <td>
      <button
        onclick="copyAndOpen('${sv.mssv}')"
        class="inline-block px-2 py-1 text-xs font-medium bg-pink-100 text-pink-700 rounded border border-pink-300 hover:bg-pink-200 transition">
        Rình
      </button>
    </td>
  </tr>
`);
function copyAndOpen(mssv) {
  const tempInput = document.createElement("input");
  document.body.appendChild(tempInput);
  tempInput.value = mssv;
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  window.open('http://daotao2.stu.edu.vn/xlhv_hk241/', '_blank');
}



