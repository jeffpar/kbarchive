---
layout: page
title: "Q141678: FIX: Changes Made to a Sub-Classed CommandGroup are not Saved"
permalink: /kb/141/Q141678/
---

## Q141678: FIX: Changes Made to a Sub-Classed CommandGroup are not Saved

{% raw %}

	Article: Q141678
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a sub-classed CommandGroup is added to a form, changes to the Caption
	Property of a button in the CommandGroup are not saved when the form is saved.
	This problem only occurs if you modified the Name property of the button in the
	sub-classed CommandGroup before adding the sub-class to the form.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Visual FoxPro 3.0b
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. In the Command window, type the following command:
	
	     CREATE CLASS cmg OF test AS CommandGroup
	
	2. Save and Close the Class.
	
	3. In the Command window, type the following command:
	
	     CREATE CLASS cmg2 OF test AS cmg FROM test.
	
	4. Change the ButtonCount property to 3.
	
	5. Change the Name and Caption properties of COMMAND3 to ADDED.
	
	6. Save and Close the class.
	
	7. In the Command window, issue this command:
	
	     CREATE CLASS frm OF test as form
	
	8. Add the Subclass cmg2 to the form.
	
	9. Change the ButtonCount property to 4.
	
	10. Change the Caption of the last button (Command3) to Testing.
	
	11. Save and Close the class.
	
	12. Modify class frm of test. Notice that the Caption has reverted back to
	  Command3.
	
	Additional query words: VFoxWin buglist3.00 fixlist3.00b
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
