---
layout: page
title: "Q181368: BUG: UserControl Not Printing Labels Correctly"
permalink: kb/181/Q181368/
---

## Q181368: BUG: UserControl Not Printing Labels Correctly

	Article: Q181368
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When printing a form containing a UserControl, the labels in the UserControl do
	not print properly. A common symptom is that only the first word of the label
	prints.
	
	RESOLUTION
	==========
	
	To work around this problem:
	
	- Set the AutoResize property of each Label control to True.
	
	-or-
	
	- Replace the Label control with a different control, such as a TextBox
	  control.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new ActiveX Control project. UserControl1 is created by default.
	
	2. Place a Label control on the UserControl.
	
	3. Set the Caption of Label1 to: This is a test (Make sure the width is large
	  enough to display the caption.)
	
	4. Close the UserControl1 window.
	
	5. Add a Standard EXE project by clicking Add Project from the File menu.
	
	6. Place the UserControl1 on the default Form1 (via the Toolbox).
	
	7. Click Print from the File menu. Range is "Module" and Print What is "Form
	  Image." Note that only the first word of the label prints.
	
	8. Reopen the UserControl1 window and set the AutoResize property of the Label
	  to True.
	
	9. Close the UserControl1 window and repeat step 7. Note that the contents of
	  the label prints properly.
	
	  NOTE: The same problem occurs when using the PrintForm method to print the
	  form.
	
	REFERENCES
	==========
	
	For related information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q174652 BUG: PrintForm Method Does Not Print Entire Form
	
	  Q171471 FIX: VB-Created Controls Fail to Print w/UserControl_Paint
	
	Additional query words: ocx
	
	======================================================================
	Keywords          : kbVBp500 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
