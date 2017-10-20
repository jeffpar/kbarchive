---
layout: page
title: "Q138659: How to Pass an Array to a Form"
permalink: /kb/138/Q138659/
---

## Q138659: How to Pass an Array to a Form

{% raw %}

	Article: Q138659
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows by example how to pass an array to a form.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	1. In the Command window, enter the following commands:
	
	     DIMENSION array1(3)
	     array1(1) = "One"
	     array1(2) = "Two"
	     array1(3) = "Three"
	     MODIFY FORM passarray   &&& Create a new form
	
	2. On the Form menu, click New Property, and name the property Array2(1).
	
	3. In the form's Init event, place the following lines of code:
	
	     PARAMETER Array1
	     DIMENSION This.Array2(ALEN(Array1))
	     =ACOPY(Array1, This.Array2)
	     THISFORM.List1.NumberOfElements=ALEN(THISFORM.Array2)
	     THISFORM.Refresh
	
	4. Place a list box on the form, and set the following properties for the list
	  box:
	
	   - Set the RowSource property to: THISFORM.Array2.
	
	   - Set he RowSourceType property to: 5-ARRAY.
	
	5. Save the form, and run it from the Command window with the following command
	  line:
	
	     DO FORM PASSARRAY WITH ARRAY1
	
	6. The elements from Array1 will be shown in the list box. Use the scroll bar if
	  they are not all visible.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
