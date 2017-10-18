---
layout: page
title: "Q181893: PRB: Debug Exception Connecting to Oracle Server"
permalink: kb/181/Q181893/
---

## Q181893: PRB: Debug Exception Connecting to Oracle Server

	Article: Q181893
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:5.0,5.0sp1,5.0sp2,5.0sp3
	Operating System(s): 
	Keyword(s): kb3rdparty kbDatabase kbMFC kbODBC kbVC
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 5.0sp1, 5.0sp2, 5.0sp3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an application using the ODBC API and running under the Visual C++ 5.0
	debugger attempts to connect to an Oracle Server the following exception may be
	generated:
	
	  Unhandled Exception in <app_name> ntdll.dll 0xC0000008
	
	
	CAUSE
	=====
	
	This exception is caused by a bug in the Oracle Trace Collection Services DLL
	(Otrace73.dll) installed by version 7.3.3.0 of the Oracle Client software.
	
	RESOLUTION
	==========
	
	Obtain a patch from the Oracle Corporation to upgrade the Oracle Client Software
	to 7.3.3.0.3 or later.
	
	If the patch is not available, use the Oracle Installer to uninstall the Oracle
	Trace Collection Services from the client. This solution should be considered a
	temporary workaround until the patch can be applied.
	
	MORE INFORMATION
	================
	
	The exception is generated during a call to one of the following ODBC APIs:
	
	  SQLDriverConnect()
	  SQLConnect()
	  SQLBrowseConnect()
	
	Additional query words: kbOracle kbMFC kbDatabase GPF Hang Fault
	
	======================================================================
	Keywords          : kb3rdparty kbDatabase kbMFC kbODBC kbVC 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500SP1 kbVC500SP2 kbVC500SP3 kbVC500Search
	Version           : WINDOWS:5.0,5.0sp1,5.0sp2,5.0sp3
	Issue type        : kbprb
	
	=============================================================================
	
