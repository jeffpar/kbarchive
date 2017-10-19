---
layout: page
title: "Q168251: FIX: Odbccp32.lib Requires Msvcrt.lib to Compiler"
permalink: /kb/168/Q168251/
---

## Q168251: FIX: Odbccp32.lib Requires Msvcrt.lib to Compiler

	Article: Q168251
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbprogramming
	Last Modified: 28-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 3.0 
	-------------------------------------------------------------------------------
	
	BUG #: 4637 (odbc3)
	
	SYMPTOMS
	========
	
	An ODBC application may get the following link errors when linking with
	Odbccp32.lib;
	
	  odbccp32.lib(dllload.obj) : error LNK2001:
	  unresolved external symbol __imp__rename
	
	  odbccp32.lib(dllload.obj) : error LNK2001:
	  unresolved external symbol __imp___stat
	
	CAUSE
	=====
	
	Odbccp32.lib is not a pure import library. It contains some object code that has
	unsatisfied externals: rename and state. The rename and state functions are
	defined in Msvcrt.lib.
	
	WORKAROUND
	==========
	
	To work around this problem, make sure an ODBC application links Msvcrt.lib
	before Odbccp32.lib.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Open Database
	Connectivity version 3.0. This problem has been corrected in U.S. Service Pack 1
	for Microsoft Open Database Connectivity, version 3.0. For more information,
	contact your primary support provider.
	
	Additional query words: link c compiler
	
	======================================================================
	Keywords          : kbprogramming 
	Technology        : kbAudDeveloper kbODBCSearch kbODBC300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
