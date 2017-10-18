---
layout: page
title: "Q150230: FIX: &quot;Function call on Left-hand side of assignment...&quot; Error"
permalink: kb/150/Q150230/
---

## Q150230: FIX: &quot;Function call on Left-hand side of assignment...&quot; Error

	Article: Q150230
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
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
	
	When a Read-Only property of a Text box is set in code, trying to run a project
	brings up the following error message:
	
	  "Function call on left-hand side of assignment must return Variant or Object"
	
	The environment shows a line of code that does not involve a property where an
	object or variant is necessary.
	
	CAUSE
	=====
	
	The problem with the code has nothing to do with the return value of a function.
	Although the error message is misleading and incorrect, it is an error to try
	and set a Read-Only property.
	
	RESOLUTION
	==========
	
	Do not attempt to set a Read-Only property in code (by definition).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 5.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start a new project in Visual Basic 4.0. Form1 is created by default.
	
	2. Add a TextBox control to Form1.
	
	3. In the Form_Load event, place the following code:
	
	        Private Sub Form_Load()
	           Text1.HideSelection = False
	        End Sub
	
	4. Run the program by pressing the F5 key. The error message occurs.
	
	Additional query words: kbVBp400bug kbVBp500fix kbVBp kbdsd kbDSupport
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
