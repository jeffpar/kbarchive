---
layout: page
title: "Q156137: FIX: Cannot Set Breakpoint at EXECUTE Statement"
permalink: /kb/156/Q156137/
---

## Q156137: FIX: Cannot Set Breakpoint at EXECUTE Statement

	Article: Q156137
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
	
	You cannot set the breakpoint at the EXECUTE statement in a stored procedure.
	
	WORKAROUND
	==========
	
	Use EXEC instead of EXECUTE as a workaround to this bug.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This bug was fixed in Visual C++ version 5.0.
	
	MORE INFORMATION
	================
	
	The EXEC and EXECUTE statements mean the same in SQL Server 6.5. You can set the
	breakpoint at an EXEC statement. But the EXECUTE statement does not accept
	breakpoints. However, breakpoints are accepted on both the EXEC and EXECUTE
	statements while stepping from the previous statement.
	
	While debugging if you try to set a break point on an EXECUTE line, the
	breakpoint gets set on the next line.
	
	Additional query words: kbVC420bug
	
	======================================================================
	Keywords          : kbDebug kbEEdition kbSQL kbVC kbVC500fix kbSQLProg 
	Technology        : kbVCsearch kbAudDeveloper kbVC420 kbVC32bitSearch
	Version           : WINDOWS:4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
