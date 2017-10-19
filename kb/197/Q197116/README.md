---
layout: page
title: "Q197116: BUG: Label Width Changes with WordWrap and AutoSize Set to True"
permalink: /kb/197/Q197116/
---

## Q197116: BUG: Label Width Changes with WordWrap and AutoSize Set to True

	Article: Q197116
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbVBp500bug kbVBp600bug kbGrpDSVB kbCodeSam
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you set the Caption property of a Label control when the label's WordWrap and
	AutoSize properties are set to True, Visual Basic slightly changes the width of
	the label instead of wrapping the label's caption.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	According to Visual Basic Help, the horizontal size of a label should not change
	when the WordWrap and AutoSize properties are both set to True, unless the
	label's caption consists of a single word that is larger than the width of the
	Label.
	
	The following are excerpts from the Visual Basic 6.0 WordWrap Help topic:
	
	  To maintain a constant horizontal size for the Label and allow for increasing
	  or decreasing text, set the WordWrap and AutoSize properties to True.
	
	  If both AutoSize and WordWrap are set to True, text will wrap without
	  increasing the size of the Label control, unless a single word is entered
	  that is larger than the width of the Label. In that case, the AutoSize
	  property takes priority and the width of the Label increases to accommodate
	  the long word.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project. Form1 is created by default.
	
	2. Add a TextBox and a Label control to Form1.
	
	3. Set the MultiLine property of the TextBox control to True.
	
	4. Set the BorderStyle property of the TextBox control to None.
	
	5. Set the AutoSize and WordWrap properties of the Label control to True.
	
	6. Paste the following code into Form1:
	
	        Option Explicit
	
	        Const LABEL_WIDTH = 2880
	
	        Private Sub Form_Load()
	           ' Clear textbox initial value.
	           Text1.Text = ""
	
	           ' Set both controls to the same initial width.
	           Text1.Width = LABEL_WIDTH
	           Label1.Width = LABEL_WIDTH
	
	           ' Set colors for easy viewing.
	           Me.BackColor = vbRed
	           Text1.BackColor = vbGreen
	           Label1.BackColor = vbGreen
	
	           ' Make sure Form is wide enough for Label to grow.
	           Me.Width = LABEL_WIDTH + Label1.Left + 1000
	        End Sub
	
	        Private Sub Text1_Change()
	           ' Sync the two control's displays.
	           Label1.Caption = Text1.Text
	
	           ' Check for change in label's width.
	           If Label1.Width <> LABEL_WIDTH Then
	              Debug.Print "Label Width: " & Label1.Width & _
	                 vbTab & "TextBox Width: " & Text1.Width
	           End If
	        End Sub
	
	7. Run the project.
	
	RESULT: Begin typing some text into the TextBox until the debug window shows a
	change in the label's width. The actual amount of typing you must do to see this
	behavior can vary from system to system. To consistently cause this behavior,
	type some text up to the end of the first line and then hit the space bar
	several times, or just enter spaces.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbVBp500bug kbVBp600bug kbGrpDSVB kbCodeSam 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVB500 kbVB600 kbZNotKeyword3
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
