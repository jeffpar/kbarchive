---
layout: page
title: "Q143263: HOWTO: Use an RDO Prepared Statement to Find a Single Record"
permalink: kb/143/Q143263/
---

## Q143263: HOWTO: Use an RDO Prepared Statement to Find a Single Record

	Article: Q143263
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbRDO kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVBDB
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
	
	RDO does not have a FindFirst or a Seek method and in many cases as a programmer
	you need to find out if a particular record exists or not. This sample uses an
	RDO prepared statement to provide this kind of functionality. The following code
	allows the user to type in a field they would like to search on (for instance,
	OrderID, PONum, LastName), click on a command button and then see a message box
	with the result of the query. This example will only find the first occurrence
	of what you are searching for. You may also want to use a stored procedure once
	you know that your query is working the way that you want it to. Keep in mind
	that RDO is available in Visual Basic 4.0 32-bit and Visual Basic 5.0 Enterprise
	Editions only.
	
	MORE INFORMATION
	================
	
	Step-By-Step Example
	--------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default. Add a
	  CommandButton and a text box. Accept the default names for all.
	
	2. Make sure a reference to the Microsoft Remote Data Object library has been
	  established. In Visual Basic 4.0, you can establish the reference by clicking
	  References from the Tools menu. In Visual Basic 5.0, click References from
	  the Project menu.
	
	3. Add the following code to the General Declarations section of Form1:
	
	        Option Explicit
	        Dim ps As rdoPreparedStatement
	        ' Dim as rdoQuery    rdoquery replace PreparedStatement
	        ' in VB5 and VB6
	        Dim conn As rdoConnection
	        Dim rs As rdoResultset
	
	        Private Sub Form_Load()
	            With rdoEnvironments(0)
	                .CursorDriver = rdUseOdbc
	           Set conn = .OpenConnection("", rdDriverNoPrompt, False, _
	                "driver={SQL Server};
	                server=Myserver;uid=MyUID;pwd=Mypwd;database=pubs")
	            End With
	            Set ps = conn.CreatePreparedStatement("", _
	         '   CreateQuery replaces CreatePreparedStatement in VB5 and VB6
	         '   Set ps = conn.CreateQuery("", _
	                          "select au_lname from authors where au_lname = ?")
	        End Sub
	
	        Private Sub Command1_Click()
	            ps.rdoParameters(0) = Text1.Text
	            If rs Is Nothing Then
	                Set rs = ps.OpenResultset(rdOpenKeyset)
	            Else
	                rs.Requery
	            End If
	            If Not rs.EOF Then
	                Msgbox rs!au_lname
	            Else
	             Msgbox "No record match."
	            End If
	        End Sub
	
	        Private Sub Form_Unload(Cancel As Integer)
	            rs.Close
	            ps.Close
	            conn.Close
	        End Sub
	
	4. Make sure you have an appropriate ODBC data source, user ID, and password,
	  then press F5 to run the program. Type your search criteria in Text1 (for
	  example, "White"), and click the CommandButton. A message box will appear
	  with either the record you are searching for if there is a match, or with a
	  message "No record match" if there is no match.
	
	======================================================================
	Keywords          : kbRDO kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbVB400Search kbVB400
	Issue type        : kbhowto
	
	=============================================================================
	
