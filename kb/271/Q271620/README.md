---
layout: page
title: "Q271620: HOWTO: Retrieve XML Data Using SQL XML Query in VB Client"
permalink: /kb/271/Q271620/
---

## Q271620: HOWTO: Retrieve XML Data Using SQL XML Query in VB Client

	Article: Q271620
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.6,2.7,4.0,6.0
	Operating System(s): 
	Keyword(s): kbVBp600 kbXML kbGrpDSVBDB kbDSupport kbSQLServ2000 kbMDAC260 kbMSXML260 kbATM kbmdac27
	Last Modified: 12-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Data Access Components versions 2.6, 2.7 
	- Microsoft SQL Server 2000 (all editions) 
	- Microsoft XML, versions 2.6, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you run an ADODB command stream and specify SQL SELECT with the FOR XML AUTO
	clause, an XML document stream is fetched from SQL Server and displayed in the
	Visual Basic Intermediate window.
	
	MORE INFORMATION
	================
	
	1. Create a new Visual Basic Standard EXE. Form1 is created by default.
	
	2. On the Project menu, select References, and then set a reference to Microsoft
	  ActiveX Data Objects 2.6.
	
	3. Place a CommandButton on Form1, and then place the following code in its
	  click event:
	
	  Private Sub Command1_Click()
	    
	      Dim sConn As String
	      Dim sQuery As String
	      Dim outStrm
	          
	      sConn = "Provider=SQLOLEDB;Data Source=.;Initial Catalog=Northwind;User ID=SA;Password=;"
	      Dim adoConn As ADODB.Connection
	      Set adoConn = New ADODB.Connection
	      adoConn.ConnectionString = sConn
	      adoConn.CursorLocation = adUseClient
	      adoConn.Open
	      
	      Dim adoCmd As ADODB.Command
	         Set adoCmd = New ADODB.Command
	         Set adoCmd.ActiveConnection = adoConn
	         sQuery = "<ROOT xmlns:sql='urn:schemas-microsoft-com:xml-sql'>" 
	         sQuery = sQuery & "<sql:query>SELECT * FROM PRODUCTS FOR XML AUTO</sql:query>"'
	         sQuery = sQuery & "</ROOT>"
	      
	      Dim adoStreamQuery As ADODB.Stream
	      Set adoStreamQuery = New ADODB.Stream
	      
	      '   Open the command stream so it may be written to
	      adoStreamQuery.Open                             
	      '   Set the input command stream's text with the query string
	      adoStreamQuery.WriteText sQuery, adWriteChar    
	      '   Reset the position in the stream, otherwise it will be at EOS.
	      adoStreamQuery.Position = 0                     
	      
	      '   Set the command object's command to the input stream set above.
	      Set adoCmd.CommandStream = adoStreamQuery       
	      '   Set the dialect for the command stream to be a SQL query.
	      adoCmd.Dialect = "{5D531CB2-E6Ed-11D2-B252-00C04F681B71}"   
	      
	      '   Create the output stream to stream the results into.
	      Set outStrm = CreateObject("ADODB.Stream")      
	      outStrm.Open
	
	      '   Set command's output stream to the output stream just opened.
	      adoCmd.Properties("Output Stream") = outStrm    
	      
	      '   Execute the command, thus filling the output stream.
	      adoCmd.Execute , , adExecuteStream              
	      '   Position the output stream back to the beginning of the stream.
	      outStrm.Position = 0                            
	      '   Create temporary string.
	      Dim str As String                               
	      '   Assign the stream's output to the temp string to format.
	      str = outStrm.ReadText(-1)                      
	      '   Add a cr/lf pair for each row in the result stream.
	      str = Replace(str, "><", ">" & vbCrLf & "<")    
	      Debug.Print str
	      GoTo Bye
	      
	  RecError:
	      Debug.Print Err.Number & ": " & Err.Description
	      
	  Bye:
	      Set adoCmd = Nothing
	      If adoConn.State = adStateOpen Then
	          adoConn.Close
	      End If
	      Set adoConn = Nothing
	  End Sub 
	
	4. Specify either the SQL 2000 Server or, if the server is on your local
	  machine, use the period symbol (.) or "(local)" (without the quotation
	  marks). Note that the Immediate window of Visual Basic displays the results.
	
	REFERENCES
	==========
	
	For information on SQL 2000 and mapping schema, please see SQL Server Books
	Online
	
	For XML, please see the XML information on MSDN on the following Microsoft Web
	site:
	
	  http://www.msdn.microsoft.com/xml/default.asp
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp600 kbXML kbGrpDSVBDB kbDSupport kbSQLServ2000 kbMDAC260 kbMSXML260 kbATM kbmdac270 kbMSXML400 
	Technology        : kbVBSearch kbSQLServSearch kbAudDeveloper kbZNotKeyword6 kbMSXMLSearch kbSQLServ2000Search kbZNotKeyword2 kbVB600Search kbVB600 kbMDACSearch kbMDAC260 kbSQLServ2000 kbMSXML260 kbMDAC270 kbMSXML400
	Version           : :2.6,2.7,4.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
