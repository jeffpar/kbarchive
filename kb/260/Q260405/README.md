---
layout: page
title: "Q260405: HOWTO: Import Table Structures and Data from Microsoft Access"
permalink: /kb/260/Q260405/
---

## Q260405: HOWTO: Import Table Structures and Data from Microsoft Access

	Article: Q260405
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbAccess kbDatabase kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 KbDBFDBC kbGrpDSFox
	Last Modified: 26-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article illustrates how to programmatically create table structures that
	correspond to tables in Microsoft Access Master Data Base (MDB) files. This
	article also illustrates how to copy the data in Microsoft Access tables to
	Visual FoxPro tables.
	
	MORE INFORMATION
	================
	
	In situations where developers want to copy data from Microsoft Access tables to
	Visual FoxPro tables, the SQLTABLES, AFIELDS, and SQLEXEC functions may be used
	to:
	
	- Retrieve information regarding the number of tables contained in the MDB
	  file.
	
	- Retrieve the names of tables in the MDB file.
	
	- Retrieve the structure of each of the tables contained in the MDB file.
	
	- Create tables that correspond to the structures of the identified tables.
	
	- Copy data from Microsoft Access tables to Visual FoxPro tables.
	
	The following code snippet illustrates the process of copying data from Microsoft
	Access tables and information from the MDB file into Visual FoxPro tables. The
	code sample browses the Table_name field of the SQLResult cursor.
	
	  LOCAL lcMyFile, lnConnHandle, lnResult, lcSQLCommand, lnGetData, lcNewName
	  LOCAL ARRAY laWhatErr(1)
	
	  lcMyFile = GETFILE('MDB')
	
	  *!* No point if no MDB file is selected
	  IF !EMPTY(lcMyFile)
	     *!* Use a SQLStringConnect to connect to the MDB file
	     lnConnHandle = ;
	        SQLSTRINGCONNECT('DRIVER=MICROSOFT ACCESS DRIVER (*.MDB);DBQ=' + ;
	           lcMyFile)
	        
	     IF lnConnHandle > 0
	        *!* Need to know what tables are contained in the MDB file
	        lnResult = SQLTABLES(lnConnHandle, 'TABLE')
	        
	        IF lnResult > 0
	           *!* Create a new DBC named "MYNEW"
	           CREATE DATABASE mynew
	           *!* Select SQLResult and scan through the cursor.
	           SELECT SQLResult
	           SCAN
	              *!* Build a SQL SELECT statement to pass to SQLEXEC()
	              lcSQLCommand = ;
	                 "SELECT * FROM [" + ALLTRIM(SQLResult.table_name) + "]"
	                 
	              lnGetData = SQLEXEC(lnConnHandle, lcSQLCommand, 'newdata')
	              IF lnGetData > 0
	                 *!* SQLEXEC() was successful
	                 lcNewName = STRTRAN(ALLTRIM(SQLResult.table_name), " ", "_")
	
	                 SELECT newdata
	                 *!* Copy Table Structure and Data to a DBF file
	                 *!* VFP 3.0 - loses long field names
	                 *!* COPY TO (lcNewName)
	                 *!* ADD TABLE (lcNewName)
	  		   *!* VFP 5.0/6.0 - keeps long field names
	                 COPY TO (lcNewName) DATABASE myNew
	              ENDIF
	           ENDSCAN
	        ENDIF
	        *!* Done Getting Data, so Disconnect
	        =SQLDISCONNECT(lnConnHandle)
	     ELSE
	        *!* The SQLStringConnect failed
	        =MESSAGEBOX('ODBC Connection Failed', MB_ICONEXCLAMATION, 'ODBC')
	        *!* Call AERROR()
	        =AERROR(laWhatErr)
	        *!* Display the error
	        DISPLAY MEMORY LIKE laWhatErr
	     ENDIF
	  ENDIF
	
	  BROWSE FIELDS table_name
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by John Desch,
	Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAccess kbDatabase kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 KbDBFDBC kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
