---
layout: page
title: "Q179757: PRB: &quot;Set Next Statement&quot; Does Not Work During SQL Debugging"
permalink: kb/179/Q179757/
---

## Q179757: PRB: &quot;Set Next Statement&quot; Does Not Work During SQL Debugging

	Article: Q179757
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:4.2
	Operating System(s): 
	Keyword(s): kbEEdition kbVC
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When debugging a Microsoft SQL Server stored procedure using MSDEV IDE, the "Set
	Next Statement" option does not work correctly.
	
	RESOLUTION
	==========
	
	This is by design. "Set Next Statement" is not supported for SQL debugging.
	
	MORE INFORMATION
	================
	
	When the debugger stops at a statement in the stored procedure, if you move the
	insertion point to a new statement and click the "Set Next Statement" option,
	the debugger does not move to the new statement.
	
	
	During SQL debugging, SQL server indicates what the next statement will be. The
	debugger doesn't have the same information that it receives from native debug
	information (.pdb, and so on) during C++ debugging. Skipping SQL statements may
	cause unpredictable results so this option is not implemented.
	
	Additional query words: SQLDebug
	
	======================================================================
	Keywords          : kbEEdition kbVC 
	Technology        : kbVCsearch kbAudDeveloper kbVC420 kbVC32bitSearch
	Version           : WINDOWS:4.2
	Issue type        : kbprb
	
	=============================================================================
	
