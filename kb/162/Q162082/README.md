---
layout: page
title: "Q162082: FIX: LostFocus of Form in Formset Does Not Fire with Mouse"
permalink: /kb/162/Q162082/
---

## Q162082: FIX: LostFocus of Form in Formset Does Not Fire with Mouse

{% raw %}

	Article: Q162082
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbenvkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The LostFocus event of Form in a FormSet does not fire when a mouse is used to
	change the active form. However, using the keyboard does fire the form's
	LostFocus.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in FoxPro 5.0 for
	Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a New Form.
	
	2. On the Form menu, click "Create Form Set."
	
	3. On the Form menu , click "Add New Form."
	
	4. Add a Textbox control to each Form.
	
	5. Edit Form1's LostFocus method and add the following code:
	
	        WAIT WINDOW "Form1's LOSTFOCUS"
	
	6. Edit Form2's LostFocus method and add the following code:
	
	        WAIT WINDOW "Form2's LOSTFOCUS"
	
	7. Save and run the Form.
	
	8. Use the Mouse to click back and forth between the two forms. Notice that no
	  Wait Windows appear.
	
	9. Now use the TAB key and cycle through the Textbox controls. Notice that the
	  Wait Windows appear.
	
	Additional query words: VFOXWIN KBDSD
	
	======================================================================
	Keywords          : kbenv kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
