---
layout: page
title: "Q241818: PRB: Calculated Field Contents Cannot be Modified by ADO"
permalink: /kb/241/Q241818/
---

## Q241818: PRB: Calculated Field Contents Cannot be Modified by ADO

	Article: Q241818
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.0,2.01,2.1,2.1 SP1,2.1 SP2,2.5,2.6,5.0,6.0,6.5 Service Pack 4 and later,7.0
	Operating System(s): 
	Keyword(s): kbADO kbDatabase kbVBp600 kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbADO210sp2 kbCodeSnippet
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- ActiveX Data Objects (ADO), versions 2.0, 2.01, 2.1, 2.1 SP1, 2.1 SP2, 2.5, 2.6 
	- Microsoft SQL Server versions 6.5 Service Pack 4 and later, 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Trying to modify the contents of a calculated field within an ActiveX Data
	Objects (ADO) recordset, generates the following error:
	
	  Runtime error '-2147217887(80040e21)' errors occurred.
	
	CAUSE
	=====
	
	Each calculated field in an ADO recordset contains the following attributes:
	
	- adFldUnknownUpdatable = False
	
	  -and-
	
	- adFldUpdatable = False
	
	This indicates that the field cannot be modified.
	
	RESOLUTION
	==========
	
	Here are two ways to work around this behavior:
	
	- Use the Shape command to append a field into the ADO recordset.
	
	  -or-
	
	- Use the calculated field for display purposes only without modifying its
	  contents.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	NOTE: Setting the adFldUnknownUpdatable and adFldUpdatable attribute flags is
	provider dependent. If the provider does not set the flags as indicated
	previously, you get a run-time error when you try to save the record.
	
	The sample code below uses the publishers table in the pubs database that ships
	with SQL Server.
	
	Steps to Reproduce Behavior:
	
	1. Start a new Visual Basic project. Form1 is created by default. Create a
	  reference to the Microsoft ActiveX Data Objects 2.x Library.
	
	2. Paste the following code in the General Declaration section of Form1:
	
	  Option Explicit
	  Dim con As New ADODB.Connection
	  Dim rs As New ADODB.Recordset
	
	  Private Sub Form_Load()
	
	  ' Connection String to your SQL Server
	  con.ConnectionString = "Provider=SQLOLEDB.1;Data Source=sequel;User ID=sa;Password=;Initial Catalog=pubs;"
	  con.Open
	
	  rs.CursorLocation = adUseClient
	  ' Concatenate a character 'A' onto the value retrieved from the field pub_name.
	  rs.Open "SELECT pub_name + 'A' AS PN FROM Publishers", con, adOpenStatic, adLockBatchOptimistic, adCmdText
	
	  MsgBox rs.RecordCount
	
	  Debug.Print rs(0).Attributes And adFldUnknownUpdatable, _
	              rs(0).Attributes And adFldUpdatable
	
	  rs(0) = "Hello" ' <----- ERROR OCCURS HERE
	
	  MsgBox "Passed!"
	
	  End Sub
	
	3. The code prints FALSE for each of the flags, adFldUnknownUpdatable and
	  adFldUpdatable, indicating that the field is known to be non-updateable.
	
	NOTE: Calculated columns are also read-only in Data Access Objects (DAO) and
	Remote Data Objects (RDO).
	
	REFERENCES
	==========
	
	For more information on how to use the Shape command to append a field to an ADO
	recordset, please refer to the following article in the Microsoft Knowledge
	Base:
	
	  Q223771 PRB: Appending Fields to a Recordset Generates an Error
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Ammar Abuthuraya, Microsoft Corporation
	
	
	Additional query words: error -2147217887(80040e21)
	
	======================================================================
	Keywords          : kbADO kbDatabase kbVBp600 kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbADO210sp2 kbCodeSnippet kbMDAC260 kbADO260 
	Technology        : kbVBSearch kbSQLServSearch kbAudDeveloper kbADOsearch kbADO210 kbADO201 kbADO200 kbADO210sp1 kbADO210sp2 kbADO250 kbADO260 kbZNotKeyword6 kbSQLServ700 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbSQLServ650SP4
	Version           : :2.0,2.01,2.1,2.1 SP1,2.1 SP2,2.5,2.6,5.0,6.0,6.5 Service Pack 4 and later,7.0
	Issue type        : kbprb
	
	=============================================================================
	
