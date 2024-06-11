"use client"

const SubmitterForm = ({ submitter, setSubmitter }) => {
  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold mb-2">Submitter Information</h2>
      <div className="mb-2">
        <label className="block mb-1">ID:</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={submitter.id}
          onChange={(e) => setSubmitter({ ...submitter, id: e.target.value })}
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Name:</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={submitter.name}
          onChange={(e) => setSubmitter({ ...submitter, name: e.target.value })}
        />
      </div>
    </div>
  );
};

export default SubmitterForm;
