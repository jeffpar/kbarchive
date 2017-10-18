---
layout: page
title: "Q257918: PRB: &quot;File is Missing or Invalid&quot; Error Message"
permalink: kb/257/Q257918/
---

## Q257918: PRB: &quot;File is Missing or Invalid&quot; Error Message

	Article: Q257918
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport kbControl
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running a built executable file, the following error message appears:
	
	In Visual Basic version 6.0:
	
	  Component 'filename' or one of its dependencies not correctly registered: a
	  file is missing or invalid
	
	In Visual Basic version 5.0:
	
	  Component 'filename' not correctly registered: file is missing or invalid
	
	CAUSE
	=====
	
	A component or a dependency file of a component used in the Visual Basic project
	is not correctly registered or is missing from the system on which the project
	is being executed.
	
	RESOLUTION
	==========
	
	Ensure that all the components required by the project are present on the system
	and that they are correctly registered.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Visual Basic Standard EXE project. Form1 is created by default.
	
	2. From the Project menu, choose Components.
	
	3. On the Controls tab of the Components dialog box, select the Microsoft Common
	  Dialog Control item in the list of available controls, and then close the
	  dialog box.
	
	4. Add a CommonDialog control to Form1.
	
	5. On the File menu, choose Make Project1.exe, and then build the executable
	  file.
	
	6. On the File menu, choose Exit to end the Visual Basic session, and do not
	  save the project.
	
	7. Start a Command Prompt.
	
	8. At the Command Prompt, locate the comdlg32.ocx file by changing to either the
	  Windows\System or Windows\Sytem32 directory.
	
	9. At the Command Prompt, rename the comdlg32.ocx file to comdlg32.old.
	
	10. Locate and run the Project1.exe program. Notice the error message appears.
	
	11. In order to restore proper functionality, rename comdlg32.old back to
	  comdlg32.ocx.
	
	REFERENCES
	==========
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport kbControl 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
