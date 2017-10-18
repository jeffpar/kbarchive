---
layout: page
title: "Q160169: PRB: Cannot Connect Data Control to a Password Protected MDB"
permalink: kb/160/Q160169/
---

## Q160169: PRB: Cannot Connect Data Control to a Password Protected MDB

	Article: Q160169
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbVBp kbVBp400 kbVBp600 kbGrpDSVBDB kbDSupport
	Last Modified: 19-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to use the Data control to connect to a password-protected Access
	database at design time, you receive the following error message:
	
	  Not a valid password
	
	Specifically, this error occurs when you set the RecordSource property of the
	Data control.
	
	RESOLUTION
	==========
	
	In the Properties window, set the following properties for the Data control:
	
	     Property             Value of Property
	     ----------------   ---------------------
	     DatabaseName         ATEST.MDB
	     Connect              ;pwd=aaa
	     RecordSource         Table1
	
	NOTE: You must set the DatabaseName property first, then set the connect
	property. If the properties are not set in this order, you receive the same
	error message.
	
	IMPORTANT: This functionality is broken in Microsoft Visual Studio 6.0 Service
	Pack 4 (SP4).
	
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. In the Load event for Form1, paste the following code:
	
	     Private Sub Form_Load()
	
	       Dim DB As Database
	       Dim tblDef As TableDef, fld As Field
	
	       Set DB = DBEngine.Workspaces(0).CreateDatabase("C:\Atest.mdb", _
	           dbLangGeneral, dbEncrypt)
	       DB.NewPassword "", "aaa"
	       ' Create new TableDef.
	       Set tblDef = DB.CreateTableDef("Table1")
	       ' Add field to tblDef.
	       Set fld = tblDef.CreateField("Field1", dbInteger)
	       tblDef.Fields.Append fld
	       ' Save TableDef definition by appending it to TableDefs collection.
	       DB.TableDefs.Append tblDef
	       DB.Close
	       MsgBox "Atest.mdb and Table1 is created."
	
	     End Sub
	
	3. Press the F5 key to run the project. A password-protected database called
	  Atest.mdb is created.
	
	4. Start another instance of Visual Basic 4.0. Form1 is again created by
	  default.
	
	5. Add a Data control to Form1.
	
	6. In the Properties window, set the DatabaseName property of the Data control
	  to "C:\Atest.mdb." If you try to set the RecordSource property, you receive
	  the above-mentioned error message.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp kbVBp400 kbVBp600 kbGrpDSVBDB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbVB16bitSearch
	Version           : :4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
