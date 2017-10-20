---
layout: page
title: "Q192107: FIX: Numeric Overflow if no Decimal is in InputMask of Text Box"
permalink: /kb/192/Q192107/
---

## Q192107: FIX: Numeric Overflow if no Decimal is in InputMask of Text Box

{% raw %}

	Article: Q192107
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A wait window with the message "Numeric Overflow" occurs if a text box that is
	set to a currency field does not have a decimal place in the Input Mask
	property. If the Input Mask has settings that include a decimal place or if
	there are no settings at all, the wait window does not appear. To trigger the
	wait window "Numeric Overflow" message, the data in the text box has to be
	highlighted and deleted. Moving off of the text box causes the wait window to
	appear.
	
	CAUSE
	=====
	
	A decimal place is missing in the Inputmask property of the text box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form and add a table that has a currency field in it to the data
	  environment of the form.
	
	2. Add a text box to the form and set the ControlSource of the text box to the
	  currency field and add enough nines (9's) to the InputMask property of the
	  text box to hold all of the values in the currency field. Make sure there is
	  no decimal place.
	
	3. Run the form and highlight all data in the text box. Press the Delete key to
	  empty the text box, and press the Tab key to move off of the text box to
	  trigger the message.
	
	4. A numeric value must be typed into the text box so the form can be closed.
	
	5. Modify the form, adding a decimal place to the right of one of the nines
	  (9's) in the Input Mask property of the text box. Run the form and follow
	  step 3 again. Note that the error does not occur.
	
	Additional query words: kbVFp600fix kbVFp500abug kbCtrl kbContainer
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
