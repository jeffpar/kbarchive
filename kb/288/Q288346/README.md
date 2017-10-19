---
layout: page
title: "Q288346: BUG: BeforeUpdate Event of the DataGrid Does Not Always Fire"
permalink: /kb/288/Q288346/
---

## Q288346: BUG: BeforeUpdate Event of the DataGrid Does Not Always Fire

	Article: Q288346
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0,6.0 SP3,6.0 SP4,6.0 SP5
	Operating System(s): 
	Keyword(s): kbDatabase kbDataBinding kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbMDACNoSweep kbATM
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 6.0, 6.0 SP3, 6.0 SP4, 6.0 SP5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The documentation for the BeforeUpdate event of the Visual Basic 6.0 DataGrid
	control states:
	
	  "When the user moves to another row or the Recordset object's Update method
	  is executed, data is moved from the DataGrid control's copy buffer to the
	  Data control's copy buffer and written to the database."
	
	In fact, the BeforeUpdate event does not fire for at least half of the methods by
	which a user can "move to another row" after editing a DataGrid cell or cells in
	the current row, as described later in this article.
	
	CAUSE
	=====
	
	The DataGrid only fires the BeforeUpdate event when the user moves from one row
	to another; therefore, the event does not fire if, after editing a row, the user
	moves off the DataGrid entirely by selecting another object on the form. In
	addition, if the user changes rows by clicking the Record Selector (the gray
	left margin), the AfterUpdate event fires first, preventing the firing of the
	BeforeUpdate event.
	
	RESOLUTION
	==========
	
	If the users of the application cannot be constrained to navigate the DataGrid
	by using one of the methods for which the BeforeUpdate event reliably fires,
	then another event or another approach must be used to validate entries or to
	take other action when the user moves from one row to another or moves off the
	grid.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The BeforeUpdate of the Record Selector event does not fire for at least half of
	the methods by which a user can move off the current row after editing a cell or
	cells in the DataGrid.
	
	The BeforeUpdate event fires if you edit a row in the grid, and then move off the
	row by:
	
	- using the TAB key to move to another field, and then using an ARROW key to
	  move off the row.
	
	- clicking on another field, and then using an ARROW key to move off the row.
	
	- clicking on another row in the data (white) portion of the grid.
	
	The BeforeUpdate event does not fire if you edit a row in the grid, and then move
	off the row by:
	
	- clicking the Record Selector (the gray left margin) of another row in the
	  grid.
	
	- clicking on an unused (gray) portion of the grid background.
	
	- moving off the grid by clicking on another control on the form.
	
	In all of the preceding cases, the changed data is saved to the database as
	expected.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. On the Project menu, click to select References, and then set a reference to
	  Microsoft ActiveX Data Objects (ADO).
	
	3. Copy and paste the following code into the form's code module. (As written,
	  this code places the necessary controls on the form dynamically.)
	
	  Option Explicit
	
	  Private cn As ADODB.Connection
	  Private rs As ADODB.Recordset
	  Private WithEvents grd As VB.VBControlExtender
	  Private WithEvents txt As VB.TextBox
	  Private WithEvents cmd As VB.CommandButton
	
	  Private Sub Form_Load()
	    Set cn = New ADODB.Connection
	    cn.Open "Provider=Microsoft.Jet.OLEDB.4.0;" & _
	      "Data Source=C:\Program Files\Microsoft Visual Studio\Vb98\nwind.mdb"
	    Set rs = New ADODB.Recordset
	    rs.CursorLocation = adUseClient
	    rs.Open "SELECT TOP 6 EmployeeID, LastName, FirstName FROM Employees", cn, adOpenStatic, adLockOptimistic, adCmdText
	    Licenses.Add "MSDataGridLib.DataGrid", ""
	    Set grd = Form1.Controls.Add("MSDataGridLib.DataGrid", "grd")
	    With grd
	      .Visible = True
	      .Top = 72
	      .Left = 72
	      .Width = Form1.Width - 288
	      .Height = Form1.Height - 1440
	    End With
	    grd.object.WrapCellPointer = True
	    grd.object.tabaction = 2
	    Set grd.object.DataSource = rs
	    Set txt = Form1.Controls.Add("VB.Textbox", "txt")
	    With txt
	      .Visible = True
	      .Top = 2400
	      .Left = 72
	      .Width = 2400
	      .Text = "Click here to move focus off grid"
	    End With
	    Set cmd = Form1.Controls.Add("VB.CommandButton", "cmd")
	    With cmd
	      .Visible = True
	      .Top = 2400
	      .Left = 3000
	      .Width = 1440
	      .Caption = "Close"
	    End With
	  End Sub
	
	  Private Sub grd_ObjectEvent(Info As EventInfo)
	    Select Case Info
	      Case "BeforeUpdate"
	        MsgBox "BeforeUpdate event fired!", vbExclamation + vbOKOnly, "BeforeUpdate Event"
	    End Select
	  End Sub
	
	  Private Sub cmd_Click()
	    Unload Me
	  End Sub
	
	4. Adjust the database connection string, if necessary. It should work "as is"
	  if Visual Basic was installed to the default location.
	
	5. Run the project.
	
	6. Test each of the six methods in the "More Information" section for moving off
	  the current row after editing a field, and note that only three of the six
	  methods of moving off the changed current row fire the BeforeUpdate event.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbDataBinding kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbMDACNoSweep kbATM 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600 kbVB600SP3 kbVB600SP4 kbVB600SP5
	Version           : :6.0,6.0 SP3,6.0 SP4,6.0 SP5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
