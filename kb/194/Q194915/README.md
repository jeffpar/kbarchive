---
layout: page
title: "Q194915: BUG: Toolbar ButtonMenu May Not Display Correctly"
permalink: kb/194/Q194915/
---

## Q194915: BUG: Toolbar ButtonMenu May Not Display Correctly

	Article: Q194915
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbCmnCtrls kbCtrl kbToolbar kbVBp kbVBp600bug kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using a ToolBar "ButtonMenu" in conjunction with setting the ToolBar's "Align"
	property to "3 - vbAlignLeft" or "4 - vbAlignRight" causes the drop- down
	portion of the button to be only partially visible.
	
	RESOLUTION
	==========
	
	While the majority of the drop-down portion of the button is not visible, the
	portion that is displayed retains the full "ButtonMenu" functionality and can be
	used despite the incorrect display.
	
	If the button must be fully displayed, the "Align" property must be set to "0 -
	vbAlignNone," "1 - vbAlignTop," or "2 - vbAlignBottom."
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project. Form1 is created by default.
	
	2. Choose Components from the Project menu, check "Microsoft Windows Common
	  Controls - 6.0," and click OK.
	
	3. Add a ToolBar control to Form1.
	
	4. View the ToolBar's custom property page.
	
	5. Select the "Buttons" tab.
	
	6. Click "Insert Button."
	
	7. Change the "Style" property to "5 - tbrDropdown."
	
	8. Click "Insert ButtonMenu."
	
	9. Type "Hello" into the "Text" property and click "OK."
	
	10. View the ToolBar's standard properties.
	
	11. Change the "Align" property to "3 - vbAlignLeft."
	
	12. Run the sample application. The result is that the ToolBar appears on the
	  left side of Form1. The actual ToolBar button can be seen; however, its
	  drop-down arrow is only partially visible. Clicking on the ToolBar to the
	  right of the button still activates the fully functioning drop-down menu.
	
	======================================================================
	Keywords          : kbCmnCtrls kbCtrl kbToolbar kbVBp kbVBp600bug kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	
	=============================================================================
	
