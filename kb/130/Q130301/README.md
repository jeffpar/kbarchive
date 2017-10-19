---
layout: page
title: "Q130301: PRB: INSERT Command Fails with Buffering and Integrity Rules"
permalink: /kb/130/Q130301/
---

## Q130301: PRB: INSERT Command Fails with Buffering and Integrity Rules

	Article: Q130301
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error occurs when you issue an INSERT command on a table in which
	fields have validation rules or when table or row buffering is enabled:
	
	  INSERT cannot be issued when row or table buffering is enabled or when
	  integrity constraints are in effect.
	
	CAUSE
	=====
	
	The INSERT command is included with Visual FoxPro for backward compatibility. It
	cannot be used on a table in a database that has table or row buffering enabled,
	or on a table with referential integrity rules such as triggers, primary keys,
	or candidate keys.
	
	WORKAROUND
	==========
	
	To use the INSERT command on tables that do not have referential integrity
	rules, buffering can be disabled with the CURSORSETPROP() function. The
	following code may be executed from the Command window to disable row and table
	buffering:
	
	     =CURSORSETPROP("Buffering",1)
	
	If a table has referential integrity rules the INSERT SQL command or the APPEND
	command may be used instead of the INSERT command.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
