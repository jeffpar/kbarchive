---
layout: page
title: "Q143404: FIX: ZOrder and Aligned Controls"
permalink: kb/143/Q143404/
---

## Q143404: FIX: ZOrder and Aligned Controls

	Article: Q143404
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Placing a control such as a command button on top of an aligned OCX control at
	design time will cause the Command button to fall to the bottom of the ZOrder at
	run time and become invisible.
	
	RESOLUTION
	==========
	
	Invoke the ZOrder method of the Command button in Form_Load event as in the
	sample code below:
	
	     Private Sub Form_Load()
	         Command1.ZOrder 0
	     End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 5.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start Visual Basic or from the File menu, choose New Project (ALT, F, N).
	
	2. Add a Toolbar to Form1.
	
	3. Add a Command button on top of the Toolbar1.
	
	4. Run the Program. Note that the Command button disappears.
	
	Additional query words: kbVBp400bug kbVBp500fix kbVBp kbdsd kbDSupport KbControl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : 4.00
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
