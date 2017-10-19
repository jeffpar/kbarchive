---
layout: page
title: "Q195534: HOWTO: Retrieve Table Index Information from SQL Server"
permalink: /kb/195/Q195534/
---

## Q195534: HOWTO: Retrieve Table Index Information from SQL Server

	Article: Q195534
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): KbClientServer kbDatabase kbSQL kbvfp kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbSQLProg
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When accessing SQL Server tables, a developer may want to retrieve information
	regarding index keys. This article shows how to use the stored procedure
	sp_helpindex to return table index information from SQL Server.
	
	MORE INFORMATION
	================
	
	The sp_helpindex stored procedure returns a cursor with index information for a
	table.
	
	The sp_helpindex returns the following columns:
	
	  Column name          Description.
	  INDEX_NAME           Name of the index.
	  INDEX_DESCRIPTION    Description of the index.
	  INDEX_KEYS           Column(s) that comprise the index expression.
	
	Step-by-Step Example
	--------------------
	
	1. Create a program file called Sp_index.prg using the following code:
	
	        * Substitute the server name.
	        #DEFINE Connect_String 'DRIVER={SQL Server};SERVER=MY_SERVER;' + ;
	           'DATABASE=PUBS;UID=sa;PWD='
	        * Create a cursor to contain the information to return.
	        CREATE CURSOR SYS_Indexes (Table_Name c(128), Index_Name c(128), ;
	           Index_Description c(128), Index_Keys c(128))
	        * Connect to SQL Server.
	        gnConnHandle=SQLSTRINGCONN(Connect_String)
	        IF gnConnHandle>0
	           * Get the tables available on SQL Server.
	           SQLConnTables=SQLTABLES(gnConnHandle)
	           IF SQLConnTables>0
	              SELECT SQLResult
	              INCnt=0
	              DO WHILE !EOF()
	                 * Create a command to execute the stored procedure.
	                 SQLCommand="sp_helpindex " + ALLTRIM(Table_Name)
	                 * Execute the stored procedure and return data to a cursor.
	                 =SQLEXEC(gnConnHandle,SQLCommand,'tmp_sys_data')
	                 * Select the cursor.
	                 SELECT tmp_sys_data
	                 INSERT INTO SYS_Indexes ;
	                    VALUES ;
	                    (SQLResult.table_name, tmp_sys_data.Index_Name, ;
	                    tmp_sys_data.Index_Description, ;
	                    tmp_sys_data.Index_Keys)
	                 SELECT SQLResult
	                 SKIP
	              ENDDO
	              =SQLDISCONN(gnConnHandle)
	           ENDIF
	        ENDIF
	        SELECT SYS_Indexes
	        BROW LAST
	        CLOSE ALL
	        RETURN
	
	2. In the Command window type the following command:
	
	        DO SP_INDEX
	
	REFERENCES
	==========
	
	Transact - SQL Reference Help, search on: "sp_helpindex"
	
	(c) Microsoft Corporation 1998. All Rights Reserved. Contributions by John Desch,
	Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : KbClientServer kbDatabase kbSQL kbvfp kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbSQLProg 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
