import bgpic from '../imgs/background.jpg';

const styles={
    container:{
        // height:'100vh',
        // backgroundImage:'url('+bgpic+')',
        // backgroundPosition:'center',
    },
    container_class:`container-fluid position-relative p-0`,
                    
    image:{
        height:'100vh'
    },
    image_class:`postion-absolute w-100`,

    panel:{
        container:{top:'12.8%'},
        container_class:'container-fluid position-absolute text-center p-0',
        space:{
            height:'80.4%'
        },
        space_class:'row m-0 d-flex justify-content-center',
        footer:{
            backgroundColor:"#E9E7EF",
            height:'19.6%'            
        },
        footer_class:'row m-0'
    },
    panel_row:{
        height:'58.5vh',width:'82.5vw'
    },
    panel_row_class:'row mx-auto',
    panel_col:{height:"100%"},
    panel_col_class:'col-lg-4 col-md-6 bg-white mx-auto p-0',
    text_title:{
        fontSize: 50,
        color:'#ED5736',
        margin: '1em '
        
    }
}

export default styles;