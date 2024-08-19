// // //Import necessary libraries and modules
// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// // const DriveManager = () => {
// //   // State variables
// //   const [fileName, setFileName] = useState('');
// //   const [folderName, setFolderName] = useState('');
// //   const [parentFolderName, setParentFolderName] = useState('');
// //   const [deleteFileName, setDeleteFileName] = useState('');
// //   const [deleteFolderName, setDeleteFolderName] = useState('');

// //   // Event handlers
// //   const handleFileChange = (e) => setFileName(e.target.value);
// //   const handleFolderChange = (e) => setFolderName(e.target.value);
// //   const handleParentFolderChange = (e) => setParentFolderName(e.target.value);
// //   const handleDeleteFileChange = (e) => setDeleteFileName(e.target.value);
// //   const handleDeleteFolderChange = (e) => setDeleteFolderName(e.target.value);

// //   // API call functions
// //   const handleCreateFolder = async () => {
// //     try {
// //       const response = await axios.post('http://localhost:5000/api/create-folder', {
// //         folderName,
// //         parentFolderName,
// //       });
// //       console.log(response.data);
// //     } catch (error) {
// //       console.error('Error creating folder:', error.message);
// //     }
// //   };

// //   const handleDelete = async () => {
// //     try {
// //       const response = await axios.delete('http://localhost:5000/deleteFile', {
// //         data: { fileName: deleteFileName, folderName: deleteFolderName },
// //       });
// //       console.log(response.data);
// //     } catch (error) {
// //       console.error('Error deleting file:', error.message);
// //     }
// //   };

// //   return (
// //     <div className="container my-4">
// //       <h2 className="mb-4">Google Drive Manager</h2>

      
// //       <div style={{ marginBottom: '20px' }}>
// //         <h4>Create Folder</h4>
// //         <div className="mb-2">
// //           <label className="form-label">Folder Name:</label>
// //           <input
// //             type="text"
// //             className="form-control"
// //             placeholder='Enter Folder Name'
// //             style={{ width: '100%', boxSizing: 'border-box' }}
// //             value={folderName}
// //             onChange={handleFolderChange}
// //           />
// //         </div>

// //         <div className="mb-2">
// //           <label className="form-label">Parent Folder Name:</label>
// //           <input
// //             type="text"
// //             className="form-control"
// //             placeholder='Enter Parent Folder Name'
// //             style={{ width: '100%' }}
// //             value={parentFolderName}
// //             onChange={handleParentFolderChange}
// //           />
// //         </div>

// //         <button className="btn btn-primary" onClick={handleCreateFolder}>
// //           Create Folder
// //         </button>
// //       </div>

      
// //       <div className="mt-4">
// //         <h4>Delete File</h4>
// //         <div className="mb-2">
// //           <label className="form-label">Enter File Name:</label>
// //           <input
// //             type="text"
// //             className="form-control"
// //             placeholder='Enter File Name'
// //             style={{ width: '100%', boxSizing: 'border-box' }}
// //             value={deleteFileName}
// //             onChange={handleDeleteFileChange}
// //           />
// //         </div>

// //         <div className="mb-2">
// //           <label className="form-label">Enter Folder Name:</label>
// //           <input
// //             type="text"
// //             className="form-control"
// //             placeholder='Enter Folder Name'
// //             style={{ width: '100%', boxSizing: 'border-box' }}
// //             value={deleteFolderName}
// //             onChange={handleDeleteFolderChange}
// //           />
// //         </div>

// //         <button className="btn btn-danger" onClick={handleDelete}>
// //           Delete File
// //         </button>
// //       </div>
// //     </div>
// //   );  
// // };

// // export default DriveManager;
// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import 'bootstrap/dist/css/bootstrap.min.css';

// // const DriveManager = () => {
// //   // State variables for folder management
// //   const [folderName, setFolderName] = useState('');
// //   const [parentFolderName, setParentFolderName] = useState('');
// //   const [deleteFileName, setDeleteFileName] = useState('');
// //   const [deleteFolderName, setDeleteFolderName] = useState('');

