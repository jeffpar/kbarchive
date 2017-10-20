---
layout: page
title: "Q147887: HOWTO: Scroll VB Text Box Programmatically and Specify Lines"
permalink: /kb/147/Q147887/
---

## Q147887: HOWTO: Scroll VB Text Box Programmatically and Specify Lines

{% raw %}

	Article: Q147887
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbprogramming kbVBp400 kbWndw
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By making a call to the Windows API function SendMessage, you can scroll text a
	specified number of lines or columns within a Microsoft Visual Basic for Windows
	text box. By using the SendMessage function, you can also scroll text
	programmatically, without user interaction. This technique extends Visual Basic
	for Windows' scrolling functionality beyond the built-in statements and methods.
	The sample program below shows how to scroll text vertically and horizontally a
	specified number of lines.
	
	MORE INFORMATION
	================
	
	Visual Basic for Windows itself does not offer a statement for scrolling text a
	specified number of lines vertically within a text box. You can scroll text
	vertically by actively clicking the vertical scroll bar for the text box at run
	time; however, you do not have any control over how many lines are scrolled for
	each click of the scroll bar. Text always scrolls one line per click of the
	scroll bar. Furthermore, no built-in Visual Basic for Windows method can scroll
	text without user interaction. To work around these limitations, you can call
	the Windows API function SendMessage, as explained below.
	
	Step-by-Step Example
	--------------------
	
	To scroll the text a specified number of lines within a text box requires a call
	to the Windows API function SendMessage using the constant EM_LINESCROLL. You
	can invoke the SendMessage function from Visual Basic for Windows as follows:
	
	  r& = SendMessage& (hWnd&, EM_LINESCROLL, wParam&, lParam&)
	
	     hWnd&    The window handle of the text box.
	     wParam&  Parameter not used.
	     lParam&  The low-order 2 bytes specify the number of vertical lines to
	              scroll. The high-order 2 bytes specify the number of horizontal
	              columns to scroll. A positive value for lParam& causes text to
	              scroll upward or to the left. A negative value causes text to
	              scroll downward or to the right.
	     r&       Indicates the number of lines actually scrolled.
	
	The SendMessage API function requires the window handle (hWnd& above) of the
	text box. To get the window handle of the text box, use the hWnd property of the
	text box. For instance, if your text box's name is text1, text1.hWnd returns the
	window handle of that text box. Calling SendMessage to scroll text vertically
	does not require a vertical scroll bar, but the length of text within the text
	box should exceed the text box height.
	
	Below are the steps necessary to create a text box that scrolls five vertical
	lines each time you click the command button labeled "Vertical:"
	
	1. On the File menu, click New Project (press ALT, F, N).
	
	2. On the Visual Basic Insert menu, click module to insert a code module.
	
	3. Add the following API declaration to the General Declarations section of
	  Module1. Note that SetFocus is aliased as PutFocus because there already
	  exists a SetFocus method within Visual Basic for Windows:
	
	        #If Win32 Then
	        Declare Function PutFocus Lib "user32" Alias "SetFocus" (ByVal _
	           hwnd As Long) As Long
	        Declare Function SendMessage Lib "user32" Alias "SendMessageA" _
	           (ByVal hwnd As Long, ByVal wMsg As Long, ByVal wParam As _
	           Integer, ByVal lParam As Long) As Long
	        #Else
	        Declare Function PutFocus% Lib "user" Alias "SetFocus" (ByVal hWd%)
	        Declare Function SendMessage& Lib "user" (ByVal hWd%, ByVal wMsg%, _
	           ByVal wParam%, ByVal lParam&)
	        #End If
	
	4. Create a text box called Text1 on Form1. Set the MultiLine property to True
	  and the ScrollBars property to Horizontal (1).
	
	5. Create a CommandButton called Command1 and change the Caption to "Vertical."
	
	6. In the General Declarations section of Form1, create a procedure to
	  initialize some text in the text box as follows:
	
	         Sub InitializeTextBox ()
	         Text1.Text = ""
	         For i% = 1 To 50
	         Text1.Text = Text1.Text + "This is line " + Str$(i%)
	         ' Add 15 words to a line of text.
	         For j% = 1 to 10
	         Text1.Text = Text1.Text + " Word "+ Str$(j%)
	         Next j%
	         ' Force a carriage return (CR) and linefeed (LF).
	         Text1.Text = Text1.Text + Chr$(13) + Chr$(10)
	         x% = DoEvents()
	         Next i%
	         End Sub
	
	7. Add the following code to the load event procedure of Form1:
	
	         Sub Form_Load ()
	         Call InitializeTextBox
	         End Sub
	
	8. Create the actual scroll procedure within the General Declarations section of
	  Form1 as follows:
	
	         Function ScrollText&(TextBox As Control, vLines As Integer)
	         #If Win32 Then
	         Dim Success As Long
	         Dim SavedWnd As Long
	         Dim R As Long
	         Const EM_LINESCROLL = &HB6
	         #Else
	         Dim Success As Integer
	         Dim SavedWnd As Integer
	         Dim R As Integer
	         Const EM_LINESCROLL = &H406
	         #End If
	         ' Get the window handle of the control that currently has the
	         '  focus, Command1 or Command2.
	         SavedWnd = Screen.ActiveControl.hwnd
	         Lines& = vLines
	         ' Set the focus to the passed control (text control).
	         TextBox.SetFocus
	         ' Scroll the lines.
	         Success = SendMessage(TextBox.hwnd, EM_LINESCROLL, 0, Lines&)
	         ' Restore the focus to the original control, Command1 or
	         '  Command2.
	         R = PutFocus(SavedWnd)
	         ' Return the number of lines actually scrolled.
	         ScrollText& = Success
	         End Function
	
	9. Add the following code to the click event procedure of Command1 labeled
	  "Vertical:"
	
	         Sub Command1_Click ()
	         ' Scroll text 5 vertical lines upward.
	         Num& = ScrollText&(Text1, 5)
	         End Sub
	
	10. Run the program. Click the CommandButton to scroll the text five lines at a
	  time.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kbVBp400 kbWndw 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
