"use client"

const FamilyForm = ({
  families,
  addFamily,
  updateFamily,
  addChildToFamily,
  updateFamilyChild,
}) => {
  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold mb-2">Families: {!families || families.length <= 0 && 'None'}</h2>
      {families.map((family, index) => (
        <div key={index} className="mb-2 border p-2 rounded">
          <div className="mb-2">
            <label className="block mb-1">ID:</label>
            <input
              type="text"
              className="w-full p-2 border text-black rounded"
              value={family.id}
              onChange={(e) => updateFamily(index, "id", e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label className="block mb-1">Husband:</label>
            <input
              type="text"
              className="w-full p-2 border text-black rounded"
              value={family.husband}
              onChange={(e) => updateFamily(index, "husband", e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label className="block mb-1">Wife:</label>
            <input
              type="text"
              className="w-full p-2 border text-black rounded"
              value={family.wife}
              onChange={(e) => updateFamily(index, "wife", e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label className="block mb-1">Marriage:</label>
            <input
              type="checkbox"
              className="mr-2"
              checked={family.marriage}
              onChange={(e) =>
                updateFamily(index, "marriage", e.target.checked)
              }
            />
          </div>
          <div className="mb-2">
            <h3 className="font-bold mb-1">Children</h3>
            {family.children.map((child, childIndex) => (
              <div key={childIndex} className="mb-2">
                <label className="block mb-1">Child ID:</label>
                <input
                  type="text"
                  className="w-full p-2 border text-black rounded"
                  value={child}
                  onChange={(e) =>
                    updateFamilyChild(index, childIndex, e.target.value)
                  }
                />
              </div>
            ))}
            <button
              type="button"
              className="bg-green-500 text-white p-2 rounded"
              onClick={() => addChildToFamily(index)}
            >
              Add Child
            </button>
          </div>
        </div>
      ))}
      <button
        type="button"
        className="bg-blue-500 text-white p-2 rounded"
        onClick={addFamily}
      >
        Add Family
      </button>
    </div>
  );
};

export default FamilyForm;
