---
layout: page
title: "Q262654: BUG: ShowAnnotationToolPalette ToolTips Display Incorrect Data"
permalink: kb/262/Q262654/
---

## Q262654: BUG: ShowAnnotationToolPalette ToolTips Display Incorrect Data

	Article: Q262654
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbVBp600bug kbVC600bug kbOSWin98bug kbGrpDSVB kbDSupport kbNoUpdate kbOSWinM
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0, on platform(s):
	   - Microsoft Windows 98 
	   - Microsoft Windows Millennium Edition 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0, on platform(s):
	   - Microsoft Windows 98 
	   - Microsoft Windows Millennium Edition 
	- Microsoft Visual C++, 32-bit Editions, versions 5.0, 6.0, on platform(s):
	   - Microsoft Windows 98 
	   - Microsoft Windows Millennium Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The ShowAnnotationToolPalette method of the IMGEDIT control allows you to show
	the control's related Toolbox and assign ToolTip text to each visible button.
	Under the versions of Microsoft Windows to which this article applies, any
	ToolTip text that is longer than one character is displayed as garbage
	characters, including the default ToolTips.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior in Microsoft Visual Basic 6.0
	---------------------------------------------------------
	
	1. Start a new Visual Basic Standard EXE project. Form1 is created by default.
	
	2. On the Project menu, select the Components option to open the Components
	  dialog box, check Kodak Image Edit Control, and then click OK.
	
	3. Add one ImgEdit control and one CommandButton control to Form1.
	
	4. Add the following code to the General Declarations section of Form1:
	
	  Private Sub Command1_Click()
	        ' Show toolbox and set the ToolTip text.
	        ImgEdit1.ShowAnnotationToolPalette True, 10, 10, "a|b|c|Test"
	  End Sub
	
	5. Run the project, and then click the CommandButton.
	
	6. Move the mouse pointer over any of the first four Toolbox items and note that
	  the first three items that have ToolTips of a single character correctly
	  display the ToolTip text, but the fourth item, which is more than one
	  character long, displays only garbage. Note that the predefined, default
	  ToolTips are also garbage, even if you do not specify any new text.
	
	This behavior can be reproduced easily in Microsoft Visual C++ 6.0 if you create
	an instance of the ImgEdit Control Class and call the ShowAnnotationToolPalette
	method while you pass similar arguments.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbVBp600bug kbVC600bug kbOSWin98bug kbGrpDSVB kbDSupport kbNoUpdate kbOSWinMEbug 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
