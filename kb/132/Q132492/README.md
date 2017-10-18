---
layout: page
title: "Q132492: FIX:Hard-coded breakpoints and RtlGetUserInfoHeap error"
permalink: kb/132/Q132492/
---

## Q132492: FIX:Hard-coded breakpoints and RtlGetUserInfoHeap error

	Article: Q132492
	Product(s): Microsoft C Compiler
	Version(s): 2.1,2.2
	Operating System(s): 
	Keyword(s): kbDatabase kbMFC kbODBC kbVCkbbuglist kbfixlist
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.1, 2.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When connecting to a 32-bit SQL Server ODBC data source while running the VC++
	debugger under Windows NT 3.51, you may receive messages in the Ouptut window
	similar to the messages below:
	
	  
	
	  LDR: LdrpMapDll Relocating: Base Name odbccp32.dll
	  LDR: LdrpMapDll Relocating: Base Name sqlsrv32.dll
	  LDR: LdrpMapDll Relocating: Base Name MSVCRT10.dll
	  LDR: LdrpMapDll Relocating: Base Name dbnmpntw.DLL
	  HEAP: Invalid Address specified to RtlGetUserInfoHeap( 140000, 145aec )
	
	These messages will occur if you are using the SQL Server 4.21 ODBC driver.
	
	Additionally, you may find that the debugger will stop on hard-coded breakpoints
	(INT 3 assembler instructions).
	
	RESOLUTION
	==========
	
	The messages are harmless and can be ignored. After hitting the breakpoints, you
	can continue by selecting "GO" in the debugger or pressing F5. The Microsoft SQL
	Server ODBC version 2.50.0121 fixes the problem. You can acquire the latest
	version of the SQL Server ODBC driver on the SQL Server version 6.0 CD in the
	\I386\ODBC directory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the products mentioned at the
	beginning of this article. This problem has been fixed in version 2.50.0121 of
	the SQL Server ODBC driver.
	
	Additional query words: 2.10 2.20 1.50 1.51 1.52 breakpoint hardcoded ODBC25.EXE
	
	======================================================================
	Keywords          : kbDatabase kbMFC kbODBC kbVC kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbMFC
	Version           : :2.1,2.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
