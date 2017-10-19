---
layout: page
title: "Q156133: BUG: Execute SQL Toolbar Button Not Disabled with Focus Change"
permalink: /kb/156/Q156133/
---

## Q156133: BUG: Execute SQL Toolbar Button Not Disabled with Focus Change

	Article: Q156133
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:4.2
	Operating System(s): 
	Keyword(s): kbDebug kbEEdition kbSQL kbVC kbSQLProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The "Execute SQL" button on the database toolbar is not always disabled when the
	focus changes to a non-stored-procedure window.
	
	WORKAROUND
	==========
	
	If the button is clicked when the current window is not a stored-procedure
	window, the stored procedure or ad-hoc query in the window that had focus last
	gets executed. To avoid any undesirable effects as a result, make sure the
	desired stored-procedure window has focus prior to executing.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: kbVC420bug
	
	======================================================================
	Keywords          : kbDebug kbEEdition kbSQL kbVC kbSQLProg 
	Technology        : kbVCsearch kbAudDeveloper kbVC420 kbVC32bitSearch
	Version           : WINDOWS:4.2
	Issue type        : kbbug
	
	=============================================================================
	
