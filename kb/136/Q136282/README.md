---
layout: page
title: "Q136282: BUG: Spinner Does Not Increment Value as It Should"
permalink: /kb/136/Q136282/
---

## Q136282: BUG: Spinner Does Not Increment Value as It Should

{% raw %}

	Article: Q136282
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you place a spinner with an Increment property less than 1 on a form, the
	value does not increase.
	
	WORKAROUND
	==========
	
	At design time, in the spinner's property sheet, place a Value property that
	matches the Increment. That is, if the Increment is 0.1, make the Value 0.1.
	
	At run-time, enter a value manually. After that, the display (and value) will be
	correct.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	A spinner control on a form does not increase the value by the increment unless
	a value is manually entered or the spinner's value is initialized.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a form.
	
	2. Add a spinner control, and set these properties:
	
	     Increment = 0.1
	     InputMask = 9.9
	
	3. In the spinner's InteractiveChange event procedure, add this code:
	
	        WAIT WINDOW STR(This.Value,3,1)
	
	4. Run the form.
	
	5. Verify that as you click the spinner's up arrow, the value in the Wait window
	  does not change.
	
	6. Enter 0.1 in the Spinner window, and then click the spinner's up arrow.
	  Verify that the spinner displays correctly.
	
	NOTE: If the spinner has an initial Value property, the spinner displays
	correctly.
	
	Additional query words: kbvfp300 kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
