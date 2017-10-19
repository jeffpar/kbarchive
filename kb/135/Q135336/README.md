---
layout: page
title: "Q135336: FIX: LNK2001 on AfxSocketInit When Using &#95;&#95;stdcall Default"
permalink: /kb/135/Q135336/
---

## Q135336: FIX: LNK2001 on AfxSocketInit When Using &#95;&#95;stdcall Default

	Article: Q135336
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbMFC kbVC210bug kbVC220bug kbVC400fix kbWinsock kbGrpDSMFCATL kbNoUpdatekbbuglist kbfi
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ 32-bit Edition, versions 2.1, 2.20 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An MFC sockets application that uses a default calling convention of __stdcall
	receives the following error:
	
	  <module name>.obj : error LNK2001: unresolved external symbol
	
	  "?AfxSocketInit@@YGHPAUWSAData@@@Z
	  (int _stdcall AfxSocketInit(struct WSAData *))"
	
	CAUSE
	=====
	
	The AfxSocketInit function is declared in AFXSOCK.H as follows:
	
	     BOOL AfxSocketInit(WSADATA* lpwsaData = NULL);
	
	Note that it has no modifiers on the name of the function. Because of this, the
	function calling conventions used by the compiler for this function will be
	whatever the command-line setting is.
	
	Because MFC is built with the default __cdecl calling convention, the
	AfxSocketInit function has its name decorated according to this convention. If
	your application is built with the __stdcall calling convention, then the
	function will be decorated according to this convention. Your code is
	effectively trying to call a function by a different name than the one that
	exists in the MFC library (due to the different name decoration), so the linker
	cannot resolve your reference.
	
	RESOLUTION
	==========
	
	Because MFC is built with the default calling convention of __cdecl, your
	application needs to have the AfxSocketInit declaration specifying this. Modify
	the declaration of AfxSocketInit in the header file AFXSOCK.H. This file is
	installed by default in the directory: \MSVC20\MFC\INCLUDE
	
	Change the declaration of AfxSocketInit from:
	
	     BOOL AfxSocketInit(WSADATA* lpwsaData = NULL);
	
	To:
	
	     BOOL __cdecl AfxSocketInit(WSADATA* lpwsaData = NULL);
	
	After making the change to this declaration, rebuild the .CPP file in your
	project that contains the call to AfxSocketInit. Note that you won't need to
	rebuild MFC because the MFC libraries have been built with this function being
	marked as __cdecl.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++, 32- bit
	edition, version 4.0.
	
	REFERENCES
	==========
	
	For more information on how to track down LNK2001 errors, please use the Help
	file.
	
	Additional query words: 2.10 2.20 3.10 3.20 S_MFC
	
	======================================================================
	Keywords          : kbMFC kbVC210bug kbVC220bug kbVC400fix kbWinsock kbGrpDSMFCATL kbNoUpdate kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
