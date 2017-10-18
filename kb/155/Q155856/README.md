---
layout: page
title: "Q155856: PRB: Stored Procedure PRINT Output May Be Truncated"
permalink: kb/155/Q155856/
---

## Q155856: PRB: Stored Procedure PRINT Output May Be Truncated

	Article: Q155856
	Product(s): Microsoft C Compiler
	Version(s): 4.2
	Operating System(s): 
	Keyword(s): kbProgramming kbprint kbEEdition kbPrinting kbVC
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the SQL Server ODBC driver, output from the PRINT statement to the Results
	window inside the IDE stops after 64 lines.
	
	CAUSE
	=====
	
	The output of the PRINT statement from the server is put in a queue by the ODBC
	driver. The queue can hold up to 64 entries.
	
	Because all of these PRINT statements occur within a single SQLExecute call, the
	queue is being filled and the PRINT output is truncated.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Visual C++ Enterprise Edition,
	version 4.2. This problem was corrected in Visual C++ Enterprise Edition,
	version 5.0.
	
	MORE INFORMATION
	================
	
	For example, if you execute the following stored procedure with a value above
	64, it will stop printing after the contents of @i equal to 64:
	
	    create procedure JustLoop (@num integer) as
	
	         declare @i integer
	         declare @s varchar(255)
	
	         select @s = convert(varchar, @num)
	
	         select @i = 1
	         while (@i <= @num)
	         begin
	             select @s = convert(varchar, @i)
	             print @s
	             select @i = @i + 1
	         end
	
	     return
	
	Additional query words:
	
	======================================================================
	Keywords          : kbProgramming kbprint kbEEdition kbPrinting kbVC 
	Technology        : kbVCsearch kbAudDeveloper kbVC420
	Version           : :4.2
	Issue type        : kbprb
	
	=============================================================================
	
