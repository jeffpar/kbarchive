---
layout: page
title: "Q172313: FIX: Using ODBCDirect, Transactions and Oracle Causes Hang"
permalink: /kb/172/Q172313/
---

## Q172313: FIX: Using ODBCDirect, Transactions and Oracle Causes Hang

{% raw %}

	Article: Q172313
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbDriver kbODBC kbOracle kbVS kbODBC200fix kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbMDACNoS
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When connecting to an Oracle database using DAO and ODBCDirect, the application
	hangs when an Insert statement is within a Begin/Commit Transaction and that
	procedure is called the second time.
	
	CAUSE
	=====
	
	This is caused by a known problem in the Microsoft ODBC Driver for Oracle,
	Msorcl10.dll, version 1.0.
	
	RESOLUTION
	==========
	
	To work around this problem the QueryTimeout property of the Connection object
	must be set to zero (0). Uncomment the following line of code to make the
	example run without error:
	
	     Cn.QueryTimeout = 0
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft ODBC Driver for
	Oracle, Msorcl10.dll. This issue has been resolved with the 2.0, or higher,
	version of the Microsoft Oracle ODBC Driver. This driver can be obtained in
	Visual Studio 5.0 and higher, MDAC 1.5 or higher, and the Data Access Software
	Development Kit (SDK).
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Standard EXE project with two Command Buttons on the new Form.
	
	2. Add this code to the General Declarations section:
	
	        Option Explicit
	        Dim Ws As Workspace
	        Dim Cn As Connection
	        '
	        ' Note that the parameters in the connection string must be changed
	        ' to match your configration.
	
	        Private Sub Command1_Click()
	           On Error Resume Next
	           MousePointer = vbHourglass
	           Cn.Execute "DROP TABLE CODETEST"
	           Cn.Execute "CREATE TABLE CODETEST(CODE VARCHAR2(10) NULL)"
	           MousePointer = vbNormal
	           MsgBox "Table Created"
	        End Sub
	
	        Private Sub Command2_Click()
	        Dim strSQL As String
	        Dim Qd As QueryDef
	        Dim txtValue As String
	
	        txtValue = "abc"
	           Ws.BeginTrans
	
	           strSQL = "insert into codetest (code) values ('" & txtValue & "')"
	           Set Qd = Cn.CreateQueryDef("", strSQL)
	           Qd.Execute  'Fails here the second time
	           If (Err.Number <> 0) Then
	               MsgBox ("[cmdExecute_Click] - " + Err.Description)
	           Else
	               Qd.Close
	           End If
	
	          Ws.CommitTrans
	
	        MsgBox "Click me again and I will crash"
	
	        End Sub
	
	        Private Sub Form_Load()
	        Dim strConn As String
	           Command1.Caption = "Create Table"
	           Command2.Caption = "Enter Data"
	
	           'Replace <data source name>, <user ID>, and <password> with the
	           'DSN, user ID, and password for your Oracle system.
	
	           strConn = "odbc;dsn=<data source name>; _
	           uid=<user ID>;pwd=<password>"
	           Set Ws = CreateWorkspace("", "admin", "", dbUseODBC)
	           Set Cn = Ws.OpenConnection("", dbDriverNoPrompt, False, strConn)
	
	          'Cn.QueryTimeout = 0 ' This is the workaround line of code
	
	        End Sub
	
	        Private Sub Form_Unload(Cancel As Integer)
	           Cn.Close
	           Ws.Close
	        End Sub
	
	3. Change the <data source name>, <user ID>, and <password> in
	  the connect string (strConn) to the DSN, user ID, and password for your
	  Oracle system.
	
	4. Save the Project.
	
	5. Run the Project by pressing F5.
	
	6. Click on the Create Table button (The user database may have to be changed in
	  the code to match your setup).
	
	7. Click on the Enter Data button. The first time one record is inserted.
	  Clicking on the "Enter Data" button the second time will hang the
	  application. Go into the Task Manager (CNTL, ALT, DELETE) to Exit the app.
	
	Additional query words: kbODBC kbOracle kbDatabase kbDriver kbVB kbDAO
	
	======================================================================
	Keywords          : kbDriver kbODBC kbOracle kbVS kbODBC200fix kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbMDACNoSweep 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500
	Version           : :5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
