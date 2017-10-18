---
layout: page
title: "Q194580: HOWTO: Print a Composite Image From a RichTextBox"
permalink: kb/194/Q194580/
---

## Q194580: HOWTO: Print a Composite Image From a RichTextBox

	Article: Q194580
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 01-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to print composite images (Text and Graphics) from
	a RichTextBox Control.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	1. Create a Standard EXE project in Visual Basic. Form1 is created by default.
	
	2. Place two PictureBoxes and three CommandButton controls on Form1. Adjust the
	  size of Picture2 so that it is at least as large as Picture1.
	
	3. Select Components from the Project menu and check the Microsoft Rich Textbox
	  Control 6.0.
	
	4. Place a RichTextBox control inside Picture1.
	
	5. Place the following code in the General Declarations Section of Form1:
	
	        Option Explicit
	
	        Private Declare Function SendMessage Lib "user32" Alias _
	           "SendMessageA" (ByVal hwnd As Long, ByVal wMsg As Long, _
	           ByVal wParam As Long, ByVal lParam As Long) As Long
	
	        Private Const WM_PAINT = &HF
	        Private Const WM_PRINT = &H317
	        Private Const PRF_CLIENT = &H4&    ' Draw the window's client area
	        Private Const PRF_CHILDREN = &H10& ' Draw all visible child
	        Private Const PRF_OWNED = &H20&    ' Draw all owned windows
	
	        Private Sub Command1_Click()
	        ' Use the .bmp of your choice and make sure to give the full path.
	           RichTextBox1.OLEObjects.Add , , "c:\windows\triangles.bmp"
	        End Sub
	
	        Private Sub Command2_Click()
	           Dim rv As Long
	           Picture1.SetFocus  ' So that the button doesn't look pressed
	           Picture2.AutoRedraw = True
	           rv = SendMessage(Picture1.hwnd, WM_PAINT, Picture2.hDC, 0)
	           rv = SendMessage(Picture1.hwnd, WM_PRINT, Picture2.hDC, _
	                PRF_CHILDREN + PRF_CLIENT + PRF_OWNED)
	           Picture2.Picture = Picture2.Image
	           Picture2.AutoRedraw = False
	           Command1.SetFocus  ' Return Focus
	        End Sub
	
	        Private Sub Command3_Click()
	           Printer.PaintPicture Picture2.Picture, 0, 0
	           Printer.EndDoc
	        End Sub
	
	6. Run the project and click Command1, which puts a .bmp file into the
	  RichTextBox. You will see a border around the .bmp. Click elsewhere on the
	  RichTextBox and the border is removed. Type something into the RichTextBox.
	
	7. Click on Command2, which copies the whole picture into the PictureBox,
	  Picture2.
	
	8. Click on Command3 to print the whole composite image.
	
	  Because Picture2 is used only for intermediate data, you may wish to make it
	  invisible by setting Picture2.Visible = False.
	
	Limitations
	-----------
	
	This method is useful only if you have small RTF documents with composite images
	that can be displayed without scrolling.
	
	This method only captures whatever is in the PictureBox, Picture1.
	
	The text output may not be of as good a quality as text printed directly to the
	printer.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q146022 : HOWTO: Set Up the RichTextBox Control for WYSIWYG Printing
	
	  Q178076 : HOWTO: Use a PictureBox to Control Orientation Printing a Form
	
	Additional query words: kbDSupport kbDSD kbVBp kbVBp500 kbVBp600 kbCtrl kbPrinting kbAPI kbUserGrp kbBitmap
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
