---
layout: page
title: "Q99391: INFO: Converting an RC File to Use Microsoft Foundation Classes"
permalink: /kb/099/Q99391/
---

## Q99391: INFO: Converting an RC File to Use Microsoft Foundation Classes

	Article: Q99391
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbtool kbfasttip _IK920 kbVC kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 kbGrpDSToo
	Last Modified: 13-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	- Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In App Studio (or Developer Studio in Visual C++ version 4.0 and later), the
	ClassWizard button on the toolbar and the ClassWizard menu option are disabled
	if the currently loaded RC file is not enabled for the Microsoft Foundation
	Classes. App Studio creates an RC file that is not enabled when it converts an
	old-style RC file to an App Studio RC file or when the user removes the
	selection from the "Use Microsoft Foundation Classes" option when creating an RC
	file in App Studio.
	
	In addition, an RC file that is not enabled for the Microsoft Foundation Classes
	cannot contain any VBX controls.
	
	MORE INFORMATION
	================
	
	To convert an RC file that is not enabled for the Microsoft Foundation Classes
	to one that is enabled, perform the following five steps:
	
	1. Load the RC file into App Studio.
	
	2. For Visual C++ for Windows or Visual C++, 32-bit Edition, versions 1.0 and
	  2.0, choose Set Includes from the File menu. For Visual C++, 32-bit Editions,
	  version 4.0 and later, choose Resource Includes from the View menu.
	
	3. In the Read-Only Symbol Directives window, replace the following lines:
	
	        #define APSTUDIO_HIDDEN_SYMBOLS
	        #include "windows.h"
	        #undef APSTUDIO_HIDDEN_SYMBOLS
	
	  with:
	
	        #include "afxres.h"
	
	4. Save the RC file and close it.
	
	5. Load the RC file into App Studio or Developer Studio.
	
	The Resource Script is now enabled for Microsoft Foundation Classes.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbfasttip _IK920 kbVC kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 kbGrpDSTools 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbvc150 kbvc100 kbVC500 kbVC600 kbVC200 kbVC32bitSearch kbVC16bitSearch kbVC500Search
	Version           : :1.0,1.5,2.0,4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
