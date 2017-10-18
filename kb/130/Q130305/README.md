---
layout: page
title: "Q130305: PRB: Error: &quot;The Fields in Table &lt;tablename&gt; Did Not Match...&quot;"
permalink: kb/130/Q130305/
---

## Q130305: PRB: Error: &quot;The Fields in Table &lt;tablename&gt; Did Not Match...&quot;

	Article: Q130305
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
	
	When opening a database-owned table you receive this error;
	
	  The fields in table "<table name>" did not match the entries in the
	  database.
	
	CAUSE
	=====
	
	When a database-owned table is opened, Visual FoxPro tries to confirm that each
	field of the table has a matching field object in the database. When the entries
	do not match, the error occurs. This error can be caused by a corrupt database
	or a corrupt table. It may also be caused by having the wrong copy of a table
	(.DBF) in the same directory as a parent database (.DBC).
	
	RESOLUTION
	==========
	
	Begin by using the VALIDATE DATABASE command to check the integrity of the
	current database. Open the database exclusively, and issue the VALIDATE DATABASE
	command from the Command window, for example:
	
	     OPEN DATABASE mydata EXCLUSIVE
	     VALIDATE DATABASE
	
	If the database itself cannot be opened, the database is probably corrupt and
	must be recreated, recovered using a program previously created using
	GENDBC.PRG, or recovered by using a third-party database recovery tool.
	
	For more information about recovering a corrupt database, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q129168 How To Recover Corrupt Database Container Files
	
	If a table is corrupt or invalid, the VALIDATE DATABASE command gives the name of
	the offending table and its diagnosis. For example, "The fields in table
	'<name>' did not match the entries in the database."
	
	If the wrong version of the table (.DBF) accidentally replaced a previous
	version, the previous version must be recovered (see the "Steps to Reproduce
	Behavior" section in this article). Otherwise, the table must be deleted or
	removed from the database container file and, if desired, added back to the
	database.
	
	To remove the table, issue the VALIDATE DATABASE RECOVER command or the REMOVE
	TABLE command and specify the table name.
	
	The VALIDATE DATABASE RECOVER and REMOVE TABLE commands have the same affect on
	the offending table, the table is removed from the database but remains on the
	disk. Any field properties and long field names defined in the table are lost
	when the table is removed.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The steps outlined below describe how to generate the error using an incorrect
	version of a table (.DBF) file.
	
	1. Open or create a new database:
	
	     CREATE DATABASE mydata
	
	2. Add a new table (named mytab1) to the database. Give the table one character
	  field named cField1 with a length of 20:
	
	     CREATE TABLE mytab1 (cField1 C(20))
	
	3. Save and close the table and database.
	
	4. Create a new database. Place the new database into a separate directory from
	  the one created in step 1.
	
	5. Add a new table (named 'mytab1') to the new database, and be sure the table
	  is saved to the same directory as the current database. Give the new table
	  three or four fields of any data type.
	
	6. Save and close the database.
	
	7. Copy or move the MYTAB1.DBF file created in step 5 to the directory where the
	  first MYTAB1.DBF was created in step 2. Overwrite the table created in step
	  2.
	
	8. From the Command window, open the database created in Step 1 to see the error
	  displayed.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
