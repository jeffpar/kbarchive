---
layout: page
title: "Q201583: BUG: Toolbar Does Not Resize to Fit the Caption of a Button"
permalink: kb/201/Q201583/
---

## Q201583: BUG: Toolbar Does Not Resize to Fit the Caption of a Button

	Article: Q201583
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbButton kbCmnCtrls kbCtrl kbVBp kbVBp600bug kbGrpDSVB kbDSupport
	Last Modified: 21-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A toolbar control that is placed on a Visual Basic form and aligned with the
	left or right side of the form does not resize to fit a button that has a
	caption wider than the width of the toolbar.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	
	1. In Visual Basic 6.0, create a new Standard EXE project. Form1 is created by
	  default.
	
	2. On the Project menu, click Components, select Microsoft Windows Common
	  Controls 6.0, and click OK.
	
	3. Place a Toolbar control on Form1.
	
	4. Place a CommandButton on the Toolbar by right-clicking it and selecting
	  Properties. Click the Buttons tab and click Insert button.
	
	5. In the Properties dialog box, change the Caption property for the
	  CommandButton to This is a long caption and click OK.
	
	6. In the Properties window, set the Align property for the Toolbar control to
	  vbAlignLeft or vbAlignRight.
	
	7. Run the program. Note that the Toolbar control does not resize to fit the
	  CommandButton, and the button appears to be clipped. Setting the Width or
	  ButtonWidth property of the Toolbar control has no effect on the size of the
	  control.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q194915 BUG: Toolbar ButtonMenu May Not Display Correctly
	
	Additional query words:
	
	======================================================================
	Keywords          : kbButton kbCmnCtrls kbCtrl kbVBp kbVBp600bug kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbbug
	
	=============================================================================
	
