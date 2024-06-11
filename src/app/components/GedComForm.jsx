"use client"
import { useState } from 'react';
import HeaderForm from '../components/HeaderForm';
import IndividualForm from './IndividualForm';
import FamilyForm from './FamilyForm';
import SubmitterForm from '../components/SubmitterForm';

export default function GedComForm() {
  const [header, setHeader] = useState({
    source: '',
    sourceName: '',
    sourceVersion: '',
    date: '',
    gedcomVersion: '',
    form: '',
    charset: '',
    submitter: ''
  });

  const [individuals, setIndividuals] = useState([]);
  const [families, setFamilies] = useState([]);
  const [submitter, setSubmitter] = useState({
    id: '',
    name: ''
  });
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/tree', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ header, individuals, families, submitter }),
    });

    const result = await response.json();
    setMessage(result.message);
  };

  const addIndividual = () => {
    setIndividuals((prevIndividuals) => [...prevIndividuals, { id: '', name: '', sex: '', fams: '', famc: '' }]);
  };

  const updateIndividual = (index, field, value) => {
    setIndividuals((prevIndividuals) => {
      const newIndividuals = [...prevIndividuals];
      newIndividuals[index][field] = value;

      return newIndividuals;
    });
  };

  const addFamily = () => {
    setFamilies((prevFamilies) => [...prevFamilies, { id: '', husband: '', wife: '', marriage: false, children: [] }]);
  };

  const updateFamily = (index, field, value) => {
    setFamilies((prevFamilies) => {
      const newFamilies = [...prevFamilies];
      newFamilies[index][field] = value;

      return newFamilies;
    });
  };

  const addChildToFamily = (familyIndex) => {
    setFamilies((prevFamilies) => {
      const newFamilies = [...prevFamilies];
      newFamilies[familyIndex].children.push('');

      return newFamilies;
    });
  };

  const updateFamilyChild = (familyIndex, childIndex, value) => {
    setFamilies(prevFamilies => {
      const newFamilies = [...prevFamilies];
      newFamilies[familyIndex].children[childIndex] = value;

      return newFamilies;
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Upload GEDCOM Data</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <HeaderForm header={header} setHeader={setHeader} />
        <IndividualForm
          individuals={individuals}
          addIndividual={addIndividual}
          updateIndividual={updateIndividual}
        />
        <FamilyForm
          families={families}
          addFamily={addFamily}
          updateFamily={updateFamily}
          addChildToFamily={addChildToFamily}
          updateFamilyChild={updateFamilyChild}
        />
        <SubmitterForm submitter={submitter} setSubmitter={setSubmitter} />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Submit
        </button>
      </form>
      {/* {message && <p className="mt-4 text-green-500">{message}</p>} */}
    </div>
  );
}