// //   // State variables for file upload
// //   const [file, setFile] = useState(null);

// //   // Event handlers for folder management
// //   const handleFolderChange = (e) => setFolderName(e.target.value);
// //   const handleParentFolderChange = (e) => setParentFolderName(e.target.value);
// //   const handleDeleteFileChange = (e) => setDeleteFileName(e.target.value);
// //   const handleDeleteFolderChange = (e) => setDeleteFolderName(e.target.value);

// //   // Event handlers for file upload
// //   const handleFileChange = (e) => setFile(e.target.files[0]);

// //   // API call functions
// //   const handleCreateFolder = async () => {
// //     try {
// //       const response = await axios.post('http://localhost:5000/api/create-folder', {
// //         folderName,
// //         parentFolderName,
// //       });
// //       console.log(response.data);
// //     } catch (error) {
// //       console.error('Error creating folder:', error.message);
// //     }
// //   };

// //   const handleDelete = async () => {
// //     try {
// //       const response = await axios.delete('http://localhost:5000/deleteFile', {
// //         data: { fileName: deleteFileName, folderName: deleteFolderName },
// //       });
// //       console.log(response.data);
// //     } catch (error) {
// //       console.error('Error deleting file:', error.message);
// //     }
// //   };

// //   const handleUpload = async () => {
// //     if (!file || !folderName) {
// //       console.error('Missing file or folderName');
// //       return;
// //     }

// //     const formData = new FormData();
// //     formData.append('file', file);
// //     formData.append('folderName', folderName);

// //     try {
// //       const response = await axios.post('http://localhost:5000/upload', formData, {
// //         headers: {
// //           'Content-Type': 'multipart/form-data',
// //         },
// //       });
// //       console.log(response.data);
// //     } catch (error) {
// //       console.error('Error uploading file:', error.message);
// //     }
// //   };

// //   const handleDeleteFolder = async () => {
// //     try {
// //       await axios.post('http://localhost:5000/delete-folder', { folderName: deleteFolderName });
// //       console.log(`Folder ${deleteFolderName} deleted successfully.`);
// //     } catch (error) {
// //       console.error('Error deleting folder:', error.message);
// //     }
// //   };

// //   return (
// //     <div className="container my-4">
// //       <h2 className="mb-4">Google Drive Manager</h2>

// //       {/* Create Folder Section */}
// //       <div style={{ marginBottom: '20px' }}>
// //         <h4>Create Folder</h4>
// //         <div className="mb-2">
// //           <label className="form-label">Folder Name:</label>
// //           <input
// //             type="text"
// //             className="form-control"
// //             placeholder="Enter Folder Name"
// //             style={{ width: '100%', boxSizing: 'border-box' }}
// //             value={folderName}
// //             onChange={handleFolderChange}
// //           />
// //         </div>

// //         <div className="mb-2">
// //           <label className="form-label">Parent Folder Name:</label>
// //           <input
// //             type="text"
// //             className="form-control"
// //             placeholder="Enter Parent Folder Name"
// //             style={{ width: '100%' }}
// //             value={parentFolderName}
// //             onChange={handleParentFolderChange}
// //           />
// //         </div>

// //         <button className="btn btn-primary" onClick={handleCreateFolder}>
// //           Create Folder
// //         </button>
// //       </div>

// //       {/* Delete File Section */}
// //       <div className="mt-4">
// //         <h4>Delete File</h4>
// //         <div className="mb-2">
// //           <label className="form-label">Enter File Name:</label>
// //           <input
// //             type="text"
// //             className="form-control"
// //             placeholder="Enter File Name"
// //             style={{ width: '100%', boxSizing: 'border-box' }}
// //             value={deleteFileName}
// //             onChange={handleDeleteFileChange}
// //           />
// //         </div>

