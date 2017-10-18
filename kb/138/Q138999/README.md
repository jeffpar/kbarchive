---
layout: page
title: "Q138999: How to Display Concatenated Fields in a Text Box"
permalink: kb/138/Q138999/
---

## Q138999: How to Display Concatenated Fields in a Text Box

	Article: Q138999
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A text box on a form can display concatenated values from multiple fields. This
	can be accomplished by putting an expression in the Refresh method of the text
	box. Both the ControlSource and Value properties of the text box should be left
	blank and the ReadOnly property should be set to True (.T.).
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	To demonstrate how a text box can display concatenated values, follow these
	steps:
	
	1. Create a new form.
	
	2. Add the Customer table to the Data Environment.
	
	3. Using the form Controls toolbar, place a text box on the form.
	
	4. In the text box Refresh method, type the following:
	
	     This.Value = ALLTRIM(Customer.City) + ", " + ;
	        ALLTRIM(Customer.Country)
	
	5. Ensure that the text box ControlSource and Value properties are blank. Change
	  the ReadOnly property to True (.T.).
	
	6. Add a command button to the form, and place the following two lines in its
	  Click event:
	
	     SKIP
	     THISFORM.Refresh
	
	7. Run the form, and press the command button to observe the values in the text
	  box.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
