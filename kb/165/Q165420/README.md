---
layout: page
title: "Q165420: FIX: SQL Breakpoint Not Hit After Executing SP in Another DB"
permalink: kb/165/Q165420/
---

## Q165420: FIX: SQL Breakpoint Not Hit After Executing SP in Another DB

	Article: Q165420
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbcode kbProgramming kbDebug kbEEdition kbSQLServ kbVC kbVC500bug kbVC600fixkbbuglist
	Last Modified: 13-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SQL Debugger may fail to stop at breakpoints that are set after a call to a
	stored procedure from a database (other than the current one) is executed.
	
	CAUSE
	=====
	
	The call to the stored procedure in the secondary database changes the context
	of SQL Server to that database.
	
	The SQL Debugger cannot find breakpoints that were set in the context of the
	previous database and fails to break on them.
	
	RESOLUTION
	==========
	
	Work around this by placing a call to a stored procedure that resides in the
	same database as the stored procedure you were initially debugging.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Visual C++ version 6.0
	for Windows.
	
	REFERENCES
	==========
	
	Sample Code
	-----------
	
	     /* Sample SP which shows the problem */ 
	     Create Procedure sp_MySP
	     As
	     SELECT * FROM employee
	
	     /* Breakpoints set after this call will not be hit */ 
	     EXEC OtherDB.dbo.sp_SomeSP
	
	     SELECT * FROM Authors
	
	     RETURN (0)
	
	     -----------
	     /* Sample SP with a workaround */ 
	     /* Add one line of code */ 
	
	     Create Procedure sp_MySP
	     As
	     SELECT * FROM EMPLOYEE
	
	     EXEC OtherDB.dbo.sp_SomeSP
	
	     /* This causes the database context to be changed back to original */ 
	     /* Breakpoints will now be hit */ 
	     EXEC sp_MySP2
	
	     SELECT * FROM Authors
	
	     RETURN (0)
	
	     /* Stored procedure called from above */ 
	
	     Create Procedure sp_MySP2
	     As
	     RETURN (0)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbProgramming kbDebug kbEEdition kbSQLServ kbVC kbVC500bug kbVC600fix kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
