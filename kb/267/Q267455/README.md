---
layout: page
title: "Q267455: PRB: Problems Encountered Using Oracle Aggregate Functions"
permalink: kb/267/Q267455/
---

## Q267455: PRB: Problems Encountered Using Oracle Aggregate Functions

	Article: Q267455
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 2.0,2.1,2.1 SP2,2.5,2.6,2.7,Build 2.573.4403,Build 2.573.6526,Build 2.573.7713.2
	Operating System(s): 
	Keyword(s): kbDatabase kbMDAC kbODBC kbOLEDB kbOracle kbGrpDSVCDB kbGrpDSMDAC kbDSupport
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC for Oracle version 2.5, versions Build 2.573.4403, Build 2.573.6526, Build 2.573.7713.2 
	- Microsoft OLE DB Provider for Oracle, versions 2.0, 2.1, 2.5, 2.6, 2.7 
	- Microsoft Data Access Components versions 2.1 SP2, 2.5, 2.6, 2.7 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use aggregate functions like DECODE() on Oracle views derieved from
	tables with non-null columns, NULL values can be returned. Attempting to query
	the value of the column or trying to perform a MoveFirst causes the following
	error message:
	
	  Run-time error '-2147467259 (80004005)': The data provider or other service
	  returned an E_FAIL status.
	
	NOTE: This behavior occurs on Oracle 8.x servers, and not on Oracle 7.3.x
	servers.
	
	CAUSE
	=====
	
	This behavior occurs as a result of a problem in Oracle's client software. A
	description of the table from Oracle shows that a NULL value is not "OK" for the
	aggregated column, where the result value is NULL for the view.
	
	RESOLUTION
	==========
	
	To work around this behavior, use a server-side cursor.
	
	MORE INFORMATION
	================
	
	Both the Microsoft OLE DB provider for Oracle and the Microsoft Open Database
	Connectivity (ODBC) for the Oracle driver (from MDAC 2.1.4202.3 or later) are
	used to reproduce the behavior. This behavior only occurs when you use a
	client-side cursor, and is not encountered when you use server-side cursors (for
	example, the NULL value is returned correctly).
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	- Run the following SQL statements from SQL*PLUS to set up both the tables and
	  the views:
	
	  CREATE TABLE TESTNULL
	  (
	    FLD1 VARCHAR2(10) NOT NULL,
	    FLD2 VARCHAR2(10) NULL
	  );
	
	  INSERT INTO TESTNULL (FLD1, FLD2) VALUES ('MARY', 'MANAGER');
	
	  CREATE OR REPLACE VIEW TestView1
	  (
	   CUSTOMER
	  )
	  AS
	  SELECT
	    DECODE(FLD1,'JOHN',FLD1,NULL) as CUSTOMER
	  FROM 
	    TESTNULL;
	
	  CREATE OR REPLACE VIEW TestView2
	  (
	   CUSTOMER
	  )
	  AS
	  SELECT
	    DECODE(FLD2,'JOHN',FLD1,NULL) as CUSTOMER
	  FROM 
	    TESTNULL ;
	
	- Create a standard Visual Basic EXE that supports ActiveX Data Objects (ADO).
	  In the main form, create two command buttons, and then enter the following
	  code:
	
	  Dim cn As New ADODB.Connection
	  Private Sub Form_Load()
	      Dim cmd As New ADODB.Command
	      Dim rs As New ADODB.Recordset
	
	      Set cn = New ADODB.Connection
	      With cn
	         .ConnectionString = "Provider=MSDAORA;Data Source=ora_server;User Id=demo;Password=demo"
	          .CursorLocation = adUseClient
	          
	       '  If you use adUseServer then no problem is seen
	       '  .CursorLocation = adUseServer
	          .Open
	      End With
	  End Sub
	
	  Private Sub Command1_Click()
	  'Selecting FLD1 which does not allow NULLs
	  Set cmd = New ADODB.Command
	      Set rs = New ADODB.Recordset
	      With cmd
	          .ActiveConnection = cn
	          .CommandText = "SELECT * FROM TestView1"
	          rs.CursorType = adOpenStatic
	          rs.Open cmd
	      End With
	      Debug.Print rs(0)         ' Error will be seen here.
	  End Sub
	
	  Private Sub Command2_Click()
	  'Selecting FLD2 which allows NULL
	  Set cmd = New ADODB.Command
	      Set rs = New ADODB.Recordset
	      With cmd
	          .ActiveConnection = cn
	          .CommandText = "SELECT * FROM TestView2"
	          rs.CursorType = adOpenStatic
	          rs.Open cmd
	      End With
	      Debug.Print rs(0)       ' No error seen. Prints Null in the Immediate window.
	  End Sub
	
	This behavior occurs when the Non-Null column in the original table is
	manipulated when you use Oracle aggregate functions like DECODE(). The behavior
	can be avoided if you use server-side cursors that ensure the correct result is
	sent back to the application.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbMDAC kbODBC kbOLEDB kbOracle kbGrpDSVCDB kbGrpDSMDAC kbDSupport 
	Technology        : kbAudDeveloper kbODBCSearch kbOLEDBSearch kbMDACSearch kbMDAC210SP2 kbMDAC250 kbMDAC260 kbODBCOracle25734403 kbODBCOracle25736526 kbOLEDBProvOracle200 kbOLEDBProvOracle210 kbOLEDBProvOracle250 kbOLEDBProvOracle260 kbOLEDBProvSearch kbMDAC270 kbODBCOracle257377132 kbODBCOracle250Search
	Version           : :2.0,2.1,2.1 SP2,2.5,2.6,2.7,Build 2.573.4403,Build 2.573.6526,Build 2.573.7713.2
	Issue type        : kbprb
	
	=============================================================================
	
