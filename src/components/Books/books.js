import React from "react"

const books = (props) => {
    return (
      <div className={"container mm-4 mt-5"}>
          <div className={"row"}>
              <div className={"row"}>
                  <table className={"table"}>
                      <thead>
                      <tr>
                          <th scope={"col"}>
                              Name
                          </th>
                          <th scope={"col"}>
                              Available copies
                          </th>
                      </tr>
                      </thead>
                      <tbody>
                      {props.books.map((item) => {
                              return (
                                  <tr>
                                        <td>{item.name}</td>
                                        <td>{item.availableCopies}</td>
                                  </tr>
                              )
                          }
                      )}
                      </tbody>
                  </table>
              </div>
          </div>

      </div>
    );
}

export default books;