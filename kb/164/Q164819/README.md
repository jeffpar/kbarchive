---
layout: page
title: "Q164819: FIX: Problems Using Database Classes with Jet 3.0 under NT 4.0"
permalink: /kb/164/Q164819/
---

## Q164819: FIX: Problems Using Database Classes with Jet 3.0 under NT 4.0

	Article: Q164819
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.0a,4.1,4.2,4.2b
	Operating System(s): 
	Keyword(s): kbDAOsearch kbDatabase kbMFC kbODBC kbVC
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1, 4.2, 4.0a, 4.2b, on platform(s):
	   - the hardware: Intel x86 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using a Microsoft Access 7.0 data source under Windows NT 4.0 may cause the
	following problems:
	
	1. An MFC Database (ODBC, DAO) application may crash upon exit, with the
	  following error message:
	
	  "The instruction at 0x04210085 referenced memory at 0x04210085. The memory
	  cannot be read."
	
	  The exact addresses may be different.
	
	2. Opening and closing a CDatabase object in a loop may cause the following
	  error:
	
	  "Unhandled exception in <appname.exe> .... Access Violation"
	
	3. Class Wizard may crash while creating a recordset based on an Access data
	  source.
	
	
	RESOLUTION
	==========
	
	To obtain the updated version of MSJT3032.DLL version 3.00.3213 that fixes the
	problem, see the following articles in the Microsoft Knowledge Base:
	
	  Q151186 ACC95: Updated Jet DLLs Available on MSL
	
	  Q143163 PRB: Problems Running Microsoft Jet 3.0 on Windows NT 4.0
	
	  Q156298 FIX: Error on Disconnecting from ODBC Desktop Drivers
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in the ODBC drivers included
	with Visual C++ 5.0 and the ODBC Drivers included with Office 97 Value Pack.
	
	Additional query words: kbVC400bug
	
	======================================================================
	Keywords          : kbDAOsearch kbDatabase kbMFC kbODBC kbVC 
	Technology        : kbVCsearch kbAudDeveloper kbVC32bitSearch
	Version           : winnt:4.0,4.0a,4.1,4.2,4.2b
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
