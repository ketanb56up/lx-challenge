const reverseWords = async (req, res, next) => {
  const sentence = req.query.sentence;

  const isAlphabet = (x) => {
    return (x >= "A" && x <= "Z") || (x >= "a" && x <= "z");
  };
  const swap = (str, a, b) => {
    var c = "";
    for (var i = 0; i < str.length; i++) {
      if (i == a) c = c + str[b];
      else if (i == b) c = c + str[a];
      else c = c + str[i];
    }
    return c;
  };

  const reverse = (str) => {
    var r = str.length - 1,
      l = 0;

    while (l < r) {
      if (!isAlphabet(str[l])) l++;
      else if (!isAlphabet(str[r])) r--;
      else {
        str = swap(str, l, r);
        l++;
        r--;
      }
    }

    return str;
  };

  const result = [];

  try {
    sentence.split(" ").map((i) => {
      result.push(reverse(i));
    });
    res.send({ output: result.join(" "), success: true });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ response: error });
  }
};

const sortWords = async (req, res, next) => {
  const sentence = req.query.sentence;

  const sort = (str) => {
    const result = [];
    const upper = [];
    str.split(" ").map((ele) => {
      other = [];
      special = [];
      ele.split("").map((e, i) => {
        if (e === "'" || (e >= "a" && e <= "z") || (e >= "A" && e <= "Z")) {
          other.push(e);
        } else {
          special.push({ index: i, element: e });
        }
      });
      y = other.sort();
      z = y.join("");
      special.map(
        (item) =>
          (y = y.slice(0, item.index) + item.element + y.slice(item.index))
      );
      if (typeof y == "string") {
        y = y.split(",");
      }
      result.push(y.join(""));
    });

    return result.join(" ");
  };

  try {
    res.send({ output: sort(sentence), success: true });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ response: error });
  }
};

exports.reverseWords = reverseWords;
exports.sortWords = sortWords;
