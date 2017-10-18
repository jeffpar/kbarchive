---
layout: page
title: "Q138851: PRB: SQL-SELECT INTO TABLE Creates Free Table Not DB Table"
permalink: kb/138/Q138851/
---

## Q138851: PRB: SQL-SELECT INTO TABLE Creates Free Table Not DB Table

	Article: Q138851
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the SQL-SELECT statement with the INTO TABLE <table_name>
	clause to query and place data into a new table, Visual FoxPro will create a
	new, free table even if a database is currently open.
	
	RESOLUTION
	==========
	
	You can keep the table as a free table, or you can append the records from the
	SQL-SELECT result free table into a database-contained table of the same
	structure.
	
	STATUS
	======
	
	This behavior is by design. There is no automatic way for the SQL-SELECT
	statement's INTO clause to create a table that is automatically added to a
	database.
	
	
	Additional query words: VFoxWin recreate backlink
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
