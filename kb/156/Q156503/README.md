---
layout: page
title: "Q156503: BUG: Error When Deleting a Record Using the Apex Grid Control"
permalink: /kb/156/Q156503/
---

## Q156503: BUG: Error When Deleting a Record Using the Apex Grid Control

{% raw %}

	Article: Q156503
	Product(s): Microsoft C Compiler
	Version(s): 4.20
	Operating System(s): 
	Keyword(s): kbVC kbHWx86kbbuglist
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 4.2b 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 4.2b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When deleting a record in the data-bound Apex Grid Control (DBGRID32.OCX), the
	following error appears in a message box:
	
	  
	
	  37000: [Microsoft][ODBC Microsoft Access 7.0 Driver]
	      Syntax error in query expression 'current of SQL_CUR12522868X'
	
	The actual cursor name may vary, so instead of "SQL_CUR12522868X," you may see
	"SQL_CURXXXXXXXXX" where the X can be any value.
	
	CAUSE
	=====
	
	This is a problem in the Apex Grid control.
	
	RESOLUTION
	==========
	
	To work around the problem, set the CursorDriver property of the Remote Data
	Control (RDC) to one of the following:
	
	- ODBC Cursor
	
	- Server-side cursor
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The Apex Grid Control issues positioned deletes of the form:
	
	     DELETE FROM <table> WHERE CURRENT OF <cursor name>
	
	Most ODBC drivers need the cursor library to support such statements. If the
	CursorDriver property is set to 0, the cursor library does not get loaded and
	the positioned delete statement causes the error mentioned above. Setting this
	property to 1 (ODBC Cursors) forces the cursor library to be used.
	
	Setting CursorDriver to 2 (Server-side cursors) causes the Apex Grid control to
	delete records using keyset cursors (SQLSetPos) and the problem is resolved.
	
	Additional query words: 4.20 kbdsd DBGRID
	
	======================================================================
	Keywords          : kbVC kbHWx86 kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbVC420 kbVC32bitSearch kbVC420b
	Version           : 4.20
	
	=============================================================================
	

{% endraw %}
