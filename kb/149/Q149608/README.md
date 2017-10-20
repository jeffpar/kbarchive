---
layout: page
title: "Q149608: BUG: Valid Method Does Not Fire in Combo Box"
permalink: /kb/149/Q149608/
---

## Q149608: BUG: Valid Method Does Not Fire in Combo Box

{% raw %}

	Article: Q149608
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS: 3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbprogramming kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 19-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Valid method code of a combo box does not fire when the Style property is
	set to 2 - Dropdown List.
	
	WORKAROUND
	==========
	
	Set the Style property of the combo box to 0 - Dropdown Combo.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Setting the Style property to 0 - Dropdown Combo is not always the best
	interface solution. Certain style features of the Dropdown List do not exist in
	the Dropdown Combo style. One major difference between these two styles is that
	the Dropdown List is read-only while the Dropdown Combo allows the user to type
	in the text area and possibly add new entries to the list. For the read-only
	feature, use the KeyPress event to trap for keys being pressed while the combo
	box object has the focus.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a new form. Add a combo box and text box. Change the Style property of
	  the combo box to 2 - Dropdown List. Place a WAIT WINDOW command in the combo
	  box Valid method.
	
	2. Save changes to the form, and run the form. Make sure the tab order is set so
	  the combo box is the first object. Press the TAB key to move out of the combo
	  box to the next field. Notice the Valid method of the combo box does not
	  fire.
	
	Additional query words: kbvfp300 kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbprogramming kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS: 3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
