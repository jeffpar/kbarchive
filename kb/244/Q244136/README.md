---
layout: page
title: "Q244136: INFO: When Is the Access AutoNumber Field Available?"
permalink: /kb/244/Q244136/
---

## Q244136: INFO: When Is the Access AutoNumber Field Available?

{% raw %}

	Article: Q244136
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.1,2.1 SP1,2.1 SP2,2.5,2.6,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbJET kbMDAC kbODBC kbOLEDB210 kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbMDAC250
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- ActiveX Data Objects (ADO), versions 2.1, 2.1 SP1, 2.1 SP2, 2.5, 2.6, 2.7 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Access AutoNumber field is always available when a server-side cursor is
	used. When a client-side cursor is used, the AutoNumber field is only returned
	immediately when an Access 2000 database is used with OLE DB Provider for Jet
	4.0 driver and with the Jet 4.0 ODBC driver.
	
	MORE INFORMATION
	================
	
	The following table shows when the AutoNumber field is immediately available
	without a requery.
	
	Client-side cursor for Access 97 and 2000 with different drivers:
	
	+-------------------------------------------------------------------------------------------+
	| Driver          | Access 97 | Access 2000                  | Office XP                    | 
	+-------------------------------------------------------------------------------------------+
	| Jet OLE DB 3.51 | NO        | Unrecognized Database Format | Unrecognized Database Format | 
	+-------------------------------------------------------------------------------------------+
	| Jet OLE DB 4.0  | Returns 0 | YES                          | YES                          | 
	+-------------------------------------------------------------------------------------------+
	| Jet ODBC 3.51   | NO        | NO                           | NO                           | 
	+-------------------------------------------------------------------------------------------+
	| Jet ODBC 4.0    | Returns 0 | YES                          | YES                          | 
	+-------------------------------------------------------------------------------------------+
	
	The following code sample demonstrates the results shown in the above table:
	
	1. Open a standard EXE project in Visual Basic. Form1 is created by default.
	
	2. Under Project References, select Microsoft ActiveX Data Objects .
	
	3. Place two CommandButtons on the form.
	
	4. Paste the following code in the form code window:
	
	  Dim cn As ADODB.Connection
	  Dim rs As ADODB.Recordset
	
	  Private Sub Command1_Click()
	     rs.Open "select * from ORDERS", cn, adOpenKeyset, adLockOptimistic
	  End Sub
	
	  Private Sub Command2_Click()
	     rs.AddNew
	     rs!CustomerID = "ALFKI"
	     rs!EmployeeID = 1
	     rs.UpdateBatch
	     Debug.Print rs!OrderID & Chr(9) & rs!CustomerID & Chr(9); rs!EmployeeID
	  End Sub
	
	  Dim sconnect As String
	
	  Private Sub Form_Load()
	   Dim sconnect As String
	   
	   Set cn = New ADODB.Connection
	   Set rs = New ADODB.Recordset
	   
	   'Change the paths to the mdb's in the following statements for your machine;
	   'Uncomment ONE of the statements to set sconnect to a valid connection string.
	   
	  ' Using JETOLEDB drivers
	   
	   'Test Office 97 using JETOLEDB
	  'sconnect = "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=D:\Program Files\Microsoft Visual Studio\VB98\nwind.mdb"
	  'sconnect = "Provider=Microsoft.Jet.OLEDB.3.51;Data Source=D:\Program Files\Microsoft Visual Studio\VB98\nwind.mdb"
	
	  ' Test Office 2000 using JETOLEDB
	  'sconnect = "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=D:\Program Files\Office2000\Office\Samples\northwind.mdb"
	  'sconnect = "Provider=Microsoft.Jet.OLEDB.3.51;Data Source=D:\Program Files\Office2000\Office\Samples\northwind.mdb"
	
	  'Test Office XP using JETOLEDB
	  'sconnect = "Provider=Microsoft.Jet.OLEDB.3.51;Data Source=D:\Program Files\Microsoft Office\Office10\Samples\northwind.mdb"
	  'sconnect = "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=D:\Program Files\Microsoft Office\Office10\Samples\northwind.mdb"
	
	  ' Using ODBC drivers
	
	  'Test Office 97 using ODBC drivers
	  'sconnect = "Driver={Microsoft Access Driver (*.mdb)};" & _
	                          "Dbq=nwind.mdb;" & _
	                          "DefaultDir=D:\Program Files\Microsoft Visual Studio\VB98\;" & _
	                          "Uid=Admin;Pwd=;" '
	                        
	  'Test Office 2000 / 9 using ODBC drivers
	  'sconnect = "Driver={Microsoft Access Driver (*.mdb)};" & _
	                          "Dbq=northwind.mdb;" & _
	                          "DefaultDir=D:\Program Files\Microsoft Office\Office\Samples;" & _
	                          "Uid=Admin;Pwd=;"
	
	  'Test Office XP / 10 using ODBC drivers
	  'sconnect = "Driver={Microsoft Access Driver (*.mdb)};" & _
	                          "Dbq=northwind.mdb;" & _
	                          "DefaultDir=D:\Program Files\Microsoft Office\Office10\Samples;" & _
	                          "Uid=Admin;Pwd=;"
	
	  cn.CursorLocation = adUseClient
	  'cn.CursorLocation = adUseServer
	  cn.Open sconnect
	  End Sub
	
	REFERENCES
	==========
	
	For additional information, please click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q190370 PRB: AutoNumber Field Is Not Incremented When Using ADO
	
	  Q220888 PRB: Error Message Returned with Server-Side Cursorlocation for MS
	  Access Database with DataEnvironment
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbJET kbMDAC kbODBC kbOLEDB210 kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbMDAC250 kbMDAC260 kbADO260 kbATM kbmdac270 kbado270 
	Technology        : kbVBSearch kbAudDeveloper kbADOsearch kbADO210 kbADO210sp1 kbADO210sp2 kbADO250 kbADO260 kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600 kbADO270
	Version           : :2.1,2.1 SP1,2.1 SP2,2.5,2.6,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
