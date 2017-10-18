---
layout: page
title: "Q192187: PRB: TabStrip MultiRow Only True When Placement Not Top"
permalink: kb/192/Q192187/
---

## Q192187: PRB: TabStrip MultiRow Only True When Placement Not Top

	Article: Q192187
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When setting the Placement property of the TabStrip control to any setting other
	then 0-tabPlacmentTop, the MultiRow property will always be True. You can only
	set the MultiRow property to False if the Placement property is set to
	0-tabPlacmentTop.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	When you set the TabStrip control's Placement property to any value other then
	0-tabPlacmentTop, the MultiRow property will change to True. If you have the
	Placement property set to a value other then 0-tabPlacmentTop and you then
	change the MultiRow property to False, the Placement property will reset to
	0-tabPlacmentTop.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. From the Project menu, select Components, check "Microsoft Windows Common
	  Controls 6.0," and then click OK.
	
	3. Add a TabStrip Control and two CommandButtons to Form1.
	
	4. Add the following to the code window of Form1:
	
	        Private Sub Command1_Click()
	          TabStrip1.Placement = tabPlacementLeft
	          Debug.Print "Tab placement is", TabStrip1.Placement
	          Debug.Print "Tab MultiRow is", TabStrip1.MultiRow
	        End Sub
	
	        Private Sub Command2_Click()
	          TabStrip1.MultiRow = False
	          Debug.Print "Tab placement is", TabStrip1.Placement
	          Debug.Print "Tab MultiRow is", TabStrip1.MultiRow
	        End Sub
	
	        Private Sub Form_Load()
	          Dim i As Integer
	          ' add some tabs
	          TabStrip1.Tabs.Add
	          TabStrip1.Tabs.Add
	          ' place some long captions on the tabs
	          For i = 1 To TabStrip1.Tabs.Count
	            TabStrip1.Tabs(i).Caption = "This is a long caption number " _
	              & Str(i)
	          Next i
	          ' set the tabs to be on top and MultiLine to False
	          TabStrip1.Placement = tabPlacementTop
	          TabStrip1.MultiRow = False
	          Command1.Caption = "Change Placement"
	          Command2.Caption = "Change MultiRow"
	        End Sub
	
	5. Save and run the Project. Click on the Change Placement button. You will see
	  the tab placement on the left but you will see more then one row of tabs.
	  Click on Change MultiRow and you will see that the tab placement goes back to
	  the top, but you only have one line of tabs.
	
	Additional query words: kbDSupport kbDSD kbVBp kbVBp600 kbCtrl kbCmnCtrls
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	
