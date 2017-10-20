---
layout: page
title: "Q161730: BUG: Cannot Set the Selected Item for a List box in Form Init"
permalink: /kb/161/Q161730/
---

## Q161730: BUG: Cannot Set the Selected Item for a List box in Form Init

{% raw %}

	Article: Q161730
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbprogramming kbvfp kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual FoxPro 3.0 the selected item in a list box can be initialized by
	placing the following code in the Form Init or the List box Init:
	
	     THISFORM.List1.Selected(1) = .T.
	
	This does not work in Visual FoxPro version 5.0.
	
	RESOLUTION
	==========
	
	Place the following code in the Activate method of the form. The variable acts
	like a switch so that the code is executed only when the form is first
	instantiated. The variable switch should be added to the form as a property.
	Switch is initialized to false.
	
	     IF !THISFORM.switch
	       THISFORM.List1.Selected(1)= .T.
	       THISFORM.switch = .T.
	     ENDIF
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form and add the employee table to the DataEnvironment.
	
	2. Add a list box to the form and set its RowSourceType to 6-Fields. Set its
	  RowSource to employee.emp_id.
	
	3. Place the following code in the Init of the form or the Init of the list
	  box.
	
	        THISFORM.List1.Selected(1)= .T.
	
	Note that when the form is run, the first item is not selected.
	
	Additional query words: kbvfp500 kbvfp500a kbvfp600
	
	======================================================================
	Keywords          : kbprogramming kbvfp kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
