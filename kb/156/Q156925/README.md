---
layout: page
title: "Q156925: PRB: NULL and .NULL. Are Not Interchangeable in Properties"
permalink: /kb/156/Q156925/
---

## Q156925: PRB: NULL and .NULL. Are Not Interchangeable in Properties

	Article: Q156925
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp500 kbvfp600
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual FoxPro 5.0, when assigning a null value to a property in the
	Properties window, you need to use .NULL. instead of NULL. The values are not
	interchangeable when used in a property in the Properties window.
	
	CAUSE
	=====
	
	In the Properties window, you do not have to enter quotes to enter a string. The
	text NULL entered without the quotes is interpreted as the string 'NULL' instead
	of the actual .NULL. value.
	
	WORKAROUND
	==========
	
	You need to enter the string as .NULL. in the Properties window.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	At times, you may wonder why you can enter the following in the Command window
	and get the expected result:
	
	     X=NULL
	     ?ISNULL(X)   <-- .T. is return
	
	However, ISNULL() evaluates as .F. instead of .T. when a NULL value, without the
	period on both ends, is assigned to a property in the Properties window.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form.
	
	2. Create a new property named NullProperty.
	
	3. In the Properties window, assign NULL to NullProperty property (that is,
	  without periods before and after NULL).
	
	4. Put the following in the form Init:
	
	        ?ISNULL(THIS.NullProperty)
	
	5. Run the form.
	
	Visual FoxPro returns .F.
	
	Additional query words: kbdse VFoxWin
	
	======================================================================
	Keywords          : kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	
	=============================================================================
	
