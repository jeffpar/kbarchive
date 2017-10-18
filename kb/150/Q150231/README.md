---
layout: page
title: "Q150231: FIX: Toolbar Does Not Show ToolTips Under Certain Circumstance"
permalink: kb/150/Q150231/
---

## Q150231: FIX: Toolbar Does Not Show ToolTips Under Certain Circumstance

	Article: Q150231
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbVBp kbVBp400bug kbVBp500fix kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the user clicks on an area of a Toolbar generated from the Windows Common
	Controls OCX, and if the area of the toolbar does not contain a button, then it
	may cause the ToolTips to not show.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 5.0.
	
	MORE INFORMATION
	================
	
	Steps To Reproduce
	------------------
	
	1. Start a new project in Visual Basic 4.0, 32-bit edition. Form1 is created by
	  default.
	
	2. Add the Windows 95 controls to the Toolbox by selecting Microsoft Windows
	  Common Controls in the Tools, Custom Controls dialog box.
	
	3. Place a Toolbar on Form1. Choose the Custom property, and invoke the Custom
	  property page by selecting the ellipsis (...) by the Custom property. Choose
	  the Buttons tab, and select the Insert Button button. Also, in the same tab,
	  type in a ToolTip of "Hello".
	
	4. Run the project by pressing F5. Place the mouse over the button on the
	  Toolbar, and notice that the ToolTip appears after a brief pause. Now move
	  the mouse to the right of the button and click the left mouse button. Now
	  move the mouse cursor back over the button. The ToolTip will not reappear.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword kbVBp kbVBp400bug kbVBp500fix kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
