---
layout: page
title: "Q156257: FIX: SQL Server May Crash When sp_who2 Is Debugged"
permalink: /kb/156/Q156257/
---

## Q156257: FIX: SQL Server May Crash When sp_who2 Is Debugged

	Article: Q156257
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:4.2
	Operating System(s): 
	Keyword(s): kbDebug kbEEdition kbSQL kbVC kbVC500fix kbSQLProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SQL Server may crash when the stored procedure sp_who2 in master database is
	debugged.
	
	CAUSE
	=====
	
	The sp_who2 stored procedure contains an EXECUTE string larger than 1024
	characters. When it is debugged, SQL Server corrupts memory. This causes the
	server to crash anywhere from instantly to a few minutes.
	
	RESOLUTION
	==========
	
	Do not pass parameters to EXECute that are longer than 1024 characters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in the Microsoft products listed at
	the beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	MORE INFORMATION
	================
	
	sp_who2 is a supplied stored procedure in the default master database. The
	problem occurs with any stored procedure or ODBC call that performs an EXECute
	with a parameter longer than 1024 characters. When the problem occurs, it can
	also cause the IDE to lock up, sometimes permanently.
	
	A message can be written to the event log under MSDEVSDI that says, "Large batch
	command being debugged." The ID of the message is 13.
	
	Additional query words: kbVC420bug
	
	======================================================================
	Keywords          : kbDebug kbEEdition kbSQL kbVC kbVC500fix kbSQLProg 
	Technology        : kbVCsearch kbAudDeveloper kbVC420 kbVC32bitSearch
	Version           : WINDOWS:4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