// //         <div className="mb-2">
// //           <label className="form-label">Enter Folder Name:</label>
// //           <input
// //             type="text"
// //             className="form-control"
// //             placeholder="Enter Folder Name"
// //             style={{ width: '100%', boxSizing: 'border-box' }}
// //             value={deleteFolderName}
// //             onChange={handleDeleteFolderChange}
// //           />
// //         </div>

// //         <button className="btn btn-danger" onClick={handleDelete}>
// //           Delete File
// //         </button>
// //       </div>

// //       {/* File Upload Section */}
// //       <div className="mt-5">
// //         <h4>Upload File</h4>
// //         <div className="form-group">
// //           <label>Choose File:</label>
// //           <input type="file" className="form-control-file" onChange={handleFileChange} />
// //         </div>

// //         <div className="form-group" style={{ marginTop: '40px' }}>
// //           <label>Enter Folder Name:</label>
// //           <input
// //             type="text"
// //             style={{ marginTop: '10px' }}
// //             placeholder="Enter Folder Name"
// //             className="form-control"
// //             value={folderName}
// //             onChange={handleFolderChange}
// //           />
// //         </div>

// //         <button className="btn btn-primary" style={{ marginTop: '10px' }} onClick={handleUpload}>
// //           Upload
// //         </button>
// //       </div>

// //       {/* Delete Folder Section */}
// //       <div className="form-group" style={{ marginTop: '40px' }}>
// //         <h4>Delete Folder</h4>
// //         <label>Enter Folder Name:</label>
// //         <input
// //           type="text"
// //           style={{ marginTop: '10px' }}
// //           placeholder="Enter Folder Name"
// //           className="form-control"
// //           value={deleteFolderName}
// //           onChange={handleDeleteFolderChange}
// //         />
// //       </div>

// //       <button className="btn btn-danger" style={{ marginTop: '10px' }} onClick={handleDeleteFolder}>
// //         Delete Folder
// //       </button>
// //     </div>
// //   );
// // };

// // export default DriveManager;

// import React, { useState } from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const DriveManager = () => {
//   // State variables for folder management
//   const [folderName, setFolderName] = useState('');
//   const [parentFolderName, setParentFolderName] = useState('');
//   const [deleteFileName, setDeleteFileName] = useState('');
//   const [deleteFolderName, setDeleteFolderName] = useState('');

//   // State variables for file upload
//   const [file, setFile] = useState(null);

//   // Event handlers for folder management
//   const handleFolderChange = (e) => setFolderName(e.target.value);
//   const handleParentFolderChange = (e) => setParentFolderName(e.target.value);
//   const handleDeleteFileChange = (e) => setDeleteFileName(e.target.value);
//   const handleDeleteFolderChange = (e) => setDeleteFolderName(e.target.value);

//   // Event handlers for file upload
//   const handleFileChange = (e) => setFile(e.target.files[0]);

//   // API call functions
//   const handleCreateFolder = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/create-folder', {
//         folderName,
//         parentFolderName,
//       });
//       console.log(response.data);
//       alert('Folder Created Successfully!!!!!');
//     } catch (error) {
//       console.error('Error creating folder:', error.message);
//     }
//   };

//   const handleDelete = async () => {
//     try {
//       const response = await axios.delete('http://localhost:5000/deleteFile', {
//         data: { fileName: deleteFileName, folderName: deleteFolderName },
//       });
//       console.log(response.data);
//       alert('Delete File Created Successfully!!!!!');
//     } catch (error) {
//       console.error('Error deleting file:', error.message);
//     }
//   };

//   const handleUpload = async () => {
//     if (!file || !folderName) {
//       console.error('Missing file or folderName');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('folderName', folderName);

//     try {
//       const response = await axios.post('http://localhost:5000/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       console.log(response.data);
//       alert('Upload Folder Successfully!!!!!');
//     } catch (error) {
//       console.error('Error uploading file:', error.message);
//     }
//   };     

