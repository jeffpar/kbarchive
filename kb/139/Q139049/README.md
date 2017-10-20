---
layout: page
title: "Q139049: How to Make Combo or List Boxes Hold More than 255 Characters"
permalink: /kb/139/Q139049/
---

## Q139049: How to Make Combo or List Boxes Hold More than 255 Characters

{% raw %}

	Article: Q139049
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use a list or combo box that has Value as the RowSourceType, only 255
	characters can be typed into the RowSource property. You should use the Value
	option in the RowSourceType property when you need to place static values in the
	list or combo box. When you choose the Value option, the values can be typed
	into the RowSource property separated by commas. Once 255 characters have been
	typed into the RowSource property, no more characters are allowed, so the
	computer's bell sounds when you try to add another character. If the list or
	combo box needs to hold more than 255 characters, create an array to hold the
	values as demonstrated by the example in this article.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	1. Create a form in Visual FoxPro.
	
	2. On the Form menu, click New Property. In the Name box, type:
	
	     listarray(5)
	
	3. In the Load event, type:
	
	     THISFORM.LISTARRAY(1)="Choice1"
	     THISFORM.LISTARRAY(2)="Choice2"
	     THISFORM.LISTARRAY(3)="Choice3"
	     THISFORM.LISTARRAY(4)="Choice4"
	     THISFORM.LISTARRAY(5)="Choice5"
	
	4. Select a list or combo box from the Controls toolbar, and place it on the
	  form.
	
	5. Choose the RowSourceType property of the list or combobox in the Properties
	  Sheet, and select the Array option.
	
	6. In the RowSource property, type:
	
	     thisform.listarray
	
	7. In the NumberOfElements property, type:
	
	     =ALEN(thisform.listarray)
	
	8. Run the form, and note that the list or combo box contains the elements of
	  the array.
	
	This is a small example demonstrating the kind of elements an array might hold.
	The only limitation is that the array can hold a maximum of 65000 elements.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
