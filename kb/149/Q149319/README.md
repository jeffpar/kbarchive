---
layout: page
title: "Q149319: FIX: String/Currency Conversion Broken with Sci. Notation"
permalink: /kb/149/Q149319/
---

## Q149319: FIX: String/Currency Conversion Broken with Sci. Notation

	Article: Q149319
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbVBp kbVBp400bug kbOSWin98fix kbGrpDSVB kbDSupport
	Last Modified: 05-JUN-2001
	
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
	
	Visual Basic 4.0 will sometimes return an incorrect value when converting a
	string to a currency value if the string contains a large number represented
	using scientific notation.
	
	CAUSE
	=====
	
	
	RESOLUTION
	==========
	
	To work around the problem, append zeroes to the end of the string to be
	converted. This will cause the correct result. For example, instead of using
	Print 1.7e7@, use Print 1.7000000000e7@. Nine zeroes will fix the problem in the
	worst case. The smaller the exponent, the fewer zeroes need to be added to
	obtain correct behavior.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the products listed above. This
	problem has been fixed in Microsoft Windows 98.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce
	------------------
	
	1. Start Visual Basic or, if it is already running, choose New Project from the
	  File menu.
	
	2. Insert this line of code into the Form_Load event:
	
	        Private Sub Form_Load()
	           Stop
	        End Sub
	
	3. Select Start from the Run menu, or press the F5 key to start the application.
	
	4. Switch to the Debug window, enter Print 1.7e7@, and press the ENTER key. You
	  will see the incorrect value of 7798.8435 instead of the correct 17000000.
	  Using Print 1.7000000000e7@ instead will cause the correct response.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp kbVBp400bug kbOSWin98fix kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
