---
layout: page
title: "Q277993: FIX: ActualSize Property of the ADODB Recordset Returns -1"
permalink: /kb/277/Q277993/
---

## Q277993: FIX: ActualSize Property of the ADODB Recordset Returns -1

	Article: Q277993
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.6,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbOLEDB260bug
	Last Modified: 02-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Data Access Components version 2.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The ActualSize property of the ADODB recordset returns -1 after calling the
	Getchunk method to retrieve data.
	
	This problem occurs only when you use the SQLOLEDB provider that ships with MDAC
	2.6 with server-side cursors. This behavior does not occur if:
	
	- The CursorLocation property of the recordset is set to adUseClient.
	- MDAC version 2.5 or earlier is present.
	- A different data provider is used.
	
	RESOLUTION
	==========
	
	Change the cursor location of the Connection object to adUseClient.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem was corrected in Microsoft Data Access Components (MDAC) version
	2.7.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Visual Basic Standard EXE project. Form1 is created by default.
	
	2. On the Project menu, select References, and then set a Reference to Microsoft
	  ActiveX Objects 2.6.
	
	3. Paste the following code into the Form1 code window:
	
	  Private Sub Form_Load()
	
	  Dim cn As ADODB.Connection
	  Dim rec As ADODB.Recordset
	
	  Set cn = New ADODB.Connection
	  'cn.CursorLocation = adUseClient
	  cn.Open "Provider=SQLOLEDB.1;Persist Security Info=False;User ID=sa;password=;Initial Catalog=pubs;Data Source=TestServer"
	
	  Set rec = New ADODB.Recordset
	  rec.Open "select * from pub_info", cn, adOpenKeyset, adLockBatchOptimistic, -1
	  Dim varChunk As Variant
	  MsgBox "Before " + Str(rec.Fields.Item("logo").ActualSize)
	  varChunk = rec.Fields.Item("logo").GetChunk(rec.Fields.Item("logo").ActualSize)
	  MsgBox "After  " + Str(rec.Fields.Item("logo").ActualSize)
	
	  End Sub
	
	4. Make the appropriate changes in the cn.Open statement to supply the required
	  connection parameters to connect to SQL Server.
	
	5. Run the project.
	  Results: The second message box displays a "-1."
	
	6. Stop the project, and uncomment the code line "cn.CursorLocation =
	  adUseClient."
	
	7. Restart the project.
	  Results: The second message box is the same as the first, which is correct.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbOLEDB260bug 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600 kbMDACSearch kbMDAC260
	Version           : :2.6,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
