---
layout: page
title: "Q129866: Use of Long Names"
permalink: /kb/129/Q129866/
---

## Q129866: Use of Long Names

	Article: Q129866
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual FoxPro for Windows allows long names for tables and fields within a
	database. Names of up to 128 characters are allowed.
	
	MORE INFORMATION
	================
	
	The long name for the table is not the actual file name as displayed in file
	manager but an additional name for the table stored in the database container.
	So there are two table names, and you can use either one to open the table when
	the database is opened. However, there is only one field name per field.
	
	The DISPLAY TABLES command lists the long table names and their actual file
	names. Use ADBOBJECT(arrayname,'table') to put the table names into an array.
	The array will contain only one name per table. If a table does not have a long
	name, the array will contain its filename. Filenames are only eight characters
	under Windows and Windows for Workgroups. In operating systems such as Windows
	NT, the actual file names can be longer than eight characters.
	
	The Visual FoxPro Help File lists the following rules for names:
	
	1. Names can only contain letters, underscores, and numbers.
	
	2. Names must begin with a character or an underscore.
	
	3. Names can have up to 254 characters
	
	4. Avoid use of reserved words.
	
	Long names for fields and tables do not necessarily follow these rules. Long
	table names can contain spaces but long field names cannot. The following
	creates a table named "Long table name."
	
	     OPEN DATABASE SYS(2004)+"samples\data\testdata.dbc"
	     CREATE TABLE longname NAME "Long table name" (longfieldname c(20))
	
	NOTE: The USE "long table name" command opens the table, but the name is
	displayed with underscores instead of spaces in the View Window and in SELECT
	commands, which require underscores instead of spaces.
	
	Names of tables and fields abide by Rule 2. Rule 3 applies to variable names but
	not to long table and field names, which can be no longer than 128 characters.
	This is documented in the help file under the "long table names" and "fields,
	naming" topics.
	
	When copying a table with a long table name and long field names, the long table
	name is dropped and long field names are truncated to 10 characters. If the
	first 10 characters of two fields are identical the second field will be
	truncated to nine characters and the number 2 will be added at the end. The long
	names are dropped or truncated because the COPY TO command does not place the
	new table in the database, and long names are only allowed when a table is part
	of a database.
	
	The following copies the table that was created above:
	
	     COPY TO newtable
	
	No long table name exists because newtable is not part of the database, and the
	longfieldname field is truncated to "longfieldn.
	
	REFERENCES
	==========
	
	NOTE: For more information about the RENAME TABLE command that allows changes to
	be made to the long name of a table, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q129098 How to Change a Table's Name
	
	Also see the "Microsoft Visual FoxPro Developer's Guide," chapter 7, "Naming a
	Table" and "Naming Fields" sections.
	
	Additional query words: VFoxWin 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