//   const handleDeleteFolder = async () => {
//     try {
//       await axios.post('http://localhost:5000/delete-folder', { folderName: deleteFolderName });
//       console.log(`Folder ${deleteFolderName} deleted successfully.`);
//       alert(' Folder Deleted Successfully!!!!!');
//     } catch (error) {
//       console.error('Error deleting folder:', error.message);
//     }   
//   };

//   return (
//     <div className="drive-manager-container my-4">
//       <h1 className="mb-4" style={{marginTop:'170px'}}>Admin Section</h1>

//       {/* Create Folder Section */}
//       <div className="create-folder-section" style={{ marginBottom: '20px' }}>
//         <h4>Create Folder</h4>
//         <div className="mb-2">
//           <label className="form-label">Folder Name:</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter Folder Name"
//             id="folder-name-input"
//             value={folderName}
//             onChange={handleFolderChange}
//           />
//         </div>

//         <div className="mb-2">
//           <label className="form-label">Parent Folder Name:</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter Parent Folder Name"
//             id="parent-folder-name-input"
//             value={parentFolderName}
//             onChange={handleParentFolderChange}
//           />
//         </div>

//         <button className="btn btn-primary" id="create-folder-button" onClick={handleCreateFolder}>
//           Create Folder
//         </button>
//       </div>

//       {/* Delete File Section */}
//       <div className="delete-file-section mt-4">
//         <h4>Delete File</h4>
//         <div className="mb-2">
//           <label className="form-label">Enter File Name:</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter File Name"
//             id="delete-file-name-input"
//             value={deleteFileName}
//             onChange={handleDeleteFileChange}
//           />
//         </div>

//         <div className="mb-2">
//           <label className="form-label">Enter Folder Name:</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter Folder Name"
//             id="delete-folder-name-input"
//             value={deleteFolderName}
//             onChange={handleDeleteFolderChange}
//           />
//         </div>

//         <button className="btn btn-danger" id="delete-file-button" onClick={handleDelete}>
//           Delete File
//         </button>
//       </div>

//       {/* File Upload Section */}
//       <div className="upload-file-section mt-5">
//         <h4>Upload File</h4>
//         <div className="form-group">
//           <label>Choose File:</label>
//           <input type="file" className="form-control-file" id="file-input" onChange={handleFileChange} />
//         </div>

//         <div className="form-group mt-4">
//           <label>Enter Folder Name:</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter Folder Name"
//             id="upload-folder-name-input"
//             value={folderName}
//             onChange={handleFolderChange}
//           />
//         </div>

//         <button className="btn btn-primary mt-2" id="upload-file-button" onClick={handleUpload}>
//           Upload
//         </button>
//       </div>

//       {/* Delete Folder Section */}
//       <div className="delete-folder-section form-group mt-4">
//         <h4>Delete Folder</h4>
//         <label>Enter Folder Name:</label>
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Enter Folder Name"
//           id="delete-folder-name-input"
//           value={deleteFolderName}
//           onChange={handleDeleteFolderChange}
//         />
//         <button className="btn btn-danger mt-2" id="delete-folder-button" onClick={handleDeleteFolder}>
//           Delete Folder
//         </button>
//       </div>
//     </div>
//   );
// };

// export default DriveManager;

