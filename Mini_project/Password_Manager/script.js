function SavePassword() {
  const WB = document.getElementById("websiteName").value.trim();
  const UN = document.getElementById("userName").value.trim();
  const PS = document.getElementById("password").value.trim();
  const CPS = document.getElementById("cfPassword").value.trim();

  //   <tr>
  //     <td>1.</td>
  //     <td>qwertyuio</td>
  //     <td>qwertyuiop[</td>
  //     <td>asdfghjkl</td>
  //     <td>
  //       <button class="btn btn-danger btn-sm">
  //         <i class="bi bi-trash"></i> Delete
  //       </button>
  //     </td>
  //   </tr>;

  const TR = document.createElement("tr");

  TR.innerHTML = `
            <td>1.</td>
            <td>${WB}</td>
            <td>${UN}</td>
            <td>${PS}</td>
`;

  const TD = document.createElement("td");
  const BTN = document.createElement("button");

  BTN.classList.add("btn", "btn-danger", "btn-sm", "d-flex", "gap-2");
  BTN.innerHTML = ` 
                <i class="bi bi-trash"></i> 
                <span>Delete</span>
              `;
  BTN.onclick = () => TR.remove();

  TD.appendChild(BTN);
  TR.appendChild(TD);

  const ES = document.getElementById("emptyState");
  if (ES) {
    document.getElementById("dataTable").innerHTML = "";
  }

  document.getElementById("dataTable").appendChild(TR);

  document.getElementById("websiteName").value = "";
  document.getElementById("userName").value = "";
  document.getElementById("password").value = "";
  document.getElementById("cfPassword").value = "";
}