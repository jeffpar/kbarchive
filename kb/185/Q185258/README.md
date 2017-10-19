---
layout: page
title: "Q185258: PRB: Increment Decimal Value Works Incorrectly in Spinner"
permalink: /kb/185/Q185258/
---

## Q185258: PRB: Increment Decimal Value Works Incorrectly in Spinner

	Article: Q185258
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): kbnokeyword
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The spinner control in Visual FoxPro 3.x and 5.x works incorrectly when the
	increment value is a decimal value.
	
	RESOLUTION
	==========
	
	Place the following code in the INIT event of the spinner control:
	
	     This.value = This.value * 1.00
	
	Multiplying the value by 1 with 2 decimal places is very crucial. Using the
	integer 1 without the 2 decimal places causes the value to increase incorrectly
	in a spinner control.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form.
	
	2. Add a spinner control to the form and name the control spinner1.
	
	3. Change the following properties for the spinner1 control:
	
	  InputMask = 999.99
	  Increment = .25
	
	4. Save and run the form.
	
	Use the mouse to click on the spinner's up arrow. After two clicks you are
	incremented to 1.00, then after four clicks to 2.00, and so on.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
