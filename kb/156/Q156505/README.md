---
layout: page
title: "Q156505: PRB: Syntax Error with ActiveX Control Terminates VFP"
permalink: kb/156/Q156505/
---

## Q156505: PRB: Syntax Error with ActiveX Control Terminates VFP

	Article: Q156505
	Product(s): Microsoft FoxPro
	Version(s): 5.0, 6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbvfp500 kbvfp600
	Last Modified: 04-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The ImageList ActiveX control is used to store a set of images for use with
	other ActiveX controls. When setting the Picture property of an ActiveX control
	to an image in the ImageList control, the following error may occur:
	
	  This Program has performed an illegal operation and will be shut down
	
	CAUSE
	=====
	
	The Picture property may have been omitted from the reference to the ImageList
	control.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The ImageList ActiveX control allows you to load all the .bmp files and .ico
	files that may be needed for other ActiveX controls. You can then set the
	Picture property of an ActiveX control to reference any of the images in the
	ImageList control. The following command is an example of assigning the first
	image to the Picture property of an ActiveX control:
	
	     ThisForm.Olecontrol1.Object.Picture = ;
	       ThisForm.Olecontrol2.Object.ListImages(1).Picture
	
	If the Picture property is omitted from the end of the reference, the following
	error message occurs:
	
	  This Program has performed an illegal operation and will be shut down
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following program demonstrates the correct and incorrect way to change a
	Picture Property of an ActiveX control using an image from the ImageList
	control.
	
	      ***** Start Code *****
	
	     PUBLIC frmOcxTest
	     frmOcxTest = CREATEOBJECT('Form1')
	     frmOcxTest.ADDOBJECT("PicList1","PicList", ;
	        "COMCTL.ImageListCtrl.1")
	
	     * Add the Fox.bmp to the image control
	     frmOcxTest.PicList1.Object.ListImages.Add ;
	        (,,LoadPicture("C:\VFP50\FOX.BMP"))
	     frmOcxTest.ADDOBJECT("OcxButton1","OcxButton", ;
	        "Threed.SSCommand")
	     frmOcxTest.OcxButton1.Caption = "Change Image Works"
	     frmOcxTest.ADDOBJECT("Button1","Button")
	
	     frmOcxTest.Show()
	
	     DEFINE CLASS Form1 AS Form
	        Top = 0
	        Left = 0
	        Height = 300
	        Width = 300
	        Name = "Form1"
	        Caption = "ImageList Test"
	
	     ENDDEFINE
	
	     DEFINE CLASS PicList AS OLEControl
	     ENDDEFINE
	
	     DEFINE CLASS OcxButton AS OLEControl
	        Top = 75
	        Left = 75
	        Height = 80
	        Width = 150
	        Visible = .T.
	        PROCEDURE Click
	          * This code will change the image on the ActiveX Button
	          ThisForm.OcxButton1.Object.Picture = ;
	            ThisForm.PicList1.Object.ListImages(1).Picture
	        ENDPROC
	     ENDDEFINE
	
	     DEFINE CLASS Button AS CommandButton
	        Top = 195
	        Left = 75
	        Height = 27
	        Width = 150
	        Visible = .T.
	        Caption = "Change Image Fails"
	
	        PROCEDURE Click
	          * This code will cause the following error message:
	          *  "This Program has performed an illegal operation and will be
	          *  shut down" (There is no "Picture" reference after "ListImages".)
	
	          ThisForm.OcxButton1.Object.Picture = ;
	            ThisForm.PicList1.Object.ListImages(1)
	        ENDPROC
	     ENDDEFINE
	
	     ***** End Code *****
	
	When you run the above code, the "Change Image Works" button displays the Fox.bmp
	file from the ImageList control. The "Change Image Fails" button causes an
	"Invalid Page Fault" error.
	
	In Visual FoxPro 6.0, you do not get the "Invalid Page Fault" error, instead you
	get the following error message:
	
	  Ole exception error: Exception code c0000005. OLE object may be corrupt
	
	REFERENCES
	==========
	
	For more information on the ActiveX controls that shipped with Visual FoxPro
	5.0, see Help and the Ctrlref.hlp file located in the Vfp\Ctrlhlp directory.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : 5.0, 6.0
	
	=============================================================================
	
