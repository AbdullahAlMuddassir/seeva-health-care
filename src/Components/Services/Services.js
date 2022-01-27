import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import service1 from "../../Images/Services/Alzheimer.png";
import service2 from "../../Images/Services/asthma.jpg";
import service3 from "../../Images/Services/cancer.jpg";
import service4 from "../../Images/Services/chronicpain.jpg";
import service5 from "../../Images/Services/Dibets.jpg";
import service6 from "../../Images/Services/Heart.jpg";

const Services = () => {
    return (
        <div>
            <section className='section services-s'>
                <Outlet></Outlet>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-12 mb-4 text-center'>
                                <h1>Our Services</h1>
                            </div>
                            <div className='col-md-4 mb-4'>
                                <div className='card shadow'>
                                    <img src={service1} alt="" className="w-100 border-bottom pic-img" />
                                    <div className='card-body'>
                                        <h6>Alzheimer's Disease-1</h6>
                                        <hr />
                                        <p>
                                        The Act requires staff with direct access to clients with AD/ADRD hired after the adoption of rules implementing this Act shall complete a minimum of 6 hours of initial training in the first 60 days of employment using an AD/ADRD services curriculum compiled by the Department. Upon the adoption of rules implementing this Act – 1) staff with direct access to clients with dementia shall receive 3 hours of advanced training on caring for individuals with AD/ADRD each year, 2) AD/ADRD services program employers shall maintain training records and make them available to the Department on request, and 3) a manager, supervisor, or person with the chief responsibility of oversight of AD/ADRD services within an entity shall complete an AD/ADRD services curriculum from a list compiled by the Department or have 5 years of experience as a director of an AD/ADRD services program.
                                        Programs covered by the Act include, but are not limited to, health care facilities licensed or certified by the Assisted Living and Shared Housing Act; Nursing Home Care Act; Home Health, Home Services, and Home Nursing Agency Licensing Act; and Hospice Program Licensing Act.
                                        </p>
                                        <Link to="/service/product" className='btn btn-danger'>Details</Link>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 mb-4'>
                                <div className='card shadow'>
                                    <img src={service2} alt="" className="w-100 border-bottom pic-img" />
                                    <div className='card-body'>
                                        <h6>Asthma Disease-2</h6>
                                        <hr />
                                        <p>
                                        Asthma is a condition that affects the airways. It makes it hard to breathe because the airways become swollen, produce too much mucus and the muscles around the airways tighten. Asthma can range from mild to severe and can be life threatening. It is recognized that in some families, inherited factors play a role in an individual’s risk for asthma. If a parent, or other close relative, has been diagnosed with asthma, a child may be at an increased risk for the condition; family history is important in the assessment and treatment of asthma. There is no cure for asthma, but it can be controlled by ongoing medical care, including a management plan developed by a health care provider, medication, avoidance of triggers and good health habits.
                                        Asthma is a condition that affects the airways. It makes it hard to breathe because the airways become swollen, produce too much mucus and the muscles around the airways tighten. Asthma can range from mild to severe and can be life threatening. It is recognized that in some families, inherited factors play a role in an individual’s risk for asthma. If a parent, or other close relative, has been diagnosed with asthma, a child may 
                                        </p>
                                        <Link to="service" className='btn btn-danger'>Details</Link>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 mb-4'>
                                <div className='card shadow'>
                                    <img src={service3} alt="" className="w-100 border-bottom pic-img" />
                                    <div className='card-body'>
                                        <h6> Cancer Disease-3</h6>
                                        <hr />
                                        <p>
                                        Cancer is a disease in which some of the body’s cells grow uncontrollably and spread to other parts of the body.Cancer can start almost anywhere in the human body, which is made up of trillions of cells. Normally, human cells grow and multiply (through a process called cell division) to form new cells as the body needs them. When cells grow old or become damaged, they die, and new cells take their place.Sometimes this orderly process breaks down, and abnormal or damaged cells grow and multiply when they shouldn’t. These cells may form tumors, which are lumps of tissue. Tumors can be cancerous or not cancerous (benign).Cancerous tumors spread into, or invade, nearby tissues and can travel to distant places in the body to form new tumors (a process called metastasis). Cancerous tumors may also be called malignant tumors. Many cancers form solid tumors, but cancers of the blood, such as leukemias, generally do not.Benign tumors do not spread into, or invade, nearby tissues. When removed, benign tumors usually don’t grow back, whereas cancerous tumors sometimes do. Benign tumors can sometimes be quite large, however. Some can cause serious symptoms or be life threatening.
                                        </p>
                                        <Link to="service" className='btn btn-danger'>Details</Link>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='card shadow'>
                                    <img src={service4} alt="" className="w-100 border-bottom pic-img" />
                                    <div className='card-body'>
                                        <h6>Chronic Disease-4</h6>
                                        <hr />
                                        <p>
                                        Chronic airflow limitation has the highest morbidity rate of any significant chronic pulmonary disorder in the United States and is the second most common cause of hospital admissions. It is difficult to estimate its exact incidence because most diseases of the respiratory tract are not reportable and there is some confusion in definition of terms related to diseases of this type. However, the Social Security Administration reports that CAL ranked only second to heart disease as the cause of disability in men over the age of 40. The incidence of CAL is increasing and, although not all specific causes are known, factors contributing to its development and affecting its degree of severity have been identified. Heavy cigarette smoking is probably the most important factor, and others are industrial pollution, occupational exposure to irritating inhalants.
                                        </p>
                                        <Link to="service" className='btn btn-danger'>Details</Link>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='card shadow'>
                                    <img src={service5} alt="" className="w-100 border-bottom pic-img" />
                                    <div className='card-body'>
                                        <h6>Diabetes Disease-5</h6>
                                        <hr />
                                        <p>
                                        Diabetes is a serious chronic disease that poses a major health problem. Nearly 30.3 million people in the United States (9.4% of the population) have diabetes. About one-third of these people do not know they have diabetes. Each year, 1.5 million new cases of diabetes are diagnosed. In Illinois, approximately 1.3 million (12.5% of the population) adults have diabetes, but roughly 341,000 of those don’t know they have diabetes. It is estimated that 84 million Americans have prediabetes, of which 3.6 million live in Illinois. Diabetes is the seventh leading cause of death nationally and in Illinois.Individuals with diabetes are at an increased risk for heart disease, stroke, blindness, kidney failure, dental disease, and lower extremity amputations (not related to injuries). Diabetes and its complications occur among all age, racial, and ethnic groups.
                                        </p>
                                        <Link to="service" className='btn btn-danger'>Details</Link>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='card shadow'>
                                    <img src={service6} alt="" className="w-100 border-bottom pic-img" />
                                    <div className='card-body'>
                                        <h6>Heart and Stroke Disease-1</h6>
                                        <hr />
                                        <p>
                                        Heart disease and stroke are, respectively, the first and third leading causes of death, and also the major causes of disability in Illinois. In 2017 there were 25,393 deaths in Illinois due to heart disease and 6,021 deaths due to stroke.  Deaths due heart disease and stroke combined (31,414) represent almost 29 percent of all deaths in Illinois in 2017 (109,726).Prevention efforts coupled with effective disease management can reduce the incidence of heart attacks and strokes, cut the number of deaths from these diseases, and relieve some of the disability suffered by heart attack and stroke survivors.The Illinois Heart Disease and Stroke Prevention Program focuses The ABC's of Cardiovascular Health.Heart disease and stroke are, respectively, the first and third leading causes of death, and also the major causes of disability in Illinois.
                                        </p>
                                        <Link to="service" className='btn btn-danger'>Details</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </div>
    );
};

export default Services;