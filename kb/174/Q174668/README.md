---
layout: page
title: "Q174668: INFO: Dbgrid32.ocx Requires Grdkrn32.dll"
permalink: /kb/174/Q174668/
---

## Q174668: INFO: Dbgrid32.ocx Requires Grdkrn32.dll

	Article: Q174668
	Product(s): Microsoft C Compiler
	Version(s): WINNT:4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbGenInfo kbVC kbArtTypeINF
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	- Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Attempting to register the Dbgrid32.ocx file with RegSvr32.exe, on a Windows NT
	version 3.51 machine, where Visual C++ or Visual Basic is not installed, gives
	the following error message:
	
	  LoadLibrary failed GetLastError is 0x0000045a
	
	MORE INFORMATION
	================
	
	When trying to use Dbgrid32.ocx, one must also include Grdkrn32.dll in the
	Windows system directory apart from the other redistributable DLLs.
	
	NOTE: When you run the setup wizard from Visual Basic, Grdkrn32.dll is mentioned
	in the Swdepend.ini file that is created. Another source of information is the
	Sw32tmpl.ini file found in vb\setupkit\kitfil32, where it says under
	dbgrid32.ocx that a file named Grdkrn32.dll is also required.
	
	This dependency is not present in the Dbgrid32.ocx file that ships with Visual
	C++ 5.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbGenInfo kbVC kbArtTypeINF 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC32bitSearch
	Version           : WINNT:4.0,4.1,4.2
	Issue type        : kbinfo
	
	=============================================================================
	
