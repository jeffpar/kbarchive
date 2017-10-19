---
layout: page
title: "Q81222: Example of Sharing a Form Between Projects in VB for Windows"
permalink: /kb/081/Q81222/
---

## Q81222: Example of Sharing a Form Between Projects in VB for Windows

	Article: Q81222
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0,2.0,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 2.0, 3.0 
	- Microsoft Visual Basic Standard Edition for Windows, versions 1.0, 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Visual Basic for Windows allows you to share forms between projects.
	When you make a change to a shared form in one project, that change will be
	automatically updated in the other projects that share the form.
	
	A workaround is also available if you want to change a shared form but do not
	want to update the form in other projects.
	
	Further below is an example of how to use this shared form feature in Visual
	Basic for Windows, and an example of how to change a shared form without
	updating it in shared projects.
	
	MORE INFORMATION
	================
	
	Below are two examples: the first shows how to update shared forms, and the
	second demonstrates how to change a shared form without having those changes
	affect the same form in other projects.
	
	Example 1
	---------
	
	1. Run Visual Basic for Windows, or from the File menu, choose New Project
	  (press ALT, F, N) if Visual Basic for Windows is already running. Form1 is
	  created by default.
	
	2. Add a couple text boxes and command buttons to Form1 by double-clicking the
	  appropriate tools in the toolbox and placing the controls at certain
	  locations on the form. From the Properties Bar, change the FormName property
	  of Form1 to Test1.
	
	3. From the File menu, choose Save Project As. Save Test1 as TEST1.FRM and save
	  the project as TEST1.MAK.
	
	4. Start a new project by choosing New Project from the File menu.
	
	5. From the File menu, choose Add File, and select TEST1.FRM.
	
	6. Once TEST1.FRM is loaded into the project, delete the command buttons, and
	  replace them with picture boxes.
	
	7. From the File menu, choose Save Project As. Save the project as TEST2.MAK,
	  and save TEST1.FRM with the same name.
	
	8. From the File menu, choose Open Project. In the Files box, select TEST1.MAK.
	
	Notice that the form has been updated to include picture boxes and the command
	buttons were deleted.
	
	Example 2
	---------
	
	The following steps are very similar to the example above but with a change in
	step 5.
	
	This example demonstrates how to share forms between projects, but with the forms
	being designed differently.
	
	1. Run Visual Basic for Windows, or from the File menu, choose New Project
	  (press ALT, F, N) if Visual Basic for Windows is already running. Form1 is
	  created by default.
	
	2. Add a couple text boxes and command buttons to Form1 by double-clicking the
	  appropriate tools in the toolbox and placing the controls at certain
	  locations on the form. From the Properties Bar, change the FormName property
	  of Form1 to Test3.
	
	3. From the File menu, choose Save Project As. Save Test3 as TEST3.FRM and save
	  the project as TEST3.MAK.
	
	4. From the File menu, choose New Project.
	
	5. From the File menu, choose Add File. In the Files box, select TEST3.FRM. Once
	  the file is loaded, delete the command buttons and replace them with picture
	  boxes.
	
	6. From the File menu, choose Save File As, and save the form as TEST4.FRM.
	
	7. From the File menu, choose Save Project As, and save the project as
	  TEST4.MAK.
	
	8. From the File menu, choose Open Project. In the Files box, select TEST3.MAK.
	
	Notice that the form's controls have NOT been updated with picture boxes.
	
	Additional query words: 2.00 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB300Search kbVB300 kbVB200
	Version           : :1.0,2.0,3.0
	
	=============================================================================
	
