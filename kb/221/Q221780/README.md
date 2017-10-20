---
layout: page
title: "Q221780: PRB: Printer Properties Show Incorrect Values"
permalink: /kb/221/Q221780/
---

## Q221780: PRB: Printer Properties Show Incorrect Values

{% raw %}

	Article: Q221780
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 4.0, 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you read a printer property, such as Mycopies = Printer.Copies, before you
	print anything, the results are incorrect. Specifically, the values that are
	returned do not match what you see when you examine the printer's properties
	directly.
	
	CAUSE
	=====
	
	This behavior occurs because the printer object is not initialized.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project. Form1 is created by default.
	
	2. Add a CommandButton, a ComboBox, and four TextBox controls to Form1.
	
	3. In the code window of Form1, paste the following code:
	
	  Option Explicit
	  Dim MyX As Printer
	
	  Private Sub Combo1_Click()
	      For Each MyX In Printers
	          If MyX.DeviceName = Combo1.Text Then
	              Set Printer = MyX
	              Exit For
	          End If
	      Next
	      
	      Text1.Text = Printer.Copies
	      Text2.Text = Printer.DeviceName
	      Text3.Text = Printer.Orientation
	      'Text4.Text = Printer.CurrentX
	  End Sub
	
	  Private Sub Command1_Click()
	      Unload Me
	  End Sub
	
	  Private Sub Form_Load()
	  Dim x As Integer
	
	      For x = 0 To Printers.Count - 1
	          Combo1.AddItem Printers(x).DeviceName
	      Next x
	      
	      Combo1.Text = Printer.DeviceName
	
	      Text1.Text = Printer.Copies
	      Text2.Text = Printer.DeviceName
	      Text3.Text = Printer.Orientation
	      'Text4.Text = Printer.CurrentX
	  End Sub
	
	4. Make sure that you have more than one printer installed on the computer, and
	  that the default number of copies and orientation are different for both
	  printers.
	
	5. Save and run the project. When you change selections with Combo1, the value
	  in Text2 changes, but Text1 and Text3 do not change and are therefore
	  incorrect. Text4 is not being used yet.
	
	6. Click Command1 to stop the project.
	
	WORKAROUND
	----------
	
	1. Under Combo1_Click and Form1_Load in the preceding code, uncomment the lines
	  that read "Text4.Text = Printer.CurrentX".
	
	2. Save and run the project again. When you change selections with Combo1, the
	  values for the first three TextBoxes change to the correct values. Text4
	  simply receives the same value each time.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbPrinting kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : :4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
