---
layout: page
title: "Q143034: How To Use GetRows to Pass Recordset Data Back from OLE Server"
permalink: kb/143/Q143034/
---

## Q143034: How To Use GetRows to Pass Recordset Data Back from OLE Server

	Article: Q143034
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbDatabase kbODBC
	Last Modified: 06-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When implementing an OLE server to process your data requests for an OLE client,
	you can use the GetRows method to send the data back to the client from the
	server. This article demonstrates this using RDO; the term Resultset is used
	instead of Recordset, but you could easily modify the code to use the DAO
	Recordset object.
	
	The sample application will let you build an OLE client that retrieves the rows
	from an rdoResultset in three different ways:
	
	- The first way will use traditional RDO controlled completely on the client
	  side with no OLE interaction to populate the grid. This is done for a
	  performance comparison only.
	
	- The second will allow the rdoResultset to be created by the OLE server but
	  will receive a pointer to the rdoResultset object, which it will reference to
	  populate the grid. This method is very slow and only works reliably for an in
	  process OLE server.
	
	- The third way will allow the rdoResultset to be created remotely and receive
	  an array with the GetRows method that contains the row data to populate the
	  grid. This is the recommended way to implement three tier client server
	  architecture.
	
	MORE INFORMATION
	================
	
	Sample Program
	--------------
	
	This example assumes that you already have access to an ODBC data source. In this
	example we use the PUBS database that is distributed with Microsoft SQL Server,
	but this can be changed by modifying the code. Because this article contains a
	large amount of code, we suggest you obtain it electronically so you can paste
	it directly into your project rather than typing in each line.
	
	This example requires you to run two instances of Visual Basic 4.0 32-bit at the
	same time, one for the OLE client application, and one for the OLE server
	application. We will not set up a remote OLE server although this can be done by
	referring to the following article :
	
	  Q142534 : How to Create Programs in Visual Basic that Use Remote OLE
	
	Step One - Create the OLE Server
	--------------------------------
	
	1. Start a new instance of Visual Basic 4.0 32-bit. Form1 is created by default.
	  Change the Caption property of Form1 to "rdoServer". Also, under the Tools,
	  Options menu Project Tab, set the Project Name to "rdoServer", and the
	  Application Description to "rdoServer".
	
	2. From the Insert menu, add a Class Module (Class1) to your project.
	
	3. In the Properties window for Class1, set the following properties:
	
	  Property      Value
	  ------------------------------------
	  Instancing    2 - Creatable MultiUse
	  Name          rdoClass
	  Public        True
	
	4. Place the following code into the General Declaration section of Class1:
	
	     Option Explicit
	     Private en As rdoEnvironment
	     Private cn As rdoConnection
	     Private rs As rdoResultset
	
	     Private Sub Class_Initialize()
	       'when an instance of the rdoserver class gets created in the client
	       'this code is executed
	       Set en = rdoEngine.rdoEnvironments(0)
	       en.CursorDriver = rdUseIfNeeded
	       Dim strConn As String
	       strConn = "driver={SQL Server}; Server=myserver; Database=pubs; " & _
	         "UID=myuid;PWD=mypwd;"
	       Set cn = en.OpenConnection(dsname:="", Prompt:=rdDriverNoPrompt, _
	         Connect:=strConn)
	     End Sub
	     Public Function QueryResultset(strSQL As String)
	       Set rs = cn.OpenResultset(Name:=strSQL, Type:=rdOpenStatic)
	     End Function
	     Public Function GetResultset() As rdoResultset
	       Set GetResultset = rs
	     End Function
	     Public Function RowCount() As Integer
	       RowCount = rs.RowCount
	     End Function
	     Public Function GetColHeaders()
	       Dim intColumnCount As Integer
	       Dim intCurrentColumn As Integer
	       Dim varColHeaders()
	       intColumnCount = rs.rdoColumns.Count
	       ReDim varColHeaders(intColumnCount)
	       For intCurrentColumn = 0 To intColumnCount - 1
	         varColHeaders(intCurrentColumn) = _
	     rs.rdoColumns(intCurrentColumn).Name
	       Next intCurrentColumn
	       GetColHeaders = varColHeaders
	     End Function
	     Public Function GetAllRows()
	       Dim rsTemp As rdoResultset    'used to get rowcount
	       Set rsTemp = cn.OpenResultset(Name:="SELECT Count(*) from authors", _
	         Type:=rdOpenForwardOnly)
	       GetAllRows = rs.GetRows(CLng(rsTemp(0)))
	       rsTemp.Close
	       Set rsTemp = Nothing
	     End Function
	     Public Function GetSomeRows(intHowMany As Integer)
	       GetSomeRows = rs.GetRows(intHowMany)
	     End Function
	     Public Function EOF()
	       EOF = rs.EOF
	     End Function
	     Public Sub MoveFirst()
	       rs.MoveFirst
	     End Sub
	     Public Sub MovePrevious()
	       rs.MovePrevious
	     End Sub
	     Public Sub MoveNext()
	       rs.MoveNext
	     End Sub
	     Public Sub MoveLast()
	       rs.MoveLast
	     End Sub
	     Private Sub Class_Terminate()
	       rs.Close
	       cn.Close
	     End Sub
	
	5. From the Tools menu, choose Options. In the StartMode group of the Project
	  tab, choose OLE Server. You now have a complete OLE automation server. You
	  can choose Make EXE to make an .EXE file that you can run later, or you can
	  choose Make DLL to make an In process OLE Server. For this example, we'll
	  just run the server in the Visual Basic IDE.
	
	6. Now you're ready to automate your server. Start the program by choosing Start
	  from the Run menu or by pressing the F5 key.
	
	7. Minimize this instance of Visual Basic.
	
	Step Two - Create the OLE Client
	--------------------------------
	
	1. Start a new instance of Visual Basic 4.0 32-bit. Form1 is created by default.
	
	2. Add three command buttons to Form1. Change the caption property of Command1
	  to "Local resultset", the caption property of Commmand2 to "Remote resultset
	  with local pointer", and the caption property of Command3 to "Remote
	  resultset using GetRows".
	
	3. Add a Microsoft Grid Control to Form1, Grid1 by default. Use a normal, not
	  data bound, grid for this example. Size Grid1 to cover most of Form1. If you
	  cannot find the Microsoft Grid Control in the Toolbox go to the Tools menu
	  and select it under Custom Controls.
	
	4. Paste the following code into the General Declarations section of form1.
	
	     Option Explicit
	     Private rdoObject As rdoServer.rdoClass  'must be referenced in project
	     Private Sub Form_Load()
	       Set rdoObject = New rdoServer.rdoClass
	     End Sub
	     Private Sub Command1_Click()
	       Dim en As rdoEnvironment
	       Dim cn As rdoConnection
	       Dim rsLocal As rdoResultset
	       Set en = rdoEngine.rdoEnvironments(0)
	       en.CursorDriver = rdUseIfNeeded    'Server Side cursors if available
	       Dim strConn As String
	       strConn = "driver={SQL Server}; Server=myserver; Database=pubs; " & _
	         "UID=myuid;PWD=mypwd;"
	       Set cn = en.OpenConnection(dsname:="", Prompt:=rdDriverNoPrompt, _
	         Connect:=strConn)
	       Set rsLocal = cn.OpenResultset(Name:="SELECT * from authors", _
	         Type:=rdOpenStatic)
	       Call FillGridFromRS(rsLocal)            'call procedure to fill grid
	       rsLocal.Close
	       cn.Close
	       en.Close
	     End Sub
	     Private Sub Command2_Click()
	       Dim rsPointer As rdoResultset           'pointer to rdoResultset
	       rdoObject.QueryResultset ("SELECT * from authors")
	       Set rsPointer = rdoObject.GetResultset()
	       Call FillGridFromRS(rsPointer)
	     End Sub
	     Sub FillGridFromRS(rdoRS As rdoResultset)
	       Grid1.Cols = rdoRS.rdoColumns.Count
	       Dim intCurrentRow As Integer
	       Dim intCurrentColumn As Integer
	       Dim intColumnCount As Integer
	       intColumnCount = rdoRS.rdoColumns.Count
	       For intCurrentColumn = 0 To intColumnCount - 1
	         Grid1.Row = 0
	         Grid1.Col = intCurrentColumn
	         Grid1.ColWidth(intCurrentColumn) = 1250
	         Grid1.Text = rdoRS.rdoColumns(intCurrentColumn).Name
	       Next intCurrentColumn
	       intCurrentRow = 1
	       Grid1.Rows = intCurrentRow + 1
	       While Not rdoRS.EOF
	         Grid1.Rows = intCurrentRow + 1
	         For intCurrentColumn = 0 To intColumnCount - 1
	           Grid1.Row = intCurrentRow
	           Grid1.Col = intCurrentColumn
	           Grid1.Text = rdoRS.rdoColumns(intCurrentColumn).Value & ""
	         Next intCurrentColumn
	         rdoRS.MoveNext
	         intCurrentRow = intCurrentRow + 1
	       Wend
	     End Sub
	     Private Sub Command3_Click()
	       Dim HeaderData
	       Dim RowData
	       Dim intCurrentRow As Integer
	       Dim intCurrentColumn As Integer
	       Dim intRowCount As Integer
	       Dim intColumnCount As Integer
	       Dim intLastRow As Integer
	       rdoObject.QueryResultset ("SELECT * from authors")
	       HeaderData = rdoObject.GetColHeaders
	       intColumnCount = UBound(HeaderData, 1)
	       Grid1.Rows = 1
	       Grid1.Cols = intColumnCount
	       Grid1.Row = 0
	       For intCurrentColumn = 0 To intColumnCount - 1
	         Grid1.Col = intCurrentColumn
	         Grid1.ColWidth(intCurrentColumn) = 1250
	         Grid1.Text = HeaderData(intCurrentColumn)
	       Next intCurrentColumn
	       rdoObject.MoveFirst
	       While Not rdoObject.EOF
	         'experiment with using the GetSomeRows method to limit the
	         'amount of data transferred at one time
	         RowData = rdoObject.GetAllRows       ' retrieves all rows at once
	         'RowData = rdoObject.GetSomeRows(10)   ' retrieves n rows at a time
	         intRowCount = UBound(RowData, 2) + 1
	         intColumnCount = UBound(RowData, 1) + 1
	         intLastRow = Grid1.Row
	         For intCurrentRow = 1 To intRowCount
	           Grid1.Rows = intLastRow + intCurrentRow + 1
	           Grid1.Row = intLastRow + intCurrentRow
	           For intCurrentColumn = 0 To intColumnCount - 1
	             Grid1.Col = intCurrentColumn
	             Grid1.Text = RowData(intCurrentColumn, intCurrentRow - 1) & ""
	           Next intCurrentColumn
	         Next intCurrentRow
	       Wend
	     End Sub
	
	5. Note that you will need to change your Driver, Server, UID, and PWD in the
	  OpenConnection method contained in the Command1_Click event. You will also
	  need to modify the SQL statement contained in the Command1_Click event to
	  match your own table.
	
	6. From the Tools menu, choose References. You will see rdoServer located at the
	  bottom of the list under Available References because we started the server
	  in the previous instance of Visual Basic. Click on the check box next to it
	  to reference it.
	
	7. Start the program or press the F5 key.
	
	8. You can now click on the each of the three Command buttons to test the
	  different ways to populate the grid.
	
	To take this application a step further, you could add edit/update functionality
	to your OLE server. This could not be done by using SQL directly from the client
	side since it does not have a physical connection to the data source. But, this
	could be done be sending the changed row data back to the OLE server so it could
	issue an SQL UPDATE statement using the primary key of the table.
	
	OTHER SUGGESTIONS
	-----------------
	
	NOTE: Although it is possible to pass back a pointer to the rdoResultset object,
	this method is not recommended since it is very inefficient. Also keep in mind
	that you cannot assign a pointer from an out of process remote rdoResultset to
	the Resultset property of the Remote Data Control (RDC). This is because
	notifications for IConnectionPoint are not marshaled by OLE so setting the
	MSRDC.Resultset = to a rdoResultset that is passed in from an out of process
	server will fail at some point during initialization.
	
	This will work if an in-process OLE server provides the ResultSet, because the
	notifications do not need to be marshaled since we are in the same address
	space.
	
	Additional query words: 4.00 vb4win vb432
	
	======================================================================
	Keywords          : kbDatabase kbODBC 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Version           : :4.0
	
	=============================================================================
	
