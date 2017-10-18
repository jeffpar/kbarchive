---
layout: page
title: "Q140886: HOWTO: Print Multiline Text Box Using Windows API Functions"
permalink: kb/140/Q140886/
---

## Q140886: HOWTO: Print Multiline Text Box Using Windows API Functions

	Article: Q140886
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbVBp400 kbWndw
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Printing the Text property of a multiline text box while maintaining the line
	structure requires attention to word wrapping, carriage returns, and line feeds.
	The programmer can either track the number of characters and lines in code or
	use Windows API functions to manipulate the Text property. This article
	demonstrates these techniques in a Visual Basic example.
	
	NOTE: 32-bit applications that implement VBA do not support compiler directives.
	The sample code only applies to 32-bit implementations of VBA.
	
	MORE INFORMATION
	================
	
	The example below demonstrates how to use the API function SendMessage() to
	track the number of lines in a multiline text box and to select and print the
	lines the way they appear, with line breaks or word wrapping intact. This code
	will work without modification even if the form and controls are resized at run
	time. The actual position of word wrapping will change.
	
	For more information about API functions relating to text boxes, query on the
	following words in the Microsoft Knowledge Base:
	
	  ("API") and ("text") and ("box") and ("manipulate")
	
	Step-by-Step Example
	--------------------
	
	1. Create a form (Form1) and place a label (Label1), text box (Text1), and
	  command button (Command1) on it.
	
	2. Set the following properties at design time:
	
	  Control    Property      Setting
	  --------------------------------------------------------
	  Text box   TabIndex      0 (zero, or first in tab order)
	  Text box   MultiLine     True
	  Label      AutoSize      True
	  Label      Name          aGetLineCount
	
	3. Add the following code to Form 1:
	
	  NOTE: If you copy-and-paste the code directly from here to Visual Basic, try
	  to make sure that before you paste, you remove all carriage returns from code
	  strings that must appear on one line.
	
	        ' Enter the following Declare statement on one, single line:
	
	        #If Win32 Then
	         Private Declare Function SendMessageAsLong Lib "user32" _
	         Alias "SendMessageA" (ByVal hWnd As Long, ByVal wMsg As Long, _
	         ByVal wParam As Long, ByVal lParam As Long) As Long
	         Private Declare Function SendMessageAsString Lib "user32" _
	         Alias "SendMessageA" (ByVal hWnd As Long, ByVal wMsg As Long, _
	         ByVal wParam As Long, ByVal lParam As String) As Long
	         Dim Buffer As String
	         Dim resizing As Integer
	         Const EM_GETLINE = 196
	         Const EM_GETLINECOUNT = 186
	        #Else
	         Private Declare Function SendMessage% Lib "user" _
	         (ByVal hWnd%, ByVal wMsg%, ByVal wParam%, ByVal lParam As Any)
	         Dim Buffer As String
	         Dim resizing As Integer
	         Const EM_GETLINE = &H400 + 20
	         Const EM_GETLINECOUNT = &H400 + 10
	        #End If
	         Const MAX_CHAR_PER_LINE = 80  ' Scale this to size of text box.
	
	        Private Sub Form_Load ()
	           ' Size form relative to screen dimensions.
	           ' Could define all in move command but recursive definition causes
	           ' extra paints.
	           form1.width = screen.width * .8
	           form1.height = screen.height * .6
	           form1.Move screen.width\2-form1.width\2, _
	              screen.height\2-form1.height\2
	        End Sub
	
	        Private Sub Form_Resize ()
	           resizing = -1      ' Global  flag for fGetLineCount function call.
	           ' Dynamically scale and position the controls in the form.
	           ' This code also is executed on first show of form.
	           Text1.Move 0, 0, form1.width, form1.height \ 2
	           Text1.SelStart = Text1.SelStart
	           command1.Move form1.width\2-command1.width\2, _
	              form1.height-form1.height\4
	           aGetLineCount.Move form1.width \ 2 - command1.width \ 2, _
	              Text1.height
	           X% = fGetLineCount() ' Update to reflect change in text-box size.
	           resizing = 0
	        End Sub
	
	        Private Sub Command1_Click ()
	           '* Pop up an inputbox$ to allow user to specify which line
	           '* in the text box to print or print all lines.
	           '* Also check bounds so that a valid line number is printed.
	           OK = 0                     ' Zero the Do Loop flag.
	           NL$ = Chr$(13) + Chr$(10)
	           prompt$ = "Which line would you like to print?"
	           prompt1$ = prompt$ + NL$ + "Enter -1 for all"
	           prompt2$ = "Too many lines" + NL$ + "Try again!" + NL$ + prompt1$
	           prompt$ = prompt1$
	           Do
	              response$ = InputBox$(prompt$, "Printing", "-1")
	              If response$ = "" Then Exit Sub  ' If user hits cancel,
	                                               ' then exit.
	              If Val(response$) > fGetLineCount&() Then
	                 prompt$ = prompt2$
	              Else
	                 OK = -1        ' Line chosen is in valid range, so exit DO.
	              End If
	              Loop Until OK
	              If Val(response$) = -1 Then  ' Print all lines...
	                 ndx& = fGetLineCount&()
	                 For N& = 1 To ndx&
	                    Buffer = fGetLine(N& - 1)
	                    printer.Print Buffer       ' ...or print to the screen.
	                 Next N&
	              Else                         ' Print a line...
	              Buffer = fGetLine(Val(response$) - 1)
	              printer.Print Buffer       ' ...or print to the screen.
	           End If
	           printer.enddoc
	        End Sub
	
	        Private Function fGetLine$(LineNumber As Long)
	        ' This function fills the buffer with a line of text
	        ' specified by LineNumber from the text-box control.
	        ' The first line starts at zero.
	        byteLo% = MAX_CHAR_PER_LINE And (255)  '[changed 5/15/92]
	        byteHi% = Int(MAX_CHAR_PER_LINE / 256) '[changed 5/15/92]
	        Buffer$ = Chr$(byteLo%) + Chr$(byteHi%) + Space$( _
	            MAX_CHAR_PER_LINE - 2)
	        #If Win32 Then
	         x = SendMessageAsString(Text1.hWnd, EM_GETLINE, LineNumber, Buffer$)
	        #Else
	         x = SendMessage(Text1.hWnd, EM_GETLINE, LineNumber, Buffer$)
	        #End If
	        fGetLine$ = Left$(Buffer$, x)
	        End Function
	
	        Private Function fGetLineCount&()
	         ' This function will return the number of lines
	         ' currently in the text-box control.
	         ' Setfocus method illegal while in resize event,
	         ' so use global flag to see if called from there
	         ' (or use setfocus before this function call in general case).
	         #If Win32 Then
	          lcount = SendMessageAsLong(Text1.hWnd, EM_GETLINECOUNT, 0, 0)
	         #Else
	          lcount = SendMessage(Text1.hWnd, EM_GETLINECOUNT, 0&, 0&)
	         #End If
	          aGetLineCount.Caption = "GetLineCount = " + Str$(lcount)
	          fGetLineCount& = lcount
	        End Function
	
	        Private Sub Text1_Change ()
	           X% = fGetLineCount() '* Update label to reflect current line
	        End Sub
	
	4. Save the project. Then run the application by pressing the F5 key.
	
	5. Type text in the text box, and either let it wrap or use the ENTER key to
	  arrange lines.
	
	6. Click Command1.
	
	7. Choose the default (which prints all lines) or enter the line you want.
	  Choose OK. If you choose Cancel, nothing will print.
	
	8. Resize the form and repeat steps 5 through 7 above. The text will appear on
	  the printed page as you see it in the text box when you press the Command1
	  button.
	
	NOTE: This example can be modified to send the contents of the text box to a file
	or a form instead of to the printer object.
	
	REFERENCES
	==========
	
	Please see the "Microsoft Windows Programmer's Reference Book and Online
	Resource" (Visual Basic Add-on Kit #1-55615-413-5).
	
	Additional query words: textbox
	
	======================================================================
	Keywords          : kbVBp400 kbWndw 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
