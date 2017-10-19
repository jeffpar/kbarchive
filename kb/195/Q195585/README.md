---
layout: page
title: "Q195585: PRB: &quot;SQL: Cannot Locate Table&quot; Message w/ Modify View Command"
permalink: /kb/195/Q195585/
---

## Q195585: PRB: &quot;SQL: Cannot Locate Table&quot; Message w/ Modify View Command

	Article: Q195585
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:2.5,3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): KbClientServer kbDatabase kbSQL kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 Kb
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After issuing a Modify View command, the following message displays:
	
	  SQL: Cannot locate table.
	
	Depending on the version of Visual FoxPro, after you click OK, one of the
	following occurs:
	
	Visual FoxPro 3.0 or 5.0:
	
	  The View Designer opens without any fields displaying in the Selected Fields
	  list and displays the available fields in the Available Fields list of the
	  Filter tab with the format DATABASE_TABLE.FIELD rather than table.field.
	
	Visual FoxPro 6.0:
	
	  The View Designer does not open.
	
	CAUSE
	=====
	
	This behavior is caused by incorrectly referencing a database in the CREATE SQL
	VIEW command used to create the view.
	
	The error occurs when using the following syntax to create a remote SQL VIEW,
	using a Visual FoxPro database and table as the remote data source:
	
	     CREATE SQL VIEW MY_SQL_VIEW REMOTE CONNECT MYREMOTE ;
	        AS SELECT FIELD_1, FIELD_2, FIELD_3 ;
	        FROM database!table ;
	        ORDER BY table.field
	
	The error also occurs when using the following syntax to create a remote SQL
	VIEW, using a SQL Server table as the remote data source:
	
	     CREATE SQL VIEW MY_SQL REMOTE CONNECT MYREMOTE ;
	        AS SELECT FIELD_1, FIELD_2, FIELD_3 ;
	        FROM database.owner.table ;
	        ORDER BY table.field
	
	RESOLUTION
	==========
	
	Here are two resolutions:
	
	- Use the View Designer.
	
	  -or-
	
	- If programmatically creating the remote SQL VIEW, check the syntax of the
	  command used to create the remote SQL VIEW.
	
	  The correct syntax for creating a remote SQL VIEW, using a Visual FoxPro
	  database and table as the remote data source follows:
	
	        CREATE SQL VIEW MY_SQL_VIEW REMOTE CONNECT MYREMOTE ;
	           AS SELECT FIELD_1, FIELD_2, FIELD_3 ;
	           FROM table ;
	           ORDER BY table.field
	
	  The correct syntax for creating a remote SQL VIEW, using a SQL Server table as
	  the remote data source follows:
	
	        CREATE SQL VIEW MY_SQL REMOTE CONNECT MYREMOTE ;
	           AS SELECT FIELD_1, FIELD_2, FIELD_3 ;
	           FROM database.owner.table table ;
	           ORDER BY table.field
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create an ODBC data source called MYREMOTE, to use in a remote SQL VIEW.
	  MacIntosh users should create an ODBC data source using the PUBS database
	  that ships with SQL Server. Windows users should create an ODBC data source
	  using the TESTDATA files that ship with Visual FoxPro.
	
	2. Copy the following code to a new program file and save it:
	
	        CLOSE ALL
	        SET SAFETY OFF
	        SET MULTILOCKS ON
	        * Create a database.
	        CREATE DATABASE MYREMOTE
	        * Create a connection.
	        CREATE CONNECTION MYREMOTE DATASOURCE "MyRemote"
	        * Create a remote view.
	        DO CASE
	           CASE _MAC
	              CREATE SQL VIEW test REMOTE CONNECT MYREMOTE ;
	                 AS SELECT au_lname, au_fname ;
	                 FROM pubs.dbo.authors ;
	                 ORDER BY authors.au_lname
	           CASE _WINDOWS
	              CREATE SQL VIEW test REMOTE CONNECT MYREMOTE ;
	                 AS SELECT cust_id, company, city ;
	                 FROM testdata!customer ;
	                 ORDER BY customer.cust_id
	        ENDCASE
	        USE test && Use the view
	        BROWSE TIMEOUT 2
	        MODIFY VIEW test
	        CLOSE ALL
	        RETURN
	
	3. Run the program file. Note that when you encounter the MODIFY VIEW command
	  that the "SQL: Cannot locate table" message appears.
	
	4. Replace the DO CASE ... ENDCASE section of the program with the following
	  code:
	
	        DO CASE
	           CASE _MAC
	              CREATE SQL VIEW test REMOTE CONNECT MYREMOTE ;
	                 AS SELECT au_lname, au_fname ;
	                 FROM pubs.dbo.authors authors;
	                 ORDER BY authors.au_lname
	           CASE _WINDOWS
	              CREATE SQL VIEW test REMOTE CONNECT MYREMOTE ;
	                 AS SELECT cust_id, company, city ;
	                 FROM customer ;
	                 ORDER BY customer.cust_id
	        ENDCASE
	
	5. Run the program file. Note that when you encounter the MODIFY VIEW command,
	  that the View Designer opens without any error message.
	
	Additional query words:
	
	======================================================================
	Keywords          : KbClientServer kbDatabase kbSQL kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 KbDBFDBC kbMDAC250 kbSQLProg 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : MACINTOSH:3.0b; WINDOWS:2.5,3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
