

const  ourApproach = [
    {
        title:'trade & market information',
        img:'../../images/about 1_.jpg',
        bold: 'WE EMPOWER MSMES TO ACCESS ACCURATE, UP-TO-DATE, AND OFFICIALLY SOURCED INFORMATION USING MOBILE PHONES',
        description:'Sauti’s mobile trade and market information platform uses SMS, USSD, and WhatsApp technology to close the digital information divide for women in trade across East Africa. Project implementers and researchers can also download data on women-led enterprises through Sauti’s interactive trade insights data dashboard.',
        link:'LEARN MORE: SAUTI INFORMATION PLATFORM',
        icon: 'east'
    },
    {
        title:'RESEARCH & ENGAGEMENT',
        img:'../../images/about2.jpg',
        bold: 'UNDERSTAND AND ENGAGE STAKEHOLDERS ON KEY INFORMATION BARRIERS THAT EXCLUDE WOMEN FROM TRADE',
        description:'We develop research and meth',
        icon: 'east'
    },
    {
        title:'LEVERAGING TECHNOLOGY',
        img:'../../images/about3.jpg',
        bold: 'WE DESIGN TRANSFORMATIVE TECHNOLOGIES THAT CONNECT THE FIRST MILE WITH THE LAST MILE',
        description:'We help projects to integrate flexible and cost-effective information technologies into design and delivery. Our custom platforms collect data and deliver dynamically updated information to the hardest-to-reach communities.',
        link:'LEARN MORE: TECHNOLOGY SOLUTIONS',
        icon: 'east'
    },
    {
        title:'MOBILE DATA COLLECTION',
        img:'../../images/about4.jpg',
        bold: 'WE LEVERAGE SURVEY CAPACITY WITH UNPRECEDENTED SCALE AND EASE OF USE ACROSS EAST AND WEST AFRICA',
        description:'We optimize mobile data collection tools to assess impacts on people and businesses engaged in trade and other hard-to-reach populations.',
        link:'LEARN MORE: SAUTI COLLECT',
        icon: 'east'
  
    },
  ]

// OUR APPROACH 
const our = (image,h,subh,p,i,a ) => {
    //CREATE ELEMENT
    const component = document.createElement('div')
    const col1 = document.createElement('div')
    const img = document.createElement('img')
    const col2 = document.createElement('div')
    const title = document.createElement('h2')
    const sub = document.createElement('h3')
    const para = document.createElement('p')
    const icon = document.createElement('i')
    const link = document.createElement('a')
  
    //CONNENT 
    component.appendChild(col1)
    col1.appendChild(img)
    component.appendChild(col2)
    col2.appendChild(title)
    col2.appendChild(sub)
    col2.appendChild(para)
    col2.appendChild(icon)
    col2.appendChild(link)
  
    // ADD STYLE 
    component.classList.add('row')
    col1.classList.add('col-1-of-2')
    col2.classList.add('col-1-of-2')
    icon.classList.add('material-icons')
    icon.classList.add('approach-icon')
    link.classList.add('approach-link')
  
    //ADD CONTACT 
    img.src = image
    title.textContent = h
    sub.textContent = subh
    para.textContent = p
    icon.textContent =i
    link.textContent = a
  
  
    // RETURN PARENT 
    return component
  }
  
  
  const approaches = document.querySelector('.approaches-1')
  
  ourApproach.map( item  => {
    approaches.appendChild(
      our(item.img ,item.title , item.bold , item.description ,item.icon ,item.link)
      )
  })
  
  console.log(our());
  



