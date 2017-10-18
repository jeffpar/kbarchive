---
layout: page
title: "Q166817: FIX: Alpha MFC Regular DLL Fails After Porting from Intel"
permalink: kb/166/Q166817/
---

## Q166817: FIX: Alpha MFC Regular DLL Fails After Porting from Intel

	Article: Q166817
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.0a
	Operating System(s): 
	Keyword(s): kbDLL kbide kbMFC kbVC400bug kbVC500fix kbGrpDSTools kbNoUpdate
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.0a, on platform(s):
	   - the hardware: DEC Alpha 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When moving a Visual C++ 4.x MFC regular DLL (_USRDLL) project from the Intel
	platform to the Alpha RISC platform you may run into one or more of a set of
	related problems. Some symptoms are:
	
	- CWinApp::InitInstance() is not called.
	
	- Resources stored in the DLL fail to load because AfxGetResourceHandle or
	  AfxFindResourceHandle returns NULL or an incorrect resource handle.
	
	- AfxGetInstanceHandle() returns NULL.
	
	- Standard MFC database, sockets, or OLE resources fail to load. For example,
	  AfxLoadString(AFX_IDP_SQL_CONNECT_FAIL) returns an empty string, even when
	  the Regular DLL is properly using the MFC Database classes.
	
	CAUSE
	=====
	
	When you create the Alpha configuration from an existing Intel based
	configuration, the Visual C++ development environment does not copy the /D
	_USRDLL compiler flag. This problem does not cause compiler or linker errors.
	
	Without this symbol defined, the default non-MFC DllMain is used and MFC is not
	initialized.
	
	RESOLUTION
	==========
	
	Make sure that /D "_USRDLL" is in the compiler options for regular MFC DLLs. If
	not, add _USRDLL to the list of preprocessor definitions.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	REFERENCES
	==========
	
	For more information covering MFC initialization in your Regular DLL, and other
	relevant topics, please see the following articles in the Microsoft Knowledge
	Base:
	
	  Q140850 HOWTO: Properly Export Functions Using the MFC Shared Library
	
	  Q154126 PRB: Using Extension DLL, Database/OLE/Sockets in Regular DLL
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Kelly Marie
	Ward, Microsoft Corporation
	
	
	Additional query words: 4.1 4.2B AXP Digital
	
	======================================================================
	Keywords          : kbDLL kbide kbMFC kbVC400bug kbVC500fix kbGrpDSTools kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper
	Version           : winnt:4.0,4.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
