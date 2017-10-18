---
layout: page
title: "Q191694: HOWTO: Add a User and Set User Privileges to SQL Server"
permalink: kb/191/Q191694/
---

## Q191694: HOWTO: Add a User and Set User Privileges to SQL Server

	Article: Q191694
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:2.5,3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbHWMAC kbSQL kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbMDAC250 kbSQLProg
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using integrated security with SQL Server, the presence or absence of a
	login ID determines if a user is uniquely known within SQL Server or is instead
	mapped to a default account, if one exists. If no default account and no login
	ID exists for a specific user, that user cannot log in.
	
	If no login ID exists for a specific user, the following error message appears
	when that login ID is used in an attempt to initiate an ODBC connection to SQL
	Server:
	
	  Connection Failed SQL State: '28000' SQL Server Error: 4002 [Microsoft][ODBC
	  SQL Server Driver][SQL Server] Login Failed
	
	This article describes how to add a valid user SQL Server login ID from within
	Visual FoxPro.
	
	MORE INFORMATION
	================
	
	User Login IDs are added to SQL Server with the stored procedure sp_addlogin.
	Permission to execute sp_addlogin is restricted to the SQL Server System
	Administrator.
	
	1. Create a program file called Userconn.prg, using the following code:
	
	  
	
	        LPARAMETER cDSN,cUserName,cUserPassWord
	        *!*   Connect to SQL Server as a restricted access user.
	        hConnect=SQLCONNECT(cDSN,cUserName,cUserPassWord)
	        IF hConnect >0
	           cSQLCommand="SELECT * FROM PUBS.DBO.AUTHORS"
	           gnExec = SQLEXEC(hConnect, cSQLCommand,'MYCURSOR')
	           ? cSQLCommand,gnExec
	           IF gnExec>0
	              SELECT mycursor
	              BROW
	           ENDIF
	           *!*   Disconnect as restricted access user.
	           =SQLDISCONNECT(hConnect)
	        ELSE
	           =MESSAGEBOX("Connection failed",0,"Connection Error")
	        ENDIF
	        RETURN
	
	2. Create a program file called Adduser.prg, using the following code:
	
	  
	
	        hConnect=SQLCONNECT(cDSN,cUserName,cUserPassWord)
	        IF hConnect >0
	           lUserExists=.F.
	           *!*   Poll MASTER.DBO.SYSLOGINS for the NAME COLUMN.
	           cSQLCommand="SELECT NAME FROM MASTER.DBO.SYSLOGINS"
	           gnExec = SQLEXEC(hConnect, cSQLCommand,'SYSLOGS')
	           IF gnExec>0
	              SELECT syslogs
	              LOCA
	              SCAN FOR ALLTRIM(NAME)=ALLTRIM(cUserName)
	                 lUserExists=.T.
	                 EXIT
	              ENDSCAN
	           ENDIF
	           IF !lUserExists
	              *!*   Select the PUBS database on SQL Server.
	              cSQLCommand="USE PUBS"
	              gnExec = SQLEXEC(hConnect,cSQLCommand)
	              *!*   Add a new SQL Server Login ID cUserName.
	              *!*   Access granted to the PUBS database.
	              cSQLCommand="EXEC sp_addlogin "+alltrim(cUserName)+"," + ;
	                 alltrim(cUserPassWord)+",PUBS"
	              gnExec = SQLEXEC(hConnect, cSQLCommand)
	              *!*   Grant privileges to user "cUserName".
	              cSQLCommand="GRANT SELECT ON pubs.dbo.authors " + ;
	                 "TO "+cUserName
	              gnExec = SQLEXEC(hConnect, cSQLCommand)
	           gnCommit = SQLCOMMIT(hConnect)
	           ENDIF
	           *!*   Disconnect as System Administrator.
	           =SQLDISCONNECT(hConnect)
	        ELSE
	           =MESSAGEBOX("Connection failed",0,"Connection Error")
	        ENDIF
	        RETURN
	
	3. From the Command window type the following (MyDsn is equal to a valid ODBC
	  Data Source Name):
	
	  
	
	        DO USERCONN WITH 'MyDsn','TEST','TEST'
	
	  The following error message appears:
	
	  Connection Failed SQL State: '28000' SQL Server Error: 4002 [Microsoft][ODBC
	  SQL Server Driver][SQL Server] Login Failed
	
	4. In the Command window type the following (MyDsn is equal to a valid ODBC Data
	  Source Name):
	
	  
	
	        DO ADDUSER WITH 'MyDsn','TEST','TEST'
	
	5. In the Command window type the following:
	
	  
	
	        DO USERCONN WITH 'MyDsn','TEST','TEST'
	
	  A cursor with data from the PUBS.DBO.AUTHORS table appears in a BROWSE window.
	
	REFERENCES
	==========
	
	SQL Server 6.5 Help; search on: "sp_addlogin"
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by John Desch,
	Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHWMAC kbSQL kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbMDAC250 kbSQLProg 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : MACINTOSH:3.0b; WINDOWS:2.5,3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
