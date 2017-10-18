---
layout: page
title: "Q130576: PRB: MODIFY GENERAL Fires the FORM DEACTIVATE Clause"
permalink: kb/130/Q130576/
---

## Q130576: PRB: MODIFY GENERAL Fires the FORM DEACTIVATE Clause

	Article: Q130576
	Product(s): Microsoft FoxPro
	Version(s): 3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbgrpdsvckbbuglist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Issuing a MODIFY GENERAL or MODIFY MEMO command in a Visual FoxPro form causes
	the Deactivate event of the form to fire. This is because the window created by
	the MODIFY GENERAL or MODIFY MEMO commands causes the form to lose focus.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce
	------------------
	
	1. Create a new form based on a table with a General field.
	
	2. Add a command button and a text box to the form. Set the Control Source of
	  the text box to the General field of the table.
	
	3. Add the following code to the Click event of the command button:
	
	        WAIT WINDOW "About to modify the general field"
	        MODIFY GENERAL <general fieldname>
	        WAIT WINDOW "After modify general"
	
	4. Add the following code to the Deactivate event of the form.
	
	        WAIT WINDOW "Called from Deactivate Event"
	
	5. Save and run the form. Note that the Wait Window placed in the Deactivate
	  event appears after you click the command button.
	
	Additional query words: kbvfp600 kbvfp300 kbvfp500
	
	======================================================================
	Keywords          : kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbgrpdsvc kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : :3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
