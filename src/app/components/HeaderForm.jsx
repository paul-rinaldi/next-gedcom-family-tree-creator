"use client"

const HeaderForm = ({ header, setHeader }) => {
  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold mb-2">Header Information</h2>
      <div className="mb-2">
        <label className="block mb-1">Source:</label>
        <input
          type="text"
          className="w-full p-2 border text-black rounded"
          value={header.source}
          onChange={(e) => setHeader({ ...header, source: e.target.value })}
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Source Name:</label>
        <input
          type="text"
          className="w-full p-2 border text-black rounded"
          value={header.sourceName}
          onChange={(e) => setHeader({ ...header, sourceName: e.target.value })}
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Source Version:</label>
        <input
          type="text"
          className="w-full p-2 border text-black rounded"
          value={header.sourceVersion}
          onChange={(e) => setHeader({ ...header, sourceVersion: e.target.value })}
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Date:</label>
        <input
          type="text"
          className="w-full p-2 border text-black rounded"
          value={header.date}
          onChange={(e) => setHeader({ ...header, date: e.target.value })}
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1">GEDCOM Version:</label>
        <input
          type="text"
          className="w-full p-2 border text-black rounded"
          value={header.gedcomVersion}
          onChange={(e) => setHeader({ ...header, gedcomVersion: e.target.value })}
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Form:</label>
        <input
          type="text"
          className="w-full p-2 border text-black rounded"
          value={header.form}
          onChange={(e) => setHeader({ ...header, form: e.target.value })}
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Charset:</label>
        <input
          type="text"
          className="w-full p-2 border text-black rounded"
          value={header.charset}
          onChange={(e) => setHeader({ ...header, charset: e.target.value })}
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Submitter:</label>
        <input
          type="text"
          className="w-full p-2 border text-black rounded"
          value={header.submitter}
          onChange={(e) => setHeader({ ...header, submitter: e.target.value })}
        />
      </div>
    </div>
  );
};

export default HeaderForm;
