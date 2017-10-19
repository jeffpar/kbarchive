---
layout: page
title: "Q136668: FIX: Inconsistent Behavior of KeyPreview Property"
permalink: /kb/136/Q136668/
---

## Q136668: FIX: Inconsistent Behavior of KeyPreview Property

	Article: Q136668
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
	
	The KeyPreview property of a form is used to determine whether or not the form
	will receive the KeyPress events of a control on the form. If this property is
	set to true, the form will receive the KeyPress events, if it is false, the form
	won't receive the KeyPress events. This behavior is consistent for all keyboard
	keys except those that cause a shift in focus within the form, such as the TAB
	key.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form, and place two text boxes on it.
	
	2. Set the KeyPreview property of the form to false (.F.).
	
	3. Place the following code in the form's KeyPress event procedure:
	
	     =MessageBox("This is the KeyPress of the Form")
	
	4. Place the following code in the first text box KeyPress event procedure:
	
	     =MessageBox("This is the KeyPress of the textbox")
	
	5. Run the form, and press a key. The message box for the text box is the only
	  one that appears because the KeyPreview property is set to false.
	
	6. Run the form again, and press the TAB key. This time the message box for the
	  text box appears followed by the message box for the form.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
