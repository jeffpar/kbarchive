---
layout: page
title: "Q135841: PRB: List Box Does Not Respect NumberOfElements"
permalink: kb/135/Q135841/
---

## Q135841: PRB: List Box Does Not Respect NumberOfElements

	Article: Q135841
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500fixkbbuglist kbfixlist
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you work with a list box in Visual FoxPro 3.0x and you specify a value for
	the NumberOfElements property and the ColumnCount property, the NumberOfElements
	will not be respected. In Visual FoxPro 5.0x, the same behavior occurs when the
	ColunmCount property is set to a value other than 1.
	
	WORKAROUND
	==========
	
	The NumberOfElements property is used only when the RowSourceType for a list box
	is an array. When using an array as the RowSourceType, you can redimension the
	array to the number of elements you want to display. For example, you could add
	the following code to either the form's Load event procedure or the list box's
	Init event procedure:
	
	     DIMENSION testa[ 2, ALEN( testa, 2 ) ]
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. In the Command window enter the code below.
	
	  Open the Customer table and execute the following code:
	
	        Dimension testa[5,2]
	        copy to array testa fields cust_id,country
	
	2. Create a new form.
	
	3. Add a list box to the form.
	
	4. Change the list box properties as follows:
	
	        RowSourceType = 5 - Array
	        RowSource =  testa
	        NumberOfElements = 2
	        ColumnCount = 2
	
	5. Save and run the form.
	
	  In Visual FoxPro 3.0x, the list box shows 5 items, not 2. In Visual FoxPro
	  5.0x, changing the ColumnCount property to 1 seems to make the behavior
	  disappear. However, the problem reappears if the ColumnCount is set to any
	  other value.
	
	Additional query words: 3.00 3.00b
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a
	Solution Type     : kbfix
	
	=============================================================================
	
