---
layout: page
title: "Q294469: PRB: Error &quot;Cannot Update the Cursor&quot; When You Modify Tables"
permalink: /kb/294/Q294469/
---

## Q294469: PRB: Error &quot;Cannot Update the Cursor&quot; When You Modify Tables

{% raw %}

	Article: Q294469
	Product(s): Microsoft FoxPro
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbATM kbODBC kbvfp KbDBFDBC kbGrpDSFox kbDSupport
	Last Modified: 17-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for Visual FoxPro, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You can use the Execute Action Query option to manipulate data in database
	tables. When you execute SQL Action queries (such as INSERT, UPDATE or DELETE)
	on a Visual FoxPro table, you may receive the following error message:
	
	  Run-time error '-2147467259 (80004005)':
	
	  [Microsoft][ODBC Visual FoxPro Driver]Cannot update the cursor.
	
	CAUSE
	=====
	
	This error occurs if you select the Read-Only check box for the Visual FoxPro
	file. To review the file attributes, right-click the Visual FoxPro file, click
	Properties, and then click the General tab.
	
	RESOLUTION
	==========
	
	To resolve this problem, make sure that you clear Read-Only check box for the
	Visual FoxPro file.
	
	MORE INFORMATION
	================
	
	You can use the Execute method (with Data Access Object or Microsoft ActiveX
	Data Objects libraries, for example) to execute Action queries on the Connection
	object. The following sample code uses the ActiveX Data Objects (ADO) library to
	reproduce the above-mentioned error. The sample code creates a test Visual
	FoxPro table named T1.Dbf, and then uses the INSERT SQL Action Query to add
	records.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open a new Visual Basic standard EXE project. Form1 is created by default.
	
	2. Set a reference to the Microsoft ActiveX Data Objects library.
	
	3. Place two command buttons (CreateTable and ADOExecute) on Form1.
	
	4. Add the following code to Form1:
	
	  Dim conADO As ADODB.Connection
	
	  Private Sub CreateTable_Click()
	
	      conADO.Execute "CREATE TABLE T1 (col1 Int, col2 Int)", , adExecuteNoRecords
	      MsgBox "FoxPro file created."
	      
	  End Sub
	
	  Private Sub Form_Load()
	      Dim strCon As String
	      
	      CreateTable.Caption = "Create FoxPro File"
	      ADOExecute.Caption = "Execute Action Query"
	      
	      strCon = "Driver={Microsoft Visual FoxPro Driver};" & _
	               "SourceType=DBF;" & _
	               "SourceDB=" & App.Path & "\;" & _
	               "Exclusive=No;"
	                   
	      Set conADO = New ADODB.Connection
	      conADO.Open strCon
	
	  End Sub
	
	  Private Sub ADOExecute_Click()
	      Dim strSQL As String
	      Dim numRec As Integer
	      
	      strSQL = "Insert Into T1 values(1,100)"
	
	      conADO.Execute strSQL, numRec, adExecuteNoRecords
	      
	      MsgBox "Records Affected = " & numRec
	      
	  End Sub
	
	  Private Sub Form_Unload(Cancel As Integer)
	      conADO.Close
	      Set conADO = Nothing
	
	  End Sub
	
	5. Run the project, and then click Create FoxPro File.
	
	6. Click Execute Action Query, and notice that it executes successfully.
	
	7. Select the Read-Only check box for the T1.dbf file.
	
	8. Click Execute Action Query again, and you receive the above-mentioned error.
	
	Additional query words: -2147467259 (80004005)
	
	======================================================================
	Keywords          : kbATM kbODBC kbvfp KbDBFDBC kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbODBCSearch kbODBCVFP500
	Version           : :5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
