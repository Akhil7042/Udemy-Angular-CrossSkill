// Function for populating on initial load

let data;
$(async function () {
  data = await fetch("./data.json").then((response) => response.json());

  console.log(data);
  populateTableData(data);
});

//Name button Sorting
$("#name-btn").click(function () {
  const sortedDataAsc = [...data].sort((a, b) => (a.name > b.name ? 1 : -1));
  const sortedDataDesc = [...data].sort((a, b) => (a.name > b.name ? -1 : 1));

  if (this.className.includes("asc")) {
    $(this).removeClass("asc");
    $(this).addClass("desc");
    populateTableData(sortedDataDesc);
  } else if (this.className.includes("desc")) {
    $(this).removeClass("desc");
    populateTableData(data);
  } else {
    $(this).addClass("asc");
    populateTableData(sortedDataAsc);
  }
});

//Class button Sorting
$("#class-btn").click(function () {
  const sortedDataAsc = [...data].sort((a, b) => (a.class > b.class ? 1 : -1));
  const sortedDataDesc = [...data].sort((a, b) => (a.class > b.class ? -1 : 1));

  if (this.className.includes("asc")) {
    $(this).removeClass("asc");
    $(this).addClass("desc");
    populateTableData(sortedDataDesc);
  } else if (this.className.includes("desc")) {
    $(this).removeClass("desc");
    populateTableData(data);
  } else {
    $(this).addClass("asc");
    populateTableData(sortedDataAsc);
  }
});

//Section button Sorting
$("#section-btn").click(function () {
  const sortedDataAsc = [...data].sort((a, b) =>
    a.section > b.section ? 1 : -1
  );
  const sortedDataDesc = [...data].sort((a, b) =>
    a.section > b.section ? -1 : 1
  );

  if (this.className.includes("asc")) {
    $(this).removeClass("asc");
    $(this).addClass("desc");
    populateTableData(sortedDataDesc);
  } else if (this.className.includes("desc")) {
    $(this).removeClass("desc");
    populateTableData(data);
  } else {
    $(this).addClass("asc");
    populateTableData(sortedDataAsc);
  }
});

//Sub1 button Sorting
$("#sub1-btn").click(function () {
  const sortedDataAsc = [...data].sort((a, b) => (a.sub1 > b.sub1 ? 1 : -1));
  const sortedDataDesc = [...data].sort((a, b) => (a.sub1 > b.sub1 ? -1 : 1));

  if (this.className.includes("asc")) {
    $(this).removeClass("asc");
    $(this).addClass("desc");
    populateTableData(sortedDataDesc);
  } else if (this.className.includes("desc")) {
    $(this).removeClass("desc");
    populateTableData(data);
  } else {
    $(this).addClass("asc");
    populateTableData(sortedDataAsc);
  }
});

//Sub2 button Sorting
$("#sub2-btn").click(function () {
  const sortedDataAsc = [...data].sort((a, b) => (a.sub2 > b.sub2 ? 1 : -1));
  const sortedDataDesc = [...data].sort((a, b) => (a.sub2 > b.sub2 ? -1 : 1));

  if (this.className.includes("asc")) {
    $(this).removeClass("asc");
    $(this).addClass("desc");
    populateTableData(sortedDataDesc);
  } else if (this.className.includes("desc")) {
    $(this).removeClass("desc");
    populateTableData(data);
  } else {
    $(this).addClass("asc");
    populateTableData(sortedDataAsc);
  }
});

//Sub3 button Sorting
$("#sub3-btn").click(function () {
  const sortedDataAsc = [...data].sort((a, b) => (a.sub3 > b.sub3 ? 1 : -1));
  const sortedDataDesc = [...data].sort((a, b) => (a.sub3 > b.sub3 ? -1 : 1));

  if (this.className.includes("asc")) {
    $(this).removeClass("asc");
    $(this).addClass("desc");
    populateTableData(sortedDataDesc);
  } else if (this.className.includes("desc")) {
    $(this).removeClass("desc");
    populateTableData(data);
  } else {
    $(this).addClass("asc");
    populateTableData(sortedDataAsc);
  }
});

function populateTableData(popData) {
  let count = popData.length;
  let trows = ``;

  for (let i = 0; i < count; i++) {
    trows += `<tr>
      <td>${popData[i].name}</td>
      <td>${popData[i].class}</td>
      <td>${popData[i].section}</td>
      <td>${popData[i].sub1}</td>
      <td>${popData[i].sub2}</td>
      <td>${popData[i].sub3}</td>
    </tr>`;
  }
  $("#table-body").html(trows);
}
