---
layout: page
title: "Q77620: WD97: Cannot Insert Nested Formula with Insert Field Command"
permalink: kb/077/Q77620/
---

## Q77620: WD97: Cannot Insert Nested Formula with Insert Field Command

	Article: Q77620
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word8 kbfield word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to create a field containing nested instructions or multiple
	switches, the field is not inserted correctly.
	
	For example, if you attempt to create a field similar to the following by adding
	multiple switches to the EQ field in the Field Options dialog box,
	
	  {EQ \F({EQ \R(,)},)}
	
	Word inserts the field incorrectly, like this:
	
	  {EQ \F(,) \R(,)}
	
	
	CAUSE
	=====
	
	The Field dialog box does not allow recursion or the nesting of multiple
	instructions or switches. However, you can add additional instructions or
	switches manually.
	
	WORKAROUND
	==========
	
	To work around this behavior, use one of the following methods:
	
	Method 1: Create a Nested Field
	-------------------------------
	
	For example, to create a nested field similar to
	
	  {EQ \F({EQ \R(,)},)}
	
	follow these steps:
	
	1. On the Insert menu, click Field.
	
	2. In the Categories list, click Equations and Formulas. In the Field Names
	  list, click to select EQ.
	
	3. Click Options.
	
	4. In the Switches list in the Field Options dialog box, select \F(,) and then
	  click Add to Field.
	
	5. Click OK to close the Field Options dialog box.
	
	6. Click OK to close the Field dialog box.
	
	  Your inserted field should look similar to the following:
	
	  {EQ \F(,)}
	
	NOTE: If you do not see the field, press ALT+F9 to turn on the field codes in
	your document.
	
	7. Move the insertion point to the left of the comma inside of the parentheses.
	
	8. On the Insert menu, click Field.
	
	9. In the Categories list, click Equations and Formulas. In the Field Names
	  list, click to select EQ.
	
	10. Click Options.
	
	11. In the Switches list in the Field Options dialog box, select \R(,) and then
	  click Add to Field.
	
	12. Click OK to close the Field Options dialog box.
	
	13. Click OK to close the Field dialog box.
	
	  Your inserted field should now look similar to the following:
	
	  {EQ \F({EQ \R(,)},)}
	
	Method 2: Use Equation Editor
	-----------------------------
	
	1. On the Insert menu, click Object.
	
	2. Click Create New.
	
	3. In the Object Type list, select Microsoft Equation 3.0 and click OK.
	
	4. On the Equation toolbar, click the Fraction and Radical Templates button.
	
	5. Enter the information you want to use in your formula.
	
	6. When finished, click "Exit and Return to <filename>" to close Equation
	  Editor. If you see a field code that is similar to the following, press
	  ALT+F9 to turn off the field codes in your document.
	
	  {EMBED Equation.3}
	
	Additional query words: recursive
	
	======================================================================
	Keywords          : kbdta word8 kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
