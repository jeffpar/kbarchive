---
layout: page
title: "Q308980: PRB:Native Error Not Sent Back to ADO When You Run SQL XML Query"
permalink: kb/308/Q308980/
---

## Q308980: PRB:Native Error Not Sent Back to ADO When You Run SQL XML Query

	Article: Q308980
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.6,6.0
	Operating System(s): 
	Keyword(s): kbATM kbGrpDSVBDB kbDSupport
	Last Modified: 28-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Data Access Components version 2.6 
	- Microsoft SQL Server 2000 (all editions) 
	- Microsoft XML, version 2.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an error occurs when you use a SQL XML query to retrieve Extensible Markup
	Language (XML) data, the native error that SQL Server generates is not sent back
	to the errors collection of ActiveX Data Objects (ADO).
	
	
	MORE INFORMATION
	================
	
	If a SQL Server error occurs when you open an ADO Recordset object, the SQL
	state and native errors are exposed in the errors collection. However, when you
	use an ADODB command stream, the native error displays a generic ADO error. No
	value is placed for the SQL state.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Visual Basic Standard EXE project. Form1 is created by default.
	
	2. On the Project menu, click References, and then select the Microsoft ActiveX
	  Data Objects 2.6 check box.
	
	3. Place two CommandButton controls on Form1, and then add the following code to
	  the declarations section of Form1:
	
	  Option Explicit
	  Dim sConn As String
	
	  Private Sub Form_Load()
	      sConn = "Provider=SQLOLEDB;Data Source=YourServer;Initial " & _
	              "Catalog=Northwind;User ID=YourUser;Password=YourPassword;"
	  End Sub
	
	  Private Sub Command1_Click()
	      Dim sQuery As String
	      Dim adoConn As ADODB.Connection
	      Set adoConn = New ADODB.Connection
	      adoConn.ConnectionString = sConn
	      adoConn.CursorLocation = adUseClient
	      adoConn.Open
	      
	      Dim adoRs As ADODB.Recordset
	      Set adoRs = New ADODB.Recordset
	      On Error Resume Next
	      adoRs.Open "SELECT * FROM WRONGTBL FOR XML AUTO", adoConn
	      Dim aer As ADODB.Error
	      For Each aer In adoConn.Errors
	          Debug.Print "Recordset Object"
	          Debug.Print "Error Description: " & aer.Description
	          Debug.Print "Native Error: " & aer.NativeError
	          Debug.Print "SQL State: " & aer.SQLState
	      Next
	      On Error GoTo 0
	  End Sub
	
	  Private Sub Command2_Click()
	      Dim sQuery As String
	      Dim outStrm
	      
	      Dim adoConn As ADODB.Connection
	      Set adoConn = New ADODB.Connection
	      adoConn.ConnectionString = sConn
	      adoConn.CursorLocation = adUseClient
	      adoConn.Open
	      
	      Dim adoCmd As ADODB.Command
	      Set adoCmd = New ADODB.Command
	      Set adoCmd.ActiveConnection = adoConn
	      sQuery = "<ROOT xmlns:sql='urn:schemas-microsoft-com:xml-sql'>"
	      sQuery = sQuery & "<sql:query>SELECT * FROM WRONGTBL FOR XML AUTO"
	      sQuery = sQuery & "</sql:query></ROOT>"
	      
	      Dim adoStreamQuery As ADODB.Stream
	      Set adoStreamQuery = New ADODB.Stream
	      
	      '   Open the command stream so it can be written to.
	      adoStreamQuery.Open
	      '   Set the input command stream's text with the query string.
	      adoStreamQuery.WriteText sQuery, adWriteChar
	      '   Reset the position in the stream; otherwise, it is at EOS.
	      adoStreamQuery.Position = 0
	      
	      '   Set the command object's command to the input stream that you set above.
	      Set adoCmd.CommandStream = adoStreamQuery
	      '   Set the dialect for the command stream to a SQL query.
	      adoCmd.Dialect = "{5D531CB2-E6Ed-11D2-B252-00C04F681B71}"
	      
	      '   Create the output stream to stream the results into.
	      Set outStrm = CreateObject("ADODB.Stream")
	      outStrm.Open
	
	      '   Set command's output stream to the output stream that you just opened.
	      adoCmd.Properties("Output Stream") = outStrm
	      
	      '   Run the command, which therefore fills the output stream.
	      On Error Resume Next
	      adoCmd.Execute , , adExecuteStream
	      Dim aer As ADODB.Error
	      For Each aer In adoConn.Errors
	          Debug.Print "Command Stream Object"
	          Debug.Print "Error Description: " & aer.Description
	          Debug.Print "Native Error: " & aer.NativeError
	          Debug.Print "SQL State: " & aer.SQLState
	      Next
	      On Error GoTo 0
	  End Sub
	
	4. Modify the connection string in sConn to reflect the server name and
	  credentials that are used to connect to your SQL Server 2000 server.
	
	5. Note that the SQL statement deliberately attempts to query a nonexistent
	  table (WRONGTBL).
	
	6. Run the project, and then click Command1. You receive output similar to the
	  following:
	
	  Error Description: Invalid object name 'WRONGTBL'.
	  Native Error: 208
	  SQL State: 42S02
	
	7. Click Command2. Note that the error description is the same, but the native
	  error is a generic ADO error number, and the SQL state is an empty string:
	
	  Command Stream Object
	  Error Description: Invalid object name 'WRONGTBL'.
	  Native Error: -2147217865
	  SQL State:
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q271620 Retrieve XML Data by Using a SQL XML Query in a Visual Basic Client
	
	Additional query words: SQLState
	
	======================================================================
	Keywords          : kbATM kbGrpDSVBDB kbDSupport 
	Technology        : kbVBSearch kbSQLServSearch kbAudDeveloper kbZNotKeyword6 kbMSXMLSearch kbSQLServ2000Search kbZNotKeyword2 kbVB600Search kbVB600 kbMDACSearch kbMDAC260 kbSQLServ2000 kbMSXML260
	Version           : :2.6,6.0
	Issue type        : kbprb
	
	=============================================================================
	
