import * as React from "react";
//import { Table } from "baseui/table-semantic";
import { faker } from '@faker-js/faker'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/table'

import "./example.css";

function Cell({ children }) {
    return (
        <div
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'  }}
        >
            {children}
        </div>
    );
}

function Button({ children }) {
  return (
    <button
      onClick={() => {
        alert("click");
      }}
    >
      {children}
    </button>
  );
}

export default () => {


  const columns = ['Date','NCT Id', 'Link', 'Title', 'Status', 'test1', 'test2', 'test3', 'test4', 'test5']
    const data = [
        {"nctId":{"type":"text","value":"NCT05706935"},"enrollment":200,"link":{"type":"link","value":"https://ClinicalTrials.gov/show/NCT05706935"},"locations":"University of Wisconsin, Madison, Wisconsin, United States","status":{"type":"text","value":"Recruiting (No Results Available)"},"minAge":"18 Years","maxAge":null,"outcomeMeasures":"MeMed BV® test result and diagnostic concordance","lastUpdatePosted":"2023-02-28T00:00:00","title":{"type":"running-text","value":"MeMed BV® Test Evaluation in Adult Emergency Department Patients"}},
        {"nctId":{"type":"text","value":"NCT05762302"},"enrollment":1316,"link":{"type":"link","value":"https://ClinicalTrials.gov/show/NCT05762302"},"locations":"Maimonides Medical Center, Brooklyn, New York, United States\nCarmel Medical Center, Haifa, Israel\nSourasky Medical Center - Ichilov, Tel Aviv, Israel","status":{"type":"text","value":"Not yet recruiting (No Results Available)"},"minAge":"18 Years","maxAge":"99 Years","outcomeMeasures":"To demonstrate MeMed BV® added value on top of standard of care in lowering unwarranted antibiotic prescribing in patients with LRTI in the ED/UCC.","lastUpdatePosted":"2023-03-09T00:00:00","title":{"type":"running-text","value":"The Impact of MeMed BV® on Management of Patients With Suspected Lower Respiratory Tract Infections (LRTI) in the Emergency Department (ED) and Urgent Care Center (UCC) (\"JUPITER\" TRIAL)"}},
        {"nctId":{"type":"text","value":"NCT04690569"},"enrollment":1384,"link":{"type":"link","value":"https://ClinicalTrials.gov/show/NCT04690569"},"locations":"Johns Hopkins, Baltimore, Maryland, United States\nBoston Children's Hospital, Boston, Massachusetts, United States\nMaimonides Medical Center, New York, New York, United States\nUniversity of Pittsburgh Medical Center, Pittsburgh, Pennsylvania, United States\nAmerican Family Care Urgent Care, Easley, South Carolina, United States\nAmerican Family Care Urgent Care, Powdersville, South Carolina, United States\nAmerican Family Care Urgent Care, Chattanooga, Tennessee, United States\nTexas Children's Hospital, Houston, Texas, United States\nUniversity of Texas Health Science Center, Houston, Texas, United States\nHillel Yaffe Medical Center, Hadera, Israel\nCarmel Medical Center, Haifa, Israel","status":{"type":"text","value":"Completed (No Results Available)"},"minAge":"90 Days","maxAge":null,"outcomeMeasures":"Establish the diagnostic performance of the MeMed BV™ Test for differentiating bacterial from viral infection using expert adjudication comparator method.","lastUpdatePosted":"2021-01-05T00:00:00","title":{"type":"running-text","value":"Establish MeMed BV™ Performance for Differentiating Bacterial From Viral Infection in Suspected Acute Infection Patients (APOLLO STUDY)"}},
        {"nctId":{"type":"text","value":"NCT05439551"},"enrollment":215,"link":{"type":"link","value":"https://ClinicalTrials.gov/show/NCT05439551"},"locations":"Maimonides Medical Center, Brooklyn, New York, United States\nUrgent Care Clinical Trials @ AFC Urgent Care- Easley, Easley, South Carolina, United States\nHillel Yaffe Medical Center, Hadera, Israel\nCarmel Medical Center, Haifa, Israel\nSourasky Medical Center - Ichilov, Tel Aviv, Israel","status":{"type":"text","value":"Suspended (No Results Available)"},"minAge":"90 Days","maxAge":null,"outcomeMeasures":"Measuring the MeMed BV® score with whole blood and serum samples from patients suspected of acute bacterial or viral infection and demonstrating the equivalence between the two matrices.","lastUpdatePosted":"2023-02-15T00:00:00","title":{"type":"running-text","value":"Evaluating the Analytical Equivalency of Serum and Whole Blood Samples Run on the MeMed Key® Platform (Perseverance Study)"}},
        {"nctId":{"type":"text","value":"NCT04709978"},"enrollment":150,"link":{"type":"link","value":"https://ClinicalTrials.gov/show/NCT04709978"},"locations":"University of Wisconsin, Madison, Wisconsin, United States","status":{"type":"text","value":"Active, not recruiting (No Results Available)"},"minAge":"60 Years","maxAge":null,"outcomeMeasures":"Number of Participants with Aspiration\nSalivary extensional viscosity\nSalivary Substance P Concentration\nSalivary pH\nRecurrent pneumonia\nLung Ultrasound Findings for ED participants\nPatient Reported Swallowing Function as measured by physical symptoms on SWAL-QOL\nPercent Viral vs. Bacterial Infection for ED participants\nRespiratory Pressure\nPeak Expiratory Flow (PEF)\nForced Expiratory Volume (FEV1)","lastUpdatePosted":"2023-02-01T00:00:00","title":{"type":"running-text","value":"Community Acquired Pneumonia in Older Adults"}},

    ].map((row) => {
        return {
            ...row,
            date: {"type":"date","value": faker.date.between('2015-01-01T00:00:00.000Z', '2023-01-01T00:00:00.000Z')},
            test1: {"type":"text","value":"abcdefgh ijk"},
            test2: {"type":"text","value":"abcdefgh ijklmnopqrstuvwxyz"},
            test3: {"type":"text","value":"abc de"},
            test4: {"type":"text","value":"click me "},
            test5:  {"type":"text","value":"text texttext text text text text text text texttext texttext text "},
        }
    }).map((row) => {
        return [
            faker.date.between('2015-01-01T00:00:00.000Z', '2023-01-01T00:00:00.000Z').toLocaleDateString(),
            <Cell>{row.nctId.value}</Cell>,
            <div style={{ fontSize: '.8rem', fontWeight: 'bolder', maxWidth: '120px', whiteSpace: 'nowrap', color: '#0d0444', textOverflow: 'ellipsis', overflow: 'hidden', cursor: 'pointer' }} >{row.link.value}</div>,
            <div style={{ fontSize: '.8rem', color: '#440444' }}>row.title.value</div>,
            <div style={{ fontSize: '.8rem', color: '#440444' }}>{row.status.value}</div>,
            faker.lorem.sentence(),
            faker.lorem.lines(2),
            <div style={{ minWidth: '350px' }}>{faker.lorem.sentences()}</div>,
            <Button>{row.test4.value}</Button>,
            <div style={{ fontSize: '1rem', color: '#440444', minWidth: '250px' }}>{row.test5.value}</div>,
        ];
    });

  return (
      <div style={{ display: 'block', width: '100%', height: '180vh', position: 'relative', margin: "30px 20px"}}>

          <Table >
              <TableCaption>Simple table</TableCaption>
              <Thead style={{ position: 'sticky', top: '0', background: '#ffffff'}} position="sticky" top='0'>
                  <Tr>
                      {columns.map((column, index) => {
                          console.log([column, ' column => '].reverse());
                          return (<Th key={`${column}-${index}`}>{column}</Th>)
                      }) }
                  </Tr>
              </Thead>
              <Tbody>
                  {data.map((row, index) => {
                      const keys = Object.keys(row);
                      return (<Tr key={`${row.id}-${index}`}>
                          {keys.map((key) => (<Td key={`${row[key]}-${index}`}>{row[key]}</Td>))}
                      </Tr>)
                  })}
              </Tbody>

          </Table>

      </div>
  )

//       <Tfoot>
//       <Tr>
//       <Th>To convert</Th>
//     <Th>into</Th>
//     <Th isNumeric>multiply by</Th>
// </Tr>
// </Tfoot>

  return (
      <div style={{ display: 'block', maxWidth: '1440px', width: '100%', height: '100vh', margin: '30px 20px' }}>
          <div style={{ fontSize: '20px', textAlign: 'center', display: 'block', height: '100px', width: '100%', background: '#9980FF'  }}>
              content above table
          </div>
          <Table
              style={{ border: '1px solid #a4a4a4', maxHeight: '850px' }}
              columns={columns}
              data={data}
          />
          <div style={{ fontSize: '20px', maxWidth: '1440px', textAlign: 'center', display: 'block', height: '900px', width: '100%', background: '#9980FF' }}>
              content below table
          </div>
      </div>
  );
};
