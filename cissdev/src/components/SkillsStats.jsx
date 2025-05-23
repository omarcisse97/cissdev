import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faPhp } from '@fortawesome/free-brands-svg-icons/faPhp';
import { faPython } from '@fortawesome/free-brands-svg-icons/faPython';
import { faJs } from '@fortawesome/free-brands-svg-icons/faJs';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons/faCss3Alt';
import { faJava } from '@fortawesome/free-brands-svg-icons/faJava';
import { faReact } from '@fortawesome/free-brands-svg-icons/faReact';
import { faGitAlt } from '@fortawesome/free-brands-svg-icons/faGitAlt';
import { faLaravel } from '@fortawesome/free-brands-svg-icons/faLaravel';
import { faMagento } from '@fortawesome/free-brands-svg-icons/faMagento';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons/faNodeJs';
import { faLinux } from '@fortawesome/free-brands-svg-icons/faLinux';
import { faAws } from '@fortawesome/free-brands-svg-icons/faAws';
import { faDocker } from '@fortawesome/free-brands-svg-icons/faDocker';
import { faJira } from '@fortawesome/free-brands-svg-icons/faJira';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faVuejs} from '@fortawesome/free-brands-svg-icons/faVuejs';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { useState, useEffect } from 'react';


const SkillsStats = (props) => {
    const [lang, setLang] = useState(props.lang);

    useEffect(() => {
        setLang(props.lang);
    }, [props.lang])
    return (
        <>
            <section id="skills" className="skills section">


                <div className="container section-title" data-aos="fade-up">
                    <h2>{lang === "English"? "Skills": "Compétences"}</h2>
                    <div><span>{lang === "English"? "My": "Mes"}</span> <span className="description-title">{lang === "English"? "Skills": "Compétences"}</span></div>
                </div>

                <div className="container text-center" data-aos="fade-up" data-aos-delay="100">
                    <div class="row align-items-start">
                        <div class="col">
                            <div className="progress">
                                <span className="skill">
                                    <span>
                                        <FontAwesomeIcon icon={faReact} size="5x" style={{color: "#61DBFB"}} />
                                    </span>
                                </span>
                            </div>
                            <div className="progress">
                                <span className="skill">
                                    <span>React</span>
                                </span>
                            </div>
                            <div className="progress">
                                <span className="skill">
                                    <span>
                                        <FontAwesomeIcon icon={faHtml5} size="5x" style={{color: "#E34C26"}} />
                                    </span>
                                </span>
                            </div>
                            <div className="progress">
                                <span className="skill">
                                    <span>HTML</span>
                                </span>
                            </div>
                            <div className="progress">
                                <span className="skill">
                                    <span>
                                        <FontAwesomeIcon icon={faCss3Alt} size="5x" style={{color: "#264de4"}} />
                                    </span>
                                </span>
                            </div>
                            <div className="progress">
                                <span className="skill">
                                    <span>CSS</span>
                                </span>
                            </div>
                            <div className="progress">
                                <span className="skill">
                                    <span>
                                        <FontAwesomeIcon icon={faJs} size="5x" style={{color: "#f0db4f"}} />
                                    </span>
                                </span>
                            </div>
                            <div className="progress">
                                <span className="skill">
                                    <span>JavaScript</span>
                                </span>
                            </div>
                           
                        </div>
                        <div class="col">
                            <div className="progress">
                                <span className="skill">
                                    <span>
                                        <FontAwesomeIcon icon={faNodeJs} size="5x" style={{color: "#68A063"}} />
                                    </span>
                                </span>
                            </div>
                            <div className="progress">
                                <span className="skill">
                                    <span>NodeJS</span>
                                </span>
                            </div>
                            <div className="progress">
                                <span className="skill">
                                    <span>
                                        <FontAwesomeIcon icon={faPython} size="5x" style={{color: "#4B8BBE"}} />
                                    </span>
                                </span>
                            </div>
                            <div className="progress">
                                <span className="skill">
                                    <span>Python</span>
                                </span>
                            </div>
                            <div className="progress">
                                <span className="skill">
                                    <span>
                                        <FontAwesomeIcon icon={faJava} size="5x" style={{color: "#f89820"}} />
                                    </span>
                                </span>
                            </div>
                            <div className="progress">
                                <span className="skill">
                                    <span>Java</span>
                                </span>
                            </div>
                            <div className="progress">
                                <span className="skill">
                                    <span>
                                        <FontAwesomeIcon icon={faPhp} size="5x" style={{color: "#8892be"}} />
                                    </span>
                                </span>
                            </div>
                            <div className="progress">
                                <span className="skill">
                                    <span>PHP</span>
                                </span>
                            </div>
                            
                        </div>
                        <div class="col">
                            <div className="progress">
                                <span className="skill">
                                    <span>
                                        <FontAwesomeIcon icon={faMagento} size="5x" style={{ color: "#ee672f"}} />
                                    </span>
                                </span>
                            </div>
                            <div className="progress">
                                <span className="skill">
                                    <span>Magento</span>
                                </span>
                            </div>
                            <div className="progress">
                                <span className="skill">
                                    <span>
                                        <FontAwesomeIcon icon={faBootstrap} size="5x" style={{ color: "#7952B3"}} />
                                    </span>
                                </span>
                            </div>
                            <div className="progress">
                                <span className="skill">
                                    <span>Bootstrap</span>
                                </span>
                            </div>
                            <div className="progress">
                                <span className="skill">
                                    <span>
                                        <FontAwesomeIcon icon={faLaravel} size="5x" style={{ color: "#f55247"}} />
                                    </span>
                                </span>
                            </div>
                            <div className="progress">
                                <span className="skill">
                                    <span>Laravel</span>
                                </span>
                            </div>
                            <div className="progress">
                                <span className="skill">
                                    <span>
                                        <FontAwesomeIcon icon={faVuejs} size="5x" style={{color: "#42b883"}} />
                                    </span>
                                </span>
                            </div>
                            <div className="progress">
                                <span className="skill">
                                    <span>VueJS</span>
                                </span>
                            </div>


                        </div>
                        <div class="col">
                            <div className="progress">
                                <span className="skill">
                                    <span>
                                        <FontAwesomeIcon icon={faGithub} size="5x" style={{ color: "#171515"}} />
                                    </span>
                                </span>
                            </div>
                            <div className="progress">
                                <span className="skill">
                                    <span>Git</span>
                                </span>
                            </div>
                            <div className="progress">
                                <span className="skill">
                                    <span>
                                        <FontAwesomeIcon icon={faAws} size="5x" style={{ color: "#FF9900"}} />
                                    </span>
                                </span>
                            </div>
                            <div className="progress">
                                <span className="skill">
                                    <span>Amazon AWS</span>
                                </span>
                            </div>
                            <div className="progress">
                                <span className="skill">
                                    <span>
                                        <FontAwesomeIcon icon={faLinux} size="5x" style={{ color: "#FCC624"}} />
                                    </span>
                                </span>
                            </div>
                            <div className="progress">
                                <span className="skill">
                                    <span>Linux</span>
                                </span>
                            </div>
                            <div className="progress">
                                <span className="skill">
                                    <span>
                                        <FontAwesomeIcon icon={faDocker} size="5x" style={{ color: "#0db7ed"}} />
                                    </span>
                                </span>
                            </div>
                            <div className="progress">
                                <span className="skill">
                                    <span>Docker</span>
                                </span>
                            </div>


                        </div>
                    </div>
                </div>

            </section>
        </>
    )
};
export default SkillsStats;