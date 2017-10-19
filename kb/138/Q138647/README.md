---
layout: page
title: "Q138647: How to Check for a Missing Table in a Database Container"
permalink: /kb/138/Q138647/
---

## Q138647: How to Check for a Missing Table in a Database Container

	Article: Q138647
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After a lot of tables are added to a database container, the pictures of the
	tables in the database designer window can become overlapped, sometimes making
	it look like a table is missing from the database container. Instead of trying
	to move each table in the Database Designer, open the database (.dbc file) as a
	table, and browse the database to find out if that table still belongs in the
	database container. If the table that seems to be missing in the database is
	listed here, you can modify the database container, and move each table to find
	the hidden table.
	
	CAUTION: Be careful when renaming or deleting the resource files as described in
	the following paragraph; there is other information saved in these files that
	Visual FoxPro uses. These files are located in the Vfp directory by default.
	
	Another way to find the hidden table is to rename or delete the resource files:
	Foxuser.dbf and Foxuser.fpt. The location of where each table is placed in the
	database container is stored in these files.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	1. Select a database container that has several tables in it.
	
	2. Click and hold the mouse button down on the title of a table, and drag the
	  table so that it overlaps another table. Because the underlying table can't
	  be seen, a user might think that it has been deleted from the database
	  container.
	
	3. Type CLOSE DATABASE in the Command window to close the database. Type the
	  following command in the Command window to open the database container as a
	  table:
	
	  " USE <databasename>.DBC " (without the quotation marks)
	
	4. Type BROWSE FOR UPPER(objecttype)='TABLE' in the Command window, and note
	  that the fields showing will contain the table names of all the tables held
	  in the database container.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
