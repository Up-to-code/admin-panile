interface types {
  [x: string]: any;
}
let data = <types>{
  title: "",
  Imageurl: "" ,
  cont: "",
  Skiles: [],
  show: "",
};

export const get_data = () => {
  return data;
};
export const Chenge_data = (name: string, value: string | string[]) => {
  name = name.toLocaleLowerCase();
  if (typeof value === "string") {
    if (name === "title") {
      data = { ...data, title: value };
    }
    if (name === "path_url") {
      data = { ...data, Imageurl: value };
    }
    if (name === "constacet") {
      data = { ...data, cont: value };
    }
    if (name === "show") {
      data = { ...data, show: value };
    }
    if (name === "githup") {
      data = { ...data, githup: value };
    }
  }
  // if (name === "path_url") {
  //   data = { ...data, Path_url: value };
  // }
  if (Array.isArray(value)) {
    if (name === "Skiles") {
      data = { ...data, Skiles: value };
    }
  }
};

export const Skiles_array = (word: string) => {
  let skile = data.Skiles;
  let the_word = word;
  let arr = skile.lastIndexOf(the_word);
  if (arr != -1) {
    let app = skile.splice(arr, arr);
    Chenge_data("Skiles", skile);
  } else {
    skile.push(the_word);
    Chenge_data("Skiles", skile);
  }
};
