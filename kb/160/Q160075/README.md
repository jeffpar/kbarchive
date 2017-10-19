---
layout: page
title: "Q160075: FIX: Problems Debugging in Case-sensitive Database"
permalink: /kb/160/Q160075/
---

## Q160075: FIX: Problems Debugging in Case-sensitive Database

	Article: Q160075
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:4.2
	Operating System(s): 
	Keyword(s): kbDebug kbEEdition kbide kbSQL kbVC kbVC500fix kbSQLProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use a case-sensitive database on Microsoft SQL Server 6.5 and create two
	stored procedures with the same name but with a different case, you may see
	inconsistent behavior when you execute or debug one of those procedures.
	
	MORE INFORMATION
	================
	
	To reproduce the problem, create two procedures in a case-sensitive SQL Server
	6.5 database:
	
	     ---------
	     CREATE PROCEDURE test AS
	     DECLARE @a INTEGER
	     DECLARE @A INTEGER
	     select @a = 10
	     select @A = 20
	     print 'test done'
	     RETURN
	     ---------
	     CREATE PROCEDURE TEST AS
	     DECLARE @a INTEGER
	     DECLARE @A INTEGER
	     select @a = 1
	     select @A = 2
	     print 'TEST done'
	     RETURN
	
	When stored procedure names differ only by case (for example, one called test and
	another called TEST), inconsistent behavior may occur when you execute or debug
	one of those procedures. For example, when you start debugging 'TEST,' the
	debugger may show the source code for TEST but it will actually execute 'test'.
	If you have variables common to both procedures, you will see the values as used
	in 'test' in the watch window.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDebug kbEEdition kbide kbSQL kbVC kbVC500fix kbSQLProg 
	Technology        : kbVCsearch kbAudDeveloper kbVC420 kbVC32bitSearch
	Version           : WINDOWS:4.2
	Issue type        : kbbug kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
