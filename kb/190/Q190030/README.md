---
layout: page
title: "Q190030: BUG: FillStyle Pattern Not Visible for Shape on UserControl"
permalink: /kb/190/Q190030/
---

## Q190030: BUG: FillStyle Pattern Not Visible for Shape on UserControl

	Article: Q190030
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you have a UserControl with a transparent BackStyle that hosts a Shape
	control, the FillStyle of the Shape is set to a value other than Transparent or
	Solid. When you place the UserControl on a Form, you do not see the FillStyle
	specified for the Shape Control.
	
	RESOLUTION
	==========
	
	To work around this problem, set the Windowless property of the UserControl to
	True.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a project group consisting of a Standard EXE project and a UserControl
	  project, by following these steps:
	
	  a. Create a Standard EXE project. Form1 is created by default.
	
	  b. Choose Add Project from the File menu and add an ActiveX Control project.
	     UserControl1 is created by default.
	
	2. Set the UserControl's Backstyle property to 0 (Transparent).
	
	3. Place a shape on the UserControl and set its FillStyle property to something
	  other than 0 (Solid) or 1 (Transparent).
	
	4. Close the UserControl Window and place the UserControl on Form1. Note that
	  the FillStyle property you selected for the Shape does not appear.
	
	5. Open the UserControl design Window, set the Windowless property to True and
	  close the UserControl Window. Note that the FillStyle appears properly.
	
	Additional query words: kbDSupport kbDSD kbVBp kbVBp600bug kbCtrlCreate
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	
	=============================================================================
	
