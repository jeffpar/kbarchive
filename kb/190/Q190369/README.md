---
layout: page
title: "Q190369: BUG: RDO LastModified Is Not Consistent After Moving EOF"
permalink: /kb/190/Q190369/
---

## Q190369: BUG: RDO LastModified Is Not Consistent After Moving EOF

	Article: Q190369
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0, 6.0
	Operating System(s): 
	Keyword(s): kbcode kbVBp500bug kbVBp600bug kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open an RDO resultset in Visual Basic, if the resultset is positioned
	at the EOF before issuing an AddNew and Update, the LastModified is the bookmark
	of the first item in the resultset instead of the newly added item. If the
	resultset is not positioned at the EOF before the Addnew and Update, the
	LastModified property correctly points to the newly added record.
	
	RESOLUTION
	==========
	
	You can avoid this problem by not positioning the resultset at the EOF before
	issuing the Addnew and Update methods.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Visual Basic 6.0 Standard EXE project.
	
	2. From the Project menu, click References. Select Microsoft Remote Data Object
	  2.0 and click OK.
	
	3. Add a CommandButton to the default form and paste the following code into the
	  CommandButton Click event.
	
	  NOTE: You may need to alter the connection information to allow you to connect
	  to your database.
	
	  Sample Code
	  -----------
	
	        Private Sub Command1_Click()
	
	         Dim Conn As New rdoConnection
	         Dim CSt As String
	         Dim rs As rdoResultset
	         Dim sSQL As String
	         Dim i As Long
	
	         With Conn
	               .CursorDriver = rdUseServer
	               .Connect = "DRIVER={sql server};SERVER=yourserverhere;" & _
	                 "DATABASE=pubs;UID=sa;PWD="
	               .EstablishConnection
	         End With
	         sSQL = "SELECT * FROM titles where pub_id = '0877'"
	         Set rs = Conn.OpenResultset(Name:=sSQL, Type:=rdOpenKeyset, _
	                      LockType:=rdConcurRowVer, Options:=rdExecDirect)
	
	         Conn.BeginTrans
	         '  If the resultset was at EOF before the AddNew and Update,
	         '  LastModified will be the bookmark of the first item in
	         '  the resultset. For instance, the following pubdates will
	         '  be the same. If the resultset is not at EOF, the first
	         '  pubdate will be the date of the newly added row.
	
	         rs.MoveLast  '<<- These lines cause
	         rs.MoveNext  '<<- the problem.
	
	         Debug.Print rs.EOF
	         With rs
	             .AddNew
	             rs("pub_id") = "0877"
	             rs("title_id") = "MC7769"
	             rs("title") = "Test Title"
	             rs("type") = "business"
	             rs("price") = 2.99
	             rs("advance") = 5000
	             rs("pubdate") = "01/01/98"
	             .Update
	
	             If .Bookmarkable Then
	                 .Bookmark = .LastModified
	                 'The following prints the pubdate of the
	                 'first record in the resultset.
	                 Debug.Print "Pub date (last modified)= " _
	                     & rs("title_id")
	                 Debug.Print "Bookmark = " & .Bookmark
	                 'If you do a MoveLast here, you can get
	                 'to the newly added record.
	                 .MoveLast
	                 Debug.Print "Pub date (move last) = " _
	                     & rs("title_id")
	                 Debug.Print "Bookmark = " & .Bookmark
	                 'The following produces the same as
	                 'the LastModified bookmark.
	                 .MoveFirst
	                 Debug.Print "Pub date = (move first) " _
	                     & rs("title_id")
	                 Debug.Print "Bookmark = " & .Bookmark
	             End If
	         End With
	         Conn.RollbackTrans
	
	        End Sub
	
	4. Run this project and click on the CommandButton. You should see that the
	  LastModified property points to the first record in the resultset. If you
	  comment out the lines labeled "These lines cause the problem," then you get
	  the correct value from the LastModified property.
	
	======================================================================
	Keywords          : kbcode kbVBp500bug kbVBp600bug kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0, 6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
