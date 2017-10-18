---
layout: page
title: "Q157903: FIX: Changes Lost When Changing Variable During Debugging"
permalink: kb/157/Q157903/
---

## Q157903: FIX: Changes Lost When Changing Variable During Debugging

	Article: Q157903
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:4.2
	Operating System(s): 
	Keyword(s): kbDebug kbEEdition kbide kbSQL kbVC kbVC500fix kbSQLProg
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you debug a SQL Server-stored procedure, if you change a variable or
	parameter to a value that is longer than the declared size of the variable or
	parameter, your changes will be lost without warning in the next step of the
	debugger.
	
	CAUSE
	=====
	
	Developer Studio accumulates all changes made to variables and parameters and
	then ships them across to SQL Server when the user moves to the next step. SQL
	Server may either accept or reject the changes. In this case, it rejects because
	of buffer overflow. MSDEV shows the valid values of the variables in the next
	step and ignores the invalid assignment that the user specified.
	
	RESOLUTION
	==========
	
	SQL Server will only accept changes that satisfy the declaration of the variable
	or parameter. MSDEV does not impose this limitation on values entered in the
	debugger. Therefore, just because the MSDEV accepted a value for a variable or
	parameter, do not conclude that that value will necessarily be the one that is
	used thereafter in the execution of the stored procedure. The deciding factor is
	whether SQL Server accepts the new value.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++, Enterprise
	Edition, version 5.0.
	
	MORE INFORMATION
	================
	
	As an example of this behavior, if you have the following variable declaration
	in your stored procedure:
	
	     declare @name varchar(10)
	     select @name = 'Value'
	
	and you change "@name" to a value that is longer than 10 characters (using the
	watch window) while debugging, the changes will be accepted and MSDEV will show
	the new value in the watch window.
	
	However, as soon as you step to the next statement, "@name" will revert to the
	value it had before you changed it.
	
	Additional query words: kbVC420bug kbDSupport
	
	======================================================================
	Keywords          : kbDebug kbEEdition kbide kbSQL kbVC kbVC500fix kbSQLProg 
	Technology        : kbVCsearch kbAudDeveloper kbVC420 kbVC32bitSearch
	Version           : WINDOWS:4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
