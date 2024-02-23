class Person{
    
    
    constructor(){
        this.name = 'Kaveri Shankar M';
        this.designation = 'Software Developer';
        this.exp = '1.6 years';
        this.company = 'Cognizant Technology and Solutions';
        this.education = 'B.Tech';
        this.edu_branch = 'Information Technology';
        this.college = 'velammal college of engineering and technology, madurai';
        this.sslc_per = 97;
        this.hsc_per = 76.5;
        this.cgpa = 82;
        this.ssc_school = 'Velammal.Matric.Hr.Sec.School,Thiruppuvanam';
        this.dob = '10-10-2000';
        this.father_name = 'Mareeswaran';
        this.address = 'Anna nagar , Chennai';
    }
    
    toString()
    {
        return `Person Details :
        
        Name : ${this.name}
        Designation : ${this.designation}
        Experience : ${this.exp}
        Company : ${this.company};
        
        Education :
        
        ${this.education} , ${this.edu_branch}
        Percentage : ${this.cgpa}
        ${this.college}
        
        HSC
        Percentage : ${this.hsc_per}
        ${this.ssc_school}
        
        SSLC
        Percentage : ${this.sslc_per}
        ${this.ssc_school}
        
        Date of birth : ${this.dob}
        Father's name : ${this.father_name}
        Address : ${this.address}
        `;
        
    }
}


let person_details = new Person();

console.log(person_details.toString());