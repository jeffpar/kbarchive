---
layout: page
title: "Q191764: PRB: Closing a Project Does Not Make Other Open Project Active"
permalink: kb/191/Q191764/
---

## Q191764: PRB: Closing a Project Does Not Make Other Open Project Active

	Article: Q191764
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual FoxPro 6.0, using the Project Object's Close method to close the
	current Project does not make the other open project the active project.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Place the following code in a program file and run the program:
	
	     LOCAL lnI
	
	     MODIFY PROJECT test1 NOWAIT NOSHOW
	     MODIFY PROJECT test2 NOWAIT NOSHOW
	     ? "Active Project " + Application.ActiveProject.Name
	
	     FOR lnI = 1 TO Application.Projects.Count
	        ? "Project " + ALLTRIM(STR(lnI)) + " " + ;
	            Application.Projects.Item(lnI).Name
	     ENDFOR
	
	     WAIT WINDOW "Note that project 1 is the active project!" TIME 1
	     WAIT WINDOW "Now we are going to close project 1" TIME 1
	     Application.Projects.Item(1).Close()
	     WAIT WINDOW "Now lets check Application.ActiveProject." TIME 1
	     ? Application.ActiveProject.Name
	
	When the program executes the last line, the following error message appears:
	
	  OLE IDispatch exception code 0 from Visual FoxPro for Windows: 1923:
	  Object ACTIVEPROJECT is not found...
	
	Additional query words: kbVFp600 kbProjManager
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	
