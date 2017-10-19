---
layout: page
title: "Q238904: HOWTO: Use SQL Pass Through to Issue SELECT INTO a New SQL Table"
permalink: /kb/238/Q238904/
---

## Q238904: HOWTO: Use SQL Pass Through to Issue SELECT INTO a New SQL Table

	Article: Q238904
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0; winnt:6.5,7.0
	Operating System(s): 
	Keyword(s): kbDatabase kbODBC kbSQL kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 KbDBFDBC kbGrpDS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Under some circumstances, developers might want to issue an SQL SELECT statement
	against tables on SQL Server and create a new table on SQL Server. This article
	illustrates how to use SQL Pass Through from Visual FoxPro to SELECT INTO a new
	SQL Server table.
	
	MORE INFORMATION
	================
	
	In order to issue a SQL SELECT statement that creates a new SQL Server table,
	the select into/bulkcopy option must be enabled for the SQL Server database. By
	default, the select into/bulkcopy option is disabled in newly-created SQL Server
	databases. The select into/bulkcopy option can be modified with the sp_dboption
	stored procedure. The syntax for changing the status of the select into/bulkcopy
	option is:
	
	  sp_dboption 'pubs','select into/bulkcopy','true'
	
	-or-
	
	  sp_dboption 'pubs','select into/bulkcopy','false'
	
	sp_dboption changes settings for a SQL Server database.
	
	NOTE: Executing permissions to change an option in SQL Server, using the
	sp_dboption stored procedure, defaults to members of the sysadmin fixed server
	role or the db_owner fixed database role for the database for which the option
	is to be changed.
	
	The following code snippet uses SQL Pass Through to select all records from the
	Authors table of the Pubs database into a new table called Mytable in the Pubs
	database:
	
	  *!* Note Please change the SERVER= segment of the following line to reflect
	  *!* the name of the SQL Server you will be connecting with.
	  gnConnHandle=SQLSTRINGCONN('DRIVER={SQL Server};SERVER=MY_SERVER;DATABASE=MASTER;' + ;
	     'UID=sa;PWD=')
	  IF gnConnHandle>0
	     *!* Query to determine whether SELECT INTO and Fast Bulk Copy are allowed
	     sqlcommand="sp_dboption 'pubs','select into/bulkcopy'"
	     =sqlexec(gnConnHandle,sqlcommand,'bulkcopy')
	     sqlcommand="IF EXISTS (SELECT table_name FROM INFORMATION_SCHEMA.TABLES WHERE " + ;
	        "table_name = 'mytable') " +CHR(13) + CHR(10) + "DROP TABLE mytable"
	     =sqlexec(gnConnHandle,sqlcommand)
	     IF UPPER(ALLTRIM(BULKCOPY.CURRENTSETTING))="OFF"
	        *!* SELECT INTO and Fast Bulk Copy not allowed by default.
	        *!* Enable SELECT INTO and Fast Bulk Copy in the selected database
	        sqlcommand="EXEC sp_dboption 'pubs', 'select into/bulkcopy', 'true'"
	        =sqlexec(gnConnHandle,sqlcommand)
	     ENDIF
	     *!* Use the PUBS database
	     sqlcommand="USE pubs"
	     =sqlexec(gnConnHandle,sqlcommand)
	     *!* Issue a SQL Select command and SELECT INTO a new table on SQL Server
	     sqlcommand="SELECT * INTO mytable" + CHR(13)+CHR(10) + ;
	        "FROM authors"
	     =sqlexec(gnConnHandle,sqlcommand)
	     *!* Use the MASTER database
	     sqlcommand="USE master"
	     =sqlexec(gnConnHandle,sqlcommand)
	     IF UPPER(ALLTRIM(BULKCOPY.CURRENTSETTING))="OFF"
	        *!* If SELECT INTO and Fast Bulk Copy were originally disabled,
	        *!* Reset SELECT INTO and Fast Bulk Copy in the selected database to original value
	        sqlcommand="EXEC sp_dboption 'pubs', 'select into/bulkcopy', 'false'"
	        =sqlexec(gnConnHandle,sqlcommand)
	     ENDIF
	     *!* Select from the table that was just created.
	     sqlcommand="select * from pubs..mytable"
	     =sqlexec(gnConnHandle,sqlcommand,'mycursor')
	     =sqldisconn(gnConnHandle)
	     SELECT mycursor
	     BROWSE NOWAIT
	  ENDIF
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by John Desch, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbODBC kbSQL kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 KbDBFDBC kbGrpDSFox kbDSupport kbSQLProg 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0; winnt:6.5,7.0
	Issue type        : kbhowto
	
	=============================================================================
	
