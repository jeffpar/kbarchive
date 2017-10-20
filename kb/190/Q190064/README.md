---
layout: page
title: "Q190064: HOWTO: Build SELECT Statements Based on User Column Privileges"
permalink: /kb/190/Q190064/
---

## Q190064: HOWTO: Build SELECT Statements Based on User Column Privileges

{% raw %}

	Article: Q190064
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When writing SELECT statements that will be executed by users with varying
	levels of column privileges on a SQL Server table, the SELECT statements may not
	work for all users. For instance, if a user executes a "SELECT * FROM..."
	statement and does not have privileges on all columns, the statement will return
	an error and no data.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	     *-- Code begins here.
	     *-- First, connect as administrator to set the column privileges for
	     *-- user "mike".
	     *-- This is strictly for demonstration purposes. Production code would
	     *-- likely assume that the user login exists and that privileges are
	     *-- already set.
	     *--
	     *-- Change the SQLCONNECT function as needed to connect to
	     *-- the database.
	     hConnect = SQLCONNECT("MyDSN", "sa", "password")
	     IF hConnect <= 0
	        =MESSAGEBOX("Connection failed with return code" + STR(hConnect),;
	          0, "Connection Error")
	        RETURN
	     ENDIF
	
	     *-- Grant privileges on three columns to user "mike."
	     *-- Code assumes that user "mike" already exists in the pubs database.
	     cSQLCommand="GRANT SELECT ON pubs.dbo.authors " + ;
	        "(au_id, au_lname, au_fname) TO mike"
	     gnExec = SQLEXEC(hConnect, cSQLCommand)
	
	     *-- Disconnect and reconnect as a less privileged user, "mike".
	     =SQLDISCONNECT(hConnect)
	
	     *-- Change the SQLCONNECT function as needed to connect to
	     *-- the database.
	     hConnect = SQLCONNECT("MyDSN", "mike", "password")
	     IF hConnect <= 0
	        =MESSAGEBOX("Connection failed with return code" + STR(hConnect),;
	          0, "Connection Error")
	        RETURN
	     ENDIF
	
	     *-- Select the pubs database.
	     gnExec = SQLEXEC(hConnect, 'use pubs')
	
	     *-- Get the column privileges for the table.
	     gnExec = SQLEXEC(hConnect, 'EXEC sp_column_privileges ;
	       "authors"', 'privileges')
	     SELECT privileges
	
	     *-- Narrow it down to the user we want.
	     lsUser = UPPER('mike')
	     SELECT Column_Name FROM privileges ;
	        WHERE UPPER(Grantee) = lsUser AND Privilege = 'SELECT';
	        INTO CURSOR MyPrivileges
	
	     *-- Step through the table and build our SELECT statement.
	     SELECT MyPrivileges
	     GOTO TOP
	     IF NOT EOF() && Assuming user actually has privileges on the table.
	               && If the user has no privileges, the table is empty.
	        lsColumns = ""
	        SCAN
	           lsColumns = lsColumns + ALLTRIM(Column_Name) + ", "
	        ENDSCAN
	
	        *-- Trim off the last comma and space.
	        lsColumns = SUBSTR(lsColumns, 1, LEN(lsColumns)-2)
	     ENDIF
	
	     *-- Now issue the select statement.
	     gnExec = SQLEXEC(hConnect, 'SELECT ' + lsColumns + ' FROM authors')
	     BROWSE
	     CLOSE DATA
	     SQLDISCONNECT(hConnect)
	     *-- Code ends here.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Mike Stewart, Microsoft Corporation
	
	
	Additional query words: kbDSupport kbDSE kbSQL kbVFp300 kbVFp500 kbVFp500a kbVFp600
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
