---
layout: page
title: "Q216318: FIX: Slow Performance of Remote Views w/ SQL Server Text Fields"
permalink: /kb/216/Q216318/
---

## Q216318: FIX: Slow Performance of Remote Views w/ SQL Server Text Fields

	Article: Q216318
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,2.6,3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbvfp kbvfp600 kbvfp600bug KbDBFDBC kbVS600sp3fix kbGrpDSFox kbGrpDSMDAC kbD
	Last Modified: 20-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft Data Access Components versions 2.5, 2.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Application performance gradually degrades when inserting records into a remote
	view of a Microsoft SQL Server table containing text fields. The performance
	degradation becomes more evident as the table grows in size.
	
	CAUSE
	=====
	
	With the 3.60 version of the Microsoft SQL Server ODBC driver (SQLSVR32.DLL),
	INSERTing data into remote views of SQL Server tables that contain one or more
	text fields initiates a table scan on the server.
	
	With SQL Server ODBC driver (SQLSRV32.DLL) version 3.70 and later, INSERTing data
	into remote views of SQL Server tables that contain one or more text fields
	initiates a table scan on the server under the following conditions:
	
	- A connection is being made to SQL Server 6.5.
	
	- The compatibility level of the driver has been set to SQL Server 6.5.
	
	RESOLUTION
	==========
	
	This issue has been addressed in Visual Studio 6.0 Service Pack 3.
	
	For earlier versions of Visual FoxPro, depending on the version of SQL Server
	that is being accessed, there are multiple workarounds for this problem:
	
	- If connecting to SQL Server 7.0, use SQL Server ODBC Driver (version 3.70 or
	  later) set to SQL Server 7.0 compatibility mode.
	
	- If connecting to SQL Server 6.5, use one of the 2.xx.xxxx versions of the SQL
	  Server ODBC Driver.
	
	- Use SQL Pass Through as shown here:
	
	  lcConnStr="DRIVER={SQL Server};SERVER=My_Server;DATABASE=PUBS;UID=sa;PWD="
	  gnConnHandle=SQLSTRINGCONN(lcConnStr)
	  IF gnConnHandle>0
	     m.starting_value=SECONDS()
	     for i=1 to 2000
	        SQLCommand="Insert into test_1 values ('"+ ;
	        ALLTRIM(STR(i))+"','"+REPLICATE('ABCDE ',10)+"')"
	        test=SQLEXEC(gnConnHandle,SQLCommand)
	        IF test < 0 then
	           AERROR(myerr)
	           DISP MEMO LIKE myerr
	           RETURN
	        ENDIF
	     NEXT
	     m.ending_value=SECONDS()
	     ? m.ending_value-m.starting_value
	     =SQLDISCONN(gnConnHandle)
	  ENDIF
	
	- Use an ADO RecordSet as shown here:
	
	  lcConnStr="DRIVER={SQL Server};SERVER=My_Server;DATABASE=PUBS;UID=sa;PWD="
	  oConnection=CREATEOBJECT("ADODB.Connection")
	  oConnection.ConnectionString = lcConnStr
	  oConnection.CursorLocation   = 3
	  oConnection.OPEN
	  lcSQL="select * from test_1"
	  rs=CREATEOBJECT("ADODB.Recordset")
	  rs.activeconnection         = oConnection
	  rs.CursorLocation           = 3
	  rs.cursortype               = 1
	  rs.LockType                 = 3
	  rs.OPEN(lcSQL)
	  m.starting_value=SECONDS()
	  for i=1 to 2000
	     rs.addnew
	     rs.FIELDS(0).VALUE=ALLTRIM(STR(i))
	     rs.FIELDS(1).VALUE=REPLICATE('ABCDE ',10)
	     rs.UPDATE
	  NEXT
	  m.ending_value=SECONDS()
	  ? m.ending_value-m.starting_value
	  rs.CLOSE
	
	STATUS
	======
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio service packs, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. If using SQLSRV32.DLL version 3.70 or later, set the compatibility level of
	  the SQL Server ODBC driver for Visual FoxPro to 6.5 compatibility mode.
	
	2. Create a program file named Testsql.prg using the following code:
	
	NOTE: This program creates a new SQL Server table in the database that the DSN
	specifies as the default and necessitates appropriate permissions.
	
	  SET SAFETY OFF
	  SET EXCLUSIVE ON
	  SET MULTILOCKS ON
	  gnConnHandle=SQLCONNECT('MYDSN','sa','')
	  =sqltables(gnConnHandle,'TABLE')
	  SELECT SQLRESULT
	  IsFound=.F.
	  LOCA
	  SCAN FOR UPPER(ALLTRIM(TABLE_NAME))="TEST_1"
	      IsFound=.T.
	      EXIT
	  ENDSCAN
	  IF IsFound
	      SQLCommand="DELETE FROM TEST_1"
	  ELSE
	      SQLCommand="CREATE TABLE TEST_1 (VAR1 CHAR(10) NULL, VAR2 TEXT NULL)"
	  ENDIF
	  testval=SQLEXEC(gnConnHandle,SQLCommand)
	  CREATE DATABASE testa && CREATE a DATABASE
	  CREATE CONNECTION test1 CONNSTRING "DRIVER={SQL Server};" + ;
	      "SERVER=MY_SERVER;DATABASE=PUBS;UID=sa;PWD="
	  CREATE SQL VIEW testb REMOTE CONNECTION test1 ;
	      AS SELECT * FROM dbo.test_1 test_1
	  =DBSETPROP('TEST1','Connection','DispLogin', 3)
	  =DBSETPROP('TEST1','Connection','Asynchronous', .T.)
	  =DBSETPROP('TEST1','Connection','DispWarnings', .T.)
	  =DBSETPROP('TEST1','Connection','BatchMode', .F.)
	  =DBSETPROP('TEST1','Connection','Transactions', 2)
	  =DBSETPROP('TEST1','Connection','PacketSize',8192)
	  =DBSETPROP('TEST1','Connection','Comment', 'Comment Added')
	  =DBSETPROP('TEST1','Connection','ConnectTimeOut', 10)
	  =DBSETPROP('TEST1','Connection','IdleTimeOut', 0)
	  =DBSETPROP('TEST1','Connection','QueryTimeOut', 0)
	  =DBSETPROP('TEST1','Connection','WaitTime',100)
	  =DBSETPROP("TESTB",'View','SendUpdates',.T.)
	  =DBSETPROP("TESTB",'View','UpdateType',1)
	  =DBSETPROP("TESTB",'View','WhereType',3)
	  =DBSETPROP("TESTB",'View','BatchUpdateCount',1)
	  =DBSETPROP("TESTB",'View','UseMemoSize',255)
	  =DBSETPROP("TESTB",'View','FetchSize',100)
	  =DBSETPROP("TESTB",'View','FetchMemo',.T.)
	  =DBSETPROP("TESTB",'View','MaxRecords',-1)
	  =DBSETPROP("TESTB",'View','Tables','dbo.test_1')
	  =DBSETPROP("TESTB",'View','Prepared',.T.)
	  =DBSETPROP("TESTB",'View','CompareMemo',.T.)
	  =DBSETPROP("TESTB",'View','FetchAsNeeded',.F.)
	  USE testb
	  =AFIELDS(viewflds)
	  FOR i=1 TO ALEN(viewflds,1)
	      fld_name=viewflds[i,1]
	      viewfield=ALLTRIM("TESTB")+"."+ALLTRIM(fld_name)
	      IF i=1
	          =DBSETPROP(viewfield,'Field','KeyField',.T.)
	      ELSE
	          =DBSETPROP(viewfield,'Field','KeyField',.F.)
	      ENDIF
	      =DBSETPROP(viewfield,'Field','Updatable',.T.)
	      update_field="dbo.test_1."+alltrim(fld_name)
	      =DBSETPROP(viewfield,'Field','UpdateName',update_field)
	  NEXT
	  m.starting_value=SECONDS()
	  FOR i=1 TO 2000
	      INSERT INTO testb VALUES ;
	          (ALLTRIM(STR(RECCOUNT()+1)), ;
	          REPLICATE('ABCDE ',10))
	  NEXT
	  m.ending_value=SECONDS()
	  ? m.ending_value-m.starting_value
	  CLOSE ALL
	  =SQLDISCONN(gnConnHandle)
	  CLEAR ALL
	  RETURN
	
	3. Run the program file and note the elapsed time.
	
	4. Run the SQL Pass Through code from above and note the elapsed time.
	
	5. Run the ADO sample code from above and note the elapsed time.
	
	6. If using SQLSRV32.DLL version 3.70 or later, reset the compatibility level of
	  the SQL Server ODBC driver for Visual FoxPro to the original value.
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by John Desch,
	Microsoft Corporation.
	
	
	REFERENCES
	==========
	
	For additional information setting the compatibility level of the SQL Server
	ODBC Driver for a specific application, click the article number below to view
	the article in the Microsoft Knowledge Base:
	
	  Q231812 HOWTO: Programmatically Set the Compatibility Level of the SQL Server
	  ODBC Driver
	
	For additional information restoring the compatibility level of the SQL Server
	ODBC Driver to SQL 7.0 compatibility for a specific application, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q233539 HOWTO: Programmatically Reset the Compatibility Level Setting of SQL
	  Server ODBC Driver Version 3.70
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbvfp kbvfp600 kbvfp600bug KbDBFDBC kbVS600sp3fix kbGrpDSFox kbGrpDSMDAC kbDSupport kbMDAC250 kbMDAC260 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbMDAC260 kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:2.5,2.6,3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
