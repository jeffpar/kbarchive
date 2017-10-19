---
layout: page
title: "Q191343: PRB: Connection Busy Error with a Shared Connection"
permalink: /kb/191/Q191343/
---

## Q191343: PRB: Connection Busy Error with a Shared Connection

	Article: Q191343
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbODBC kbvfp500 kbvfp500a kbvfp600 kbMDAC250
	Last Modified: 22-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to issue a CREATE SQL VIEW, USE or REQUERY() command with a REMOTE
	VIEW, results in the following error message:
	
	  Connection CONNECTION_NAME is busy.
	
	This behavior occurs under the following conditions:
	
	- Two or more Remote Views are created using the same SHARED connection.
	
	- The MAXRECORDS property of at least one of the VIEWS is set to a value
	  greater than 0.
	
	- The FETCHSIZE property of at least one of the VIEWS is set to a value greater
	  than 0.
	
	- The FETCHSIZE property value is less than or equal to the MAXRECORDS property
	  value.
	
	RESOLUTION
	==========
	
	Here are the workarounds for this problem:
	
	1. Do not include the SHARED clause in the CREATE SQL VIEW command used to
	  create the remote view:
	
	        CREATE SQL VIEW "MYVIEW1"  ;
	           REMOTE CONNECT "CONN1" ;
	           AS SELECT * ;
	           FROM mytable_a
	        DBSETPROP('MYVIEW1', 'View', 'FetchSize', 1)
	        DBSETPROP('MYVIEW1', 'View', 'MaxRecords', 1)
	        USE MYVIEW1 IN 0
	        CREATE SQL VIEW "MYVIEW2" ;
	           REMOTE CONNECT "CONN1" ;
	           AS SELECT * ;
	           FROM mytable_b
	        DBSETPROP('MYVIEW2', 'View', 'FetchSize', 1)
	       DBSETPROP('MYVIEW2', 'View', 'MaxRecords', 1)
	
	2. Create a separate connection for each of the views:
	
	        CREATE CONNECTION CONN1 DATASOURCE 'CONNECT' USERID 'SA' PASSWORD ''
	        CREATE CONNECTION CONN2 DATASOURCE 'CONNECT' USERID 'SA' PASSWORD ''
	        CREATE SQL VIEW "MYVIEW1"  ;
	           REMOTE CONNECT "CONN1" SHARED ;
	           AS SELECT * ;
	           FROM mytable_a
	        DBSETPROP('MYVIEW1', 'View', 'FetchSize', 1)
	        DBSETPROP('MYVIEW1', 'View', 'MaxRecords', 1)
	        USE MYVIEW1 IN 0
	        CREATE SQL VIEW "MYVIEW2" ;
	           REMOTE CONNECT "CONN2" SHARED ;
	           AS SELECT * ;
	           FROM mytable_b
	        DBSETPROP('MYVIEW2', 'View', 'FetchSize', 1)
	        DBSETPROP('MYVIEW2', 'View', 'MaxRecords', 1)
	
	3. Use the default MAXRECORDS and FETCHSIZE properties:
	
	        CREATE SQL VIEW "MYVIEW1"  ;
	           REMOTE CONNECT "CONN1" ;
	           AS SELECT * ;
	        FROM mytable_a
	        USE MYVIEW1 IN 0
	        CREATE SQL VIEW "MYVIEW2" ;
	           REMOTE CONNECT "CONN1" ;
	           AS SELECT * ;
	           FROM mytable_b
	
	4. Set the FETCHSIZE property of the view(s) to -1 (ALL):
	
	        CREATE SQL VIEW "MYVIEW1"  ;
	           REMOTE CONNECT "CONN1" ;
	           AS SELECT * ;
	           FROM mytable_a
	        DBSETPROP('MYVIEW1', 'View', 'MaxRecords', 1)
	        DBSETPROP('MYVIEW1','View','Fetchsize',-1)
	        USE MYVIEW1 IN 0
	        CREATE SQL VIEW "MYVIEW2" ;
	           REMOTE CONNECT "CONN1" ;
	           AS SELECT * ;
	           FROM mytable_b
	        DBSETPROP('MYVIEW2', 'View', 'MaxRecords', 1)
	        DBSETPROP('MYVIEW2','View','Fetchsize',-1)
	
	5. Set the FETCHSIZE property of the view(s) to any value that is greater than
	  the value returned by the expression:
	
	        DBGETPROP('View Name','View','MaxRecords')
	
	        CREATE SQL VIEW "MYVIEW1"  ;
	           REMOTE CONNECT "CONN1" ;
	           AS SELECT * ;
	           FROM mytable_a
	        DBSETPROP('MYVIEW1', 'View', 'MaxRecords', 1)
	        maxrecs=DBGETPROP('MYVIEW1','View','MaxRecords')+1
	        DBSETPROP('MYVIEW1','View','Fetchsize',maxrecs)
	        USE MYVIEW1 IN 0
	        CREATE SQL VIEW "MYVIEW2" ;
	           REMOTE CONNECT "CONN1" ;
	           AS SELECT * ;
	           FROM mytable_b
	        DBSETPROP('MYVIEW2', 'View', 'MaxRecords', 1)
	        maxrecs=DBGETPROP('MYVIEW2','View','MaxRecords')+1
	        DBSETPROP('MYVIEW2','View','Fetchsize',maxrecs)
	
	STATUS
	======
	
	The behavior is by design.
	
	MORE INFORMATION
	================
	
	The default values for View Properties are listed in the following table:
	
	  Property Name            Default Value
	  --------------------------------------
	  SendUpdates              .F. (False)
	  UpdateType               1 SQL Update
	  WhereType                3 Key and Modified Fields
	  BatchUpdateCount         1
	  UseMemoSize              255
	  FetchSize                100
	  FetchMemo                .T. (True)
	  MaxRecords               -1 (All)
	  Tables                   Database Container and Table Name
	  Comment                  Null String
	  Prepared                 .F. (False)
	  CompareMemo              .T. (True)
	  FetchAsNeeded            .F. (False)
	
	This behavior occurs with a number of different ODBC Data Sources, including, but
	not limited to:
	
	  FoxPro Tables
	  Visual FoxPro Databases
	  SQL Server Databases
	
	This behavior does not occur when Microsoft Access is used as the data source for
	the remote views.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Use the following code snippet to create a database container and two tables
	  that will serve as a data source:
	
	        CREATE DATABASE TESTODBC
	        CREATE TABLE mytable_a ( ;
	           FLD_A I NULL, FLD_C C(15) NULL)
	        CREATE TABLE mytable_b ( ;
	           FLD_B I NULL,FLD_A I NULL,FLD_C C(15) NULL)
	        INSERT INTO mytable_a (FLD_A,FLD_C) VALUES (10452,'TEST1')
	        INSERT INTO mytable_b (FLD_B,FLD_A,FLD_C) VALUES (1,22345,'TEST1')
	        CLOSE ALL
	
	2. Open the 32-bit ODBC Data Source Administrator and create an ODBC datasource
	  called "CONNECT" with a path to the Testodbc.dbc, created in step 1.
	
	3. Create a .prg file named Odbcdemo.prg, using the following code:
	
	        * Begin Code
	        CLOSE ALL
	        SET SAFETY OFF
	        CREATE DATABASE odbcdemo
	        CREATE CONNECTION CONN1 DATASOURCE 'CONNECT' USERID 'SA' PASSWORD ''
	        CREATE SQL VIEW "MYVIEW1"  ;
	           REMOTE CONNECT "CONN1" SHARED ;
	           AS SELECT * ;
	           FROM mytable_a
	        DBSETPROP('MYVIEW1', 'View', 'FetchSize', 1)
	        DBSETPROP('MYVIEW1', 'View', 'MaxRecords', 1)
	        USE MYVIEW1 IN 0
	        * The code fails here with a Connection Busy Message.
	        CREATE SQL VIEW "MYVIEW2" ;
	           REMOTE CONNECT "CONN1" SHARED ;
	           AS SELECT * ;
	           FROM mytable_b
	        DBSETPROP('MYVIEW2', 'View', 'FetchSize', 1)
	        DBSETPROP('MYVIEW2', 'View', 'MaxRecords', 1)
	        CLOSE ALL
	        RETURN
	        * End Code
	
	4. From the command line type the following:
	
	  "DO ODBCDEMO" (without the quotation marks)
	
	  NOTE: Observe that the code fails during the attempt to create the second
	  remote view.
	
	5. Edit the Odbcdemo.prg file and modify the code to reflect each of the
	  preceding workarounds. Run the program after each change.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q178760 HOWTO: Alter the Properties of a View at Run Time
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by John Desch,
	Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbODBC kbvfp500 kbvfp500a kbvfp600 kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:2.5,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
