---
layout: page
title: "Q194980: PRB: Form Close Fails if Control Bound to RDC is Dirty"
permalink: kb/194/Q194980/
---

## Q194980: PRB: Form Close Fails if Control Bound to RDC is Dirty

	Article: Q194980
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbCtrl kbVBp500 kbVBp600 kbGrpDSVBDB
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A form cannot be closed or unloaded.
	
	CAUSE
	=====
	
	If data in a control bound to a Microsoft RemoteData Control is changed and if
	the RDC's underlying resultset is non-updateable, then attempts to close the
	form will fail silently.
	
	RESOLUTION
	==========
	
	One way to avoid this problem is to set the Enabled property of all controls
	bound to an RDC to False. If edits are desired, then a command button to enable
	the controls can be added to the form. The controls would be disabled when the
	edit is committed or canceled.
	
	Another way to avoid this problem is to add code similar to that below to the
	Validate event procedure for each RDC:
	
	     Private Sub MSRDC1_Validate(Action As Integer, Reserved As Integer)
	         If Action = rdActionUnload Then
	             If (MSRDC1.Resultset Is Nothing) Then
	                 UndoEdits Me
	             Else
	                 If (Not MSRDC1.Resultset.Updatable) Then
	                     UndoEdits Me
	                 End If
	             End If
	         End If
	     End Sub
	
	Also add the following procedure to a standard module:
	
	     Sub UndoEdits(frm As Form)
	         Dim ctl As Control
	
	         For Each ctl in frm.Controls
	             On Error Resume Next
	             If (TypeName(ctl.DataSource) = "MSRDC") Then
	                 If (Err = 0) Then
	                     ctl.DataChanged = False
	                 ElseIf (Err <> 438) Then
	                     MsgBox "Unexpected error!"
	                     Stop
	                 End If
	             End If
	         Next ctl
	     End Sub
	
	The effect of this code is to cause any changes to data to be ignored when the
	form is being closed (rdActionUnload). It is assumed that this is the desired
	behavior because the resultset is non-updateable. There are two pieces of this
	code worth noting. If the RDC itself is not bound to data, then it is
	"non-updateable" with respect to the behavior described in this article. Also,
	error 438, "object does not support this property or method", will occur for any
	controls that do not support a DataChanged property. Because this code checks
	every control on the form, this error is expected for controls such as command
	buttons.
	
	If this problem is being encountered because the RDC's LockType property is set
	to rdConcurReadOnly, then there is a simpler workaround than the above. Choose
	another value for the LockType property, and add the following code to the RDC's
	Validate event:
	
	     If (Action = rdActionUpdate) Then Action = rdActionCancelUpdate
	
	This problem can also be avoided by using the Microsoft ADO Data Control.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Standard EXE project in Visual Basic. Form1 is created by default.
	
	2. To the default form, add a TextBox, a CommandButton, and a RemoteData
	  Control.
	
	3. Bind the RDC to some data source, and set the LockType property to
	  rdConcurReadOnly.
	
	4. Bind the text box to the RDC.
	
	5. In the Click event of the CommandButton, set the Text property of the TextBox
	  to some new value.
	
	6. Try to close the form (e.g. click on the X button at the upper-right corner),
	  and note that the form will not close. The workarounds are as indicated
	  above.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCtrl kbVBp500 kbVBp600 kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
