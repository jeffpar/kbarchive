---
layout: page
title: "Q172375: HOWTO: Undo Updates for a Single Row with CancelBatch"
permalink: /kb/172/Q172375/
---

## Q172375: HOWTO: Undo Updates for a Single Row with CancelBatch

	Article: Q172375
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Visual Basic documentation states that the Status property of an
	rdoResultset object can be modified to arrange whether the current row will be
	updated and if it is updated, how it will be updated. It is a common desire to
	set the Status to rdRowUnmodified so that no updates are made to the current
	row. However, this is an error in the documentation because the Status property
	is read-only and cannot be modified at run-time.
	
	Although less intuitive, undoing changes for the current row of an rdoResultset
	object can be accomplished with the CancelBatch method using the optional
	parameter, SingleRow.
	
	MORE INFORMATION
	================
	
	When you use the optimistic batch cursor library, the CancelBatch method of the
	rdoResultset object cancels all uncommitted changes in the local cursor. By
	using the optional parameter, SingleRow, you can cancel a change to a particular
	row only.
	
	Step-by-step example
	--------------------
	
	1. Start Visual Basic and create a standard EXE. Form1 is added by default.
	
	2. Add a reference to "Microsoft Remote Data Object 2.0" in Project/ References.
	
	3. Add two CommandButtons, called Command1 and Command2, to Form1.
	
	4. Set the Caption property of Command1 to "Edit and Undo" and the Caption
	  property of Command2 to "Delete and Undo".
	
	5. Copy and paste the following code to the General Declarations section of
	  Form1:
	
	       Dim cn As New rdoConnection
	       Dim rs As rdoResultset
	
	       Private Sub Form_Load()
	
	           cn.CursorDriver = rdUseClientBatch
	           cn.Connect = "dsn=my_pubs_server;uid=sa;pwd="
	           cn.EstablishConnection rdDriverNoPrompt, False
	           Set rs = cn.OpenResultset("select * from authors", rdOpenStatic, _
	                                     rdConcurBatch)
	
	       End Sub
	
	       Private Sub Command1_Click()
	
	           rs.MoveFirst
	           rs.Edit
	           rs(1) = "New Value"
	           rs.Update
	
	           MsgBox "Status before CancelBatch: " & rs.Status
	           rs.CancelBatch SingleRow:=True
	           MsgBox "Status after CancelBatch: " & rs.Status
	
	       End Sub
	
	       Private Sub Command2_Click()
	
	           rs.MoveFirst
	           rs.Delete
	           rs.MoveNext
	
	           On Error Resume Next
	           rs.AbsolutePosition = 1
	           MsgBox "Status before CancelBatch: " & rs.Status
	           rs.CancelBatch SingleRow:=True
	           MsgBox "Status after CancelBatch: " & rs.Status
	
	       End Sub
	
	       Private Sub Form_Unload(Cancel As Integer)
	
	           rs.Close
	           cn.Close
	
	           Set rs = Nothing
	           Set cn = Nothing
	
	       End Sub
	
	6. Finally, press the F5 key to run.
	
	NOTE: In Command2_Click, the Move methods do not recognize deleted rows.
	Therefore, the AbsolutePosition property was used to position the current row to
	the deleted row. Also, run-time error "40056" occurs when the current row
	positions to a deleted row. By using "On Error Resume Next", this error can be
	trapped and ignored.
	
	Additional query words: kbVBp500 kbVBp600 kbdse kbDSupport kbVBp kbRDO
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Issue type        : kbhowto
	
	=============================================================================
	
