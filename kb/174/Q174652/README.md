---
layout: page
title: "Q174652: FIX: PrintForm Method Does Not Print Entire Form"
permalink: kb/174/Q174652/
---

## Q174652: FIX: PrintForm Method Does Not Print Entire Form

	Article: Q174652
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting kbVBp kbVBp500bug kbVBp600fix kbGrpDSVB kbDSupport
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Executing a PrintForm method to print a maximized form results in only a portion
	of the form being printed. This bug may also occur when you click Print on the
	File menu to print a Form Image.
	
	CAUSE
	=====
	
	The PrintForm method prints an image of the Form window in its normal state.
	Those controls that are not visible on the Form when the Form's window state is
	normal will not print.
	
	RESOLUTION
	==========
	
	Workaround #1
	-------------
	
	To workaround this bug, resize the form so that all controls on the form display,
	and then execute the PrintForm method.
	
	Workaround #2
	-------------
	
	You can also workaround this problem by capturing the on-screen image of the form
	and then printing that image. For more information, see the following Microsoft
	Knowledge Base article:
	
	  Q161299 HOWTO: Capture and Print the Screen, a Form, or any Window
	
	Please note that this workaround will not work in situations where the form is
	larger than the display area, or if a portion of the form is not visible for any
	other reason. For an alternate approach, please see the following articles in
	the Microsoft Knowledge Base:
	
	  Q178076 HOWTO: Use a PictureBox to Control Orientation Printing a Form
	
	  Q230502 HOWTO: Print a Form That Is Too Large for the Screen or Page
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Maximize Form1 and place a command button on the lower-right corner of the
	  form.
	
	3. Copy the following code to the Code window of Form1:
	
	        Option Explicit
	        Private Sub Command1_Click()
	           Me.PrintForm
	        End Sub
	
	4. Press F5 to run the program. Maximize the form with the maximize button and
	  then click the command button. Only part of the form is printed.
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Arsenio
	Locsin, Microsoft Corporation
	
	
	Additional query words: printer printing truncate
	
	======================================================================
	Keywords          : kbprint kbPrinting kbVBp kbVBp500bug kbVBp600fix kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : :5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
