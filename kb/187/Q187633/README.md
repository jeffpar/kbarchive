---
layout: page
title: "Q187633: BUG: Type Mismatch Referencing UserControl on Unloaded Form"
permalink: /kb/187/Q187633/
---

## Q187633: BUG: Type Mismatch Referencing UserControl on Unloaded Form

	Article: Q187633
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to set an object variable referencing a UserControl on an
	unloaded form, and the UserControl resides in the same project as the Module
	containing the declaration, a TypeMismatch error occurs. This problem does not
	occur if the form is loaded, if the UserControl is in a different project, or if
	the code is placed in the Load Event of the Form containing the UserControl.
	
	RESOLUTION
	==========
	
	- Load the Form before referencing the UserControl. For example:
	
	        Sub Main()
	           Load Form1
	           Dim ctlMyControl as UserControl1
	           Set ctlMyControl = Form1.UserControl11
	        End Sub
	
	-or-
	
	- Place the UserControl in a different project.
	
	-or-
	
	- Move the code to the Load Event of the Form containing the UserControl.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. From the Project menu, add a UserControl to the project.
	
	3. Close the UserControl window, and add the UserControl to Form1.
	
	4. From the Project menu, add a Module to the project.
	
	5. Insert the following code into Module1:
	
	        Sub Main()
	           Dim ctlMyControl as UserControl1
	           Set ctlMyControl = Form1.UserControl1
	        End Sub
	
	6. From the Project menu, chose Project1 Properties, and change the Startup
	  Object to SubMain.
	
	7. Run the project, and note that you receive the "Type Mismatch" error at this
	  point.
	
	Additional query words: kbDSupport kbDSD kbVBp500Bug kbNoKeyWord kbVBp600bug
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbbug
	
	=============================================================================
	
