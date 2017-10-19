---
layout: page
title: "Q176561: PRB: Passing Timestamp Parameter Using User Connection Designer"
permalink: /kb/176/Q176561/
---

## Q176561: PRB: Passing Timestamp Parameter Using User Connection Designer

	Article: Q176561
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kberrmsg kbVBp500 kbGrpDSVBDB
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When executing a query defined from the User Connection Object with a Timestamp
	data type as the input parameter of a Stored Procedure, the following error
	occurs:
	
	  Run-time error '13'
	  Type mismatch
	
	CAUSE
	=====
	
	The User Connection Designer automatically recognizes the parameters of Stored
	Procedures by name, direction, ODBC binding data type, and Visual Basic's data
	type. However, the Designer thinks the Timestamp parameter is a Byte data type
	in Visual Basic, which is incorrect. In SQL Server, Timestamp is binary array;
	there is no corresponding counterpart in Visual Basic.
	
	RESOLUTION
	==========
	
	In User Connection Designer, go to the Parameters tab of Query object properties
	page and change the Visual Basic Data Type of Timestamp input parameter from
	Byte to Variant.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Task One : Create the Test Table and Stored Procedure
	-----------------------------------------------------
	
	1. For testing purpose, table TimeStampTbl is created in Pubs database with one
	  row inserted. In SQL Server, to create a table and add new row, select Pubs
	  database, then place the following Create Table T-SQL in the SQL window of
	  ISQL/W and execute it:
	
	        CREATE TABLE TimestampTbl
	           (ID int identity, name char(30) NULL, stamp Timestamp)
	        INSERT INTO TimeStampTbl (name) Values("RoadRunner")
	
	2. To create stored procedure, spID_Timestamp, place the following Create
	  Procedure T-SQL in the SQL window of ISQL/W and execute it:
	
	        CREATE PROCEDURE spID_Timestamp
	           @theID int,
	           @theTS TimeStamp
	        As
	           SELECT * FROM TimestampTbl WHERE ID=@theID AND stamp=@theTS
	
	Task Two: Create the UserConnection
	-----------------------------------
	
	1. Start a new project in Visual Basic and choose "Standard EXE". Form1 is
	  created by default.
	
	2. From the Project menu, select Components, select the Designer tab, and then
	  place a check next to Microsoft UserConnection.
	
	3. From the Project menu, select Add ActiveX Designer, and then select Microsoft
	  UserConnection. This will bring up a dialog titled UserConnection1
	  Properties. (A reference to Remote Data Objects 2.0 will be automatically
	  added to your project.)
	
	4. On the Connection tab, select either a DSN or DSN-less connection and fill in
	  the appropriate information. If you select DSN-less, make sure you specify a
	  database in the Other ODBC Attributes area with database=Pubs. On the
	  Authentication tab, fill in your username and password, and place a check
	  next to Save Connection Information for Design Time.
	
	5. Click OK to save this information and return to the Designer window.
	
	6. Insert a new Query by right-clicking on UserConnection1 and choosing Insert
	  Query or by clicking on Insert Query toolbar icon.
	
	7. From the Source of Query, choose Based on Stored Procedure. From the
	  pull-down list of the available stored procedures, select the one you just
	  created, spID_Timestamp.
	
	8. On the Parameters tab, note that the Visual Basic Data Type of input
	  parameter, theTS, is default to Byte, which will cause the run-time error
	  "Type mismatch."
	
	9. Click OK to save this information.
	
	Task Three: Build the Visual Basic Code
	---------------------------------------
	
	1. Paste the following code into the General Declarations section of Form1:
	
	        Private Sub Form_Load()
	
	           Dim cn As New UserConnection1
	           Dim rs1 As rdoResultset
	           Dim rs2 As rdoResultset
	           Dim Timestamp As Variant
	
	           cn.EstablishConnection
	           Set rs1 = cn.OpenResultSet("Select ID, Stamp From TimeStampTbl")
	           Timestamp = rs1(1)
	           cn.Query1 rs1(0), Timestamp
	           Set rs2 = cn.LastQueryResults
	           Debug.Print "rs2(0): " & rs2(0)
	
	        End Sub
	
	2. Start the program or press the F5 key.
	
	REFERENCES
	==========
	
	For additional information about User Connection Designer and TimeStamp
	datatype, please see the following articles in the Microsoft Knowledge Base:
	
	  Q166281 HOWTO: Create and Implement a UserConnection
	
	  Q170380 HOWTO: Display/Pass Timestamp Value from/to SQL Server
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Adrian
	Chiang, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbVBp500 kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500
	Version           : WINDOWS:5.0
	Issue type        : kbprb
	
	=============================================================================
	
