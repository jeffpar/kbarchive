---
layout: page
title: "Q185670: WD97: Error Message: This Equation Is the Maximum Size Allowed"
permalink: /kb/185/Q185670/
---

## Q185670: WD97: Error Message: This Equation Is the Maximum Size Allowed

	Article: Q185670
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kberrmsg kbdta kbconversion word97 kblayout kbeqedit
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Word 97, when you open a document that was created in an earlier
	version of Word and then double-click an equation in that document, the equation
	may expand to be wider than the physical page width, and the following error
	message may appear:
	
	  This equation is the maximum size allowed. Please save the equation
	  immediately. If you want to continue, you must divide it into smaller pieces.
	
	
	CAUSE
	=====
	
	This problem occurs if the equation was created in Equation Editor version 2.x
	and contains small spaced characters (created by pressing CTRL+ALT+SPACE). When
	Word 97 opens the equation, Equation Editor version 3.0 converts these special
	small spaced characters to full-sized spaces. The expanded equation that results
	may be wider than the physical page width and may cause the error message.
	
	WORKAROUND
	==========
	
	To correct the expanded equation, follow these steps:
	
	1. Open the document in Microsoft Word 97, and double-click the equation.
	
	  NOTE: If Microsoft Equation Editor version 3.0 displays the error message
	  stated in the "Symptoms" section, click OK until the message is no longer
	  displayed.
	
	2. On the Format menu, click Spacing.
	
	3. Scroll down the list of items, and select Spacing Adjustment.
	
	4. Change the setting to 40% and click OK.
	
	5. Click somewhere in the document to close the equation.
	
	6. On the Edit menu, click Select All.
	
	7. Press F9 to update all fields in the document, including the equation fields.
	
	NOTE: You can also select and delete the spaces, but depending on the number of
	equations and unwanted spaces in the document, this solution may not be
	practical.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.<A0>This problem was corrected in Microsoft
	Equation Editor version 3.01 as included with Microsoft Word 2000.
	
	MORE INFORMATION
	================
	
	The following table indicates which version of Microsoft Equation ships with
	which version of Microsoft Word:
	
	  Microsoft Word version          Microsoft Equation version
	  ----------------------          --------------------------
	
	           2.x                              1.x
	           6.x                              2.0
	           95                               2.1
	           97                               3.0
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbdta kbconversion word97 kblayout kbeqedit 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
