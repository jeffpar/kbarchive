---
layout: page
title: "Q149055: PRB: Jet Doesn't Support QueryDefs on a Non-Attached ODBC Table"
permalink: kb/149/Q149055/
---

## Q149055: PRB: Jet Doesn't Support QueryDefs on a Non-Attached ODBC Table

	Article: Q149055
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,6.0
	Operating System(s): 
	Keyword(s): kbODBC kbVBp kbVBp400 kbVBp600 kbGrpDSVBDB kbDSupport kbMDAC250
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Jet does not support named QueryDefs on a non-attached ODBC database. A non
	attached ODBC database is one that is opened directly with the OpenDatabase
	method of the WorkSpace object without the use of an .mdb file.
	
	RESOLUTION
	==========
	
	The preferred method for opening an external ODBC table is to attach it to an
	.mdb file. For additional information, please see the following article(s) in
	the Microsoft Knowledge Base:
	
	  Q150716 : DAO: How To Attach to and Create QueryDefs on ODBC Tables
	
	If this method is not appropriate for your application, the following example
	shows how to createQuerydefs with no name:
	
	     Set qd = db.CreateQueryDef("")
	     qd.SQL = "Select * from authors"
	
	STATUS
	======
	
	This behavior is by design because Jet does not have a place to store the
	QueryDef object on the ODBC source.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	- If you use the <object>.CreateQueryDef("qdname") method and specify a
	  QueryDef name, you get the error 3219 - Invalid operation.
	
	- If you specify a <object>.Name property, you get error 3251 - Operation
	  is not supported for this type of object.
	
	The following information is from Guide To Data Access Objects, Chapter 7, Data
	Access Choices:
	
	In many cases, attaching a table is a faster way to access external data than
	opening a table directly, especially when the data is located in an ODBC
	database. In Visual Basic version 4.0, you can even use SQL Passthrough to
	directly query attached ODBC databases. If possible, it's best to consider
	attaching external tables rather than opening them directly. If you're using
	external data in an ODBC database and your particular situation requires opening
	the external tables directly, keep in mind that performance will be
	significantly slower when you are using the data.
	
	Sample Program
	--------------
	
	The following example describes how to create a Querydef with no name. There is
	no need to set up a DSN with the ODBC Admin utility as it uses a "DSN-less" ODBC
	connection.
	
	1. Start a new project in Visual Basic. Form1 is created by default. Add two
	  command buttons to Form1, command1 and command2 by default.
	
	2. Paste the following code in the General Declarations section of form1:
	
	     Dim db As Database
	     Dim cn As String
	     Dim qd As QueryDef
	
	     Private Sub Form_Load()
	       'open db directly, without attaching
	       cn = "odbc;driver={SQL Server};server=myserver;" & _
	         "database=pubs;uid=myuid;pwd=mypwd"
	       Set db = OpenDatabase(Name:=pubs, Exclusive:=False, _
	         ReadOnly:=False, Connect:=cn)
	     End Sub
	     Private Sub Command1_Click()
	       'If we try to name it, we get the following error:
	       'Error 3251 "Operation is not supported for this type of object."
	       Set qd = db.CreateQueryDef("")
	       'If we try to name it like this we get error 3219 "Invalid operation."
	       'qd.Name = "abc"
	       qd.Connect = cn
	       qd.SQL = "Select * from titles"
	     End Sub
	     Private Sub Command2_Click()
	       Dim rs As Recordset
	       Set rs = qd.OpenRecordset()
	       Call displayResults(rs)
	      End Sub
	     Sub displayResults(rs As Recordset)
	       Dim f As Field, s As String, i As Integer
	       For Each f In rs.Fields
	         s = s & f.Name
	       Next f
	       Debug.Print s              'print column headers
	      While Not rs.EOF And i < 5
	         s = ""
	         For Each f In rs.Fields
	           s = s & f.Value
	         Next f
	         Debug.Print s            'print first 5 rows
	         rs.MoveNext
	         i = i + 1
	       Wend
	     End Sub
	
	3. Change the DRIVER, SERVER, DATABASE, UID, and PWD in the OpenConnection
	  method. Modify the SQL statement contained in the Command1_Click event to
	  match the SQL data source.
	
	4. Start the program or press the F5 key. Click on the Command1 button to create
	  the Querydef, and command2 to execute the query, which will display the first
	  5 rows of data in the debug window.
	
	REFERENCES
	==========
	
	Jet Database Engine Programmer's Guide, Microsoft Press, page 323
	
	Additional query words:
	
	======================================================================
	Keywords          : kbODBC kbVBp kbVBp400 kbVBp600 kbGrpDSVBDB kbDSupport kbMDAC250 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600 kbVB400Search kbVB400
	Version           : WINDOWS:4.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
