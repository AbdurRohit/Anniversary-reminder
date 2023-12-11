// NewRecordForm.js
import React, { useState } from 'react';
import styles from './NewRecordForm.module.scss';

const NewRecordForm = () => {
  function handleSave(){
    return 0
  }
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input
          type="text"
          placeholder="Name of the special person"
        />
        <input
          type="date"
          placeholder="Date of Birth/Anniversary"
        />
        <button type="button" onClick={handleSave}>
          Save
        </button>
      </form>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>DOB/Anniversary</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {/* {specialPeople.map((person, index) => (
            <tr key={index}>
              <td>{person.name}</td>
              <td>{person.date}</td>
              <td>
                <button>Edit</button>
              </td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default NewRecordForm;
