---
layout: page
title: "Q199295: PRB: VXD Containing Constant Data May Fail To Load in Windows 95"
permalink: kb/199/Q199295/
---

## Q199295: PRB: VXD Containing Constant Data May Fail To Load in Windows 95

	Article: Q199295
	Product(s): Microsoft C Compiler
	Version(s): 4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbVC500 kbVC600 kbOSWin95 kbOSWin98
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0, used with:
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0, used with:
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0, used with:
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	- Microsoft Visual C++.NET (2002), used with:
	   - the operating system: Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A VXD built in Visual C++ version 5.0 or later, may fail to load in the Windows
	95 or Windows 98 operating system if it contains constant data.
	
	The same VXD built with Visual C++ version 4.2 may not show this behavior.
	
	CAUSE
	=====
	
	The problem stems from differences in the way the compiler versions handle
	constant data. The 4.2 compiler erroneously grouped constant data with all other
	data. Hence, all data appeared in the LDATA section in the object.
	
	Later compilers, starting with version 5.0, correctly treat constant data as
	separate read only data and place it in the .rdata section. Because of this, the
	VXD fails to load, unable to recognize the new section.
	
	The Visual C++ .NET Linker issues an LNK4212 warning for this condition.
	
	RESOLUTION
	==========
	
	Use any one of the following two workarounds:
	
	- Add the following pragma in the source file where constant data is declared:
	
	      #pragma const_seg("_LDATA")
	
	- Add the following linker switch:
	
	      /merge:.rdata=_LDATA
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: kbDSupport
	
	======================================================================
	Keywords          : kbCompiler kbVC500 kbVC600 kbOSWin95 kbOSWin98 
	Technology        : kbVCsearch kbAudDeveloper kbVC32bitSearch
	Version           : :4.2,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
