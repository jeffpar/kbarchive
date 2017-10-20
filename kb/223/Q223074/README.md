---
layout: page
title: "Q223074: FIX: Update Does Not Time Out if Data Is Locked"
permalink: /kb/223/Q223074/
---

## Q223074: FIX: Update Does Not Time Out if Data Is Locked

{% raw %}

	Article: Q223074
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbRDO kbRDO200 kbVBp600 kbVS600sp2 kbVS600SP1 kbVS600sp3fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you're trying to update your rdoResultset on an rdoConnection with a
	CursorDriver of rdUseOdbc, the attempt to update the data in your database will
	not time out if that data is locked.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	When you attempt to update data that is locked, most client-server databases,
	such as SQL Server and Oracle, keep trying to update that data until the length
	of time specified in the QueryTimeout value has expired. With RDO 2.0 prior to
	Visual Studio 6.0 Service Pack 3, the QueryTimeout information was not specified
	in the attempt to update and the attempt would never time out.
	
	This problem only occurs when using an rdoConnection with a value of rdUseOdbc
	for the CursorDriver property. With all other values for the CursorDriver
	property, this behavior does not occur.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Visual Basic project.
	
	2. Add a reference to RDO 2.0 in your project.
	
	3. Add the following code to your project.
	
	  Private Sub Form_Load()
	      Dim cn1 As rdoConnection, cn2 As rdoConnection
	      Dim rs1 As rdoResultset
	      Dim strConn As String, strSQL As String
	      
	      strConn = "Driver={SQL Server};Server=MyServer;" & _
	                "Database=pubs;UID=MyUID;PWD=MyPWD;"
	      strSQL = "SELECT * FROM Authors"
	      
	      Set cn1 = New rdoConnection
	      cn1.CursorDriver = rdUseOdbc
	      cn1.Connect = strConn
	      cn1.EstablishConnection
	          
	      Set rs1 = cn1.OpenResultset(strSQL, rdOpenKeyset, rdConcurValues)
	      
	      Set cn2 = New rdoConnection
	      cn2.CursorDriver = rdUseOdbc
	      cn2.Connect = strConn
	      cn2.EstablishConnection
	      cn2.BeginTrans
	      strSQL = "UPDATE Authors SET Au_FName = 'Test1' " & _
	               "WHERE Au_ID = '" & rs1!Au_ID & "'"
	      cn2.Execute strSQL
	
	      rs1.Edit
	      rs1!Au_FName = "Test2"
	      rs1.Update
	      
	      cn2.RollbackTrans
	      cn2.Close
	      Set cn2 = Nothing
	      
	      rs1.Close
	      Set rs1 = Nothing
	      cn1.Close
	      Set cn1 = Nothing
	  End Sub
	
	This code assumes that you are using RDO 2.0 to communicate with SQL Server 6.5
	or 7.0. You need to modify the connection string to communicate with your
	database. If you're not using SQL Server, you might also need to modify the
	query strings.
	
	4. Run the project.
	
	If you're using the version of RDO 2.0 that ships with Visual Studio 6.0 Service
	Pack 3, you'll receive an error message stating that the timeout expired. If
	you're using an earlier version of RDO 2.0 (6.00.8169 or prior), the attempt to
	update your data will not time out.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbRDO kbRDO200 kbVBp600 kbVS600sp2 kbVS600SP1 kbVS600sp3fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
