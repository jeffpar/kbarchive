---
layout: page
title: "Q142834: INFO: Limiting Number of Rows Returned in Resultset with RDO"
permalink: /kb/142/Q142834/
---

## Q142834: INFO: Limiting Number of Rows Returned in Resultset with RDO

	Article: Q142834
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	RDO provides a means to limit the number of rows returned by a query. The
	following code calls a stored procedure that returns a resultset but limits the
	resultset to 10 rows. This example retrieves the 10 rows and fills a list box
	with the resultset. Keep in mind that RDO is 32-bit only.
	
	MORE INFORMATION
	================
	
	1. Start a new project in Visual Basic 4.0 (32-bit version). Form1 is created by
	  default. Add a command button and a list control. Accept the default names
	  for all.
	
	2. Create a prepared statement on your server machine with this text:
	
	     CREATE PROCEDURE GetRows AS
	     select * from authors
	
	3. Add the following code to the Command1_Click event. Be sure to change the
	  parameters in the OpenConnection method to match your database.
	
	     Private Sub Command1_Click()
	         Dim x As Integer
	         Dim ps As rdoPreparedStatement
	         Dim conn As rdoConnection
	         Dim rs As rdoResultset
	
	         With rdoEnvironments(0)
	             .CursorDriver = rdUseOdbc
	             Set conn = .OpenConnection("", rdDriverNoPrompt, False, _
	             "driver={SQL Server};
	             server=Myserver;uid=MyUID;pwd=Mypwd;database=pubs")
	         End With
	         Set ps = conn.CreatePreparedStatement("", "{call getRows}")
	         ps.MaxRows = 10
	         Set rs = ps.OpenResultset(rdOpenKeyset)
	         'Set rs = ps.OpenResultset(rdOpenKeyset)
	         While Not rs.EOF
	             List1.AddItem CStr(x) & "  " & rs(1)
	             rs.MoveNext
	             x = x + 1
	         Wend
	         rs.Close
	         ps.Close
	         conn.Close
	
	     End Sub
	
	4. Press F5 to run the program and click on the command button. The list box
	  will be filled with only 10 rows because the result set has been limited to
	  10 rows by the ps.MaxRows = 10 line of code.
	
	Additional query words: kbVBp500 kbVBp400
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500 kbVB400Search kbVB400
	Issue type        : kbinfo
	
	=============================================================================
	
