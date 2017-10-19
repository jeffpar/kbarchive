---
layout: page
title: "Q209068: BUG: VBCE: Type Mismatch Error Msg Using InputFields Method"
permalink: /kb/209/Q209068/
---

## Q209068: BUG: VBCE: Type Mismatch Error Msg Using InputFields Method

	Article: Q209068
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0,2.0,2.11,3.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp600bug kbOSWinCEsearch kbGrpDSVB
	Last Modified: 26-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0, version 1.0 
	- Microsoft eMbedded Visual Basic, version 3.0, on platform(s):
	   - Microsoft Windows CE versions 2.0, 2.11 for the Handheld PC 
	   - Microsoft Windows CE version 2.11 for the Palm-size PC 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to read in the data of a file with the InputFields method of the
	File Control and assign it to an array, you receive the following application
	error message:
	
	  An error was encountered while running this program: Type mismatch.
	
	RESOLUTION
	==========
	
	The solution is to use a Variant instead of an array when using the InputFields
	method.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Windows CE project in Visual Basic. Form1 is created by default.
	
	2. From the Project menu, select Components, and then select Microsoft CE File
	  System Control 6.0.
	
	3. Add three TextBox controls, a File control, and two CommandButton controls to
	  Form1.
	
	4. Paste the following code into Form1:
	
	  Option Explicit
	  Const lrFileModeInput = 1
	  Const lrFileModeOutput = 2
	  Dim strDataFile As Variant
	
	  Private Sub Command1_Click()
	      Dim arr(2) As Variant
	
	      File1.Open strDataFile, lrFileModeOutput
	      arr(0) = Text1.Text
	      arr(1) = Text2.Text
	      arr(2) = Text3.Text
	      Text1.Text = ""
	      Text2.Text = ""
	      Text3.Text = ""
	      File1.WriteFields arr
	      File1.Close
	  End Sub
	
	  Private Sub Command2_Click()
	      'Dim arr(2) As Variant
	      'This is the right declaration
	      Dim arr As Variant
	
	      Text1.Text = ""
	      Text2.Text = ""
	      Text3.Text = ""
	      File1.Open strDataFile, lrFileModeInput
	      arr = File1.InputFields(3)
	      Text1.Text = arr(0)
	      Text2.Text = arr(1)
	      Text3.Text = arr(2)
	      File1.Close
	  End Sub
	
	  Private Sub Form_Load()
	      Command1.Caption = "Write File"
	      Command2.Caption = "Read File"
	      Text1.Text = "Item"
	      Text2.Text = "Description"
	      Text3.Text = "Location"
	      
	      If (Len(App.Path) > 0) Then
	          strDataFile = Right(App.Path, Len(App.Path) - 1) & "\" & _
	              "inventory.dat"
	      Else
	          strDataFile = "inventory.dat"
	      End If
	  End Sub
	
	5. Run the program in emulation or on the remote device.
	
	6. Click on the Write File button and then click on the Read File button. The
	  error message described above appears.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbToolkit kbVBp600bug kbOSWinCEsearch kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch kbWinCETKVBSearch kbWinCESearch
	Version           : :1.0,2.0,2.11,3.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
