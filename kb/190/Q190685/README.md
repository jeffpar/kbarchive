---
layout: page
title: "Q190685: BUG: TabStrip Control's TabStyle Has No Effect at Run-Time"
permalink: /kb/190/Q190685/
---

## Q190685: BUG: TabStrip Control's TabStyle Has No Effect at Run-Time

	Article: Q190685
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Changing the TabStyle property of the TabStrip control at run-time has no
	effect.
	
	RESOLUTION
	==========
	
	You must set the TabStyle property at design-time.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	If you have more then one row of tabs, the TabStyle property determines how
	remaining rows of tabs in front of a selected tab are repositioned. If you set
	the TabStyle to tabTabStandard, the remaining tabs remain on the same side of
	the control. If the TabStyle is set to tabTabOpposite, the row(s) of tabs in
	front of the selected tab are repositioned at the opposite side of the control.
	For the default value of the placement property, this would be top and bottom,
	respectively. However, changing the TabStyle property at run-time has no effect
	on how the tabs are displayed.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project. Form1 is created by default.
	
	2. Using the Projects menu, select Components to bring up the Components dialog
	  box. On the Controls Tab, select "Microsoft Windows Common Controls 6.0," and
	  then click OK.
	
	3. Place a TabStrip and two CommandButtons on Form1.
	
	4. In the Property Page for the TabStrip, set the MultiRow property to True.
	  Then add enough Tabs so you have more than one row of tabs.
	
	5. Add the following Code to Form1:
	
	        Private Sub Command1_Click()
	          TabStrip1.TabStyle = tabTabOpposite
	          Debug.Print TabStrip1.TabStyle
	        End Sub
	
	        Private Sub Command2_Click()
	          TabStrip1.TabStyle = tabTabStandard
	          Debug.Print TabStrip1.TabStyle
	        End Sub
	
	        Private Sub Form_Load()
	          Command1.Caption = "Tab Opposite"
	          Command2.Caption = "Tab Standard"
	        End Sub
	
	6. Save and run the project. Click on the Tab Opposite button, then try
	  selecting tabs from different rows. Click on the Tab Standard button, and
	  then try selecting tabs from different rows. You will not see any change.
	
	7. Return to design mode and set the TabStyle to 1-tabTabOpposite in the
	  Property Page for the TabStrip. Then run the project and try selecting tabs
	  from different rows. You will see the correct behavior.
	
	Additional query words: kbDSupport kbDSD kbCtrl kbComCtrls kbVBp kbVBp600bug
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Issue type        : kbbug
	
	=============================================================================
	
