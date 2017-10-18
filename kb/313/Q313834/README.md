---
layout: page
title: "Q313834: BUG: The Validate Event Does Not Fire for Controls on the SSTab"
permalink: kb/313/Q313834/
---

## Q313834: BUG: The Validate Event Does Not Fire for Controls on the SSTab

	Article: Q313834
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbActivexEvents kbTabCtrl
	Last Modified: 14-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Validate event of a control is not raised if the container for that control
	is the Microsoft Tabbed Dialog Control (Tabctl32.ocx).
	
	CAUSE
	=====
	
	This problem occurs if there is a Label control on one of the tabs of the Tabbed
	Dialog Control.
	
	RESOLUTION
	==========
	
	Use one of the following methods to work around this problem:
	
	1. Place the Label control inside of a frame on the Tabbed Dialog Control.
	
	-or-
	
	2. Use the LostFocus event instead of the Validate event.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Problem
	------------------------------
	
	1. Start a new Visual Basic Standard EXE Project. Form1 is created by default.
	
	2. On the Project menu, click Components.
	
	3. Click to select the Microsoft Tabbed Dialog control 6.0 check box, and then
	  click OK.
	
	4. Add a Tabbed Dialog Control (SSTab1) to Form1.
	
	5. Add a Textbox control to Tab0.
	
	6. Add a Textbox and Label control to Tab1.
	
	7. Paste the following code in the General Declarations section of Form1:
	
	  Private Sub Text1_Validate(Cancel As Boolean)
	     Debug.Print "Text1_Validate"
	  End Sub
	
	  Private Sub Text2_Validate(Cancel As Boolean)
	     Debug.Print "Text2_Validate"
	  End Sub
	
	8. Press the F5 key to start the project.
	
	9. Click Text1 on Tab0.
	
	10. Click Tab1. The Validate event for Text1 should fire, but it does not.
	
	11. Click Text2 on Tab1.
	
	12. Click Tab0. The Validate event for Text2 should fire, but it does not.
	
	NOTE: If you place the Label and Textbox control on Tab1 inside of a Frame
	control, the Validate event for both text boxes fires.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActivexEvents kbTabCtrl 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbbug
	
	=============================================================================
	
