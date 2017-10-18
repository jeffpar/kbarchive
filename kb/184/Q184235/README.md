---
layout: page
title: "Q184235: PRB: LNK2005 Errors on New and Delete When Defining _ATL_MIN_CRT"
permalink: kb/184/Q184235/
---

## Q184235: PRB: LNK2005 Errors on New and Delete When Defining _ATL_MIN_CRT

	Article: Q184235
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbActiveX kbLinker kbVC500 kbVC600
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you compile an Active Template Library (ATL) executable (.exe) project in
	Developer Studio, the _ATL_MIN_CRT preprocessor symbol allows you to use some
	standard C library functions without having to link in the C run-time library
	(CRT) startup code. If _ATL_MIN_CRT is defined when you build an ATL executable
	with Microsoft Foundation Classes (MFC) support, the linker returns the
	following linker errors:
	
	  nafxcw.lib(afxmem.obj) : error LNK2005: "void * _cdecl operator new(unsigned
	  int)" (??2@YAPAXI@Z) already defined in Stdafx.obj
	
	  nafxcw.lib(afxmem.obj) : error LNK2005: "void __cdecl operator delete(void
	  *)" (??3@YAXPAX@Z) already defined in StdAfx.obj
	
	CAUSE
	=====
	
	Some C run-time library functions require that you provide the CRT startup code.
	Because both the C run-time and MFC libraries contain definitions for the new
	and delete operators, there is a conflict for the linker.
	
	RESOLUTION
	==========
	
	Remove the _ATL_MIN_CRT preprocessor definition and rebuild the project. To do
	this, click Settings on the Project menu. On the C/C++ tab, select the
	Preprocessor category, and remove the _ATL_MIN_CRT definition.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create an ATL COM AppWizard application. On the File menu, click New, and
	  select ATL COM AppWizard as the project type.
	
	2. Use the information in the following Microsoft Knowledge Base article to add
	  MFC support to your ATL project:
	
	  Q173974 HOWTO: Add MFC Support to an ATL Project
	
	3. Add _ATL_MIN_CRT to your preprocessor definitions using the preprocessor
	  settings described in the RESOLUTION section of this article.
	
	4. On the Build menu, click Set Active Configuration, and choose the Win32
	  Release MinSize configuration.
	
	5. Build the project. You should see both LNK2005 errors in the build output
	  window.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q173974 HOWTO: Add MFC Support to an ATL Project
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Mark Hagen,
	Microsoft Corporation.
	
	
	Additional query words: ActiveX Foundation Classes C++ CPP CXX
	
	======================================================================
	Keywords          : kberrmsg kbActiveX kbLinker kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
