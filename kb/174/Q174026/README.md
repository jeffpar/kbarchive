---
layout: page
title: "Q174026: ODE: How to Use the ProgressBar ActiveX Control"
permalink: kb/174/Q174026/
---

## Q174026: ODE: How to Use the ProgressBar ActiveX Control

	Article: Q174026
	Product(s): Microsoft Access Distribution Kit
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Office 97 Developer Edition 
	-------------------------------------------------------------------------------
	
	Advanced: Requires expert coding, interoperability, and multiuser skills.
	
	SUMMARY
	=======
	
	You can use a ProgressBar control to show an operation's progress toward
	completion. A ProgressBar control has a range and a current position. This
	article demonstrates how you can use the Max, Min, and Value properties of the
	ProgressBar Control within a Microsoft Access 97 Database.
	
	This article assumes that you are familiar with Visual Basic for Applications and
	with creating Microsoft Access applications using the programming tools provided
	with Microsoft Access. For more information about Visual Basic for Applications,
	please refer to the "Building Applications with Microsoft Access 97" manual.
	
	MORE INFORMATION
	================
	
	1. Start Microsoft Access 97 and open any database.
	
	2. In the Database window, click the Forms tab, and then click New to create a
	  new form not based on any table or query.
	
	3. On the File menu, click Save As/Export, and save the form as frmProgressBar.
	
	4. Add three unbound text boxes to the frmProgressBar form, and set their
	  properties as follows:
	
	      Name: txtMin
	      Default Value: 10
	      Validation Rule: Is Not Null
	      Validation Text: Please Enter a Numerical Value
	
	      Name: txtMax
	      Default Value: 5000
	      Validation Rule: Is Not Null
	      Validation Text: Please Enter a Numerical Value
	
	      Name: txtStep
	      Default Value: 10
	      Validation Rule: Is Not Null
	      Validation Text: Please Enter a Numerical Value
	
	5. On the Insert menu, click ActiveX Control and insert the Microsoft
	  ProgressBar Control, version 5.0. Set its properties as follows:
	
	      Name: CtlProgress
	      Width: 1.95
	      Height: .15
	
	6. Add two command buttons, and set their properties as follows:
	
	      Name: cmdRun
	      Caption: Run
	
	      Name: cmdClear
	      Caption: Clear
	
	7. Insert a label, and set its properties as follows:
	
	      Name: lblComplete
	      Caption: 0% Complete
	      Visible: No
	
	8. Using the right mouse button (right-click), click the Run command button, and
	  then click Build Event on the menu that appears.
	
	9. In the Choose Builder dialog box, click Code Builder, and then click OK.
	
	10. Type the following event procedure in the Module window:
	
	     Private Sub cmdRun_Click()
	
	        Dim prg As ProgressBar
	        Dim IntValue As Long
	        Dim fmin As TextBox, fmax As TextBox, fstep As TextBox
	        Dim strComplete As String
	        Dim Complete As Label
	
	        Set fmin = Forms!frmProgressBar!txtMin
	        Set fmax = Forms!frmProgressBar!txtMax
	        Set fstep = Forms!frmProgressBar!txtStep
	        Set prg = Me!CtlProgress.Object
	        Set Complete = Me!lblComplete
	
	        ' If the txtMin textbox contains a non-numeric value
	        ' or a number less than 0, force the user to
	        ' re-enter data in correct format.
	
	        If Val(fmin) <= 0 Then
	           MsgBox "Please enter a positive numerical value above 0 " & _
	              "in the Minimum text box."
	           fmin = Null
	           fmin.SetFocus
	           Exit Sub
	        End If
	
	        ' If the txtMax text box contains a non-numeric
	        ' value or a number less than the value in txtMin,
	        ' force the user to re-enter data in correct format.
	
	        If Val(fmax) <= 0 Or Val(fmax) <= fmin Then
	           MsgBox "Please enter a positive numerical value above " & _
	              fmin & " in the  Maximum textbox."
	           fmax = Null
	           fmax.SetFocus
	           Exit Sub
	        End If
	
	        ' If txtStep contains a non-numeric value or a number less
	        ' than 1, force the user to re-enter data in correct format.
	
	        If Val(fstep) < 1 Then
	           MsgBox "Please enter a number less than or equal " & _
	              "to 1 in the Step text box."
	           fstep = Null
	           fstep.SetFocus
	           Exit Sub
	        End If
	
	        ' The maximum value for the MAX property of a progress bar
	        ' is 10,000; if the number entered in txtMax is over 10,000,
	        ' set the MAX property to 10,000. Otherwise, set the MAX
	        ' property to whatever the user has entered.
	
	        If fmax > 10000 Then
	           prg.Max = 10000
	        Else
	           prg.Max = fmax
	        End If
	
	        ' The maximum value for the MIN property of a progress bar
	        ' is also 10,000; if the number entered in txtMin is
	        ' greater than 10,000, set the MIN property to 9,999
	        ' so it is still less than the MAX property. Otherwise,
	        ' set the MIN property to whatever the user has entered.
	
	        If fmin > 10000 Then
	           prg.Min = 9999
	        Else
	           prg.Min = fmin
	        End If
	
	            IntValue = fmin
	
	        ' Increment the progress bar and % complete label as long as the
	        ' Value assigned to it is less than or equal to the MAX property
	        ' of the progress bar.
	
	        Complete.Visible = True
	
	        Do
	           IntValue = IntValue + Me!txtStep
	           If IntValue >= prg.Max Then
	              IntValue = prg.Max
	           End If
	           prg.Value = IntValue
	           strComplete = Format((prg.Value / prg.Max) * 100, "##") & _
	                " % Complete"
	           Complete.Caption = strComplete
	           DoCmd.RepaintObject
	        Loop While IntValue < prg.Max
	
	     End Sub
	
	11. Using the right mouse button (right-click), click the Clear command button,
	  and then click Build Event on the menu that appears.
	
	12. In the Choose Builder dialog box, click Code Builder, and then click OK.
	
	13. Type the following event procedure in the module window:
	
	     Private Sub cmdClear_Click()
	
	         Dim prg As ProgressBar
	         Dim Complete As Label
	
	         Set prg = Me!CtlProgress.Object
	         Set Complete = Me!lblComplete
	
	         ' Clear the Progress Bar by setting its value to the
	         ' Control's MIN property; then hide the Complete label.
	
	         prg.Value = prg.Min
	         Complete.Visible = False
	
	      End Sub
	
	14. On the Debug menu, click Compile Loaded Modules.
	
	15. Save the form, and then switch to Form View.
	
	16. Click Run.
	
	  Note that the ProgressBar fills while the label control shows the progress as
	  a percentage.
	
	REFERENCES
	==========
	
	For more information about the ProgressBar ActiveX control, search the Help
	Index for "ProgressBar Control."
	
	Additional query words: progress bar
	
	======================================================================
	Keywords          :  
	Technology        : kbOfficeSearch kbAudDeveloper kbOffice97Search kbOffice97 kbOffice97DevSearch
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	
