---
layout: page
title: "Q166211: HOWTO: Call SQL Server System Stored Procedures from RDO"
permalink: /kb/166/Q166211/
---

## Q166211: HOWTO: Call SQL Server System Stored Procedures from RDO

{% raw %}

	Article: Q166211
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to call system-stored procedures on SQL Server from
	RDO.
	
	SQL Server has a number of prewritten, stored procedures that are used to
	configure and administer the SQL server. They are all located in the Master
	database and have the prefix [ASCII 147]sp_,[ASCII 148] which distinguishes them
	from user- or application-written stored procedures.
	
	In order to call these stored procedures from RDO, you must specify the correct
	database in which they reside, the master database. There are several ways to do
	this, but the most effective way is to explicitly reference the stored procedure
	in your call syntax. For example:
	
	     { ? = call master.dbo.sp_addlogin(?,?) }
	
	Another method to accomplish this behavior is to set the default database before
	creating and executing your stored procedure. The following example uses a
	prepared statement and assumes that "Pubs" is your default database, cn is an
	active rdoConnection object, and qr is an rdoQuery object:
	
	     cn .Execute "Use Master"
	     qr.SQL  = "some sql to execute..."
	     Set qr.ActiveConnection = cn
	     qr .Execute
	     cn .Execute "Use Pubs"
	
	MORE INFORMATION
	================
	
	1. Start a new Standard EXE project. Form1 is created by default.
	
	2. Add a CommandButton (Command1) to Form1.
	
	3. From the Project menu, select References, and place a check next to Microsoft
	  Remote Data Object 2.0.
	
	4. Paste the following code into the General Declarations section of Form1:
	
	        Private Sub Command1_Click()
	           Dim cn As New rdoConnection
	           Dim qr As New rdoquery
	
	           With cn
	           .Connect = "Driver={SQL Server};Server=MyServer;" & _
	                    "Database=pubs;Uid=sa;Pwd="
	           .EstablishConnection Prompt = rdDriverNoPrompt
	           End With
	
	           With qr
	              Set .ActiveConnection = cn
	              'Note: If you don't specify master, you will get the following
	              'error: "An invalid parameter was passed."
	              .SQL = "{ ? = call master.dbo.sp_addlogin(?,?) }"
	              .Prepared = True
	              .BindThreshold = 1024 'largest column that will be bound under
	                                    'ODBC.
	              Debug.Print .rdoParameters.Count
	              .rdoParameters(0).Direction = rdParamOutput
	              .rdoParameters(1).Direction = rdParamInput
	              .rdoParameters(2).Direction = rdParamInput
	              .rdoParameters(1) = "Edward"
	              .rdoParameters(2) = "Scissorhands"
	
	              .Execute
	              Debug.Print .rdoParameters(0).Value
	              'Const SQL_SUCCESS As Long = 0
	              'Const SQL_ERROR As Long = -1
	           End With
	        End Sub
	
	5. Note that you need to change your DATABASE, UID, and PWD parameters in the
	  Connect Property.
	
	6. Start the program or press the F5 key.
	
	7. Click the Command1 button to execute the stored procedure and display the
	  parameter count and the output parameter in the debug window.
	
	REFERENCES
	==========
	
	In Visual Basic Books Online, please see:
	
	 Guide to Building Client Server Applications in Visual Basic (Enterprise)
	   Part 3: Data Access Options
	     Using Remote Data Objects and the Remote Data Control
	       Using RDO to Execute Stored Procedures
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Jon Fowler,
	Microsoft Corporation
	
	
	Additional query words: kbVBp500 kbVBp600 kbdse kbDSupport kbVBp kbODBC kbRDO
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
