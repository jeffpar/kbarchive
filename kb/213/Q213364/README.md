---
layout: page
title: "Q213364: HOWTO: Retrieve an ADOMD Cellset as an ADODB Recordset"
permalink: /kb/213/Q213364/
---

## Q213364: HOWTO: Retrieve an ADOMD Cellset as an ADODB Recordset

{% raw %}

	Article: Q213364
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.0,2.01,2.1,2.1 SP1,2.1 SP2,2.5,2.6,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbVBp600 kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbADO210sp2 kbADO250 kbADO260 kb
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- ActiveX Data Objects (ADO), versions 2.0, 2.01, 2.1, 2.1 SP1, 2.1 SP2, 2.5, 2.6, 2.7 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The ActiveX Data Objects Multi-Dimensional Library (ADOMD) documentation ("Using
	ADO with ADO MD") indicates that you can access a multidimensional data provider
	using ADOMD cellsets or ADODB recordsets. The operation of flattening a dataset
	to produce a rowset can be done by using ADODB instead of ADOMD. Since ADODB
	tries to get a rowset, the MSOLAP OLE DB provider gives a flattened rowset.
	
	MORE INFORMATION
	================
	
	The following code demonstrates using ADODB to retrieve a flattened rowset based
	on an OLAP multidimensional cube. This code sample requires the MSOLAP OLEDB
	provider on the SQL Server machine with the FoodMart or FoodMart 2000 OLAP
	database. The MSOLAP OLEDB provider is installed when you install OLAP client
	components from the SQL Server 7.0 or later CD.
	
	Paste the following code into a new Visual Basic ActiveX DLL Project class. Set a
	reference to the Microsoft ActiveX Data Objects (version 2.0 or later) Library.
	Change the project name to ADOBusObj and then compile the application.
	
	  Option Explicit
	  Private strSQL As String
	  Private strConnect As String
	  Private adoCn As ADODB.Connection
	
	  Public Function GetRs() As ADODB.Recordset
	      If Not adoCn Is Nothing Then
	      Else
	          Err.Raise vbObjectError + 98, "GetRs", "No valid Connection"
	      End If
	
	      Dim adoRs As ADODB.Recordset
	
	      Set adoRs = New ADODB.Recordset
	      With adoRs
	          .CursorLocation = adUseClient
	          .ActiveConnection = adoCn
	          .CursorType = adOpenStatic
	          .LockType = adLockBatchOptimistic
	          .Open strSQL
	      End With
	
	      'disConnect the Recordset.
	      Set adoRs.ActiveConnection = Nothing
	
	      'return the Recordset
	      Set GetRs = adoRs
	  End Function
	
	  Private Property Get ConnectStr() As String
	      ConnectStr = strConnect
	  End Property
	
	  Private Property Let ConnectStr(strCn As String)
	      strConnect = strCn
	  End Property
	
	  Public Property Get SQL() As String
	      SQL = strSQL
	  End Property
	
	  Public Property Let SQL(nSQL As String)
	      strSQL = nSQL
	  End Property
	
	  Public Sub ADOConnect(strConnect As String, Optional CmdTimeOut As Integer = 20)
	      Set adoCn = New ADODB.Connection
	      With adoCn
	          .ConnectionString = strConnect
	          .CursorLocation = adUseClient
	          .CommandTimeout = CmdTimeOut
	          .Open
	      End With
	
	      ConnectStr = adoCn
	  End Sub
	
	Paste the following code into a new Visual Basic Standard EXE Project Form in the
	General Declarations section. Set a reference to the ActiveX Data Objects
	(version 2.0 or later) Library. Set a reference to the ActiveX ADOBusObj created
	above. Change the connection string and the SQL string to reflect your OLAP
	server's configuration.
	
	  Option Explicit
	  'For SQL 2000, use the FoodMart 2000 database.
	  Const strConnect = "Data Source=<DataSource>;PROVIDER=MSOLAP;INITIAL CATALOG=FoodMart"
	
	  Private Sub Form_Click()
	      On Error GoTo ErrorHandler
	
	      Dim adoRs As ADODB.Recordset
	      Dim objAdoData As New ADOBusObj.Class1
	
	      With objAdoData
	          .SQL = "Select {[Measures].[Unit Sales]} on columns, " & _
	                     "Non Empty [Store].[Store Name].members on rows From Sales"
	          .ADOConnect strConnect, 20 'Establish connection.
	      End With
	      
	      'Return the Resultset from Data Object.
	      Set adoRs = objAdoData.GetRs
	      
	      Debug.Print adoRs.RecordCount
	      
	      While Not adoRs.EOF
	          Debug.Print adoRs.Fields(0).Value
	          adoRs.MoveNext
	      Wend
	      
	      MsgBox "Success", vbOKOnly, "Data Object"
	      Exit Sub
	      
	      ErrorHandler:
	          MsgBox "Change Failed:" & vbCrLf & Err.Number & vbCrLf & Err.Description, vbOKOnly, "Data Object"
	      Exit Sub
	  End Sub
	
	REFERENCES
	==========
	
	SQL Server 7 Books Online 'Building OLAP Services Applications'.
	SQL Server 7 Books Online 'Installing OLAP Services'.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q234552 HOWTO: Use ADOMD to Return Out of Process Cellset
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbVBp600 kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbADO210sp2 kbADO250 kbADO260 kbATM kbmdac270 kbado270 
	Technology        : kbVBSearch kbAudDeveloper kbADOsearch kbADO210 kbADO201 kbADO200 kbADO210sp1 kbADO210sp2 kbADO250 kbADO260 kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600 kbADO270
	Version           : :2.0,2.01,2.1,2.1 SP1,2.1 SP2,2.5,2.6,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
