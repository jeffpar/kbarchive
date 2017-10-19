---
layout: page
title: "Q183214: PRB: E_INVALIDARG Error from CoCreateInstance()"
permalink: /kb/183/Q183214/
---

## Q183214: PRB: E_INVALIDARG Error from CoCreateInstance()

	Article: Q183214
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,3.0,4.2b,5.0,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbATL200 kbATL210 kbCOMt kbCtrl kbDebug kbVC420 kbVC500 kbVC600 kbOSWin95 kbAT
	Last Modified: 13-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL), versions 2.0, 2.1, 3.0, used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2b, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2b, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under Windows 95, you might get the following error returned from the
	CoCreateInstance() function:
	
	  E_INVALIDARG (0x80070057 or "The parameter is incorrect")
	
	CAUSE
	=====
	
	Your project might have the following macro:
	
	     #define _WIN32_WINNT 0x0400
	
	By default, ATL projects contain this macro in StdAfx.h. In ObjBase.h, the
	CLSCTX_ALL and CLSCTX_SERVER flags are defined to include the
	CLSCTX_REMOTE_SERVER flag if the preprocessor symbol, _WIN32_WINNT, is defined
	to be greater than or equal to 0x0400 (_WIN32_WINNT >= 0x400).
	
	CLSCTX_REMOTE_SERVER is only valid on Windows NT 4.0 or later, Windows 95 with
	DCOM for Windows 95 installed, Windows 98, and Windows Millennium Edition (Me).
	If you call CoCreateInstance() on Windows 95 (without DCOM for Windows 95) with
	a flag that includes CLSCTX_REMOTE_SERVER, it returns an E_INVALIDARG error.
	
	RESOLUTION
	==========
	
	Remove the following from StdAfx.h:
	
	     #define _WIN32_WINNT 0x0400
	
	Or, you can install DCOM for Windows 95, which comes with an updated Ole32.dll.
	This version recognizes the CLSCTX_REMOTE_SERVER flag. You can download DCOM for
	Windows 95 from the following Web location:
	
	  http://www.microsoft.com/com/dcom/dcom1_2/dcom1_2.asp
	
	STATUS
	======
	
	This behavior is by design.
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Samson
	Tanrena, Microsoft Corporation.
	
	
	Additional query words: CreateInstance [ASCII 150]2147942487
	
	======================================================================
	Keywords          : kberrmsg kbATL200 kbATL210 kbCOMt kbCtrl kbDebug kbVC420 kbVC500 kbVC600 kbOSWin95 kbATL300 kbGrpDSMFCATL kbArchitecture 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch kbVCNET
	Version           : :2.0,2.1,3.0,4.2b,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
