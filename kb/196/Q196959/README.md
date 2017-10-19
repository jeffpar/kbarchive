---
layout: page
title: "Q196959: PRB:'Unspecified Error' Err Using ADO Data Marshalling w/ DCOM"
permalink: /kb/196/Q196959/
---

## Q196959: PRB:'Unspecified Error' Err Using ADO Data Marshalling w/ DCOM

	Article: Q196959
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbADO200 kbDatabase kbMTS kbVBp kbVBp600 kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbADO210sp2
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- ActiveX Data Objects (ADO), version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you executing an ActiveX Data Objects (ADO) UpdateBatch on a disconnected
	recordset through Microsoft Transaction Server (remote) or Distributed Component
	Object Model (DCOM), the following error may occur:
	
	  Unspecified Error.
	
	If you are trying to assign a date value in a recordset with quotes around it,
	you get an 'Unspecified Error' only when attempting to do an UpdateBatch on the
	recordset remotely. This problem does not occur if the ADO component is running
	on the same computer as the client .exe.
	
	RESOLUTION
	==========
	
	There are two possible workarounds:
	
	1. Upgrade both the server and the client to Microsoft Data Access Objects 2.1
	  Service Pack 2 or later. The "Unspecified error" does not occur with a client
	  and a server both using Microsoft Data Access Objects 2.1 Service Pack 2 or
	  later.
	
	2. Put # signs around the date value when assigning to the resultset field. For
	  example, rs.Value = #12/31/9999# instead of rs.Value = "12/31/9999."
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem has been fix in Microsoft Data Access Objects 2.1 Service Pack 2.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The steps in this section encompass four sections:
	
	- Creating the SQL Server table.
	
	- Creating the Visual Basic ActiveX .dll.
	
	- Creating the Visual Basic Standard EXE.
	
	- Setting up Microsoft Transaction Server Explorer.
	
	Creating the SQL Server Table
	-----------------------------
	
	1. Start ISQL_w and execute the following script to create the test table for
	  the ADO sample code. After executing the script you may close ISQL_w:
	
	        CREATE TABLE dbo.TestTable_SN
	        (
	           col1 varchar (25) NOT NULL DEFAULT (user_name()),
	           col2 datetime NOT NULL DEFAULT (getdate())
	        )
	        GO
	
	Start Visual Basic and Create an ActiveX DLL Project
	----------------------------------------------------
	
	1. From the Project menu, choose References and select the Microsoft Data Access
	  Objects 2.0 Library and the Microsoft Data Access Objects Recordset 2.0
	  Library.
	
	2. Paste the following code in the <Class> for the project:
	
	        Private strSQL As String
	        Private strConnect As String
	        Dim ADOCn As ADODB.Connection
	
	        Public Function GetData() As ADOR.Recordset
	         If Not ADOCn Is Nothing Then
	          Else
	           Err.Raise vbObjectError + 98, "ADOGetData", "No valid Connection"
	          End If
	          Dim ADORs As ADOR.Recordset
	          Set ADORs = New ADOR.Recordset
	          With ADORs
	             .CursorLocation = adUseClient
	             .ActiveConnection = ADOCn
	             .CursorType = adOpenForwardOnly
	             .LockType = adLockBatchOptimistic 'batch updates.
	             .Open strSQL
	          End With
	
	           'DisConnect the Recordset from the connection.
	          Set ADORs.ActiveConnection = Nothing
	          Set GetData = ADORs
	          Set ADORs = Nothing
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
	
	        Public Sub UpdateRS(ByVal ClientRs As ADOR.Recordset)
	            Dim ADORs As New ADOR.Recordset
	            If Not ADOCn Is Nothing Then
	            Else
	             Err.Raise vbObjectError + 99, "ADOUpdate", "No valid Connection"
	            End If
	            ADORs.ActiveConnection = strConnect
	            ADORs.Open ClientRs
	            ADORs.UpdateBatch
	
	        End Sub
	
	        Public Sub ADOConnect(strConnect As String, Optional CnTimeOut As _
	            Integer = 20)
	           Set ADOCn = New ADODB.Connection
	           With ADOCn
	              .Provider = "MSDASQL"  '"SQLOLEDB"
	              .CursorLocation = adUseClient
	              .ConnectionString = strConnect
	              .CommandTimeout = CnTimeOut
	              .Open
	           End With
	           ConnectStr = ADOCn
	         End Sub
	
	3. Rename the Class to ADOData.
	
	4. Rename the Project to ADOProc.
	
	5. Compile the project and an ActiveX DLL named ADOProc.dll will be created and
	  registered.
	
	Creating a New Standard EXE Project to Call the DLL
	---------------------------------------------------
	
	1. Open a new project and create a Standard EXE application.
	
	2. From the Project menu, choose References and select the Microsoft Data Access
	  Objects 2.0 Library and the Microsoft Data Access Objects Recordset 2.0
	  Library and ADOProc.
	
	3. Add a Command button to the form.
	
	4. Add a text box to the form and change the name to txtValue.
	
	5. Paste the following code into the General Declarations section of the form:
	
	NOTE: You may need to change the connect string to work in your environment.
	
	        Const strConnect = "Driver={SQL _
	           Server};Server=(local);Database=Pubs;Uid=Sa;Pwd="
	
	        Private Sub Command1_Click()
	           On Error GoTo ErrorHandler
	
	           Dim ADORs As ADOR.Recordset
	           Dim objADOData As ADOProc.ADOData
	           Dim rField As ADODB.Field
	           Dim iValue As Byte
	
	           ' Instantiate the Data Object.
	           Set objADOData = New ADOProc.ADOData
	           With objADOData
	              .SQL = "SELECT * FROM TestTable_SN"
	              .ADOConnect strConnect, 15 'Establish connection.
	           End With
	
	           Set ADORs = New ADOR.Recordset
	           ' Rtrn the Resultset from Data object.
	           Set ADORs = objADOData.GetData
	           ' The Resultset is disConnected at this point.
	
	           ADORs.AddNew
	
	           ' Fails (Remotely - DCOM) if quotes around the
	           ' Date value instead of pound sign.
	           ADORs(0) = App.EXEName
	           ADORs(1) = #12/12/98#
	
	           ADORs.MarshalOptions = adMarshalModifiedOnly
	           objADOData.UpdateRS ADORs
	           MsgBox "Data Changed", vbOKOnly, "Data Object"
	         Exit Sub
	
	         ErrorHandler:
	         MsgBox "Change Failed:" & vbCrLf & Err.Number & vbCrLf & _
	           Err.Description, vbOKOnly, "Data Object"
	         Debug.Print Err.Number & vbCrLf & Err.Description
	         Exit Sub
	         End Sub
	
	Setting up Microsoft Transaction Server Explorer
	------------------------------------------------
	
	1. Compile the Client application (the Standard EXE) and build a setup/install
	  package with the Application Setup Wizard in Visual Basic 5.0 and the Package
	  and Deployment Wizard for Visual Basic 6.0.
	
	  NOTE: For more information about using these, please refer to the Online help.
	
	2. Copy the install/setup program for the Client application to the remote
	  computer and run the install.
	
	3. On the server, start Microsoft Transaction Server Explorer.
	
	4. Navigate to Microsoft Transaction Server, Computers, My Computer, Packages
	  Installed.
	
	5. Right-click Packages Installed and select New Package.
	
	6. Create a new Empty Package, enter a name for the package, click Next twice,
	  then click Finish.
	
	7. Navigate to your new package by name then navigate to the Component folder.
	
	8. Click Component then right-click Component. Select New-Component then choose
	  "Import Components that are already Registered."
	
	9. Scroll down to the ADOProc.ADOData component and click Finish.
	
	10. Export the package to the second computer by right-clicking the Package
	  folder (for your new package) and selecting Export.
	
	11. Browse to the computer to export the package and then name the exported
	  package.
	
	12. On the client computer (where you exported the package), run the client
	  Setup .exe to install/register the package on the remote client.
	
	13. When the Client application is installed run the application and you should
	  not see any errors.
	
	14. Change the Client application to see the error by modifying the Visual Basic
	  code as indicated in the source. That is, put quotes around the date value
	  and recompile the Client application. Next, copy the client EXE file to the
	  remote computer and rerun it. You should see an 'Unspecified Error' error
	  message this time.
	
	NOTE: The only difference in the code is the # signs around the date value.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q186342 HOWTO: Create a 3-Tier App using VB, MTS and SQL Server
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbADO200 kbDatabase kbMTS kbVBp kbVBp600 kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbADO210sp2fix kbATM 
	Technology        : kbVBSearch kbAudDeveloper kbADOsearch kbADO200 kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : :2.0,5.0,6.0
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
