"use client"

const IndividualForm = ({ individuals, addIndividual, updateIndividual }) => {
  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold mb-2">Individuals: {!individuals || individuals.length <= 0 && 'None'}</h2>
      {individuals.map((individual, index) => (
        <div key={index} className="mb-2 border p-2 rounded">
          <div className="mb-2">
            <label className="block mb-1">ID:</label>
            <input
              type="text"
              className="w-full p-2 border text-black rounded"
              value={individual.id}
              onChange={(e) => updateIndividual(index, 'id', e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label className="block mb-1">Name:</label>
            <input
              type="text"
              className="w-full p-2 border text-black rounded"
              value={individual.name}
              onChange={(e) => updateIndividual(index, 'name', e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label className="block mb-1">Sex:</label>
            <input
              type="text"
              className="w-full p-2 border text-black rounded"
              value={individual.sex}
              onChange={(e) => updateIndividual(index, 'sex', e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label className="block mb-1">FAMS:</label>
            <input
              type="text"
              className="w-full p-2 border text-black rounded"
              value={individual.fams}
              onChange={(e) => updateIndividual(index, 'fams', e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label className="block mb-1">FAMC:</label>
            <input
              type="text"
              className="w-full p-2 border text-black rounded"
              value={individual.famc}
              onChange={(e) => updateIndividual(index, 'famc', e.target.value)}
            />
          </div>
        </div>
      ))}
      <button
        type="button"
        className="bg-blue-500 text-white p-2 rounded"
        onClick={addIndividual}
      >
        Add Individual
      </button>
    </div>
  );
};

export default IndividualForm;
