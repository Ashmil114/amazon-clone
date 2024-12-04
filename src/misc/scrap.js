const data = [];

for (let i = 20; i < 24; i++) {
  const layout = document.querySelector(
    `[data-cel-widget="card-${i.toString().padStart(2, "0")}"]`
  );

  let datum = {
    title: "",
    item: [],
    footer: "",
  };

  datum.title = layout.querySelector("h3 span.a-truncate-cut").innerHTML;
  const item = layout.querySelectorAll(".a-cardui-body a");

  item.forEach((el) => {
    let itemDatum = {
      url: "",
      title: "",
    };
    itemDatum.url = el.querySelector("img").src;
    itemDatum.title = el.querySelector("span .a-truncate-cut").innerHTML;

    datum.item.push(itemDatum);
  });

  datum.footer = layout.querySelector(
    ".a-cardui-footer span.a-truncate-cut"
  ).innerHTML;

  data.push(datum);
}

JSON.stringify(data);