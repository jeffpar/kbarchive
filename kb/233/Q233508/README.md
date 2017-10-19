---
layout: page
title: "Q233508: HOWTO: Determine Compatibility Level of a SQL Server 7 Database"
permalink: /kb/233/Q233508/
---

## Q233508: HOWTO: Determine Compatibility Level of a SQL Server 7 Database

	Article: Q233508
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): KbClientServer kbDatabase kbSQL kbvfp300b kbvfp500 kbvfp500a kbvfp600 KbDBFDBC kbGrpDSF
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to determine the compatibility level of a SQL Server
	7.0 Database from Visual FoxPro.
	
	MORE INFORMATION
	================
	
	There are several compatibility issues that might affect performance and the
	resultsets that are returned from different versions of SQL Server. SQL Server
	7.0 introduces several new data types and features. SQL Server 7.0 also allows
	the DBA to set the compatibility level of individual databases.
	
	The sp_dbcmptlevel stored procedure allows the DBA to set the compatibility level
	SQL Server 7.0 databases to SQL Server 6.0, 6.5, or 7.0. This stored procedure
	sets certain database behaviors to be compatible with the specified version of
	Microsoft SQL Server.
	
	The compatibility level of the database affects reserved keywords and the
	behavior of the specified database, not the entire server. The compatibility
	setting for a database takes effect when the database is made the current
	database.
	
	1. Create a program file called PUBSCMPT.PRG using the following code snippet:
	
	  connection_string='DRIVER={SQL Server};SERVER=MyServer;' + ;
	     'DATABASE=MASTER;UID=sa;PWD='
	  *!* Connect to SQL Server
	  gnConnHandle=SQLSTRINGCONN(connection_string)
	  IF gnConnHandle>0
	     *!* Get the Version of SQL Server
	     sqlcommand="SELECT @@version"
	     nVersion=SQLEXEC(gnConnHandle,sqlcommand,'getversion')
	     IF nVersion>0
	        SELECT getversion
	        versioninfo=EXP
	        l_Test_Version=IIF("Microsoft SQL Server  7.00"$versioninfo,.T.,.F.)
	        IF l_Test_Version
	           *!* Version of SQL Server is 7.0
	           *!* Get the Compatibility Level set for the Pubs Database
	           sqlcommand="SELECT cmptlevel FROM sysdatabases WHERE name = 'pubs'"
	           nCmpt=SQLEXEC(gnConnHandle,sqlcommand,'sqlcmpt')
	           IF nCmpt>0
	              SELECT sqlcmpt
	              =MESSAGEBOX("Current Compatibility of PUBS is set to SQL Server " + ;
	                 ALLTRIM(STR(cmptlevel)),48+0)
	           ENDIF
	        ELSE
	           *!* Not SQL Server 7.0
	           =MESSAGEBOX(EXP,32,"Compatibility Level Not Available In")
	        ENDIF
	        =SQLDISCONN(gnConnHandle)
	     ELSE
	        =MESSAGEBOX("Connection Failed",16,"ODBC Problem")
	     ENDIF
	  ENDIF
	
	2. Run PUBSCMPT.PRG and note the information displayed in the message box.
	
	3. From SQL Server 7.0 Query Analyzer, run the following statement to set the
	  compatibility level of the PUBS database to SQL Server 6.5:
	
	  sp_dbcmptlevel PUBS,65
	
	4. From Visual FoxPro run PUBSCMPT.PRG again and note the information displayed
	  in the message box.
	
	5. From SQL Server 7.0 Query Analyzer, run the following statement to reset the
	  compatibility level of the PUBS database back to SQL Server 7.0
	  compatibility.
	
	  sp_dbcmptlevel PUBS,70
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by John Desch, Microsoft Corporation
	
	
	REFERENCES
	==========
	
	Microsoft SQL Server 7.0 Books on Line, topic "Compatibility Issues"
	
	Additional query words:
	
	======================================================================
	Keywords          : KbClientServer kbDatabase kbSQL kbvfp300b kbvfp500 kbvfp500a kbvfp600 KbDBFDBC kbGrpDSFox kbMDAC250 kbSQLProg 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:2.5,3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
