---
layout: page
title: "Q238312: Fire TabStrip's Click Event When Using Msgbox in BeforeClick"
permalink: /kb/238/Q238312/
---

## Q238312: Fire TabStrip's Click Event When Using Msgbox in BeforeClick

{% raw %}

	Article: Q238312
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbActivexEvents kbTabCtrl kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If a message box is displayed in a TabStrip control's BeforeClick event handler,
	the TabStrip control's Click event handler will not be fired, even if the Cancel
	parameter is set to False. In some situations it may be necessary to validate
	the information in the BeforeClick event handler and then display a message box
	to determine if the user wishes to continue. If so, the Click event should be
	fired.
	
	MORE INFORMATION
	================
	
	The optimum workaround depends upon the situation:
	
	Situation 1:
	------------
	
	If you don't need to reference the TabStrip1.SelectedItem.Index property in the
	Click event handler, you can call the function directly. For example:
	
	  Private Sub TabStrip1_BeforeClick(Cancel As Integer)
	     If MsgBox("Do you want to continue?", vbYesNo) = vbYes Then
	        TabStrip1_Click
	     Else
	        Cancel = True
	     End If
	  End Sub
	
	  Private Sub TabStrip1_Click()
	      MsgBox "click event handler is called"
	  End Sub
	
	Situation 2:
	------------
	
	If the Click event handler is called inside the BeforeClick event, the index
	value has not yet been changed. So if you must reference the
	TabStrip1.SelectedItem.Index property, you must call the Click event after
	exiting the BeforeClick event. One solution is to use a Timer control. For
	example:
	
	  Option Explicit
	
	  Private Sub Form_Load()
	     TabStrip1.Tabs(1).Selected = True
	     Timer1.Interval = 1
	     Timer1.Enabled = False
	  End Sub
	
	  Private Sub TabStrip1_BeforeClick(Cancel As Integer)
	     If MsgBox("Do you want to continue?", vbYesNo) = vbYes Then
	        Timer1.Enabled = True 'call the click handler
	     Else
	        Cancel = True
	     End If
	  End Sub
	
	  Private Sub TabStrip1_Click()
	     msgbox "Change to tab " & TabStrip1.SelectedItem.Index
	  End Sub
	
	  Private Sub Timer1_Timer()
	     Timer1.Enabled = False
	     TabStrip1_Click 'call it here
	  End Sub
	
	REFERENCES
	==========
	
	For more information regarding the TabStrip control, especially the BeforeClick
	and Click events, please see the MSDN Library
	(http://msdn.microsoft.com/library/default.htm).
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbActivexEvents kbTabCtrl kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
