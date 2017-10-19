---
layout: page
title: "Q179235: DOC: SQL Debugging with VC++ 5.0 Requires a Non-System Account"
permalink: /kb/179/Q179235/
---

## Q179235: DOC: SQL Debugging with VC++ 5.0 Requires a Non-System Account

	Article: Q179235
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:5.0,5.0sp1,5.0sp2,5.0sp3
	Operating System(s): 
	Keyword(s): kberrmsg kbEEdition kbVC
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 5.0sp1, 5.0sp2, 5.0sp3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The documentation included with Visual C++ 5.0 incorrectly states that SQL
	Server does not need to be configured to log on under a user account for SQL
	Debugging to work in all cases.
	
	If you are using SQL Debugging with one or two machines when you are using SQL
	Server as a Service, you need to configure SQL Server to log on under a user
	account, not under the local system account.
	
	If you use SQL Debugging with SQL Server logged on as the local system account,
	the following error message will appear in the application event log from the
	source MSDEVSDI:
	
	  SQL Server when started as service must not log on as System Account. Reset
	  to logon as user account using Control Panel.
	
	MORE INFORMATION
	================
	
	The documentation in question can be found at mk:@ivt:vccore/F2D/D32/S4D107.HTM
	in the Visual C++ documentation.
	
	NOTE: The documentation has been fixed for Visual C++ 6.0.
	
	Additional query words: vcentsqldebug
	
	======================================================================
	Keywords          : kberrmsg kbEEdition kbVC 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500SP1 kbVC500SP2 kbVC500SP3 kbVC500Search
	Version           : WINDOWS:5.0,5.0sp1,5.0sp2,5.0sp3
	
	=============================================================================
	
