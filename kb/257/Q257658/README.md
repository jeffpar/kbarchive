---
layout: page
title: "Q257658: BUG: BatchCollisionCount Incorrect After BatchUpdate to SQL 7.0"
permalink: /kb/257/Q257658/
---

## Q257658: BUG: BatchCollisionCount Incorrect After BatchUpdate to SQL 7.0

	Article: Q257658
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0; winnt:7.0
	Operating System(s): 
	Keyword(s): kbDatabase kbEEdition kbRDO kbSQLServ kbVBp600 kbVBp600bug kbSQLServ700 kbGrpDSVBDB kbG
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SQL Server version 7.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you perform a BatchUpdate from an rdoResultSet object to a Microsoft SQL
	Server 7.0 database, the BatchCollisionCount property is set incorrectly.
	
	RESOLUTION
	==========
	
	To work around this problem you can use Microsoft ActiveX Data Objects to
	connect to SQL Server 7.0.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In Microsoft Visual Basic 6.0, create a new Standard EXE project. Form1 is
	  added by default.
	
	2. Remove Form1, and then add a standard code module.
	
	3. From the Project menu, click References. In the References dialog box, select
	  Microsoft Remote Data Object 2.0.
	
	4. Paste the code that follows into the code window for the module.
	
	  NOTE: Make sure that you modify the Connect property to connect to your SQL
	  Server 7.0 server:
	
	  Public Sub Main()
	      Dim cn As New rdoConnection
	      Dim rs As rdoResultset
	      
	      cn.CursorDriver = rdUseClientBatch
	      cn.Connect = "driver={sql server};server=ServerName;" & _
	                   "database=pubs;uid=username;pwd=password;"
	      cn.EstablishConnection
	      
	      Set rs = cn.OpenResultset("SELECT * FROM Authors", rdOpenKeyset, rdConcurBatch)
	      cn.Execute "UPDATE Authors SET au_lname = 'NewLastName'"
	          
	      rs.MoveFirst
	      rs.Edit
	      rs!au_lname = "* RS UPDATE 1 *"
	      rs.Update
	      
	      rs.MoveNext
	      rs.Edit
	      rs!au_lname = "* RS UPDATE 2 *"
	      rs.Update
	      
	      rs.MoveNext
	      rs.Edit
	      rs!au_lname = "* RS UPDATE 3 *"
	      rs.Update
	      
	      rs.BatchUpdate
	      
	      If (rs.BatchCollisionCount = 3) Then
	          Debug.Print "BatchCollisionCount PASSED!! Count = " & _
	              rs.BatchCollisionCount
	      Else
	          Debug.Print "BatchCollisionCount FAILED!! Count = " & _
	              rs.BatchCollisionCount
	      End If
	  End Sub
	
	5. Run the application.
	
	6. From the View menu, click Immediate Window.
	
	RESULTS: In the Immediate (Debug) window, note that the BatchCollisionCount is
	reported to be zero (0) or one (1). However, the BatchCollisionCount should be
	3.
	
	Additional query words: sp4 RDO
	
	======================================================================
	Keywords          : kbDatabase kbEEdition kbRDO kbSQLServ kbVBp600 kbVBp600bug kbSQLServ700 kbGrpDSVBDB kbGrpDSMDAC kbDSupport 
	Technology        : kbVBSearch kbSQLServSearch kbAudDeveloper kbZNotKeyword6 kbSQLServ700 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0; winnt:7.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
