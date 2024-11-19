import React, {useState, useEffect} from "react";
// import JsPDF from 'jspdf';
// import html2canvas from "html2canvas";
import LoadingImg from "../styles/images/ajax-loader-circle.gif";
// import * as Utils from "../utils";
// import Dialog from '@mui/material/Dialog';
// import DialogContent from '@mui/material/DialogContent';


export default function ExportPdfButton() {

    const [showDialog, setShowDialog] = useState(false);
    const [disabled, setDisabled] = useState("disabled");
    // const [allowToExport, setAllowToExport] = useState(false);
                        
	
    // useEffect(() => {
    //     const disabledBtn = ( eventListData.loaded ) ? "" : "disabled";
    //     setDisabled( disabledBtn );
	// }, [eventListData.loaded])

    

    let zoom = 1;
    let processingIdx = 0;
    
    const handleOnClick = (event: React.MouseEvent<HTMLDivElement>) => 
    {
        // if( disabled == "")
        // {
        //     setShowDialog(true);
        //     setAllowToExport(false);  
    
        //     var timelineTags = document.querySelectorAll(".timeline");
        //     $('.dlg_pdf_canvas').html("");
        //     for( var i=0; i<timelineTags.length; i++ )
        //     {
        //         pdfStyle('on');
        //         html2canvas(timelineTags[i], { }).then( (canvas) => {                
        //             $('.dlg_pdf_canvas').append(canvas);
                    
        //             processingIdx ++;
        //             checkAndEnableAllowToExportBtn();
        //         });
            
        //     }
        // }
    }

    // const checkAndEnableAllowToExportBtn = () =>{
    //     var timelineTags = document.querySelectorAll(".timeline");
    //     if( processingIdx == timelineTags.length )
    //     {
    //         pdfStyle('off');
    //         setAllowToExport(true);
    //     }
    // }
   
    const handleCloseDialog = () => {
        // pdfStyle('off');
        // setShowDialog(false);
    }

    const handleExportToPdf = () => {
        // if( allowToExport )
        // {
        //     const imgTimelines = document.querySelectorAll("canvas");

        //     const pdf = new JsPDF('l', 'px', 'a4');
      
        //     for(let i = 0; i < imgTimelines.length; i++)
        //     {
        //         let canvas =  imgTimelines[i];
        //         var pdfHeight = pdf.internal.pageSize.height || pdf.internal.pageSize.getHeight();
        //         pdfHeight = pdfHeight - 10;
                
        //         var pdfWidth = pdf.internal.pageSize.width || pdf.internal.pageSize.getWidth();
        //         pdfWidth = pdfWidth - 10;

        //         var imageWidth;
        //         var imageHeight;
        //         var imgData = canvas.toDataURL("image/png", imageWidth = canvas.width, imageHeight = canvas.height);
        //         var hratio = imageHeight/imageWidth;
               
        //         var width = pdf.internal.pageSize.width;
        //         var height = width * hratio; 
                
        //         if( imageWidth > pdfWidth ) 
        //         {
        //             hratio = pdfWidth / imageWidth;
        //             imageWidth = imageWidth * hratio; 
        //             imageHeight = imageHeight * hratio; 
        //         }
                

        //         if( imageHeight > pdfHeight ) 
        //         {
        //             hratio = pdfHeight / imageHeight;
        //             width = imageWidth * hratio; 
        //             height = imageHeight * hratio; 
        //         }
                
               
        //         // var height = pdf.internal.pageSize.height * hratio;
        //         pdf.addImage(imgData,'PNG',10,10, width, height);
                
    
        //         // Add more page
        //         if( i < imgTimelines.length - 1 ) pdf.addPage("a4","l");
        //     }
        //     pdf.save( 'file.pdf');
            
        //     pdfStyle('off');
        //     setShowDialog(false);
        // }
    }

    // const pdfStyle = (status) => {
    //     switch (status.toLowerCase()) {
    //         case 'on':
    //             $(".ignore").hide();
    //             $(".views_Container").css("height", "fit-content");
    //             $(".views_Container").css("width", "fit-content");
    //             $(".timeline").css("padding-right", "50px");
    //             $(".pnl_top").css("max-height", "fit-content");
    //             $(".pnl_btm").css("max-height", "fit-content");
    //             $(".needs_cont").css("height", "100%");
    //             $(".inner_content").css("height", "fit-content");
    //             $(".year").css({
    //                 'grid-template-rows': '36px 1fr 44px 1fr',
    //                 'height': 'auto'
    //             });

    //             break;
    //         case 'off':
    //             $(".ignore").show();
    //             $(".views_Container").css("height", "calc(100% - 65px)");
    //             $(".views_Container").css("width", "auto");
    //             $(".timeline").css("padding-right", "");
    //             $(".year").css("grid-template-rows", "36px calc(50% - 58px) 44px calc(50% - 22px)");
    //             $(".pnl_top").css("max-height", "calc(50vh - 130px)");
    //             $(".pnl_btm").css("max-height", "100%");
    //             $(".needs_cont").css("height", "97%");
    //             $(".inner_content").css("height", "100%");
                
    //             break;
    //         default: return '';
    //     }
    // }

    const handleCanvasZoomIn = () => {
        // zoom += 0.1
        // $("canvas").css("transform", "scale(" + zoom + ")");
    }
    
    const handleCanvasZoomOut = () => {
        // zoom -= 0.1
        // $("canvas").css("transform", "scale(" + zoom + ")");
    }

    const handleCanvasReset = () => {
        // zoom  = 1
        // $("canvas").css("transform", "scale(" + zoom + ")");
    }

  	return   (
        <>
            <div 
                className={`btn_print ${disabled}`} 
                data-toggle="tooltip" 
                data-placement="top" 
                data-trigger="hover" 
                onClick={(event) => handleOnClick(event)}
                title="Print PDF">
            </div>  

            <div style={{display: showDialog ? "block" : "none"}} >
                <div>
                    <div className="scrim" style={{position: "fixed"}}>

                        <div className="dlg_pdf">
                            {/* Header */}
                            <div className="dlg_pdf_bar">
                                <div className="lbl">Export to PDF</div>
                            </div>
                            
                            {/* Content */}
                            <div className="dlg_pdf_cta">
                                <div className="btn-sys-close" onClick={() => handleCloseDialog()}></div>
                            </div>

                            <div className="dlg_cnt">
                            {/* {!allowToExport && <div><img src={LoadingImg}/></div> } */}

                                <div className="dlg_pdf_preview">
                                    <div className="dlg_pdf_canvas">
                                    </div>
                                </div>
                            </div>
                            <div className="dlg_pdf_btns">
                                <div className="cta_canvas">
                                    <div className="cnt">
                                        <div className="z_in" onClick={() => handleCanvasZoomIn()}>
                                            <div id="zoomIn"></div>
                                        </div>
                                        <div className="z_out" onClick={() => handleCanvasZoomOut()}>
                                            <div id="zoomOut"></div>
                                        </div>
                                        <div className="z_res" onClick={() => handleCanvasReset()}>
                                            <div id="zoom-reset"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn_save_pdf" onClick={() => handleExportToPdf()}>Save</div>
                            </div>
                        </div> 
                    </div>
            
                </div>
            </div>
        </>
    );
}