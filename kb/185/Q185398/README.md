---
layout: page
title: "Q185398: WD97: How to Modify a Calculation Field to Appear Blank"
permalink: kb/185/Q185398/
---

## Q185398: WD97: How to Modify a Calculation Field to Appear Blank

	Article: Q185398
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbfield word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes how you can modify a calculation field such that it
	appears blank (no result) instead of displaying a zero.
	
	MORE INFORMATION
	================
	
	If You Use a Formula (=) Field
	------------------------------
	
	To change the result of a formula field to appear blank instead of displaying a
	zero, follow these steps:
	
	1. Press ALT+F9 to toggle (show) the field codes.
	
	  You should see a formula field similar to the following:
	
	  { =SUM(A1:A3) \# $#,##0.00 }
	
	2. Change (modify) the formula field to resemble the following:
	
	  { =SUM(A1:A3) \# $#,##0.00;($#,##0.00); }
	
	  NOTE: Be sure to include (type) the semicolon at the end of the picture
	  switch.
	
	3. Press ALT+F9 to toggle (hide) the field codes and to show the result of the
	  formula field. When you update your field codes, the formula field should now
	  appear blank when the result of the calculation is zero.
	
	If You Use a Calculation Form Field
	-----------------------------------
	
	To change the result of a calculation form field to show no value instead of a
	zero, use one of the following methods:
	
	Method 1: Change the Calculation Form Field Options
	
	1. Unprotect your form document.
	
	2. Double-click the Calculation form field.
	
	3. In the "Text Form Field Options" dialog box, copy (CTRL+C) or cut (CTRL+X)
	  and then delete the contents of the Number format box.
	
	  NOTE: The Number Format box must be blank.
	
	4. In the "Text Form Field Options" dialog box, paste or type the number format
	  to the end of the formula contained in the Expression box.
	
	  The Expression box should appear similar to the following example:
	
	  =text1 + text2 \# $#,##0.00;($#,##0.00);
	
	  NOTE: Be sure your expression ends with a semi-colon (;).
	
	5. Click OK to close the "Text Form Field Options" dialog box, and then
	  reprotect your form.
	
	Method 2: Change the FORMTEXT Field
	
	1. Unprotect your form document.
	
	2. Double-click the Calculation form field.
	
	3. In the "Text Form Field Options" dialog box, copy (CTRL+C) or cut (CTRL+X)
	  and then delete the contents of the Number format box.
	
	  NOTE: The Number Format box must be blank.
	
	4. Click OK to close the "Text Form Field Options" dialog box.
	
	5. In your form, press ALT+F9 to toggle (show) the field codes.
	
	  The calculation text form field should disappear and show a field similar to
	  the following:
	
	  { FORMTEXT { =PRODUCT(A1:A3) } }
	
	6. Paste (CTRL+V) or type the picture field switch (\#) format for your FORMTEXT
	  field to show as follows:
	
	  { FORMTEXT { =PRODUCT(A1:A3) \# $#,##0.00;($#,##0.00); } }
	
	  NOTE: Be sure to include (type) the semicolon (;) at the end of the picture
	  switch.
	
	7. Press ALT+F9 to toggle (hide) the field codes and to show the result of the
	  Calculation Text Form Field, and then reprotect your form.
	
	Your calculation form field should now appear blank when the result of your
	calculation is zero.
	
	For more information about the picture field switch, click Contents And Index on
	the Help menu, click the Index tab in Microsoft Word Help, type the following
	text
	
	  picture
	
	and then double-click the selected text to go to the "Numeric Picture (\#) field
	switch" topic. If you are unable to find the information you need, ask the
	Office Assistant.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q185056 WD97: Incorrect Formula Results Using ABOVE, BELOW, LEFT, RIGHT
	
	  Q185400 WD97: How to Set Up a Table as a Spreadsheet in Word
	
	Additional query words: expression number format blanks nothing invoice invoice.dot purchase order
	
	======================================================================
	Keywords          : kbdta kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
