export default function handler(req, res) {
  if (req.method === "POST") {
    const { header, individuals, families, submitter } = req.body;

    const gedcomData = `
      0 HEAD
      1 SOUR ${header.source}
      2 NAME ${header.sourceName}
      2 VERS ${header.sourceVersion}
      1 DATE ${header.date}
      1 GEDC
      2 VERS ${header.gedcomVersion}
      2 FORM ${header.form}
      1 CHAR ${header.charset}
      1 SUBM ${header.submitter}
      ${individuals
        .map(
          (ind) => `
      0 @${ind.id}@ INDI
      1 NAME ${ind.name}
      1 SEX ${ind.sex}
      ${ind.fams ? `1 FAMS ${ind.fams}` : ""}
      ${ind.famc ? `1 FAMC ${ind.famc}` : ""}`
        )
        .join("")}
      ${families
        .map(
          (fam) => `
      0 @${fam.id}@ FAM
      1 HUSB ${fam.husband}
      1 WIFE ${fam.wife}
      1 MARR ${fam.marriage ? "1 MARR" : ""}
      ${fam.children.map((child) => `1 CHIL ${child}`).join("")}
      `
        )
        .join("")}
    0 @${submitter.id}@ SUBM
    1 NAME ${submitter.name}
    0 TRLR`;

    console.log(gedcomData);

    res
      .status(200)
      .json({ message: "GEDCOM data received successfully", data: gedcomData });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
