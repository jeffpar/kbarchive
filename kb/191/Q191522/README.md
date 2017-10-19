---
layout: page
title: "Q191522: FIX: TABLEUPDATE() Fails in Remote View With Empty Memo Field"
permalink: /kb/191/Q191522/
---

## Q191522: FIX: TABLEUPDATE() Fails in Remote View With Empty Memo Field

	Article: Q191522
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,3.0,5.0
	Operating System(s): 
	Keyword(s): kbMDAC250
	Last Modified: 22-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for Visual FoxPro, versions 3.0, 5.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You have a remote view to a Visual FoxPro table using the Visual FoxPro ODBC
	driver. When you attempt to issue a TABLEUPDATE() after replacing a memo field
	value with an empty string (""), the TABLEUPDATE() fails with the following
	error:
	
	  Connectivity error: [Microsoft][ODBC Visual FoxPro Driver]Invalid string or
	  buffer length.
	
	NOTE: This may also happen connecting through the Visual FoxPro ODBC driver from
	other clients such as MSQuery.
	
	RESOLUTION
	==========
	
	As a workaround, you can set the field to accept NULL values and replace the
	field value with NULL rather than "".
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code from a program (.PRG) file. It programmatically
	  creates an ODBC User DSN called "VFP TestDB" to connect to a database
	  container called TestDB.dbc. The .dbc is created, a table called TESTTAB is
	  created, and a remote view (called TESTTAB_REMOTE) to that table is created.
	  The view is USEd, the Notes memo field is replaced with the value "", and the
	  TABLEUPDATE() is issued. TABLEUPDATE() returns .F. and the error generated
	  is:
	
	  Connectivity error: [Microsoft][ODBC Visual FoxPro Driver]Invalid string or
	  buffer length.
	
	        LOCAL lcDir, lcSettings, laErrorArray[1]
	        CLEAR
	        SET EXCLUSIVE OFF
	        CLOSE DATABASE ALL
	
	        * Declare API function to create ODBC User DSN.
	        DECLARE INTEGER SQLConfigDataSource IN odbccp32.DLL ;
	           INTEGER, INTEGER, STRING, STRING
	        lcDir = SET('DEFAULT')+CURDIR()
	        lcSettings="DSN=VFP TestDB"+CHR(0)+;
	           "Description=VFP TestDB"+CHR(0)+;
	           "SourceDB="+lcDir+"testdb.dbc"+CHR(0)+;
	           "SourceType=DBC"
	
	        * Call API function to create ODBC User DSN.
	        =SQLConfigDataSource(0,1,"Microsoft Visual FoxPro Driver",lcSettings)
	
	        SET SAFETY OFF
	        * Make the database.
	        CREATE DATABASE 'TESTDB.DBC'
	
	        * Make the table and index.
	        CREATE TABLE 'TESTTAB.DBF' NAME 'TESTTAB' (PK C(5) NOT NULL, ;
	           NOTES M NOT NULL)
	
	        ALTER TABLE 'TESTTAB' ADD PRIMARY KEY PK TAG PK
	
	        CLOSE DATABASE ALL
	        OPEN DATABASE testdb SHARED
	
	        * Make the remote view.
	        CREATE SQL VIEW "TESTTAB_REMOTE" ;
	           REMOTE CONNECT "VFP TestDB" ;
	           AS SELECT * FROM TESTTAB Testtab
	
	        * Set the view properties.
	        DBSETPROP('TESTTAB_REMOTE', 'View', 'UpdateType', 1)
	        DBSETPROP('TESTTAB_REMOTE', 'View', 'WhereType', 1)
	        DBSETPROP('TESTTAB_REMOTE', 'View', 'FetchMemo', .T.)
	        DBSETPROP('TESTTAB_REMOTE', 'View', 'SendUpdates', .T.)
	        DBSETPROP('TESTTAB_REMOTE', 'View', 'UseMemoSize', 255)
	        DBSETPROP('TESTTAB_REMOTE', 'View', 'FetchSize', 100)
	        DBSETPROP('TESTTAB_REMOTE', 'View', 'MaxRecords', -1)
	        DBSETPROP('TESTTAB_REMOTE', 'View', 'Tables', 'TESTTAB')
	        DBSETPROP('TESTTAB_REMOTE', 'View', 'Prepared', .F.)
	        DBSETPROP('TESTTAB_REMOTE', 'View', 'CompareMemo', .T.)
	        DBSETPROP('TESTTAB_REMOTE', 'View', 'FetchAsNeeded', .F.)
	        DBSETPROP('TESTTAB_REMOTE', 'View', 'FetchSize', 100)
	        DBSETPROP('TESTTAB_REMOTE', 'View', 'Comment', "")
	        DBSETPROP('TESTTAB_REMOTE', 'View', 'BatchUpdateCount', 1)
	        DBSETPROP('TESTTAB_REMOTE', 'View', 'ShareConnection', .F.)
	        * Set the view field properties.
	        DBSETPROP('TESTTAB_REMOTE.pk', 'Field', 'KeyField', .T.)
	        DBSETPROP('TESTTAB_REMOTE.pk', 'Field', 'Updatable', .T.)
	        DBSETPROP('TESTTAB_REMOTE.pk', 'Field', 'UpdateName', 'TESTTAB.pk')
	        DBSETPROP('TESTTAB_REMOTE.pk', 'Field', 'DataType', "C(5)")
	        DBSETPROP('TESTTAB_REMOTE.notes', 'Field', 'KeyField', .F.)
	        DBSETPROP('TESTTAB_REMOTE.notes', 'Field', 'Updatable', .T.)
	        DBSETPROP('TESTTAB_REMOTE.notes', 'Field', 'UpdateName', ;
	           'TESTTAB.notes')
	        DBSETPROP('TESTTAB_REMOTE.notes', 'Field', 'DataType', "M")
	
	        SET SAFETY ON
	
	        * Add a couple of records to the table.
	        INSERT INTO TESTTAB VALUES ("A", "1234567890")
	        INSERT INTO TESTTAB VALUES ("B", "1234567890")
	        CLOSE DATABASE ALL
	        OPEN DATABASE testdb
	
	        * Open the view.
	        USE testdb!TESTTAB_remote
	
	        *Replace field with "" and issue TABLEUPDATE()
	        REPLACE NOTES WITH ""
	        IF !TABLEUPDATE(.T.)
	           ?"Tableupdate failed with the following error:"
	           =AERROR(laErrorArray)
	           ?laErrorArray(2)
	           =TABLEREVERT()
	        ENDIF
	
	TABLEUPDATE() returns .F. indicating that it failed. The error returned from
	AERROR() is:
	
	  Connectivity error: [Microsoft][ODBC Visual FoxPro Driver]Invalid string or
	  buffer length.
	
	If the memo field is set to accept nulls and the REPLACE replaces the value with
	NULL, the error does not occur. You can do the following within Visual FoxPro:
	
	You can demonstrate this by changing the preceding CREATE TABLE line to read:
	
	  
	
	     CREATE TABLE 'TESTTAB.DBF' NAME 'TESTTAB' (PK C(5) NOT NULL, ;
	        NOTES M NULL)
	
	-and- change the REPLACE line to read:
	
	  
	
	     REPLACE NOTES WITH NULL
	
	To employ this workaround from within a Visual FoxPro form, for instance, make
	the following changes:
	
	1. Set the following environment setting in Visual FoxPro 5.0. This makes the
	  NULL display as an empty string.
	
	        SET NULLDISPLAY TO ""
	
	2. In an Editbox Valid method, you could add the following code to ensure that
	  the NULL is used if the Value property of the Editbox is empty:
	
	        IF EMPTY(This.Value)
	           This.Value = NULL
	        ENDIF
	
	REFERENCES
	==========
	
	Visual FoxPro Help; search on: "DECLARE - DLL"; "CREATE TABLE - SQL"; "SET
	NULLDISPLAY"
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Jim
	Saunders, Microsoft Corporation
	
	
	Additional query words: kbVFp300bbug kbVFp500abug kbVFp600bug kbODBC
	
	======================================================================
	Keywords          : kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbODBCSearch kbMDACSearch kbMDAC250 kbODBCVFP300 kbODBCVFP500
	Version           : WINDOWS:2.5,3.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
