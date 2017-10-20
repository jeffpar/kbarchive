---
layout: page
title: "Q231689: BUG: Moving Controls on a Form Triggers Form_MouseMove Event"
permalink: /kb/231/Q231689/
---

## Q231689: BUG: Moving Controls on a Form Triggers Form_MouseMove Event

{% raw %}

	Article: Q231689
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbActivexEvents kbVBp kbVBp600bug kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you move controls on a form and the cursor is over the form, the form's
	MouseMove event gets triggered even if the cursor is not moving.
	
	RESOLUTION
	==========
	
	In this scenario, if you need to place code in the form's MouseMove event and
	want to be sure it runs only when the mouse is actually moving, you will need to
	set a flag before moving any control on the form. Check the flag in the
	MouseMove event before executing any code.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project. Form1 is created by default.
	
	2. Add a PictureBox control (Picture1) to Form1.
	
	3. Add a TextBox control (Text1) to Form1. Make it high enough to display
	  multiple lines and set the Multiline property to True.
	
	4. Place three CommandButtons on the form. Name them as below and set the
	  captions accordingly:
	
	  cmdMove       &Move
	  cmdStart      &Start Log
	  cmdStop       &End Log
	
	5. Add the following code to the module of Form1:
	
	  Option Explicit
	  Dim iLog As Long
	
	  Private Sub cmdMove_Click()
	      Dim l As Integer, t As Integer
	      l = Picture1.Left + Picture1.Width / 2
	      t = Picture1.Top
	      Picture1.Move l, t
	  End Sub
	
	  Private Sub cmdStart_Click()
	      Text1.Text = ""
	      iLog = 1
	  End Sub
	
	  Private Sub cmdStop_Click()
	      iLog = 0
	  End Sub
	
	  Private Sub Form_Load()
	      iLog = 0
	  End Sub
	
	  Private Sub Form_MouseMove(Button As Integer, Shift As Integer, _
	     x As Single, y As Single)
	      If iLog = 1 Then Text1.Text = Text1.Text & "Form " & x & _
	         " " & y & " " & Date & vbCrLf
	  End Sub
	
	6. Save the project.
	
	7. Press F5 to run the project.
	
	8. Place the mouse over the form.
	
	9. You can move Picture1 by using Alt+M.
	
	10. You can start logging MouseMove events by using Alt+S.
	
	11. Start logging and move Picture1. Every time you move the picture, a
	  MouseMove event gets logged in the TextBox. Note that this only happens if
	  the mouse is over the form.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActivexEvents kbVBp kbVBp600bug kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
