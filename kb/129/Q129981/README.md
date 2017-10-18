---
layout: page
title: "Q129981: FIX: Custom Form Property Set to () Causes Infinite Loop"
permalink: kb/129/Q129981/
---

## Q129981: FIX: Custom Form Property Set to () Causes Infinite Loop

	Article: Q129981
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500fixkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a form is run with a DO FORM command, it appear to enter an infinite loop,
	and you cannot release it. When the same form is modified with a MODIFY FORM
	command, a Syntax Error is displayed. It is not possible to open the form.
	
	CAUSE
	=====
	
	The value of a custom property has been incorrectly set to (); that is, the
	value starts and ends with a parenthesis.
	
	WORKAROUND
	==========
	
	You can manually open the form (SCX table) by using a USE command. Browse the
	SCX table, and edit the Properties memo field to remove the property that is
	causing the error. Then close the SCX table, and compile the form by using the
	COMPILE FORM <name> command. Once the cause of the error has been removed,
	you can edit the form with a MODIFY FORM command.
	
	NOTE: manually editing the SCX table should be performed as a last resort. Use
	extreme caution when deleting data from the SCX table.
	
	If you must set a default value of () for the property, place quotation marks
	around the the expression in the property sheet.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	When you attempt to modify the form in Visual FoxPro 5.0, the "Syntax Error"
	message appears. However, the form opens.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a form.
	
	2. Add a new property.
	
	3. Change the property value to ().
	
	4. Save and close the form.
	
	5. Type "MODIFY FORM <form>" (without the quotation marks) to edit the
	  form.
	
	Additional query words: evaluate
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
