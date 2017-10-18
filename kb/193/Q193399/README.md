---
layout: page
title: "Q193399: BUG: TabStrip Loses Selection When Placement Property is Changed"
permalink: kb/193/Q193399/
---

## Q193399: BUG: TabStrip Loses Selection When Placement Property is Changed

	Article: Q193399
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
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
	
	When changing the Placement property of a TabStrip control (Placement determines
	the location of the tabs: top, bottom, right, left), the TabStrip may lose track
	of which Tab is selected. The selected Tab should not change when the Placement
	is changed.
	
	RESOLUTION
	==========
	
	The workaround for this problem is straightforward. Because the TabStrip may not
	retain the selected tab properly, you must do it programmatically. This value
	can be stored in a variable at the beginning of the procedure (or before
	changing the Placement property), and then restored at the end of the procedure
	(or after changing the Placement property). The following code will fix the
	problem as presented in step 7 of the Steps to Reproduce Behavior section of
	this article:
	
	     Dim objSaveTab As Object
	     With TabStrip1
	        Set objSaveTab = .SelectedItem
	        If .Placement = 3 Then
	           .Placement = 0
	        Else
	           .Placement = TabStrip1.Placement + 1
	        End If
	        Set .SelectedItem = objSaveTab
	        Debug.Print .SelectedItem
	     End With
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Standard EXE project in Visual Basic. Form1 is created default.
	
	2. Add the TabStrip component to the toolbox by selecting Components from the
	  Project menu, checking "Microsoft Windows Common Controls 6.0," and then
	  clicking OK.
	
	3. Add an instance of the TabStrip to Form1.
	
	4. Add a second tab to the TabStrip.
	
	5. Set the Caption property of Tab1 to "One" and the Caption of Tab2 to "Two."
	
	6. Add a CommandButton to Form1.
	
	7. Add the following code to Form1:
	
	        Private Sub Command1_Click()
	           With TabStrip1
	              If .Placement = 3 Then
	                 .Placement = 0
	              Else
	                 .Placement = TabStrip1.Placement + 1
	              End If
	              Debug.Print .SelectedItem
	           End With
	        End Sub
	
	8. Run the project and click on the tab labeled "Two."
	
	9. Click the CommandButton twice and note that the selected tab (printed in the
	  Immediate Window) changes from Two to One.
	
	Additional query words: kbDSupport kbDSD kbVBp kbVBp600bug kbVBp kbCmnCtrls kbCtrl kbTabCtrl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	
	=============================================================================
	
