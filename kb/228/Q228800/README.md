---
layout: page
title: "Q228800: HOWTO: Call a Parameterized SQL Server Stored Procedure from RDO"
permalink: /kb/228/Q228800/
---

## Q228800: HOWTO: Call a Parameterized SQL Server Stored Procedure from RDO

{% raw %}

	Article: Q228800
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbRDO kbRDO200 kbSQLServ kbStoredProc kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows how the rdoQuery object can be used to call a parameterized
	SQL Server stored procedure.
	
	MORE INFORMATION
	================
	
	The sample in this article uses the Pubs database in SQL Server to demonstrate
	the use of the RDO query object to call parameterized queries. The Pubs database
	contains a stored procedure called byroyalty that accepts an integer parameter
	and returns all authors from the Titleauthor table whose royalty amount matches
	the passed value. Although this stored procedure does not return any values to
	the caller, the example reserves space for a return value in the Parameters
	collection for illustrative purposes.
	
	Create and execute the following program. It calls the byroyalty stored procedure
	in the SQL Server Pubs sample database. Then, it prints values from the returned
	recordset in the debug window. Substitute a valid Server, User ID and Password
	in the connection string.
	
	Sample Code
	-----------
	
	  Private Sub Command1_Click()
	
	  Dim rs As rdoResultset
	  Dim cn As New rdoConnection
	  Dim qd As New rdoQuery
	  Dim cl As rdoColumn
	  	
	  cn.Connect = "uid=sa;pwd=;server=MyServer;" _
	      & "driver={SQL Server};database=pubs;" _
	      & "DSN='';"
	  cn.CursorDriver = rdUseOdbc
	  cn.EstablishConnection rdDriverNoPrompt
	
	  Set qd.ActiveConnection = cn
	  qd.SQL = "{ ? = call dbo.ByRoyalty (?) }"
	      
	  qd(0).Direction = rdParamReturnValue
	  qd(1).Direction = rdParamInput
	
	  qd.rdoParameters(1) = 100
	
	  Set rs = qd.OpenResultset(rdOpenForwardOnly, rdConcurReadOnly)
	
	  For Each cl In rs.rdoColumns
	      Debug.Print cl.Name,
	  Next
	      Debug.Print
	
	     Do Until rs.EOF
	       For Each cl In rs.rdoColumns
	          Debug.Print cl.Value,
	  	    Next
	  	    rs.MoveNext
	  	    Debug.Print
	          Loop
	
	  	rs.Close
	  	qd.Close
	  	cn.Close
	
	  End Sub
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q177358 HOWTO: Pass a Date Value to a Oracle Stored Procedure
	
	  Q174981 HOWTO: Retrieve Typical Resultsets From Oracle Stored Procedures
	
	  Q166211 HOWTO: Call SQL Server System Stored Procedures from RDO Procedures
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbRDO kbRDO200 kbSQLServ kbStoredProc kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
