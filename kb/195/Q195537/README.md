---
layout: page
title: "Q195537: HOWTO: Copy Table Structures and Data From SQL Server"
permalink: /kb/195/Q195537/
---

## Q195537: HOWTO: Copy Table Structures and Data From SQL Server

{% raw %}

	Article: Q195537
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbClient KbClientServer kbDatabase kbSQL kbvfp KbDBFDBC kbSQLProg
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Under some conditions, you may want to copy table structures and data from SQL
	Server tables. This article illustrates how to programmatically create table
	structures that correspond to SQL Server tables and copy the data from SQL
	Server to FoxPro tables.
	
	MORE INFORMATION
	================
	
	In situations where developers want to copy data from SQL Server tables to
	Visual FoxPro tables, you can use the SQLEXEC(), SQLTABLES(), and AFIELDS()
	functions for the following:
	
	- Retrieve information regarding the structure of SQL Server tables.
	
	- Create tables that correspond to SQL Server table structure(s).
	
	- Copy data from SQL Server tables to Visual FoxPro tables.
	
	The following code snippet illustrates the process of copying data from SQL
	Server tables to Visual FoxPro tables:
	
	Sample Code
	-----------
	
	     * Begin Code.
	     * SQL Server Tables may contain long field names
	     * that would not be supported in free tables.
	     * Create a Database Container.
	     CREATE DATABASE SQLDATA
	     * Create a cursor to contain the table information.
	     CREATE CURSOR SYS_Tables (Table_Name c(128), Field_Name c(120), ;
	        Field_Type c(1), Field_len N(3,0), Field_Dec N(3,0))
	     * Create a connection string to connect to SQL Server.
	     * Substitute the correct server name in the next line.
	     Connect_String = 'DRIVER={SQL Server};SERVER=MY_SERVER;' + ;
	        'DATABASE=PUBS;UID=sa;PWD='
	     * Connect to SQL Server.
	     gnConnHandle=SQLSTRINGCONNECT(Connect_String)
	     IF gnConnHandle>0
	        * Want to use the PUBS Database, so send USE command.
	        SQLCOMMAND="USE PUBS"
	        =sqlexec(gnConnHandle,SQLCOMMAND)
	        * Get the tables available on SQL Server.
	        SQLConnTables=SQLTABLES(gnConnHandle)
	        IF SQLConnTables>0
	           SELECT SQLResult
	           * Only want tables, so select where table_type='TABLE'
	           * Otherwise get system tables and views.
	           SELECT Table_Name FROM SQLResult ;
	              WHERE UPPER(ALLTRIM(Table_Type))="TABLE" ;
	              INTO CURSOR SQL_Tables
	           SELECT SQL_Tables
	           INCnt=0
	           DO WHILE !EOF()
	              * Create a command to execute the stored procedure.
	              SQLCOMMAND="SELECT * FROM " + ALLTRIM(Table_Name)
	              * Execute the stored procedure and return data to a cursor
	              =sqlexec(gnConnHandle,SQLCOMMAND,'tmp_sys_data')
	              * Select the cursor.
	              SELECT tmp_sys_data
	              * Get actual name of the tmp file that is in use with DBF()
	              this_file=DBF()
	              * Use AFIELDS() function to get fields and field attributes.
	              =AFIELDS(test_vals)
	              * Dimension maketab array to contain field data.
	              DIMENSION maketab[alen(test_vals,1),6]
	              * Load maketab array with field data.
	              FOR i=1 TO ALEN(test_vals,1)
	                 maketab[i,1]=test_vals[i,1]
	                 maketab[i,2]=test_vals[i,2]
	                 maketab[i,3]=test_vals[i,3]
	                 maketab[i,4]=test_vals[i,4]
	                 maketab[i,5]=test_vals[i,5]
	                 maketab[i,6]=test_vals[i,6]
	              NEXT
	              * Create a table from the array maketab.
	              Execute_Cmd="CREATE TABLE "+ALLTRIM(SQL_Tables.Table_Name)+ ;
	                 " FROM ARRAY maketab"
	              &Execute_Cmd
	              * Select the table that was just created.
	              current_table=ALLTRIM(SQL_Tables.Table_Name)
	              SELECT (current_table)
	              * Append from the tmp file.
	              APPEND FROM &this_file
	              SELECT SQL_Tables
	              SKIP
	           ENDDO
	           =SQLDISCONN(gnConnHandle)
	        ENDIF
	     ENDIF
	     SELECT SQL_Tables
	     CLOSE ALL
	     USE AUTHORS
	     BROWSE TIMEOUT 15
	     CLOSE ALL
	     RETURN
	     * End Code
	
	Copy the code snippet to a program file, then run the program file. The program
	creates a Database container named Sqldata.dbc and copies tables from the SQL
	Server PUBS database. After the tables are copied, the Authors table opens.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1998. All Rights Reserved. Contributions by John
	Desch, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbClient KbClientServer kbDatabase kbSQL kbvfp KbDBFDBC kbSQLProg 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
