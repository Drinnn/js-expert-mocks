const { rejects, deepStrictEqual, deepEqual } = require("assert");

const File = require("./src/app");
const { error } = require("./src/constants");

(async () => {
  {
    const filePath = "./mocks/emptyFile-invalid.csv";

    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
    const result = File.csvToJson(filePath);

    await rejects(result, rejection);
  }
  {
    const filePath = "./mocks/fourItems-invalid.csv";

    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
    const result = File.csvToJson(filePath);

    await rejects(result, rejection);
  }
  {
    const filePath = "./mocks/noHeader-invalid.csv";

    const rejection = new Error(error.FILE_FIELDS_ERROR_MESSAGE);
    const result = File.csvToJson(filePath);

    await rejects(result, rejection);
  }
  {
    const filePath = "./mocks/threeItems-valid.csv";

    const expected = [
      {
        id: 1,
        name: "John Doe",
        profession: "Software Developer",
        birthDay: 1988,
      },
      {
        id: 2,
        name: "Peter Malik",
        profession: "Game Developer",
        birthDay: 2000,
      },
      {
        id: 3,
        name: "Wesley Opal",
        profession: "Software Architect",
        birthDay: 1978,
      },
    ];
    const result = await File.csvToJson(filePath);

    deepEqual(result, expected);
  }
})();
