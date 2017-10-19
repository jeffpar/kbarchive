---
layout: page
title: "Q280067: PRB: Very Large XML Documents from SQL Server 2000 May Be Slow"
permalink: /kb/280/Q280067/
---

## Q280067: PRB: Very Large XML Documents from SQL Server 2000 May Be Slow

	Article: Q280067
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.6,6.0
	Operating System(s): 
	Keyword(s): kbADO kbSQLServ kbVBp600 kbXML kbGrpDSVBDB kbDSupport
	Last Modified: 14-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Data Access Components version 2.6 
	- Microsoft SQL Server 2000 (all editions) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Queries that result in a large amount of XML data being returned through the
	ReadText method of the ActiveX Data Object (ADO) Stream object may take a great
	deal of time to execute; if this is done in a COM+ component that is invoked
	from an ASP page, the user's session may time out.
	
	CAUSE
	=====
	
	ADO converts Stream object data from UTF-8 encoding to Unicode; the frequent
	memory reallocation involved in conversion of such a large quantity of data at
	once is quite time-consuming.
	
	RESOLUTION
	==========
	
	Make repeated calls to the ReadText method of the ADO command object, and
	specify a smaller number of characters. Tests have shown that a value equivalent
	to 128K (131,072) is optimal. Response time decreases as this value is
	decreased.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open a new Standard EXE project in Visual Basic. Form1 is created by default.
	
	2. Set a reference to ActiveX Data Objects 2.6.
	
	3. Place a CommandButton on Form1.
	
	4. Place the following code in the Click event of the CommandButton:
	
	  On Error GoTo ErrorHandler
	
	     Dim cnn As ADODB.Connection
	     Dim cmd As ADODB.Command
	     Dim str As ADODB.Stream
	
	     Dim strXMLOutput As String
	     Dim varStart     As Variant
	     Dim varEnd       As Variant
	
	     Const ReadBytes = 131072
	
	     Screen.MousePointer = vbHourglass
	
	     Set cnn = New ADODB.Connection
	      
	     With cnn
	        .CursorLocation = adUseClient
	        .Open "provider=sqloledb;data source=MyServer\MyInstance;initial & _
	        catalog=MyDatabase;user id=MyUserID;password=MyPassword;"
	     End With
	
	     Set str = New ADODB.Stream
	      
	     With str
	        .Type = adTypeText
	        .LineSeparator = adCRLF
	        .Mode = adModeRead
	        .Open
	     End With
	
	     Set cmd = New ADODB.Command
	      
	     With cmd
	        Set .ActiveConnection = cnn
	        .Properties("Output Stream").Value = str
	        .CommandType = adCmdText
	        .CommandText = "SELECT * FROM BigTable FOR XML AUTO"
	        .Execute , , adExecuteStream
	        Set .ActiveConnection = Nothing
	     End With
	
	     cnn.Close
	
	     str.Position = 0
	     
	     varStart = Now
	    
	    'This technique results in a much faster assignment.
	    'Uncomment this section for faster response.
	  '   With str
	  '      Do While Not .EOS
	  '         strXMLOutput = strXMLOutput & .ReadText(ReadBytes)
	  '      Loop
	  '   End With
	     
	    'Single call technique results in a much slower assignment.
	    'Comment this out when uncommenting the code above.
	     strXMLOutput = str.ReadText
	     
	     varEnd = Now
	
	     MsgBox "ReadText completed:" & vbCrLf & "Start=" & varStart & ", End=" & _
	            varEnd & vbCrLf & "Total bytes read: " & Len(strXMLOutput), vbOKOnly + vbInformation, "ReadText"
	
	  Bye:
	     Set str = Nothing
	     Set cmd = Nothing
	     Set cnn = Nothing
	
	     Screen.MousePointer = vbDefault
	
	     Exit Sub
	     
	  ErrorHandler:
	     MsgBox "Error " & Err.Number & ": " & Err.Description, vbOKOnly + vbCritical, "Stream Error"
	     GoTo Bye
	
	5. Replace MyServer, MyInstance, MyDatabase, MyUserID and MyPassword with
	  appropriate values for your database server.
	
	6. Modify the SQL query as appropriate for your database.
	
	7. Run the application with the ReadText loop commented out, as in the preceding
	  code.
	
	8. Comment out the single ReadText method call, and uncomment the ReadText loop.
	  Note that there is a significant improvement in response time.
	
	NOTE: This has been tested with a 60,000 row recordset, returning a 12.8 MB XML
	document. Using a single call to the ReadText method, response time was over 10
	minutes; using the loop, response time was reduced to less than thirty seconds.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbADO kbSQLServ kbVBp600 kbXML kbGrpDSVBDB kbDSupport 
	Technology        : kbVBSearch kbSQLServSearch kbAudDeveloper kbZNotKeyword6 kbSQLServ2000Search kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600 kbMDACSearch kbMDAC260 kbSQLServ2000
	Version           : :2.6,6.0
	Issue type        : kbprb
	
	=============================================================================
	
