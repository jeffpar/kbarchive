---
layout: page
title: "Q131306: Transferring Data Between General Fields Programmatically"
permalink: /kb/131/Q131306/
---

## Q131306: Transferring Data Between General Fields Programmatically

{% raw %}

	Article: Q131306
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Visual FoxPro, it is now possible to update General Fields with the INSERT
	SQL, UPDATE SQL, and REPLACE commands. These new capabilities are documented in
	this article.
	
	MORE INFORMATION
	================
	
	In Visual FoxPro, the REPLACE command has been enhanced. It is now possible to
	replace general field information from one table to another. For example:
	
	     USE sourcetable
	     SELECT 0
	     USE desttable
	     REPLACE desttable.genfield1 WITH sourcetable.genfield2
	
	You can also move information within a record in the same way. For example:
	
	     REPLACE genfield1 WITH genfield2
	
	The INSERT SQL command has also been enhanced, making it possible to add a new
	record to a table and place information in a general field in the table when the
	information is contained in a general field of a different table. For example:
	
	     USE sourcetable
	     SELECT 0
	     USE desttable
	     INSERT INTO desttable ( genfield1 ) VALUES ( sourcetable.genfield2 )
	
	The source table must be open; the general field is inserted from the current
	record in that source table.
	
	The UPDATE SQL command has been enhanced, making it possible to update a record
	with information from another table. For example:
	
	     USE sourcetable
	     SELECT 0
	     USE desttable
	     UPDATE desttable ;
	        SET genfield1 = sourcetable.genfield2 ;
	        WHERE <filter expression>
	
	The source table must be open; the general field is inserted from the current
	record in that source table.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
