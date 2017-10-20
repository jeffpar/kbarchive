---
layout: page
title: "Q100639: INFO: Unicode Support in the Microsoft Foundation Class Library"
permalink: /kb/100/Q100639/
---

## Q100639: INFO: Unicode Support in the Microsoft Foundation Class Library

{% raw %}

	Article: Q100639
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,2.1,4.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbMFC kbVC kbVC200 kbVC400 kbGrpDSMFCATL
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Unicode support is not available in MFC version 2.0.
	
	Unicode support is enabled in MFC versions 3.0 and later, if you link with the
	right libraries.
	
	- If you're writing an AFXDLL application or DLL, link with MFCx0U.LIB or
	  MFCx0UD.LIB (where "x" represents the major MFC version, currently either 3
	  or 4).
	
	- If you're writing an application, link with UAFXCWD.LIB or UAFXCW.LIB.
	
	- If you're writing a USRDLL with MFC 3.0, link with UAFXDWD.LIB or UAFXDW.LIB.
	
	MORE INFORMATION
	================
	
	Because WinMain() comes from MFC in an MFC application, you should make sure
	that you have the right MFC libraries, or you will get an unresolved external on
	WinMain@16. An unresolved external on _WinMain@16 will also occur if you fail to
	add wWinMainCRTStartup into the EntryPointSymbol section of the link output
	category after adding _UNICODE to the preprocessor symbols. For more
	information, refer to the "Unicode Programming Summary" article in the
	"Developing for International Markets" chapter of the "Programming Techniques"
	in the Visual C++ Books Online.
	
	In MFC 4.0, _USRDLL is obsolete. A new DLL model is now available, simply called
	"Regular DLLs." Regular DLLs statically linked to MFC have the same
	characteristics as the former USRDLL. For more information, see Tech Note 33,
	DLL Version of MFC, or search the Visual C++ 4.0 Books Online for "_USRDLL" and
	"Dynamic-Link Libraries."
	
	NOTE: The MFC Unicode libraries are NOT installed by default; you can rerun setup
	and select only the Unicode MFC libraries.
	
	Additional query words: 1.00 2.00 2.10 3.00 4.00
	
	======================================================================
	Keywords          : kbnokeyword kbMFC kbVC kbVC200 kbVC400 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:1.0,2.0,2.1,4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
