---
layout: page
title: "Q175501: BUG: RichTextBox Horizontal Scroll Bar Does Not Always Appear"
permalink: /kb/175/Q175501/
---

## Q175501: BUG: RichTextBox Horizontal Scroll Bar Does Not Always Appear

	Article: Q175501
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbVBp400 kbVBp500 kbGrpDSVB kb32bitOnly
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The horizontal scrollbar on the RichTextBox does not always appear as expected.
	If the LoadFile method is used to load a document into a RichTextBox and that
	document has a line of text that is slightly wider than the width of the
	RichTextBox, and if that line is located well below the bottom margin of the
	RichTextBox, the horizontal scroll bar will fail to appear.
	
	RESOLUTION
	==========
	
	After loading the contents of the file into the RichTextBox, read them out into
	a string variable using the TextRTF property and then read them back into the
	RichTextBox. The Horizontal Scroll Bar will then appear as expected. The code
	for this workaround follows:
	
	     Dim x As String
	     x = RichTextBox2.TextRTF
	     RichTextBox2.TextRTF = x
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Because the sizing of the RichTextBoxes is critical to reproduce this bug, this
	code sample sites and sizes all of the controls automatically. All you have to
	do is double-click on the Toolbox buttons to put each control on the form and
	then follow the instructions. It is not necessary to size or move any of the
	controls yourself.
	
	1. Start a new Standard EXE project in Visual Basic 5.0.
	
	2. Put two RichTextBoxes (RichTextBox1 and RichTextBox2), two Labels (Label1 and
	  Label2) and two CommandButtons (Command1 and Command2) on the form.
	
	3. Set the Scrollbars property of both RichTextBoxes to "3 - rtfBoth."
	
	4. Paste the following code into the General Declarations section of the form:
	
	        Option Explicit
	        Private Sub Command1_Click()
	          'This line is the core of the problem, loading text
	          'into an RTF box from a file using LoadFile can cause
	          'unexpected scroll bar behavior
	
	          RichTextBox2.LoadFile ("C:\TestRTF")
	
	          '**********************************************
	          'All the rest of the code is to attempt to set up a demo
	          'which will reproduce the problem on any screen resolution
	          '**********************************************
	
	          'Create informational text for Label1
	          Dim Caption2 As String
	          Caption2 = "The text in the RTF box below is the same as above.  "
	          Caption2 = Caption2 & "It was pulled out of the box above, "
	          Caption2 = Caption2 & "saved to a file, then loaded into the box "
	          Caption2 = Caption2 & "below. Notice the absence of a horizontal "
	          Caption2 = Caption2 & "scroll bar."
	          Label2.Caption = Caption2
	        End Sub
	
	        Private Sub Command2_Click()
	          'These three lines of code provide a workaround
	          Dim x As String
	          x = RichTextBox2.TextRTF
	          RichTextBox2.TextRTF = x
	        End Sub
	
	        Private Sub Form_Load()
	          'Size, position, and set captions for everything
	          Form1.Height = 5925
	          Label1.Move 120, 120, 4000, 975
	          Label2.Move 120, 2640, 4000, 855
	          Label2.Caption = ""
	          RichTextBox1.Move 120, 1200, 4000, 1215
	          RichTextBox2.Move 120, 3600, 4000, 1215
	          Command1.Move 120, 4920, 1215, 495
	          Command1.Caption = "Load Text"
	          Command2.Move 1560, 4920, 1215, 495
	          Command2.Caption = "Workaround"
	
	          'set fonts for Form1 and RichTextBox1
	          Form1.Font = "Times New Roman"
	          RichTextBox1.Font = "Times New Roman"
	
	          'create informational text for Label
	          Dim Caption1 As String
	          Caption1 = "The text that appears below was read in as a string.  "
	          Caption1 = Caption1 & "Notice that the horizontal scroll bar "
	          Caption1 = Caption1 & "appears.  This is because one of the lines "
	          Caption1 = Caption1 & "of text is wider than the RTFbox"
	          Caption1 = Caption1 & " (you have to scroll down to see this "
	          Caption1 = Caption1 & "line).This behavior is expected."
	          Label1.Caption = Caption1
	
	          'populate RichTextBox1 with the most of the text
	          Dim Msg As String
	          Msg = "This is to test the horizontal scroll bars "
	          Msg = Msg & "on the RichTextBox" & vbCrLf
	          Dim i As Integer
	             For i = 1 To 20
	               Msg = Msg & "Scroll Down" & vbCrLf
	             Next i
	
	          'Size the RichTextBoxes to be slightly wider than the
	          'first line of text and slightly shorter than the last
	          'line of text
	          RichTextBox1.Width = Form1.TextWidth(Msg) * 1.1
	          RichTextBox2.Width = RichTextBox1.Width
	
	          'size the form and labels to agree with size of RichTextBoxes
	          Form1.Width = RichTextBox1.Width + 360
	          Label1.Width = RichTextBox1.Width
	          Label2.Width = RichTextBox1.Width
	
	          'Add a line to the text that is slightly wider than the
	          'RichTextBoxes
	          Msg = Msg & "This is to test the horizontal scroll bars "
	          Msg = Msg & "on the RichTextBox" & "zzzzz"
	
	          'clear RichTextBox2
	          RichTextBox2.TextRTF = ""
	
	          'create an rtf file exactly like the text of the
	          'first rtfbox
	          RichTextBox1.TextRTF = Msg
	          RichTextBox1.SaveFile ("C:\TestRTF")
	        End Sub
	
	        Private Sub Form_Resize()
	          RichTextBox1.Width = Form1.Width - 360
	          RichTextBox2.Width = Form1.Width - 360
	        End Sub
	
	5. Run the project.
	
	6. The first RichTextBox will display the text as well as the horizontal and
	  vertical scroll bars. This is expected because one of the lines of text is
	  wider than the width of the RichTextBox.
	
	7. Click on the "Load Text" button, which will save the contents of RichTextBox1
	  in a .rtf file and then load that file into RichTextBox2. Note that the
	  horizontal scrollbar does not appear.
	
	8. Click on the Workaround button, which will read the contents of RichTextBox2
	  (including rtf codes) into a string variable and then read them back into
	  RichTextBox2. The horizontal scrollbar should now appear.
	
	======================================================================
	Keywords          : kbVBp400 kbVBp500 kbGrpDSVB kb32bitOnly 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbVB400Search kbVB400 kbZNotKeyword3
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbbug
	
	=============================================================================
	
