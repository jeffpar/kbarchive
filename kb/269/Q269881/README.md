---
layout: page
title: "Q269881: PRB: Problems with VFP Driver &quot;Fetch Data In Background&quot; Option"
permalink: /kb/269/Q269881/
---

## Q269881: PRB: Problems with VFP Driver &quot;Fetch Data In Background&quot; Option

	Article: Q269881
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbODBC kbvfp600 KbDBFDBC kbGrpDSFox kbDSupport
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for Visual FoxPro (Build 6.00.8281.00), version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you configure a Data Source Name (DSN) by using the Microsoft Visual FoxPro
	driver, you have a Fetch Data in Background (FDIB) option. This option was
	designed to allow records to be fetched progressively.
	
	FDIB is selected by default when you create a DSN to a FoxPro data source.
	However, there is inconsistent behavior when this option is chosen. For
	example:
	
	- When you use a FoxPro DSN with FDIB selected from a COM SERVER in an
	  Microsoft Transaction Server package, deadlocks can occur when the COM server
	  is under stress.
	
	- Queries that use a DSN to a FoxPro data source with FDIB selected may
	  intermittently fail on multiprocessor computers.
	
	- An Active Server Pages (ASP) application that uses ActiveX Data Objects (ADO)
	  with the Visual FoxPro ODBC Driver randomly crashes.
	
	- Inconsistent numeric values may be returned from your FoxPro data source.
	  This may cause inaccurate results from any mathematical calculations you
	  perform on the result set.
	
	RESOLUTION
	==========
	
	To resolve these issues, deselect the Fetch Data In Background option on the
	FoxPro DSN.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Use the following code to demonstrate how the FDIB setting may result in
	erroneous numeric data being returned from a FoxPro data source. The program
	does the following:
	
	- Creates a Table (DBF) file and a Database (DBC) file.
	
	- Populates the one numeric field in the DBF (12,2) with random values between
	  -25257.00 and 53860.00.
	
	- Selects all records from the table. This is done by using either native
	  FoxPro commands, SQL PassThrough using with FDIB = YES, or SQL PassThrough
	  with FDIB = NO.
	
	- SUMS the records in the result set and prints the results to the screen.
	
	To view the results:
	
	- In Native FoxPro Commands, run the program a few times in succession.
	
	- In SQL PassThrough with FDIB = YES, run the program with a .T. parameter:
	
	  Do <ProgramName> with .T.
	
	- In SQL PassThrough with FDIB = NO, run the program with a .F. parameter:
	
	  Do <ProgramName> with .F.
	
	Note that there are inconsistent SUM results when using the result set generated
	from SQL PassThrough with Fetch Data In Back Ground selected.
	
	  ********* BEGIN SAMPLE CODE *********
	  LPARAMETERS llWith_FetchDataInBack
	  CD JUSTPATH(SYS(16))
	  SET STRICTDATE TO 0
	
	  LOCAL lnSQLHand, lcSQLCmd, lnSQLSuccess, lcDSN_WithOutFetch, ;
	  	lcDSN_WithFetch, lcFDIB, lcOldTalk
	
	  lcOldTalk = SET('TALK')
	  SET TALK ON
	
	  IF PARAMETERS() = 1
	  	MakeData()
	  	IF  VARTYPE(llWith_FetchDataInBack) = "L"
	  		lcFDIB = IIF(llWith_FetchDataInBack,"YES","NO")
	  	ELSE
	  		lcFDIB = "YES"
	  	ENDIF
	  	? "Using ODBC with Fetch Data In Background = " + lcFDIB
	  	lcDSN = "DRIVER=Microsoft Visual FoxPro Driver;" + ;
	  		"UID=;Deleted=Yes;Null=Yes;Collate=Machine;BackgroundFetch=" + lcFDIB + ";" + ;
	  		"Exclusive=No;SourceType=DBC;SourceDB=" + JUSTPATH(SYS(16)) + "\FDIB.DBC;"
	
	  	lnSQLHand = SQLSTRINGCONNECT(lcDSN)
	
	  	? "SQL Handle: " + TRANSFORM(lnSQLHand)
	  	IF lnSQLHand < 0
	  		RaiseError()
	  		RETURN .F.
	  	ENDIF
	
	  	lcSQLCmd = "SELECT * FROM FDIB"
	
	  	lnSQLSuccess = SQLEXEC(lnSQLHand,lcSQLCmd,"ResultSet")
	  	? "SQL Query Success: " + TRANSFORM(lnSQLSuccess)
	  	IF lnSQLSuccess < 0
	  		RaiseError()
	  		RETURN .F.
	  	ENDIF
	
	  ELSE
	
	  	MakeData()
	  	? "Using Native Fox Commands"
	  	SELECT * FROM fdib INTO CURSOR ResultSet
	
	  ENDIF
	
	  ? TRANSFORM(RECCOUNT("ResultSet")) + " Records Returned."
	  SUM n_amount TO amt_sum
	  RELEASE amt_sum
	  USE IN ResultSet
	  SQLDISCONNECT(0)
	  CLOSE DATABASES ALL
	  SET TALK &lcOldTalk
	
	  *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	  PROCEDURE RaiseError
	  	LOCAL laErrArray[1], lcErrMsg
	  	AERROR(laErrArray)
	  	lcErrMsg = laErrArray(3)
	  	MESSAGEBOX(lcErrMsg,"SQL Error!",0)
	  	SQLDISCONNECT(0)
	
	  PROCEDURE MakeData
	  	LOCAL lnLower, lnUpper, lnCounter, lnInsertVal
	  	CLOSE DATA ALL
	  	IF !FILE('FDIB.DBC')
	  		CREATE DATABASE 'FDIB.DBC'
	  		CREATE TABLE 'FDIB.DBF' NAME 'FDIB' (n_amount N(12, 2) NOT NULL)
	  		lnLower = -25257.00
	  		lnUpper = 53860.00
	  		WAIT WINDOW "Populating table...please wait." NOCLEAR NOWAIT
	  		FOR lnCounter = 1 TO 1000
	  			lnInsertVal = INT((lnUpper - lnLower + 1) * RAND( ) + lnLower)
	  			INSERT INTO fdib VALUES (lnInsertVal)
	  		ENDFOR
	  		WAIT CLEAR
	  		CLOSE DATABASES ALL
	  	ENDIF
	  ********* END SAMPLE CODE *********
	
	REFERENCES
	==========
	
	For additional information about the Fetch Data In Backgroup option on the
	Microsoft Visual FoxPro ODBC driver, click the article numbers below to view the
	articles in the Microsoft Knowledge Base:
	
	  Q236019 PRB: ASP App Using ADO with Visual FoxPro ODBC Driver Stops IIS
	
	  Q175801 PRB: Accessing FoxPro Table in ASP Returns Error 80040e14
	
	  Q270106 PRB: Visual FoxPro COM DLL in an MTS Package May Hang Under Stress
	
	(c) Microsoft Corporation 200, All Rights Reserved. Contributions by Trevor
	Hancock, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbODBC kbvfp600 KbDBFDBC kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbODBCSearch kbODBCVFP600828100
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
