---
layout: page
title: "Q156005: FIX: Incorrect Warning About Procedure/ Trigger Name Length"
permalink: /kb/156/Q156005/
---

## Q156005: FIX: Incorrect Warning About Procedure/ Trigger Name Length

{% raw %}

	Article: Q156005
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:4.2
	Operating System(s): 
	Keyword(s): kbEEdition kbVC kbVC500fix
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Creating a stored procedure or trigger with a name longer than 30 characters
	displays an incorrect warning:
	
	  Name should be between 1 and 20 characters and should not contain spaces or
	  begin with a number.
	
	CAUSE
	=====
	
	The documentation for CREATE PROCEDURE in SQL Server 6.5 Books Online
	incorrectly states the length of a procedure:
	
	  procedure_name
	
	  Is the name of the new stored procedure. Procedure names must conform to the
	  rules for identifiers and must be unique within the database and its owner.
	
	  You can create local or global temporary procedures by preceding the
	  procedure_name with a single pound sign (#table_name) for local temporary
	  procedures and a double pound sign (##table_name) for global temporary
	  procedures. The complete name, including # or ##, cannot exceed 20
	  characters.
	
	This is located in the books online in the following location:
	
	  \\Transact-SQL Reference 6.0
	      \C
	          \Create Procedure Statement
	              \Create Procedure Statement
	
	RESOLUTION
	==========
	
	The warning message can be ignored. You should be able to create a procedure or
	trigger with name up to 30 character long.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open an existing (or create a new) project in Visual C++ 4.2 Enterprise
	  Edition.
	
	2. If the project does not have one already, insert a SQL Server data source via
	  the Insert menu, select Datasource.
	
	3. On the Insert menu, select Stored Procedure.
	
	4. When the name box comes up, enter a name longer than 30 characters.
	
	A message box is displayed with the statement that the name must be 1 to 20
	characters in length.
	
	Additional query words: kbVC420bug
	
	======================================================================
	Keywords          : kbEEdition kbVC kbVC500fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC420 kbVC32bitSearch
	Version           : WINDOWS:4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
