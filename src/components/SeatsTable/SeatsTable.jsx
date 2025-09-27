// import React, { useEffect, useRef, useState } from "react";
// import { fetchSeatInfo } from "../../services/api"; 
// import "./SeatTable.css";

// export default function SeatTable() {
//   const tableRef = useRef(null);
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function loadData() {
//       const result = await fetchSeatInfo();
//       setData(result);
//       setLoading(false);
//     }
//     loadData();
//   }, []);

//   const handleLearnMore = () => {
//     console.log("Learn more clicked");
//   };

//   const getStatusClass = (status) => {
//     if (status === "A") return "status-badge status-a";
//     if (status === "B") return "status-badge status-b";
//     return "status-badge";
//   };

//   return (
//     <section className="seat-table-section">
//       <div className="container">
//         <div className="row align-items-center">
//           {/* Left Content */}
//           <div className="col-lg-6">
//             <h2 className="seat-table-title">Get the Seat price</h2>
//             <p className="seat-table-description">
//               It is a long established fact that a reader will be
//               distracted by the readable content of a page
//               when looking at its layout.
//             </p>

//             <div className="feature-list">
//               <div className="feature-item">
//                 <span className="feature-icon">●</span>
//                 <div>
//                   <div className="feature-title">World class</div>
//                   <p className="feature-description">
//                     Lorem Ipsum is simply dummy text
//                     of the printing and typesetting
//                   </p>
//                 </div>
//               </div>

//               <div className="feature-item">
//                 <span className="feature-icon">●</span>
//                 <div>
//                   <div className="feature-title">Affordable</div>
//                   <p className="feature-description">
//                     Lorem Ipsum is simply dummy text
//                     of the printing and typesetting
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <button className="learn-more-btn" onClick={handleLearnMore}>
//               Learn more
//             </button>
//           </div>

//           {/* Right Table */}
//           <div className="col-lg-6">
//             <div className="seat-table-container">
//               <table ref={tableRef} className="seat-table">
//                 <thead>
//                   <tr>
//                     <th>SEAT</th>
//                     <th>PRICE</th>
//                     <th>STATUS</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {loading && (
//                     <tr>
//                       <td colSpan={3} style={{ textAlign: "center" }}>
//                         Loading...
//                       </td>
//                     </tr>
//                   )}
//                   {!loading && data.length === 0 && (
//                     <tr>
//                       <td colSpan={3} style={{ textAlign: "center" }}>
//                         No data available
//                       </td>
//                     </tr>
//                   )}
//                   {data.map((row, idx) => {
//                     const seat =
//                       row.seat ?? row.S ?? row.seat_no ?? row.S_no ?? "";
//                     const price = row.price ?? row.Price ?? row.P ?? "";
//                     const status = row.status ?? row.Status ?? row.st ?? "";

//                     return (
//                       <tr key={idx}>
//                         <td><strong>{seat}</strong></td>
//                         <td><strong>{price}</strong></td>
//                         <td>
//                           <span className={getStatusClass(status)}>
//                             {status}
//                           </span>
//                         </td>
//                       </tr>
//                     );
//                   })}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import React, { useRef } from "react";
import { useData } from "../../context/DataContext";
import "./SeatTable.css";

export default function SeatTable() {
  const tableRef = useRef(null);
  const { seats: data, loading } = useData(); // <-- pulled from context

  const handleLearnMore = () => {
    console.log("Learn more clicked");
    // Add your navigation logic here
  };

  const getStatusClass = (status) => {
    if (status === "A") return "status-badge status-a";
    if (status === "B") return "status-badge status-b";
    return "status-badge";
  };

  return (
    <section className="seat-table-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-6">
            <h2 className="seat-table-title">Get the Seat price</h2>

            <p className="seat-table-description">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>

            <div className="feature-list">
              <div className="feature-item">
                <span className="feature-icon">●</span>
                <div>
                  <div className="feature-title">World class</div>
                  <p className="feature-description">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <span className="feature-icon">●</span>
                <div>
                  <div className="feature-title">Affordable</div>
                  <p className="feature-description">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </p>
                </div>
              </div>
            </div>

            <button className="learn-more-btn" onClick={handleLearnMore}>
              Learn more
            </button>
          </div>

          {/* Right Table */}
          <div className="col-lg-6">
            <div className="seat-table-container">
              <table ref={tableRef} className="seat-table">
                <thead>
                  <tr>
                    <th>SEAT</th>
                    <th>PRICE</th>
                    <th>STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  {loading && (
                    <tr>
                      <td
                        colSpan={3}
                        style={{
                          textAlign: "center",
                          color: "#6b7280",
                          fontStyle: "italic",
                          padding: "20px 8px",
                        }}
                      >
                        Loading...
                      </td>
                    </tr>
                  )}
                  {!loading && data.length === 0 && (
                    <tr>
                      <td
                        colSpan={3}
                        style={{
                          textAlign: "center",
                          color: "#6b7280",
                          fontStyle: "italic",
                          padding: "20px 8px",
                        }}
                      >
                        No data available
                      </td>
                    </tr>
                  )}
                  {data.map((row, idx) => {
                    const seat =
                      row.seat ?? row.S ?? row.seat_no ?? row.S_no ?? "";
                    const price = row.price ?? row.Price ?? row.P ?? "";
                    const status = row.status ?? row.Status ?? row.st ?? "";

                    return (
                      <tr key={idx}>
                        <td>
                          <strong>{seat}</strong>
                        </td>
                        <td>
                          <strong>{price}</strong>
                        </td>
                        <td>
                          <span className={getStatusClass(status)}>
                            {status}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
