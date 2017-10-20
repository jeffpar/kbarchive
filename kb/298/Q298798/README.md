---
layout: page
title: "Q298798: BUG: Drag-and-Drop w/ Left Mouse Button Does Not Work on Win2K"
permalink: /kb/298/Q298798/
---

## Q298798: BUG: Drag-and-Drop w/ Left Mouse Button Does Not Work on Win2K

{% raw %}

	Article: Q298798
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbCtrl kbDragDrop kbOSWin2000 kbVBp600bug kbGrpDSVB kbDSupport kbCodeSnippet
	Last Modified: 17-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0, used with:
	   - the operating system: Microsoft Windows 2000 
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0, used with:
	   - the operating system: Microsoft Windows 2000 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0, used with:
	   - the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using a Windows 2000 system and you try to drag text from a
	RichTextBox control to another control, the icon changes, indicating that the
	drag-and-drop procedure is invalid for the control. This only occurs when you
	use the left mouse button for the drag-and-drop procedure.
	
	RESOLUTION
	==========
	
	To work around this problem, do either of the following:
	
	- Use the right mouse button when you perform a drag-and-drop procedure.
	
	- Set the DragMode property of the RichTextBox control to Automatic, so that
	  you can perform a drag-and-drop procedure by using either the left or right
	  mouse button. Note that when you use the Automatic setting you cannot select
	  a portion of the text by using the mouse, but you can select text by using
	  the keyboard.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In Visual Basic 6.0, create a new Standard EXE project. Form1 is created by
	  default.
	
	2. Add a TextBox control and a RichTextBox control to Form1.
	
	3. Add the following code to the code window of Form1:
	
	  Private Sub Text1_DragDrop(Source As Control, x As Single, y As Single)
	     ' Text1.Text = Source.Text      ' All text
	      Text1.Text = Source.SelText   ' Selected (highlighted) text
	  End Sub
	
	  Private Sub RichTextBox1_MouseDown(Button As Integer, Shift As Integer, x As Single, y As Single)
	      If RichTextBox1.SelLength > 0 Then
	         RichTextBox1.Drag
	         RichTextBox1.DragIcon = Me.Icon
	      End If
	  End Sub
	
	4. Run the program.
	
	5. Select some text in the RichTextBox control and try to drag that text to the
	  TextBox control by using the left mouse button. Note that when the mouse
	  pointer is over the TextBox control the icon changes, indicating that this
	  procedure is not valid for this control. When you release the mouse button,
	  the text does not appear in the TextBox control.
	
	6. Repeat the previous step, but this time use the right mouse button to perform
	  the drag-and-drop procedure. Note that the operation works as expected.
	
	7. Stop the project.
	
	8. Click the RichTextBox control. In the Properties window, change DragMode to 1
	  - vbAutomatic.
	
	9. Run the program and repeat the previous steps, but use the keyboard to select
	  text. To do this, hold down the SHIFT key while you press the arrow keys.
	  Note that the operation works as expected whether you use the left or right
	  mouse button.
	
	Additional query words: draganddrop
	
	======================================================================
	Keywords          : kbCtrl kbDragDrop kbOSWin2000 kbVBp600bug kbGrpDSVB kbDSupport kbCodeSnippet 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
