---
layout: page
title: "Q177340: BUG: Using Selected Method in Init Event Does Not Work"
permalink: /kb/177/Q177340/
---

## Q177340: BUG: Using Selected Method in Init Event Does Not Work

{% raw %}

	Article: Q177340
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual FoxPro versions 5.x, programmatically using the Selected method to
	select an item in a list box does not work in the Init method of a list box or a
	form.
	
	RESOLUTION
	==========
	
	Use the following method to programmatically select an item in the Init method
	of a list box or a form:
	
	     Thisform.List1.DisplayValue = Thisform.List1.List(1) && This will select
	
	                                                          && the first item.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	This problem does not occur in Visual FoxPro versions 3.x.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form and named it MyList.
	
	2. Place a list box object on the form and set the following properties:
	
	        RowSourceType  = 1 - Value
	        RowSource = "One, Two, Three, Four, Five" (without the quotations)
	
	3. In the Init method of the form, type the following code:
	
	        Thisform.List1.Selected(1)=.T. && Select the first item.
	
	4. Save and run the form.
	
	  NOTE: When the form runs, no item is selected in the list box.
	
	Additional query words: Listbox Selected kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
