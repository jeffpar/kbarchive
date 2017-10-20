---
layout: page
title: "Q191859: BUG: MonthView Control Prevents CommandButton Click Event"
permalink: /kb/191/Q191859/
---

## Q191859: BUG: MonthView Control Prevents CommandButton Click Event

{% raw %}

	Article: Q191859
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbCtrl kbVBp kbVBp600bug kbGrpDSVB kbDSupport
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Visual Basic project contains a MonthView control and a CommandButton. When
	the date is changed on the MonthView control followed by clicking the
	CommandButton, the CommandButton gets the focus but the CommandButton's Click
	event is not executed. If you click the CommandButton a second time, the Click
	event executes normally.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add a reference to the Microsoft Windows Common Controls-2 6.0 by completing
	  the following steps:
	
	  a. From the Project menu, select Components to display the Components dialog
	     box.
	
	  b. From the Controls tab, check Microsoft Common Controls-2 6.0.
	
	  c. Click OK to close the dialog box.
	
	3. Add a MonthView control and a CommandButton to Form1.
	
	4. Copy the following to the Code window of Form1:
	
	        Option Explicit
	
	        Private Sub Command1_Click()
	         MsgBox "CommandButton Clicked"
	        End Sub
	
	5. On the Run menu, select Start, or press the F5 key to start the program.
	  Click the CommandButton. A message box appears. Click OK to dismiss the
	  message box.
	
	6. Select a day in the MonthView control and then click the CommandButton. The
	  CommandButton gets the focus but the Click event is not executed. When you
	  click the CommandButton a second time, the Click event occurs and you see the
	  message box.
	
	WORKAROUND
	----------
	
	Add the following code to Form1:
	
	  Private mvHasFocus As Boolean
	
	  Private Sub Command1_MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)
	      If mvHasFocus Then
	          mvHasFocus = False
	          Call Command1_Click
	      End If
	  End Sub
	
	  Private Sub MonthView1_GotFocus()
	      mvHasFocus = True
	  End Sub
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCtrl kbVBp kbVBp600bug kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
