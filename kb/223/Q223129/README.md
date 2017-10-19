---
layout: page
title: "Q223129: FIX: Toolbar's Customize Method Replicates Images in Toolba"
permalink: /kb/223/Q223129/
---

## Q223129: FIX: Toolbar's Customize Method Replicates Images in Toolba

	Article: Q223129
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbButton kbCmnCtrls kbCtrl kbImgList kbVBp600bug kbGrpDSVB kbVS600sp2 kbV
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Visual Basic project contains an ImageList control associated with a Toolbar
	control. The ImageList control contains at least four 16x16 images that appear
	on buttons on the Toolbar control. You run the project and double-click the
	Toolbar control to display the Customize Toolbar dialog box. When you change the
	position of a Toolbar button using the Move Up or Move Down button twice, the
	button image is replicated on a previous position.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio 6.0 Service Packs, please see the
	following articles in the Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	This section shows you how to create a Visual Basic project that demonstrates
	the bug behavior. The section assumes you are familiar with adding a reference
	to a project and using the Toolbar and ImageList controls.
	
	Steps to Reproduce
	------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add a reference to the Microsoft Common Control 6.0 component to the project.
	  For more information about adding ActiveX controls to your project, see the
	  REFERENCES section of this article.
	
	3. Add a ToolBar and an ImageList to Form1.
	
	4. Add four 16x16 bitmap files to the ImageList control. The
	  \COMMON\GRAPHICS\BITMAPS\ASSORTED directory of your Visual Basic product disc
	  contains several 1K bitmap files.
	
	5. Copy the following code to the Code window of Form1:
	
	  Option Explicit
	
	  Private Sub Form_Load()
	     Set Toolbar1.ImageList = ImageList1
	     With Toolbar1.Buttons
	        .Add , , , , 1
	        .Add , , , , 2
	        .Add , , , , 3
	        .Add , , , , 4
	     End With
	  End Sub
	      
	
	6. On the Run menu, select Start, or press the F5 key to start the program and
	  do the following:
	
	  a. In Form1, double-click the Toolbar control. The Customize Toolbar dialog
	     box appears.
	
	  b. In the Toolbar buttons list box, select the first button.
	
	  c. Click the Move Down button twice to change the position of the first
	     button.
	
	  BUG: The image on the first button is replicated on the second button. The
	  expected behavior is that the image of the second button remains the same.
	
	REFERENCES
	==========
	
	- Standard ActiveX Controls in the Online Help or the MSDN Web site at:
	  http://msdn.microsoft.com/library/devprods/vs6/vb/html/vbconstandardactivexcontrols.htm
	  shows how to add an ActiveX control to your Visual Basic Project.
	
	- Toolbar Control in the Online Help or the MSDN Web site at:
	  http://msdn.microsoft.com/library/devprods/vs6/vb/html/vbobjtoolbar.htm has
	  more information on the Toolbar control.
	
	- ImageList Control in the Online Help or the MSDN Web site at:
	  http://msdn.microsoft.com/library/devprods/vs6/vb/html/vbobjimagelist.htm
	  gives you more information on the ImageList control.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbButton kbCmnCtrls kbCtrl kbImgList kbVBp600bug kbGrpDSVB kbVS600sp2 kbVS600SP1 kbVS600sp3fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
