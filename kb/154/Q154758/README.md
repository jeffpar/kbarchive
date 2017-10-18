---
layout: page
title: "Q154758: HOWTO: Call a Stored Procedure Using the Data Control"
permalink: kb/154/Q154758/
---

## Q154758: HOWTO: Call a Stored Procedure Using the Data Control

	Article: Q154758
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When writing prototype or demo applications, it may sometimes be necessary to
	call a stored procedure on a SQL Server database from the Data Control. Because
	the Data Control behaves similarly to a Recordset in DAO code, it is possible to
	achieve this behavior.
	
	MORE INFORMATION
	================
	
	In order to pass SQL Server syntax through the JET engine (the engine that
	allows Visual Basic to connect to an Access databases), the dbSQLPassThrough
	option must be used. This prevents the parser built into JET from attempting to
	parse the SQL string.
	
	This ability to pass through the JET engine allows the Visual Basic programmer to
	call stored procedures on the SQL Server database. When using the Data Control,
	you can set the SQLPassThrough option to use the Options property of the data
	control.
	
	The Options property Online Documentation describes dbSQLPassThrough as follows:
	
	Constant          Value  Description
	---------------------------------------------------------------------------
	dbSQLPassThrough  64     When using Data controls with an SQL statement
	                        in the RecordSource property, sends the SQL
	                        statement to an ODBC database, such as a SQL
	                        Server or Oracle database, for processing.
	
	The complete list of valid settings for the Options property is documented in the
	Online Help. Search there for Options Property.
	
	Step-by-Step Example
	--------------------
	
	The following sample uses the pubs database in SQL Server to demonstrate the
	pass-through behavior. This contains a stored procedure called "byroyalty" that
	takes an integer and returns all authors that match the percentage royalty:
	
	1. Start a new program in Visual Basic. Form1 is created by default.
	
	2. Add a Data Control and a Text Box to Form1.
	
	3. Set the DataSource property of Text1 to Data1.
	
	4. Add the following code to Form1:
	
	        Private Sub Form_Load()
	           Data1.Connect = "ODBC;DSN=DSNToPubs;" & _
	                           ";Database=pubs;" & _
	                           "Uid=sa;Pwd=;"
	           Data1.RecordSource = "Exec byroyalty 40"
	           Data1.Caption = "Stored Procedure Test"
	           Data1.Options = Data1.Options Or dbSQLPassThrough
	           Data1.Refresh
	
	           Text1.DataField = "Au_ID"
	        End Sub
	
	5. Press the F5 key to run the program. You should see the first author ID in
	  the Text Box.
	
	REFERENCES
	==========
	
	In Visual Basic Online Help, see Options property, OpenRecordset method.
	
	Additional query words: kbVBp400 kbVBp500 kbVBp600 kbdse kbDSupport kbVBp
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbVB16bitSearch
	Issue type        : kbhowto
	
	=============================================================================
	
