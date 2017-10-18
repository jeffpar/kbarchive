---
layout: page
title: "Q150182: FIX: A Picture Box Containing Labels May Not Repaint Correctly"
permalink: kb/150/Q150182/
---

## Q150182: FIX: A Picture Box Containing Labels May Not Repaint Correctly

	Article: Q150182
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 02-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A picture box that contains labels and is larger than the screen size does not
	repaint correctly.
	
	RESOLUTION
	==========
	
	Use text boxes without borders - BorderStyle set to None - and a BackColor set
	to the same color as the label to substitute for the labels. The text boxes
	should be made read-only.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q110403 How to Create a Read-Only Text Box Using SendMessage API
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 5.0.
	
	MORE INFORMATION
	================
	
	Steps To Reproduce Problem
	--------------------------
	
	1. Start a new project. Form1 is created by default. Place a picture box on the
	  form, and then place a label control inside the picture box.
	
	2. In the Properties window for the picture box, change the Height property to a
	  large value, such as 20000.
	
	3. Drag the picture box up until you can view the lower border. Notice that the
	  section of the picture box that was below the screen does not correctly
	  repaint. When the label is removed, the problem goes away.
	
	NOTE: This problem can also occur at run-time.
	
	Additional query words: kbVBp400bug kbVBp500fix kbVBp kbdsd kbDSupport kbControl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB400Search kbVB400
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
