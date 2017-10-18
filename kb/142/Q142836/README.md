---
layout: page
title: "Q142836: HOWTO: RDO Prepared Statements/Search Crit. to Fill Listbox"
permalink: kb/142/Q142836/
---

## Q142836: HOWTO: RDO Prepared Statements/Search Crit. to Fill Listbox

	Article: Q142836
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 13-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	RDO does not have a FindFirst or a Seek method. This sample uses an RDO prepared
	statement to provide this kind of functionality. The code included below allows
	the user to type in search criteria in a text box, click a command button and
	the list box will be filled with any records that satisfy the search criteria.
	You may also want to use a stored procedure once you know that your query is
	working the way that you want it to. Keep in mind that RDO is available in
	Visual Basic 4.0 32-bit and Visual Basic 5.0 Enterprise editions only.
	
	MORE INFORMATION
	================
	
	Step-By-Step Example
	--------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default. Add a
	  CommandButton, a text box and a list control. Accept the default names for
	  all.
	
	2. Make sure a reference to the Microsoft Remote Data Object library has been
	  established. In Visual Basic 4.0, you can establish the reference by clicking
	  References from the Tools menu. In Visual Basic 5.0, click References from
	  the Project menu.
	
	3. Add the following code to the General Declarations section of Form1:
	
	      Option Explicit
	      Dim ps As rdoPreparedStatement
	      Dim conn As rdoConnection
	      Dim rs As rdoResultset
	
	      Private Sub Form_Load()
	          With rdoEnvironments(0)
	            .CursorDriver = rdUseOdbc
	      Set conn = .OpenConnection("", rdDriverNoPrompt, False, _
	      "driver={SQL Server};server=Myserv;uid=MyUID;pwd=Mypwd;database=pubs")
	       End With
	          Set ps = conn.CreatePreparedStatement("", " select au_lname " & _
	            "from authors where au_lname like ?")
	      End Sub
	
	      Private Sub Command1_Click()
	        list1.Clear
	        ps.rdoParameters(0) = Text1.Text
	        If rs Is Nothing Then
	            Set rs = ps.OpenResultset(rdOpenKeyset)
	        Else
	            rs.Requery
	        End If
	        While Not rs.EOF
	            list1.AddItem rs!au_lname
	            rs.MoveNext
	        Wend
	        End Sub
	
	      Private Sub Form_Unload(Cancel As Integer)
	        rs.Close
	        conn.Close
	      End Sub
	
	4. Make sure you have an appropriate ODBC data source, user ID, and password,
	  then press the F5 key to run the program. Type your search criteria in Text1
	  and click the CommandButton.
	
	Additional query words: kbVBp400 kbVBp500 vkbVBp600 kbdse kbDSupport kbVBp kbRDO
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbVB400Search kbVB400
	Issue type        : kbhowto
	
	=============================================================================
	
