---
layout: page
title: "Q255094: How to Use the SliderBar ActiveX Control in Visual FoxPro"
permalink: /kb/255/Q255094/
---

## Q255094: How to Use the SliderBar ActiveX Control in Visual FoxPro

	Article: Q255094
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbfile kbActiveX kbCtrl kbvfp600 kbGrpDSFox kbDSupport
	Last Modified: 10-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Slidebar.exe is a sample that translates the Visual Basic code examples in the
	SliderBar control's Help file into Visual FoxPro code. This article provides an
	example of using the control in a Visual FoxPro form.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Slidebar.exe
	  (http://download.microsoft.com/download/vfox60/sample/sample6/w9x2k/en-us/slidebar.exe)
	
	Release Date: Apr-12-2000
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	These forms demonstrate how to use the SliderBar ActiveX control. The code
	examples provided in the SliderBar Help file are written in Visual Basic. These
	forms translate the Visual Basic code into Visual FoxPro code. The essential
	functionality of the original examples has not changed, but some additional code
	was added to more clearly demonstrate certain functionality.
	
	To see the example, do the following:
	
	1. Download and unzip the Slidebar.exe
	
	2. Run the Slidebar1.scx form.
	
	3. Click on the form to change the orientation of the sliderbar. This calls the
	  Orientation method of the SliderBar object.
	
	4. Click on the slider bar and slide the pointer to the end of the control and
	  notice the text box resizes when you release. Slide it back and the text box
	  shrinks when you release. The text box does not shrink to less than one-third
	  the size of the SliderBar control.
	
	5. Click the Do Sliderbar2 form command button.
	
	6. Hold down the Shift key while clicking on the pointer of the SliderBar
	  control. Slide the pointer to the middle of the control and release. Notice
	  the text boxes populate with the appropriate values.
	
	7. Hold down the Shift key while clicking on the pointer of the SliderBar
	  control. Move the pointer out to the end of the control. Again, notice the
	  text boxes populate with the appropriate values.
	
	8. Click the Do Sliderbar3 form button.
	
	9. Choose items from the combo box to change the TickStyle property.
	
	10. Hold down the Shift key while moving the SliderBar control to see the
	  SelectRange demonstration.
	
	11. Move the SliderBar to see the GetNumTicks property demonstration.
	
	12. Press the Exit button to close the form.
	
	Additional query words: Slidebar
	
	======================================================================
	Keywords          : kbfile kbActiveX kbCtrl kbvfp600 kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	
	=============================================================================
	