import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const DriveManager = () => {
  // State variables for folder management
  const [folderName, setFolderName] = useState('');
  const [parentFolderName, setParentFolderName] = useState('');
  const [deleteFileName, setDeleteFileName] = useState('');
  const [deleteFolderName, setDeleteFolderName] = useState('');

  // State variables for file upload
  const [file, setFile] = useState(null);

  // Event handlers for folder management
  const handleFolderChange = (e) => setFolderName(e.target.value);
  const handleParentFolderChange = (e) => setParentFolderName(e.target.value);
  const handleDeleteFileChange = (e) => setDeleteFileName(e.target.value);
  const handleDeleteFolderChange = (e) => setDeleteFolderName(e.target.value);

  // Event handlers for file upload
  const handleFileChange = (e) => setFile(e.target.files[0]);

  // API call functions
  const handleCreateFolder = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/create-folder', {
        folderName,
        parentFolderName,
      });
      console.log(response.data);
      alert('Folder Created Successfully!!!!!');
    } catch (error) {
      console.error('Error creating folder:', error.message);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete('http://localhost:5000/deleteFile', {
        data: { fileName: deleteFileName, folderName: deleteFolderName },
      });
      console.log(response.data);
      alert('Delete File Created Successfully!!!!!');
    } catch (error) {
      console.error('Error deleting file:', error.message);
    }
  };

  const handleUpload = async () => {
    if (!file || !folderName) {
      console.error('Missing file or folderName');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('folderName', folderName);

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      alert('Upload Folder Successfully!!!!!');
    } catch (error) {
      console.error('Error uploading file:', error.message);
    }
  };     

  const handleDeleteFolder = async () => {
    try {
      await axios.post('http://localhost:5000/delete-folder', { folderName: deleteFolderName });
      console.log(`Folder ${deleteFolderName} deleted successfully.`);
      alert(' Folder Deleted Successfully!!!!!');
    } catch (error) {
      console.error('Error deleting folder:', error.message);
    }   
  };

  return (
    <div className="container my-4">
      <h1 className="mb-4 admin-heading">Admin Section</h1>
  
      <div className="row">
        {/* Create Folder Section */}
        <div className="col-md-6">
          <div className="create-folder-section" style={{ marginBottom: '20px' }}>
            <h4>Create Folder</h4>
            <div className="mb-2">
              <label className="form-label">Folder Name:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Folder Name"
                id="folder-name-input"
                value={folderName}
                onChange={handleFolderChange}
              />
            </div>

            <div className="mb-2">
              <label className="form-label">Parent Folder Name:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Parent Folder Name"
                id="parent-folder-name-input"
                value={parentFolderName}
                onChange={handleParentFolderChange}
              />
            </div>

            <button className="btn btn-primary" id="create-folder-button" onClick={handleCreateFolder}>
              Create Folder
            </button>
          </div>
        </div>

        {/* Delete File Section */}
        <div className="col-md-6 del">
          <div className="delete-file-section mt-4">
            <h4>Delete File</h4>
            <div className="mb-2">
              <label className="form-label">Enter File Name:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter File Name"
                id="delete-file-name-input"
                value={deleteFileName}
                onChange={handleDeleteFileChange}
              />
            </div>

            <div className="mb-2">
              <label className="form-label">Enter Folder Name:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Folder Name"
                id="delete-folder-name-input"
                value={deleteFolderName}
                onChange={handleDeleteFolderChange}
              />
            </div>

            <button className="btn btn-danger" id="delete-file-button" onClick={handleDelete}>
              Delete File
            </button>
          </div>
        </div>
      </div>

      <div className="row">
        {/* File Upload Section */}
        <div className="col-md-6">
          <div className="upload-file-section mt-4">
            <h4>Upload File</h4>
            <div className="form-group">
              <label>Choose File:</label>
              <input type="file" className="form-control-file" id="file-input" onChange={handleFileChange} />
            </div>

            <div className="form-group mt-4">
              <label>Enter Folder Name:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Folder Name"
                id="upload-folder-name-input"
                value={folderName}
                onChange={handleFolderChange}
              />
            </div>

            <button className="btn btn-primary mt-2" id="upload-file-button" onClick={handleUpload}>
              Upload
            </button>
          </div>
        </div>

        {/* Delete Folder Section */}
        <div className="col-md-6">
          <div className="delete-folder-section form-group mt-4">
            <h4>Delete Folder</h4>
            <label>Enter Folder Name:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Folder Name"
              id="delete-folder-name-input"
              value={deleteFolderName}
              onChange={handleDeleteFolderChange}
            />
            <button className="btn btn-danger mt-2" id="delete-folder-button" onClick={handleDeleteFolder}>
              Delete Folder
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriveManager;

