---
layout: page
title: "Q125750: PRB: Error LNK2001: '_WinMain@16': Unresolved External Symbol"
permalink: /kb/125/Q125750/
---

## Q125750: PRB: Error LNK2001: '_WinMain@16': Unresolved External Symbol

{% raw %}

	Article: Q125750
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbMFC kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 kbGrpDSMFCATL
	Last Modified: 27-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 4.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	NOTE: Microsoft Visual C++ NET (2002) supported both the managed code model that is provided by the .NET Framework and the unmanaged native Windows code model. The information in this article applies to unmanaged Visual C++ code only.
	
	SYMPTOMS
	========
	
	The linker generates the following error, when you build an MFC application with
	UNICODE support using the Microsoft products listed at the beginning of this
	article:
	
	  msvcrt.lib(crtexew.obj) : error LNK2001: unresolved external
	  symbol "_WinMain@16"
	
	Visual C++ .NET:
	
	  error LNK2019: unresolved external symbol _WinMain@16 referenced in function
	  _WinMainCRTStartup
	  fatal error LNK1120: 1 unresolved externals
	
	CAUSE
	=====
	
	MFC UNICODE applications use wWinMainCRTStartup as the entry point.
	
	RESOLUTION
	==========
	
	In the Output category of the Link tab in the Project Settings dialog box, set
	the Entry Point Symbol to wWinMainCRTStartup.
	
	For Visual C++ .NET: In the Advanced category of the Linker folder in the Project
	Properties dialog box, set the Entry Point to wWinMainCRTStartup.
	
	STATUS
	======
	
	This behavior is by design.
	
	REFERENCES
	==========
	
	The above information is documented in Books Online under this structure:
	
	- C/C++
	   - Programming Techniques
	      - Chapter 12 Developing for International Markets
	         - Support for Unicode
	            - Unicode Programming: Summary
	
	This reference also lists the additional steps that you need to consider to take
	advantage of the MFC and C run-time support for Unicode.
	
	Additional query words: 3.0 Unicode wWinMainCRTStartup
	
	======================================================================
	Keywords          : kberrmsg kbMFC kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbCRT kbVCNET
	Version           : :2.0,2.1,4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
