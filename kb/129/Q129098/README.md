---
layout: page
title: "Q129098: How to Change a Table's Name"
permalink: /kb/129/Q129098/
---

## Q129098: How to Change a Table's Name

	Article: Q129098
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In versions prior to 3.0, you needed to follow a rather cumbersome process to
	change the name of a table (.DBF). Visual FoxPro version 3.0 provides one native
	command (RENAME TABLE) to carry out the task.
	
	MORE INFORMATION
	================
	
	The RENAME TABLE command works only with tables that exist in a Database
	Container (.DBC). If you try to use RENAME TABLE on a FREE table and no DBC is
	open or current, this error is generated:
	
	  No database is open or set as the current database.
	
	If you try to use RENAME TABLE on a FREE table and a DBC is open and current,
	this error is generated:
	
	  Cannot find object <Table_name> in the database.
	
	The RENAME TABLE command doesn't rename the file (.DBF). It gives the table an
	ALIAS and updates the .DBC file accordingly. Using RENAME TABLE is the same as
	using the NAME clause in the CREATE TABLE SQL command.
	
	You can do the same thing through the interface. Bring up a Table Designer for
	any table that exists in a DBC. Note that the upper-left corner of the Table
	Designer holds a Table Name text box titled. Changing the name in this text box
	produces the same result as the RENAME TABLE command.
	
	You should not use the the RENAME command to rename a .DBF file for tables that
	exist in a DBC because it can cause referencing problems. If you must use the
	RENAME command, use the VALIDATE DATABASE command to update the appropriate
	references in the DBC.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
