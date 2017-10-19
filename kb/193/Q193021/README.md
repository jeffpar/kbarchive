---
layout: page
title: "Q193021: BUG: SSTab Focus Given to a Control on a Non-Visible Tab"
permalink: /kb/193/Q193021/
---

## Q193021: BUG: SSTab Focus Given to a Control on a Non-Visible Tab

	Article: Q193021
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbCtrl kbTabCtrl kbVBp kbVBp500bug kbVBp600bug kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Pressing an ARROW key when a control contained on a SSTab has the focus may
	cause focus to be transferred to a control on a Tab that is not visible. The
	behavior also occurs if the control on a Tab that is not visible has an access
	key (ex. Command2.Caption = "&Command2"). The control's Click event can be
	accessed by pressing the ALT+C key combination, even though the control is on a
	tab that is not visible.
	
	RESOLUTION
	==========
	
	To work around this bug behavior, set the focus to the Tab with the control in
	the Lost Focus event of the last control in the Tab. If you created the sample
	project, add the following code to the Form1 code window:
	
	  Private Sub Command1_LostFocus()
	     SSTab1.Tab = 1
	     SSTab1.SetFocus
	  End Sub
	
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
	
	2. Add a reference to the Microsoft Tabbed Dialog Control 5.0/6.0 by clicking
	  Components from the Project Menu and checking "Microsoft Tabbed Dialog
	  Control 5.0/6.0."
	
	3. Add a Tabbed Dialog Control (SSTab1) to Form1. There will be three tabs:
	  Tab0, Tab1, and Tab2.
	
	4. Add a CommandButton to each tab on the SSTab1.
	
	5. On the second tab, Tab 1, add the following code to the Click event of the
	  CommandButton on this tab:
	
	        SSTab1.Caption = "changed"
	
	6. Also on the second tab, set the Caption property of the CommandButton to
	  "&Caption."
	
	7. Run the project.
	
	8. Click on the first tab, Tab 0, of the SSTab1 and hit the TAB key to move the
	  focus to the CommandButton on Tab 0.
	
	9. Now press the RIGHT ARROW key (->). Notice that no visible control has the
	  focus.
	
	10. Press the ENTER key. Notice the Tab 0 caption changes to "changed" showing
	  that the middle tab's button was pressed.
	
	11. Stop the project and run it again.
	
	12. Click on the first tab, Tab 0, of the SSTab1 and hit the TAB key to move the
	  focus to the CommandButton on Tab 0.
	
	13. Press the ALT+C key combination. Note that the Tab 0 caption changes to
	  "changed," showing that the middle tab's button was pressed.
	
	  The Click event of the CommandButton fires in both cases, the ARROW key and
	  the ACCESS key, even when the tab is not visible.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCtrl kbTabCtrl kbVBp kbVBp500bug kbVBp600bug kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
