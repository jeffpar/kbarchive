---
layout: page
title: "Q191207: BUG: Compile Error When You Reopen a Project That Uses Implement"
permalink: kb/191/Q191207/
---

## Q191207: BUG: Compile Error When You Reopen a Project That Uses Implement

	Article: Q191207
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbCompiler kbVBp600bug kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you reopen a project that uses the Implements keyword and that previously
	ran fine, the following error is received:
	
	  Compile error: User-defined type not defined
	
	CAUSE
	=====
	
	This problem occurs because Visual Basic incorrectly saves a file and Implements
	does not work properly.
	
	RESOLUTION
	==========
	
	Steps to Resolve the Problem
	----------------------------
	
	1. Select References from the Project menu.
	
	2. Select Microsoft Data Formatting Object Library and the Microsoft Data Source
	  Interfaces.
	
	3. Save the Project.
	
	4. Press F5 to run the project. The above error does not occur.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new ActiveX DLL project in Visual Basic. Class1 is created by
	  default.
	
	2. In Class1, paste the following code:
	
	        Implements DataBinding
	
	3. In the code window, select the DataBinding object from the Object box.
	
	4. Click the Procedure arrow to view all the Procedures of the DataBinding
	  object. Select each until all the functions are listed in bold.
	
	5. Press F5 to run the Project. The project runs with no error.
	
	6. Save the project files.
	
	7. Close the project.
	
	8. Reopen the project, and press F5 to run it.
	
	RESULTS: The following error occurs:
	
	  Compile Error : User-defined type not defined
	
	  This error is for:
	
	     Private Property Set DataBinding_DataFormat(ByVal RHS As
	     StdFormat.DataFormat)
	
	  - and also -
	
	     Private Property Let DataBinding_DataMember(ByVal RHS As
	     MSDATASRC.DataMember)
	
	======================================================================
	Keywords          : kberrmsg kbCompiler kbVBp600bug kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
