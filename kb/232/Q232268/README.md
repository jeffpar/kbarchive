---
layout: page
title: "Q232268: BUG: Validate Event Is not Fired When Placing a FlexGrid Control"
permalink: /kb/232/Q232268/
---

## Q232268: BUG: Validate Event Is not Fired When Placing a FlexGrid Control

	Article: Q232268
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When placing controls on a tab control, the Validate event is fired every time
	you shift the focus from one control to another, or when changing the visible
	tab.
	
	If one of the controls placed on the Tab control is a FlexGrid control then the
	validate events are not fired correctly when moving from one tab to another
	using the mouse. Although they work fine if shortcuts are used on the tab's
	captions and the keyboard is used to move between tabs.
	
	RESOLUTION
	==========
	
	Use other events such as lost focus to simulate validation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new standard .exe project.
	
	2. Select the Microsoft Flex Grid Control 6.0 and the Microsoft Tabbed Dialog
	  Control 6.0 from the Components List under the Project menu.
	
	3. Place the Microsoft Tabbed Dialog Control on your form.
	
	4. Place two text boxes on a tab.
	
	5. On the same tab place the Microsoft Flex Grid Control.
	
	6. Set the CausesValidation property to True on all controls, including the tab
	  control.
	
	7. Add a text box to the form. Call it txtLog, set Text="" and set multiline to
	  True.
	
	8. On the Validate event from each control (including the Tab control), write a
	  line to the txtLog control so that you can see when such events are firing as
	  shown below:
	
	  Option Explicit
	
	  Private Sub MSFlexGrid1_Validate(Cancel As Boolean)
	  txtlog = txtlog & "MSFlexGrid1 Validate" & vbCrLf
	  End Sub
	
	  Private Sub SSTab1_Validate(Cancel As Boolean)
	  txtlog = txtlog & "SSTab1 Validate" & vbCrLf
	  End Sub
	
	  Private Sub Text1_Validate(Cancel As Boolean)
	  txtlog = txtlog & "Text1 Validate" & vbCrLf
	  End Sub
	
	  Private Sub Text2_Validate(Cancel As Boolean)
	  txtlog = txtlog & "Text2 Validate" & vbCrLf
	  End Sub
	
	9. Change the caption for each tab to:
	
	  &A, &B, &C
	
	  So that you can change the visible tab with the keyboard.
	
	10. Save and then run the project.
	
	11. Click on Text1, Text2 and the grid - validate events are being fired as
	  expected. Click tab B. You will notice that no validate event was fired.
	
	12. Return to Tab A and click Text1. Now turn to Tab B using the keyboard (Alt +
	  B). The validate event was fired.
	
	13. Create another project similar to this one, without a FlexGrid, and
	  everything will work as expected.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
