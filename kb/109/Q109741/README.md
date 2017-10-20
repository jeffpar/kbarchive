---
layout: page
title: "Q109741: HOWTO: Scroll a Form When VB Forms are Limited to Screen Size"
permalink: /kb/109/Q109741/
---

## Q109741: HOWTO: Scroll a Form When VB Forms are Limited to Screen Size

{% raw %}

	Article: Q109741
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbVBp300 kbVBp400 kbVBp500 kbVBp600 kbDSupport
	Last Modified: 24-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 3.0, 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Standard Edition for Windows, version 3.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A Visual Basic form cannot be sized larger than the screen. This article
	explains how to scroll the contents of a form to enlarge the usable area of a
	form.
	
	The sample program below works by scrolling a picture box control which is larger
	than the form and contains attached controls. When the picture box scrolls, all
	the attached controls scroll together.
	
	MORE INFORMATION
	================
	
	
	Step-by-Step Example
	--------------------
	
	NOTE: This technique will not work on any version of Windows NT if any of the
	Visual Basic lightweight controls (for example, Label Control) are children of
	the scrolling control and positioned outside of the screen's viewing area. This
	is due to the way that Windows NT handles drawing to nonlogical areas of the
	screen. To work around the problem, do not use lightweight controls as children
	of the scrolling control.
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Add a horizontal scroll bar control and a vertical scroll bar control to
	  Form1. (The size doesn't matter because the program automatically sizes the
	  scroll bars in the Form Resize event code.)
	
	3. Add a picture box control to Form1. Draw a text box control inside the
	  upper-left corner of the picture box such that when the picture box moves,
	  the text box moves with it.
	
	  Select the Text1 box and press the F4 key to display the Properties window.
	  Set the Text1 Index property to 0, which is required at design time to make
	  an array of text controls.
	
	  You can also enhance this sample program by placing more controls into the
	  picture box. When the picture box scrolls, all the controls scroll.
	
	4. Add the following code to the Form Load event:
	
	        Sub Form_Load()
	           ' Make the picture box bigger than the form:
	           Picture1.Move 0, 0, 1.4 * ScaleWidth, 1.2 * ScaleHeight
	           ' Position and size the first TextBox:
	           Text1(0).Move 0, 0, Picture1.Width / 2, Picture1.Height / 20
	           ' Place some sample controls in the picture box:
	           Dim i As Integer
	           For i = 1 To 20
	              Load Text1(i)
	              Text1(i).Visible = True
	              Text1(i).Left = i * Picture1.Height / 20
	              Text1(i).Top = Text1(i).Left
	           Next
	        End Sub
	
	5. Add the following code to the Form Resize event:
	
	
	        Sub Form_Resize ()
	           ' Position the scroll bars:
	           hscroll1.Left = 0
	           vscroll1.Top = 0
	           If Picture1.Width > scalewidth Then
	              hscroll1.Top = ScaleHeight - hscroll1.Height
	           Else
	              hscroll1.Top = ScaleHeight
	           End If
	           If Picture1.Height > hscroll1.Top Then
	              vscroll1.Left = scalewidth - vscroll1.Width
	              If Picture1.Width > vscroll1.Left Then
	                 hscroll1.Top = ScaleHeight - hscroll1.Height
	              End If
	           Else
	              vscroll1.Left = scalewidth
	           End If
	           hscroll1.Width = scalewidth
	           If hscroll1.Top > 0 then vscroll1.Height=hscroll1.Top
	           ' Set the scroll bar ranges
	           hscroll1.Max = Picture1.Width - vscroll1.Left
	           vscroll1.Max = Picture1.Height - hscroll1.Top
	           hscroll1.SmallChange = Abs(hscroll1.Max \ 16) + 1
	           hscroll1.LargeChange = Abs(hscroll1.Max \ 4) + 1
	           vscroll1.SmallChange = Abs(vscroll1.Max \ 16) + 1
	           vscroll1.LargeChange = Abs(vscroll1.Max \ 4) + 1
	           hscroll1.ZOrder 0
	           vscroll1.ZOrder 0
	        End Sub
	
	6. Add the following code to the HScroll1 Change event:
	
	        Sub HScroll1_Change ()
	           Picture1.Left = -HScroll1.Value
	        End Sub
	
	7. Add the following code to the VScroll1 Change event:
	
	        Sub VScroll1_Change ()
	           Picture1.Top = -VScroll1.Value
	        End Sub
	
	8. Start the program (or press the F5 key). Click the scroll bars to scroll the
	  form. Close the form to end the program.
	
	Additional query words: 3.00 4.00 vb416
	
	======================================================================
	Keywords          : kbVBp300 kbVBp400 kbVBp500 kbVBp600 kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB300Search kbVB400 kbVB300 kbVB16bitSearch
	Version           : :3.0,4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
