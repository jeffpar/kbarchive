---
layout: page
title: "Q150292: FIX: Access Violation When Copying Src File Between Projects"
permalink: /kb/150/Q150292/
---

## Q150292: FIX: Access Violation When Copying Src File Between Projects

	Article: Q150292
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbui kbide kbVC kbVC500fix kbGrpDSTools
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1, 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to paste a file into a project that was cut or copied from a
	different project in Developer Studio, an access violation occurs:
	
	  Unhandled exception in MSDEV.EXE(MFC40.DLL): 0xC0000005: Access Violation.
	
	RESOLUTION
	==========
	
	Use another method to copy or move a file from one project directory to another,
	such as File Manager, Windows Explorer, or the command line. From the Insert
	menu, select Files into Project, and add the file to the new project. If you are
	moving the file, delete the file from the original project by clicking the file
	and pressing the DELETE key or by choosing Cut from the Edit menu.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	REFERENCES
	==========
	
	For more information, see "Adding and Removing Files from Projects" in the
	Visual C++ online documentation.
	
	Additional query words: kbVC400bug
	
	======================================================================
	Keywords          : kbui kbide kbVC kbVC500fix kbGrpDSTools 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420
	Version           : :4.0,4.1,4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
