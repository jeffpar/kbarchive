---
layout: page
title: "Q230502: HOWTO: Print a Form That Is Too Large for the Screen or Page"
permalink: /kb/230/Q230502/
---

## Q230502: HOWTO: Print a Form That Is Too Large for the Screen or Page

{% raw %}

	Article: Q230502
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbCodeSnippet
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The PrintForm method prints only the portion of the form that is displayed. This
	article demonstrates how to print a form that is either larger than the screen
	or is only partially displayed.
	
	MORE INFORMATION
	================
	
	If you need to print a form that is larger than the screen, or is only partially
	displayed, then the controls on the form must be placed in a PictureBox. This
	prints the bitmap that is contained in the PictureBox, instead of a screen
	capture of the form itself (which is what PrintForm does). Because the
	PictureBox's bitmap is stored in a device context in memory, you have access to
	the entire bitmap regardless of what is displayed.
	
	NOTE: For the purposes of this article, the height of the form is set to 11
	inches. If another paper size is desired, such as 8.5- X 14- inches, set the
	sTall variable to an appropriate value, for example, 14. Also note that these
	assignments are made in twips because this is the default scalemode for forms.
	If you change the scalemode, you need to change these values to match as well.
	
	Print a Form That Is Larger Than the Screen
	-------------------------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add two PictureBoxes to Form1.
	
	  Avoid drawing the second PictureBox inside the first, because doing so makes
	  the second PictureBox a member of the first. Instead, place the origin point
	  of the second PictureBox to the left of the origin point of the first
	  PictureBox.
	
	3. Right-click Picture2 and choose Send to Back.
	
	4. Add two labels to Picture1, leaving Picture2 empty.
	
	5. Add the following code to the General Declarations section of Form1:
	
	  Private Const twipFactor = 1440
	  Private Const WM_PAINT = &HF
	  Private Const WM_PRINT = &H317
	  Private Const PRF_CLIENT = &H4&    ' Draw the window's client area.
	  Private Const PRF_CHILDREN = &H10& ' Draw all visible child windows.
	  Private Const PRF_OWNED = &H20&    ' Draw all owned windows.
	
	  Private Declare Function SendMessage Lib "user32" Alias _
	     "SendMessageA" (ByVal hwnd As Long, ByVal wMsg As Long, _
	     ByVal wParam As Long, ByVal lParam As Long) As Long
	     
	  Private Sub Form_Load()
	     Dim sWide As Single, sTall As Single
	     Dim rv As Long
	
	     Me.ScaleMode = vbTwips   ' default
	     sWide = 8.5
	     stall = 11   ' or 14, etc.
	     Me.Width = twipFactor * sWide
	     Me.Height = twipFactor * stall
	     With Picture1
	        .Top = 0
	        .Left = 0
	        .Width = twipFactor * sWide
	        .Height = twipFactor * stall
	     End With
	     With Picture2
	        .Top = 0
	        .Left = 0
	        .Width = twipFactor * sWide
	        .Height = twipFactor * stall
	     End With
	     With Label1
	        .Caption = "Top"
	        .Left = Me.Width / 2
	        .Top = 0
	     End With
	     With Label2
	        .Caption = "Bottom"
	        .Top = (twipFactor * stall) - .Height * 2
	        .Left = Me.Width / 2
	     End With
	     Me.Visible = True
	     DoEvents
	
	     Picture1.SetFocus
	     Picture2.AutoRedraw = True
	     rv = SendMessage(Picture1.hwnd, WM_PAINT, Picture2.hDC, 0)
	     rv = SendMessage(Picture1.hwnd, WM_PRINT, Picture2.hDC, _
	     PRF_CHILDREN + PRF_CLIENT + PRF_OWNED)
	     Picture2.Picture = Picture2.Image
	     Picture2.AutoRedraw = False
	
	     Printer.Print ""
	     Printer.PaintPicture Picture2.Picture, 0, 0
	     Printer.EndDoc
	  End Sub
	
	6. Run the project.
	
	7. The Top and Bottom labels should appear in their respective positions
	  regardless of whether the form is completely displayed.
	
	Print a Form on More Than One Page
	----------------------------------
	
	If the form you are printing is too large to fit on a page, you can use the same
	approach as in the preceding example with a minor addition. The PaintPicture
	method has a number of optional parameters. The clipping region parameters can
	be used to grab a portion of the bitmap image and print it.
	
	To accomplish this, locate the following code in the previous example:
	
	  Printer.Print ""
	  Printer.PaintPicture Picture2.Picture, 0, 0
	  Printer.EndDoc
	
	Replace those three lines of code with the following:
	
	  Printer.Print ""
	  Printer.PaintPicture Picture2.Picture, 0, 0, , , _
	     0, 0, , Picture2.Height / 2
	  Printer.NewPage
	  Printer.PaintPicture Picture2.Picture, 0, 0, , , _
	     0, Picture2.Height / 2, , Picture2.Height / 2
	  Printer.EndDoc
	
	For ease of illustration, this example merely divides the form in half. You can
	adjust the clipping region appropriately for your needs.
	
	NOTE: Visual Basic 6.0 Online Help states that PrintForm prints the entire form,
	whether the entire form is visible or not. This information is incorrect.
	
	REFERENCES
	==========
	
	For additional information about printing forms, click the article numbers below
	to view the articles in the Microsoft Knowledge Base:
	
	  Q178076 HOWTO: Use a PictureBox to Control Orientation Printing a Form
	
	  Q161299 HOWTO: Capture and Print the Screen, a Form, or Any Window
	
	  Q194580 HOWTO: Print a Composite Image From a RichTextBox
	
	  Q146022 HOWTO: Set Up the RichTextBox Control for WYSIWYG Printing
	
	Visual Basic Online Help; search on: "PaintPicture"
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbPrinting kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbCodeSnippet 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : :4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
