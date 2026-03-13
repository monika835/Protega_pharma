import Head from "next/head";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });
//test push2
export default function Home() {
    const [enrolled, setEnrolled] = useState(null);
  const [resident, setResident] = useState(null);
  const [modal1, setModal1] = useState(false);
console.log(enrolled, resident);
  const enabled = enrolled === false && resident === true;

  const downloadButtonClasses = ["download-button"];

  if (!enabled) {
    downloadButtonClasses.push("disabled");
  } else {
    downloadButtonClasses.push("active");
  }

  return (
    <>
      <Head>
        <title>ROXYBOND™ Copay Card</title>
      </Head>
      <div className="top-bar-container">
        <div className="top-bar">
          
        </div>
      </div>
      

      <div className="patient-banner-container">
        <div className="container">   
          <div className="row">
            <div className="col-12">
              <div className="patient_banner_content">
                <h1> Eligible patients may save with the ROXYBOND&#8482; Copay Card. </h1>
                <img src="/images/logo.png" className="img-fluid banner_logo"  alt="banner-logo" />
              </div>
            </div>
              

            </div>  
          </div>
        </div>

      <div className="copay-card-container" style={{ marginLeft: 30 , marginTop: 40}}>
        <div className="container">
          
          <div className="row" style={{ marginLeft: -30 }}>
            <div className="col-12 col-md-12 copay-card-column">
              <img
                className="copay-card"
                // src="/images/roxybond-copay-card.jpg"
                src="/images/CopayCardMar2026.png"
                alt="ROXYBOND Copay Card"
              />
    
            </div>
            
          </div>
          
        </div>
      </div>
      
       <div className="black-box-container">
        <div className="container">
          <div className="row orange-box">
            <div className="col-12">
                <h3 className="ucase">PHARMACIST INSTRUCTIONS: SUBMITTING CLAIM</h3>
                <p> REMOVE ANY DISCOUNT CARDS FROM TRANSACTION. USING DISCOUNT CARDS WITH COPAY CARD
                    WILL RESULT IN A BENEFIT REJECTION AND POSSIBLY A HIGHER COST FOR THE PATIENT.</p>
              <ol>
                  <li>Submit claim to patient’s insurance first. </li>
                  <li>Then submit a secondary claim using the copay card information as a coordination of benefits using <strong>OCC 8. </strong></li>
              </ol>

              <strong>If the patient’s insurance requires a Prior Authorization:</strong>
              <ul>
                  <li>Returns a reject 75, or  </li>
                  <li>Drug not covered reject 70</li>
              </ul>
              <ol>
                  <li><strong>Initiate Prior Authorization with prescriber immediately</strong> Copay card allows only one 30-day script per calendar year while PA processes, then up to prescription maximum until annual maximum is reached. </li>
                  <li>Submit the secondary claim using the copay card information as a coordination of benefits using <strong>OCC 8. </strong></li>
              </ol>
              <h3 className="ucase">Pharmacies needing assistance with processing this copay card, please contact the Pharmacy Helpdesk at <a href="tel:630-450-8938">630-450-8938</a>.</h3>
            </div>
          </div>
        </div>
      </div>
      
      <div className="info-container" style={{ marginLeft: 20 }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="ucase">Indication and Usage</h3>
              <ul>
                    <li>ROXYBOND&#8482; (oxycodone hydrochloride) tablets, for oral use,
                CII, is a strong prescription pain medicine that contains an
                opioid (narcotic) that is used to manage pain severe enough to
                require an opioid pain medicine, when other pain treatments such
                as non-opioid pain medicines do not treat your pain well enough
                or you cannot tolerate them.</li>
                  <li>ROXYBOND is an opioid pain medicine that can put you at risk for
                overdose and death. Even if you take your dose correctly as
                prescribed you are at risk for opioid addiction, abuse, and
                misuse that can lead to death.</li>
              </ul>
            </div>
          </div>
                    {/* 
          <div className="row">
            <div className="col-12">
              <h3>Limitations of Use</h3>
              <p>
                ROXYBOND is an opioid pain medicine that can put you at risk for
                overdose and death. Even if you take your dose correctly as
                prescribed you are at risk for opioid addiction, abuse, and
                misuse that can lead to death.
              </p>
            </div>
          </div>
                  */}
          <div className="row">
            <div className="col-12">
              <h3 className="ucase">Important Safety Information About RoxyBond</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="black-box-container">
        <div className="container">
          <div className="row black-box">
            <div className="col-12">
              <p className="isi-warning">
                WARNING: SERIOUS AND LIFE-THREATENING RISKS FROM
                USE OF ROXYBOND
              </p>
              <div style={{ marginLeft: 10 }}>
                <span>Addiction, Abuse, and Misuse</span>
                <p>
                  Because the use of ROXYBOND exposes patients and other users to the
                  risks of opioid addiction, abuse, and misuse, which can lead to
                  overdose and death, assess each patient’s risk prior to prescribing
                  and reassess all patients regularly for the development of these 
                  behaviors and conditions. 
                </p>
                <span>Life-Threatening Respiratory Depression</span>
                <p>
                  Serious, life-threatening, or fatal respiratory depression
                  may occur with use of ROXYBOND, especially during initiation
                  or following a dosage increase. To reduce the risk of respiratory
                  depression, proper dosing and titration of ROXYBOND are essential.
                </p>
                <span>Accidental Ingestion</span>
                <p>
                  Accidental ingestion of even one dose of ROXYBOND, especially by 
                  children, can result in a fatal overdose of oxycodone. 
                </p>
                     <span>
                  Risks From Concomitant Use With Benzodiazepines Or Other CNS
                  Depressants
                </span>
                <p>
                  Concomitant use of opioids with benzodiazepines or other central
                  nervous system (CNS) depressants, including alcohol, may result in
                  profound sedation, respiratory depression, coma, and death. Reserve
                  concomitant prescribing of ROXYBOND and benzodiazepines or other CNS
                  depressants for use in patients for whom alternative treatment options 
                  are inadequate.
                </p>
                <span>Neonatal Opioid Withdrawal Syndrome (NOWS)</span>
                <p>
                  If opioid use is required for an extended period of time in a pregnant woman,
                  advise the patient of the risk of NOWS, which may be life-threatening if not
                  recognized and treated. Ensure that management by neonatology experts will be
                  available at delivery. 
                </p>        
                <span>                    
                  Opioid Analgesic Risk Evaluation and Mitigation Strategy
                  (REMS)
                </span>
                <p>
                  Healthcare providers are strongly encouraged to complete a REMS-compliant
                  education program and to counsel patients and caregivers on serious risks,
                  safe use, and the importance of reading the Medication Guide with each 
                  prescription.
                </p>
                <span>Cytochrome P450 3A4 Interaction</span>
                <p>
                  The concomitant use of ROXYBOND with all cytochrome P450 3A4 inhibitors may 
                  result in an increase in oxycodone plasma concentrations, which could increase
                  or prolong adverse reactions and may cause potentially fatal respiratory depression.
                  In addition, discontinuation of a concomitantly used cytochrome P450 3A4 inducer may
                  result in an increase in oxycodone plasma concentration.  Regularly evaluate patients
                  receiving ROXYBOND and any CYP3A4 inhibitor or inducer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="info-container">
        <div className="container newBox">
          <div className="row">
            <div className="col-12">
              <h3>Important information about ROXYBOND:</h3>
              <ul>
                <li>
                  <strong>
                    Get emergency help or call 911 right away if you take too
                    much ROXYBOND (overdose)
                  </strong>
                  . When you first start taking ROXYBOND, when your dose is
                  changed, or if you take too much (overdose), serious or
                  life-threatening breathing problems that can lead to death may
                  occur. Talk to your healthcare provider about naloxone, a
                  medicine for the emergency treatment of an opioid overdose.
                </li>
                <li>
                  Taking ROXYBOND with other opioid medicines, benzodiazepines,
                  alcohol, or other central nervous system depressants
                  (including street drugs) can cause severe drowsiness,
                  decreased awareness, breathing problems, coma, and death.
                </li>
                <li>
                  Never give anyone else your ROXYBOND. They could die from
                  taking it. Selling or giving away ROXYBOND is against the law.
                </li>
                <li>
                  Store ROXYBOND securely, out of sight and reach of children
                  and in a location not accessible by others, including visitors
                  to the home.
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h3>Do not take ROXYBOND if you have:</h3>
              <ul>
                <li>
                  severe asthma, trouble breathing, or other lung problems.
                </li>
                <li>
                  a bowel blockage or have narrowing of the stomach or
                  intestines.
                </li>
                <li>allergy to oxycodone.</li>
              </ul>
            </div>
          </div>
          
          <div className="row">
            <div className="col-12">
              <h3>
                Before taking ROXYBOND, tell your healthcare provider if you have a history of:
              </h3>
              <div className="row">
                {/* First two columns for first 4 items */}
                <div className="col-md-6">
                  <ul style={{ marginBottom: "0" }}>
                    <li>head injury, seizures</li>
                    <li>liver, kidney, thyroid problems</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul style={{ marginBottom: "0" }}>
                    <li>problems urinating</li>
                    <li>pancreas or gallbladder problems</li>
                  </ul>
                </div>
                {/* Full width for last item */}
                <div className="col-12">
                  <ul style={{ marginTop: "0", marginBottom: "1rem", paddingLeft: "3.5rem" }}>
                    <li>
                      abuse of street or prescription drugs, alcohol addiction, opioid overdose or mental health problems.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <h3>Tell your healthcare provider if you are:</h3>
              <ul>
                <li>
                  <strong>noticing your pain getting worse</strong>. If your
                  pain gets worse after you take ROXYBOND, do not take more of
                  ROXYBOND without first talking to your healthcare provider.
                  Talk to your healthcare provider if the pain that you have 
                  increases, if you feel more sensitive to pain, or if you have 
                  new pain after taking ROXYBOND.
                </li>
                <li>
                  <strong>pregnant or planning to become pregnant</strong>.
                  Use of ROXYBOND for an extended period of time during pregnancy 
                  can cause withdrawal symptoms in your newborn baby that could be
                  life-threatening if not recognized and treated.
                </li>
                <li>
                  <strong>breastfeeding</strong>. ROXYBOND passes into breast
                  milk and may harm your baby. Carefully observe infants for increased 
                  sleepiness (more than usual), breathing difficulties, or limpness. Seek 
                  immediate medical care if you notice these signs.
                </li>
                <li>
                  living in a household where there are small children or
                  someone who has abused street or prescription drugs.
                </li>
                <li>
                  taking prescription or over-the-counter medicines, vitamins,
                  or herbal supplements. Taking ROXYBOND with certain other
                  medicines can cause serious side effects that could lead to
                  death.
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h3>When taking ROXYBOND:</h3>
              <ul>
                <li>
                  Do not change your dose. Take ROXYBOND exactly as prescribed
                  by your healthcare provider. Use the lowest dose possible for
                  the shortest time needed.
                </li>
                <li>
                  For acute (short-term) pain, you may only need to take ROXYBOND for
                  a few days. You may have some ROXYBOND left over that you did not use. 
                  See disposal information at the bottom of this section for directions on 
                  how to safely throw away (dispose of) your unused ROXYBOND.
                </li>
                <li>
                  Take your prescribed dose every 4 to 6 hours as needed for pain. Do not 
                  take more than your prescribed dose. If you miss a dose, take your next
                  dose at your usual time.
                </li>
                <li>
                  Call your healthcare provider if the dose you are taking does
                  not control your pain.
                </li>
                <li>
                  If you have been taking ROXYBOND regularly, do not stop taking
                  ROXYBOND without talking to your healthcare provider.
                </li>
                <li>
                  Dispose of expired, unwanted, or unused ROXYBOND by promptly
                  flushing down the toilet, if a drug take-back option is not
                  readily available. Visit{" "}
                  <a href="https://www.fda.gov/drugdisposal" target="_blank">
                    www.fda.gov/drugdisposal
                  </a>{" "}
                  for additional information on disposal of unused medicines.
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h3>While taking ROXYBOND DO NOT:</h3>
              <ul>
                <li>
                  Drive or operate heavy machinery, until you know how ROXYBOND
                  affects you. ROXYBOND can make you sleepy, dizzy, or
                  lightheaded.
                </li>
                <li>
                  Drink alcohol or use prescription or over-the-counter
                  medicines that contain alcohol. Using products containing
                  alcohol during treatment with ROXYBOND may cause you to
                  overdose and die.
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h3>The possible side effects of ROXYBOND are:</h3>
              <ul>
                <li>
                  constipation, nausea, sleepiness, vomiting, tiredness,
                  headache, dizziness, abdominal pain. Call your healthcare
                  provider if you have any of these symptoms and they are
                  severe.
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h3>Get emergency medical help or call 911 right away if you have:</h3>
              <ul>
                <li>
                  trouble breathing, shortness of breath, fast heartbeat, chest pain, swelling of your face,tongue, or throat, extreme drowsiness, light-headedness when changing positions, feeling
                  faint, agitation, high body temperature, trouble walking, stiff muscles, or mental changes
                  such as confusion.
                </li>
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <p>
                These are not all the possible side effects of ROXYBOND. Call
                your doctor for medical advice about side effects. You may
                report side effects to the FDA at{" "}
                <a href="tel:1-800-332-1088">1-800-FDA-1088</a>. For more
                information{" "}
                <span className="nobr">
                  go to{" "}
                  <a href="https://dailymed.nlm.nih.gov" target="_blank">
                    dailymed.nlm.nih.gov
                  </a>
                </span>
              </p>
            </div>
          </div>

          <div className="row">
          <div className="col-12">
            <h3>
              ROXYBOND™ (oxycodone hydrochloride) COPAY CARD TERMS AND CONDITIONS
            </h3>
            <p>
              The ROXYBOND Copay Card Program (the “Card”) may cover a portion of eligible out-of-pocket costs of patients' ROXYBOND prescriptions. Patient eligibility for the Card is subject to the following terms and conditions:
            </p>
            <ul>
              <li>
                The Card may only be used by eligible residents of the U.S., Puerto Rico, or U.S. territories at participating eligible pharmacies located in the U.S., Puerto Rico, or U.S. territories. Card user must be at least 18 years of age.
              </li>
              <li>
                The Card will cover 65% of the out-of-pocket costs of an eligible patient’s ROXYBOND prescriptions (Card benefit is calculated at the time of use and is subject to vary). Annual maximum benefit of $8,500 applies.
              </li>
              <li>
                The Card is only available for use with a valid prescription. The Card has no cash value, is not transferable, may not be reproduced, and may not be sold, purchased, traded, or offered for sale, purchase, or trade.
              </li>
              <li>
                THIS CARD IS NOT INSURANCE AND IS NOT INTENDED TO BE A SUBSTITUTE FOR INSURANCE. The Card is not valid for prescriptions eligible for full reimbursement by insurance plans or any other pharmacy benefit or assistance programs, and it will not reimburse any payments made by a Flexible Spending Account (“FSA”), Health Savings Account (“HSA”), or Health Reimbursement Account (“HRA”).
              </li>
              <li>
                This Card is only valid for use by patients with commercial insurance. THE CARD IS NOT VALID FOR PRESCRIPTIONS THAT ARE ELIGIBLE TO BE REIMBURSED, IN WHOLE OR IN PART, BY:
                <ul>
                  <li>
                    ANY FEDERAL HEALTH CARE PROGRAM (AS DEFINED AT 42 U.S.C. §1320A-7B(F)), INCLUDING MEDICAID, MEDICARE (INCLUDING ANY MEDICARE ADVANTAGE OR MEDICARE PART D PLAN, WHICH INCLUDES MEDICARE PART D ENROLLEES IN THE PRESCRIPTION DRUG COVERAGE GAP), TRICARE, CHAMPUS, PUERTO RICO GOVERNMENT HEALTH INSURANCE PLAN, OR ANY OTHER STATE OR FEDERAL HEALTH CARE PROGRAM;
                  </li>
                  <li>
                    MEDICARE-ELIGIBLE PATIENTS ENROLLED IN AN EMPLOYER-SPONSORED RETIREE HEALTH PLAN OR PRESCRIPTION DRUG PLAN;
                  </li>
                  <li>CASH-PAYING PATIENTS;</li>
                  <li>PATIENTS RESIDING IN A STATE WHERE THE USE OF THE CARD IS PROHIBITED BY LAW OR REGULATION.</li>
                </ul>
              </li>
              <li>
                Submit claim to patient’s insurance first, then submit a secondary claim using the copay card information as a coordination of benefits using OCC 8. If the patient’s insurance requires a Prior Authorization and returns a reject 75, or drug not covered reject 70, submit a secondary claim using the copay card information as a coordination of benefits using OCC 3.
              </li>
              <li>
                Patient, pharmacist, and prescriber agree not to submit a claim for reimbursement for any value conveyed by Card. Patient and pharmacist must each individually report receipt of Card to any insurer, health plan, or any other party that covers or reimburses any part of the prescription filled using this Card, as required by law, regulation, or company policy.
              </li>
              <li>
                Certain information necessary to facilitate the use of the Card will be shared with Protega Pharma and its affiliates.
              </li>
              <li>Card is not valid in the state of Massachusetts.</li>
              <li>Card is void where taxed or where prohibited or restricted by law.</li>
              <li>Protega Pharma reserves the right to terminate the Card program or to rescind, revoke, or amend this offer without notice.</li>
            </ul>
          </div>
        </div>

          <div className="row">
            <div className="col-12">
              <p>
                <strong>
                  Please see additional Important Safety Information, and full{" "}
                  <span className="nobr">Prescribing Information</span>, including BOXED
                  WARNINGS and <span className="nobr">Medication Guide</span> at{" "}
                  <a href="https://protegapharma.com" target="_blank">
                    www.protegapharma.com
                  </a>{" "}
                  prior to taking ROXYBOND. Speak with your healthcare provider if you have
                  additional questions about ROXYBOND.
                </strong>

              </p>
              <p>
                <strong>
                  You are encouraged to report negative side effects of prescription drugs to the FDA. 
                  Visit <a href="https://www.fda.gov/safety/medwatch" target="_blank" rel="noopener noreferrer">
                    MedWatch
                  </a>{" "}or call 1-800-FDA-1088. To report SUSPECTED ADVERSE REACTIONS, contact{" "}
                  <span className="nobr">Protega Pharmaceuticals Inc.</span> at 1-844-798-3610,{" "}
                  <span className="nobr">FDA</span> at 1-800-FDA-1088, or{" "}
                  <a href="https://www.fda.gov/safety" target="_blank" rel="noopener noreferrer">
                    www.fda.gov/safety
                  </a>.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>

                <footer>
                    <div
            className="footer-container"
            style={{
                textAlign: "center", // centers all inner text
                padding: "20px 0", // optional spacing
            }}
            >
            <div className="container">
                <div className="row justify-content-center ">
                <div
                    className="col-12 col-lg-12"
                    style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "10px",
                    }}
                >
                    <img
                    src="/images/protega-pharma-logo.png"
                    alt="Protega Pharma Logo"
                    style={{
                        display: "block",
                        margin: "0 auto", // centers image horizontally
                        maxWidth: "300px", // optional size control
                        height: "auto",
                        marginBottom:"30px"
                    }}
                    />
                </div>

                <div className="col-12 col-lg-12">
                    <p
                    style={{
                        textAlign: "right",  
                        margin: "0", 
                        lineHeight: "1.5",
                    }}
                    >
                    &copy;2026 Protega Pharmaceuticals Inc. ROXYBOND and the ROXYBOND 

                    <br />
                    logo are trademarks of Protega Pharmaceuticals Inc. PM-FM-1010 r9 Mar 2026 
                      </p>
                </div>
                </div>
            </div>
            </div>

        {modal1 && (
          <div
            className="modal micromodal-slide"
            id="modal-1"
            aria-hidden="true"
          >
            <div className="modal-overlay" tabIndex="-1" data-micromodal-close>
              <div className="modal-container" role="dialog" aria-modal="true">
                <div
                  className="modal-close"
                  aria-label="Close modal"
                  onClick={(_) => setModal1(false)}
                >
                  X
                </div>
                <h3>
                  ROXYBOND (oxycodone hydrochloride) Copay Card Program Terms
                  and Conditions
                </h3>
                <p>
                  The ROXYBOND Copay Card Program (the “Card”) may cover a portion of eligible out-of-pocket costs of patients' ROXYBOND prescriptions. Patient eligibility for the Card is subject to the following terms and conditions:
                </p>
                <ul>
                  <li>
                    The Card may only be used by eligible residents of the U.S., Puerto Rico, or U.S. territories at participating eligible pharmacies located in the U.S., Puerto Rico, or U.S. territories. Card user must be at least 18 years of age.
                  </li>
                  <li>
                   The Card will cover 65% of the out-of-pocket costs of an eligible patient's ROXYBOND prescriptions (Card benefit is calculated at the time of use and is subject to vary). Annual maximum benefit of $8,500 applies.
                  </li>
                  <li>
                    The Card is only available for use with a valid prescription. The Card has no cash value, is not transferable, may not be reproduced, and may not be sold, purchased, traded, or offered for sale, purchase, or trade.
                  </li>
                  <li>
                    THIS CARD IS NOT INSURANCE AND IS NOT INTENDED TO BE A SUBSTITUTE FOR INSURANCE. The Card is not valid for prescriptions eligible for full reimbursement by insurance plans or any other pharmacy benefit or assistance programs, and it will not reimburse any payments made by a Flexible Spending Account (“FSA”), Health Savings Account (“HSA”), or Health Reimbursement Account (“HRA”).
                  </li>
                  <li>
                    This Card is only valid for use by patients with commercial insurance. THE CARD IS NOT VALID FOR PRESCRIPTIONS THAT ARE ELIGIBLE TO BE REIMBURSED, IN WHOLE OR IN PART, BY:
                    <ul>
                      <li>
                        ANY FEDERAL HEALTH CARE PROGRAM (AS DEFINED AT 42 U.S.C. §1320a-7b(f)), INCLUDING MEDICAID, MEDICARE (INCLUDING ANY MEDICARE ADVANTAGE OR MEDICARE PART D PLAN, WHICH INCLUDES MEDICARE PART D ENROLLEES IN THE PRESCRIPTION DRUG COVERAGE GAP), TRICARE, CHAMPUS, PUERTO RICO GOVERNMENT HEALTH INSURANCE PLAN, OR ANY OTHER STATE OR FEDERAL HEALTH CARE PROGRAM;
                      </li>
                      <li>
                       MEDICARE-ELIGIBLE PATIENTS ENROLLED IN AN EMPLOYER-SPONSORED RETIREE HEALTH PLAN OR PRESCRIPTION DRUG PLAN;
                      </li>
                      <li>CASH-PAYING PATIENTS; OR</li>
                      <li>
                        PATIENTS RESIDING IN A STATE WHERE THE USE OF THE CARD IS PROHIBITED BY LAW OR REGULATION.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Submit claim to patient's insurance first, then submit a secondary claim using the copay card information as a coordination of benefits using OCC 8. If the patient's insurance requires a Prior Authorization and returns a reject 75, or drug not covered reject 70, submit a secondary claim using the copay card information as a coordination of benefits using OCC 3. 
                  </li>
                  <li>
                    Patient, pharmacist, and prescriber agree not to submit a claim for reimbursement for any value conveyed by Card. Patient and pharmacist must
                    each individually report receipt of Card to any insurer, health plan, or any other party that covers or reimburses any part of the prescription filled
                    using this Card, as required by law, regulation, or company policy.
                  </li>
                  <li>
                    Certain information necessary to facilitate the use of the Card will be shared with Protega Pharma and its affiliates.
                  </li>
                  <li>
                    Card is not valid in the state of Massachusetts.
                  </li>
                  <li>
                    Card is void where taxed or where prohibited or restricted by law.
                  </li>
                  <li>
                    Protega Pharma reserves the right to terminate the Card program or to rescind, revoke, or amend this offer without notice.
                  </li>
                </ul>
                <p>
                  Pharmacies needing assistance with processing this copay card, please contact the Pharmacy Helpdesk at{" "}
                  <a href="tel:630-450-8938">630-450-8938</a>.
                </p>
                <p>&copy;2025 Protega Pharma. All rights reserved.</p>
              </div>
            </div>
          </div>
        )}
      </footer>
    </>
  );
}
