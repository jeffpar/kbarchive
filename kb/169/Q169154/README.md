---
layout: page
title: "Q169154: PRB: Error &quot;OLE Object is Invalid or Corrupt&quot; on Empty Gen Field"
permalink: kb/169/Q169154/
---

## Q169154: PRB: Error &quot;OLE Object is Invalid or Corrupt&quot; on Empty Gen Field

	Article: Q169154
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbcode kberrmsg kbvfp kbvfp500 kbvfp500a kbvfp600
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When upsizing FoxPro data to an SQL server, empty general field records may
	cause an error when browsing the resulting SQL table.
	
	CAUSE
	=====
	
	This is caused by an empty general field being upsized as an hex 20 (which is a
	space character). FoxPro expects to see binary data in the general field rather
	than an ASCII character.
	
	RESOLUTION
	==========
	
	The problem can be avoided by setting the General field to accept NULL values.
	This can be done in either of two methods when creating the table:
	programmatically or visually.
	
	To programmatically allow a NULL value, use the NULL keyword when creating the
	field in the table.
	
	     * The following line of code creates a table called 'gendata'. The
	     * General field in the table, 'gfield' accepts NULL values.
	
	     CREATE TABLE gendata (gfield G NULL)
	
	To set the field to accept NULL values using the visual interface, place a check
	mark in the NULL column for the field, in the Table Designer dialog box.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	There are three parts in setting up this example: Part 1 is to create a small
	table with empty general records to be used in the Upsize Wizard. Part 2 is to
	upsize the data to an SQL server. Part 3 is to create a remote view of the SQL
	data to observe the error.
	
	Part 1 - Create a table with empty general field records:
	
	Save the following code to a file called Creatabl.prg:
	
	     *** Begin code ***
	     CLOSE ALL
	     CREATE DATABASE test
	     CREATE TABLE gendata (gfield G)
	     APPEND BLANK
	     APPEND BLANK
	     APPEND BLANK
	     GO 1
	     APPEND GENERAL gfield FROM c:\windows\waves.bmp
	     GO 3
	     APPEND GENERAL gfield FROM c:\windows\tiles.bmp
	     *** End code ***
	
	Part 2 - Upsize the data to an SQL server:
	
	1. From the Visual FoxPro Tools menu, select Wizards and click Upsizing.
	
	2. In the Wizard Selection dialog box, click SQL Server Upsizing Wizard and
	  click OK.
	
	3. In Step 1, select the Test database, and click Next.
	
	4. In Step 2, select the SQL data source to upsize to, and click the Next. NOTE:
	  At this point, a login screen may come up. Login into the SQL data source to
	  continue.
	
	5. In Step 3, move the Gendata table to the Selected Tables pane, and click
	  Next.
	
	6. In Step 4, select Map Field Data Types, and click Next to continue.
	
	7. In Step 5, select the target database to upsize the data to (this could be an
	  existing or new database). Then, click Next. NOTE: If an existing database is
	  chosen, Steps 5 and Steps 6 will be bypassed. Otherwise, if this is a new
	  database, the following steps will be performed.
	
	   - In Step 6, set the appropriate database properties, and click Next.
	
	   - In Step 7, set the appropriate log properties, and click OK.
	
	  These last two steps complete the steps necessary when setting up a new
	  database on the SQL server.
	
	8. In Step 8, set the upsizing options. In this test, all of the check boxes can
	  be cleared. Then, click Next.
	
	9. In Step 9, click Finish to upsize the data to the SQL server.
	
	Part 3 - Create a remote view of the upsized-SQL data:
	
	1. Open the Test database if it's not already open by entering the following
	  command in the Visual FoxPro Command window:
	
	        OPEN DATABASE test
	
	2. From the Visual FoxPro File menu, select New and click Remote View. Click
	  Wizard to bring up the Remote View Wizard.
	
	3. In Step 1, select the data source where the upsized data exists, and click
	  Next. NOTE: At this point, a login screen may come up. Login into the SQL
	  data source to continue.
	
	4. In Step 2, move "gfield" from the "gendata" table to the Selected Fields
	  pane, and click Finish to bypass Steps 3, 4, and 5, which are not necessary
	  in this example.
	
	5. In Step 6, select "Save remote view and browse", and click Finish. NOTE: Once
	  the Remote View Browse window appears, open "gfield" for record 2 and observe
	  the "OLE Object is Invalid or Corrupt" error message.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kberrmsg kbvfp kbvfp500 kbvfp500a kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
