---
layout: page
title: "Q195526: HOWTO: Retrieve Primary Keys for SQL Server Tables"
permalink: /kb/195/Q195526/
---

## Q195526: HOWTO: Retrieve Primary Keys for SQL Server Tables

	Article: Q195526
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:2.5,3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): KbClientServer kbDatabase kbHWMAC kbSQL kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbMDAC250
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you create remote views using SQL Server tables as the data source, Visual
	FoxPro automatically sets the KeyField property to .T. for columns that are
	included in a primary index key. In some instances, you might want to retrieve
	the primary key information through code so you can get more detailed
	information about the key's structure. This article demonstrates how to use the
	stored procedure sp_pkeys to return primary key information from SQL Server.
	
	MORE INFORMATION
	================
	
	The SQL Server stored procedure sp_pkeys returns information about columns
	explicitly defined with a PRIMARY KEY constraint. The sp_pkeys stored procedure
	is equivalent to SQLPrimaryKeys in ODBC. The results are ordered by
	TABLE_QUALIFIER, TABLE_OWNER, TABLE_NAME, and KEY_SEQ.
	
	  Column Name     Data Type    Description
	  ------------------------------------------------------------------------
	
	  TABLE_QUALIFIER varchar(32)  The name of the table qualifier. This
	                               column represents the database name, and it
	                               might be NULL.
	  TABLE_OWNER     varchar(32)  The name of the table owner. This column
	                               represents the name of the database user
	                               who created the table and it always returns
	                               a value.
	  TABLE_NAME      varchar(32)  The name of the table. This column
	                               represents the table name as listed in the
	                               sysobjects table, and it always returns a
	                               value.
	  COLUMN_NAME     varchar(32)  The name of the column, for each column
	                               of the TABLE_NAME returned. This column
	                               represents the column name as listed in the
	                               syscolumns table, and it always returns a
	                               value.
	                               When a primary key involves multiple
	                               columns, sp_pkeys returns one row for each
	                               column used in the primary key expression.
	  KEY_SEQ           smallint   The sequence number of the column in a
	                               multi-column primary key, and it always
	                               returns a value.
	  PK_NAME         varchar(32)  A primary key identifier, and it is NULL if
	                               it is not applicable to the data source.
	
	Sample Code
	-----------
	
	Create a program named GETKeys.prg using the following code:
	
	     * Substitute the server name .
	     #DEFINE Connect_String 'DRIVER={SQL Server};SERVER=MY_SERVER;' + ;
	        'DATABASE=PUBS;UID=sa;PWD='
	     * Create a cursor to store information.
	     CREATE CURSOR SQLKeys (Table_Name C(128), Column_Name C(128), ;
	        Key_Seq I, PK_Name C(128))
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
	              SQLCommand="sp_pkeys " + ALLTRIM(Table_Name)
	              * Execute the stored procedure and return data to a cursor.
	              =SQLEXEC(gnConnHandle,SQLCommand,'syskeys')
	              * Select the cursor.
	              SELECT SYSKeys
	              IF RECCOUNT()>0
	                 SCAN
	
	                    IF RECNO()=1
	                       * Insert a new record into the SQLKeys cursor.
	                       INSERT INTO SQLKeys ;
	                          VALUES ;
	                          (SYSKeys.Table_Name, SYSKeys.Column_Name, ;
	                          SYSKeys.Key_Seq,SYSKeys.PK_Name)
	                    ELSE
	                       * Multicolumn key.
	                       * Concatenate to get the expression.
	                       REPLACE SQLKeys.Column_Name WITH ;
	                          ALLTRIM(SQLKeys.Column_Name) + ;
	                          "+"  + ALLTRIM(SYSKeys.Column_Name)
	                    ENDIF
	                 ENDSCAN
	              ENDIF
	              SELECT SQLResult
	              SKIP
	           ENDDO
	           =SQLDISCONN(gnConnHandle)
	        ENDIF
	     ENDIF
	     SELECT SQLKeys
	     BROW LAST
	     CLOSE ALL
	     RETURN
	
	Note that the Sales row column_name value is "stor_id+ord_num+title_id" and the
	TitleAuthor row column_name value is au_id+title_id.
	
	REFERENCES
	==========
	
	Transact - SQL Reference Help: sp_pkeys
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by John Desch,
	Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : KbClientServer kbDatabase kbHWMAC kbSQL kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbMDAC250 kbSQLProg 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : MACINTOSH:3.0b; WINDOWS:2.5,3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
