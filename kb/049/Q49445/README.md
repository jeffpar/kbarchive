---
layout: page
title: "Q49445: PRB: LINK versions 5.03 to 5.2 Require EXETYPE WINDOWS Stmt."
permalink: kb/049/Q49445/
---

## Q49445: PRB: LINK versions 5.03 to 5.2 Require EXETYPE WINDOWS Stmt.

	Article: Q49445
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:5.03,5.05,5.1,5.13,5.25
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS, versions 5.03, 5.05, 5.1, 5.13, 5.25 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to run an application built with Microsoft LINK fails and the
	application generates the following message:
	
	  The application you are about to run was designed for a previous version of
	  Windows.
	
	In addition, an attempt to process the application with the Microsoft Windows
	Resource Compiler (RC) fails and RC generates the following message:
	
	  RW1030: The exetype of the program is not Windows
	
	CAUSE
	=====
	
	To develop an application for the Microsoft Windows operating system, LINK
	requires an EXETYPE WINDOWS statement in the application's module-definition
	(.DEF) file.
	
	This behavior is different from previous and subsequent versions of the linker in
	which it was not necessary to specify the type of the executable file.
	Previously, a particular LINK version was used only to develop applications for
	the Windows operating system.
	
	RESOLUTION
	==========
	
	Modify the application's module definition file to include the following
	statement. Then rebuild the application and use the Resource Compiler to process
	the output file.
	
	  EXETYPE WINDOWS
	
	However, in LINK version 5.2, the default version of Microsoft Windows is not
	version 3.0. To build an application compatible with Windows 3.0, specify the
	version number in the EXETYPE statement as follows:
	
	  EXETYPE WINDOWS 3.0
	
	For LINK version 5.30 and later, the default version of Microsoft Windows is
	version 3.0. It is not necessary to include the EXETYPE statement, but it is
	recommended.
	
	Additional query words: LinkIss
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch kbLINK503DOS kbLINK510DOS kbLINK513DOS kbLINK505DOS
	Version           : MS-DOS:5.03,5.05,5.1,5.13,5.25
	
	=============================================================================
	
