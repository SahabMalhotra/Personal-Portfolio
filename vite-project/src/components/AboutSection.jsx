import {Briefcase, Code, User} from "lucide-react";



export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold">Passionate Web Developer </h3>
                        
                        <p className="text-muted-foreground">
                            Hi, I'm Sahib Singh, a passionate and motivated Computer Programming graduate from Georgian College with a strong interest in web development, ethical hacking, and technology that makes a difference. I've worked on various projects ranging from student databases to climate impact trackers, and I enjoy solving problems through code and innovation.
                        </p>

                        <p className="text-muted-foreground">
                           I’m skilled in HTML, CSS, JavaScript, Python, SQL, Node.js, MERN stack, and more. Beyond coding, I’ve contributed to meaningful causes like raising awareness about household food insecurity through web campaigns and hackathons.
                        </p>


                       

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 jusify-center">
                            <a href="#contact" className="cosmic-button">
                            {" "}
                                Get in Touch
                            </a>

                            <a href="/projects/SAHIB_SINGH_CV.pdf" target="_blank" className="px-6 py-2 rounded-full border border-primary text-glow-primary
                            text-primary hover:bg-primary/10 transition-colors duration-300"
                            style={{ boxShadow: "0 0 10px 3px #9a71d8" }}
                            >
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>

                                  <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Web Development
                                    </h4>
                                    <p className="text-muted-foreground">
                                        I have hands-on experience in building responsive and dynamic web applications using technologies like HTML, CSS, JavaScript, Node.js, and the MERN stack. I enjoy creating clean user interfaces and solving real-world problems through intuitive design and efficient code.
                                    </p>
                                  </div>

                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary"/>
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Teamwork
                                    </h4>
                                    <p className="text-muted-foreground">
                                       I thrive in collaborative environments and have worked effectively in team-based projects, both in academic settings and community initiatives. I believe that open communication, respect, and shared goals are key to building successful solutions together.
                                    </p>
                                  </div>

                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary"/>
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Social Innovator Drafter
                                    </h4>
                                    <p className="text-muted-foreground">
                                       As a member of the Change the Now club, I contributed to social impact campaigns addressing issues like food insecurity. I’ve combined technology and creativity to raise awareness, run digital challenges, and support sustainable development goals through engaging platforms.
                                    </p>
                                  </div>
                                  
                            </div>
                        </div>

                    </div>



                </div>
            </div>
        </section>
    );
}