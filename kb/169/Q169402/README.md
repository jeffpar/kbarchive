---
layout: page
title: "Q169402: FIX: Breakpoints Not Allowed on Certain Valid SQL Statements"
permalink: /kb/169/Q169402/
---

## Q169402: FIX: Breakpoints Not Allowed on Certain Valid SQL Statements

{% raw %}

	Article: Q169402
	Product(s): Microsoft C Compiler
	Version(s): 4.2
	Operating System(s): 
	Keyword(s): kbtool kbDebug kbEEdition kbSQL kbVC420bug kbVC500fix kbSQLProg
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When trying to debug stored procedures, you may run into problems when setting
	breakpoints on the following valid SQL commands.
	
	  BEGIN TRANSACTION
	  COMMIT TRANSACTION
	  ROLLBACK TRANSACTION
	  SAVE TRANSACTION
	
	CAUSE
	=====
	
	The SQL debugger's lexer, or command parser, does not recognize the commands
	listed above.
	
	RESOLUTION
	==========
	
	The problem has been fixed in Microsoft Visual C++, Enterprise Edition, version
	5.0. All the keywords listed except BEGIN are valid lines for breakpoints. BEGIN
	is not valid because it can be used to delimit WHILE loops and other multi-line
	SQL statements.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Microsoft Visual C++, Enterprise
	Edition, version 4.2. This bug has been corrected in Microsoft Visual C++,
	Enterprise Edition, version 5.0.
	
	Additional query words: kbvc420bug kbvc500fix
	
	======================================================================
	Keywords          : kbtool kbDebug kbEEdition kbSQL kbVC420bug kbVC500fix kbSQLProg 
	Technology        : kbVCsearch kbAudDeveloper kbVC420 kbVC32bitSearch
	Version           : 4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
