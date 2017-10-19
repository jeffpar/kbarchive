---
layout: page
title: "Q241849: INFO: More Information on MIDL2362 Warning"
permalink: /kb/241/Q241849/
---

## Q241849: INFO: More Information on MIDL2362 Warning

	Article: Q241849
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbCompiler kbCOMt kbVC600 kbDSupport kbGrpDSMFCATL
	Last Modified: 02-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When compiling Interface Definition Language (IDL) code that has an OLE
	automation dual interface with more than 110 methods, the Microsoft Interface
	Definition Language (MIDL) compiler gives a MIDL2362 warning. The exact text of
	the warning is as follows:
	
	  warning MIDL2362 : too many methods in the interface, requires Windows NT 4.0
	  SP3 or greater.
	
	This happens on computers with Microsoft Windows NT and that have the latest
	service pack installed.
	
	MORE INFORMATION
	================
	
	The warning states that the number of methods in the dual interface is greater
	than what Windows NT 4.0 without any service packs can support. If service pack
	3 or higher is installed on the target Windows NT 4.0 computers, then the
	warning can be ignored. The MIDL compiler does not check the service pack level
	of Windows NT on the development computer. Therefore, the compiler gives the
	warning if more than 110 methods are in the dual automation interface even if
	SP3, SP4 or SP5 is on the development computer.
	
	You can disable this warning if you use the following code before the offending
	interface:
	
	  #if (__midl >= 501)
	  midl_pragma warning( disable: 2362 )
	  #endif
	
	This requires a version of Midl.exe that is 5.01.0000 or higher. You can check
	the version of the MIDL compiler on the computer by running Midl.exe from the
	command line.
	
	REFERENCES
	==========
	
	  Q170989 Large Number of Methods in an OLE Interface Causes Failure
	
	In MSDN, midl_pragma warning
	
	Additional query words: MIDL #pragma warning
	
	======================================================================
	Keywords          : kbnokeyword kbCompiler kbCOMt kbVC600 kbDSupport kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch kbVCNET
	Version           : :6.0
	Issue type        : kbinfo
	
	=============================================================================
	
