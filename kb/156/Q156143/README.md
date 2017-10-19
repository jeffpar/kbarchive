---
layout: page
title: "Q156143: FIX: Execute SQL Button Does Not Show Change to Stop Execute"
permalink: /kb/156/Q156143/
---

## Q156143: FIX: Execute SQL Button Does Not Show Change to Stop Execute

	Article: Q156143
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:4.2
	Operating System(s): 
	Keyword(s): kbui kbDebug kbEEdition kbSQL kbVC kbVC500fix kbSQLProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You can use the Execute SQL toolbar button to stop executing a stored procedure
	or SQL script that is currently executing. However, there is no visual
	indication of this functionality.
	
	CAUSE
	=====
	
	The Execute SQL button does not display a different tool tip or glyph to
	indicate its state.
	
	WORKAROUND
	==========
	
	The button's internal state toggles correctly between execute and stop execute,
	so you can use it to stop executing.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	Additional query words: kbVC420bug
	
	======================================================================
	Keywords          : kbui kbDebug kbEEdition kbSQL kbVC kbVC500fix kbSQLProg 
	Technology        : kbVCsearch kbAudDeveloper kbVC420 kbVC32bitSearch
	Version           : WINDOWS:4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
