---
layout: page
title: "Q191344: PRB: Base Table Fields Changed with Remote View"
permalink: /kb/191/Q191344/
---

## Q191344: PRB: Base Table Fields Changed with Remote View

	Article: Q191344
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbODBC kbvfp kbvfp500 kbvfp500a kbvfp600 kbMDAC250
	Last Modified: 23-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When issuing a REQUERY command against a remote view, while a second remote view
	is being USEd, the following error message appears:
	
	  Base table fields have been changed and no longer match view fields. View
	  field properties cannot be set.
	
	CAUSE
	=====
	
	This behavior occurs when two or more views are defined with the following
	attributes:
	
	- The views were created using the same named connection to a remote data
	  source.
	
	- The views were created using the SHARED clause in the CREATE SQL VIEW
	  command.
	
	- The Prepared property of the views is set to .T.
	
	RESOLUTION
	==========
	
	1. Do not include the SHARED clause in the CREATE SQL VIEW command used to
	  create the remote view:
	
	        CREATE SQL VIEW "MYVIEW1"  ;
	           REMOTE CONNECT "CONN1" ;
	           AS SELECT * ;
	           FROM mytable_a
	        DBSETPROP('MYVIEW1', 'View', 'Prepared', .T.)
	        CREATE SQL VIEW "MYVIEW2" ;
	           REMOTE CONNECT "CONN1" ;
	           AS SELECT * ;
	           FROM mytable_b
	        DBSETPROP('MYVIEW2', 'View', 'Prepared', .T.)
	
	2. Create a separate connection for each of the views:
	
	        CREATE CONNECTION CONN1 DATASOURCE 'CONNECT' USERID 'SA' PASSWORD ''
	        CREATE CONNECTION CONN2 DATASOURCE 'CONNECT' USERID 'SA' PASSWORD ''
	        CREATE SQL VIEW "MYVIEW1"  ;
	           REMOTE CONNECT "CONN1" SHARED ;
	           AS SELECT * ;
	           FROM mytable_a
	        DBSETPROP('MYVIEW1', 'View', 'Prepared', .T.)
	        CREATE SQL VIEW "MYVIEW2" ;
	           REMOTE CONNECT "CONN2" SHARED ;
	           AS SELECT * ;
	           FROM mytable_b
	        DBSETPROP('MYVIEW2', 'View', 'Prepared', .T.)
	
	3. Use the default PREPARED property:
	
	        CREATE SQL VIEW "MYVIEW1"  ;
	           REMOTE CONNECT "CONN1" ;
	           AS SELECT * ;
	           FROM mytable_a
	        USE MYVIEW1 IN 0
	        CREATE SQL VIEW "MYVIEW2" ;
	           REMOTE CONNECT "CONN1" ;
	           AS SELECT * ;
	           FROM mytable_b
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The default values for View properties are listed in the following table:
	
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
	
	2. Open the 32-bit ODBC Data Source Administrator and create an ODBC data source
	  called "CONNECT" with a path to the Testodbc.dbc file, created in step 1.
	
	3. Create a .prg file named Odbcdemo.prg, using the following code:
	
	        * Begin Code
	
	        CLOSE ALL
	        SET SAFETY OFF
	        CREATE DATABASE odbcdemo
	        CREATE CONNECTION CONN1 DATASOURCE 'CONNECT' USERID 'SA' PASSWORD ''
	        CREATE SQL VIEW "MYVIEW1"  ;
	           REMOTE CONNECT "CONN1" SHARED ;
	           AS SELECT * ;
	           FROM MYTABLE_A
	        DBSETPROP('MYVIEW1', 'View', 'Prepared', .T.)
	        CREATE SQL VIEW "MYVIEW2" ;
	           REMOTE CONNECT "CONN1" SHARED ;
	           AS SELECT * ;
	           FROM MYTABLE_B
	        DBSETPROP('MYVIEW2', 'View', 'Prepared', .T.)
	        CLOSE ALL
	        OPEN DATA odbcdemo
	        USE MYVIEW1
	        USE MYVIEW2 IN 0
	        =REQUERY('MYVIEW1') && FAILS HERE.
	        =REQUERY('MYVIEW2')
	        =REQUERY('MYVIEW1')
	        =REQUERY('MYVIEW2')
	
	4. From the command line type the following:
	
	        DO ODBCDEMO
	
	  NOTE: Observe that the code fails during the attempt to issue a REQUERY
	  command on MYVIEW1.
	
	5. Edit the Odbcdemo.prg file and modify the code to reflect each of the
	  preceding workarounds. Run the program after each change.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q178760 HOWTO: Alter the Properties of a View at Run Time
	
	(c) Microsoft Corporation 1997, All Rights Reserved.
	Contributions by John R. Desch, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbODBC kbvfp kbvfp500 kbvfp500a kbvfp600 kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:2.5,5.0,5.0a,6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
