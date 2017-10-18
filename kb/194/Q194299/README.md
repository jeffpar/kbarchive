---
layout: page
title: "Q194299: PRB: RC2151 When Using MFC as a Static Link Library"
permalink: kb/194/Q194299/
---

## Q194299: PRB: RC2151 When Using MFC as a Static Link Library

	Article: Q194299
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1,4.2,4.2b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbMFC kbResource kbResourceEd kbString kbVC400 kbVC500 kbVC600 kbGrpDSMFCATL
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1, 4.2b 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Adding a string resource to an application that uses MFC as a static link
	library may result in the use of the same ID value twice in a STRINGTABLE
	statement. The Resource Compiler generates the following error:
	
	  RC2151 Cannot re-use string constants
	
	This problem is likely to happen when using the resource editor to add the
	string.
	
	CAUSE
	=====
	
	When using MFC as a static library in an application, MFC's resources are
	compiled into the .exe.
	
	The statement on line 26 of Afxres.rc
	
	  #ifndef _AFXDLL
	
	causes string resources defined in Afxres.h to be used in the application when
	building Afxres.rc. If an ID value of another string resource matches any of the
	ID values used in Afxres.rc, the same ID value is used twice in a STRINGTABLE
	statement.
	
	NOTE: The problem is not multiple definitions of the ID symbol, but rather, the
	use of the definition multiple times in a string table.
	
	RESOLUTION
	==========
	
	Consult both Technical Note 20 "ID Naming and Numbering Conventions" and the
	file Afxres.h to help locate ID values used by Windows or MFC. Then remove any
	entries in the string table that use ID values more than once (for example, an
	entry in the application's string table that has a ID value matching an ID value
	in Afxres.h).
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Technical Note 20 "ID Naming and Numbering Conventions" lists many of the ID
	ranges used for specific purposes. However, this article does not mention the
	possible conflict with the IDs defined in Afxres.h.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new SDI or MDI application using AppWizard that use MFC as a static
	  library.
	
	2. Add a String resource using the Resource Editor; it will have the ID
	  IDS_STRING61446, which has the value 61446 (0xF006).
	
	3. Build the application.
	
	When building the application, the following error message is generated:
	
	  error RC2151 : cannot reuse string constants, 61446(0xF006)
	
	This error is generated because AFX_IDS_UNNAMED_FILE is defined with the value of
	0xF006 in Afxres.h and is used in both the Afxres.rc file and the application's
	.rc file.
	
	REFERENCES
	==========
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q21569 RW2002 Error "Cannot Reuse String Constants" in RC.EXE
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Isaac
	Varon, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbMFC kbResource kbResourceEd kbString kbVC400 kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0,4.1,4.2,4.2b,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
