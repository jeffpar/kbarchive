---
layout: page
title: "Q139145: FIX: Text Shifts to the Left and Down Slightly in a Grid"
permalink: /kb/139/Q139145/
---

## Q139145: FIX: Text Shifts to the Left and Down Slightly in a Grid

{% raw %}

	Article: Q139145
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500aFIX kbvfp500bugkbbuglist kbfixlist
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a text box in a grid column has its Sparse property set to false, the text
	shifts when the cell is activated. This occurs with numeric data that has an
	input mask.
	
	WORKAROUND
	==========
	
	Set the Margin property for the text box to 2 rather than the default of 0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro
	5.0a.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a new form.
	
	2. Use and modify the Orditems table so that the Order_id field is numeric.
	
	3. Add the Orditems table to the Data Environment of your form.
	
	4. Drag the table from the Data Environment to the form to create a grid.
	
	5. Set the ColumnCount property of the grid to 5.
	
	6. Set the Input Mask of the column 2 text box to 99,999.
	
	7. Set the column 2 Sparse property to false (.F.).
	
	8. Run the form.
	
	Observe the positioning of the data in the second column. It aligns to the right
	and top of the cell. Clicking a cell results in the data moving to the left and
	down slightly. If you set the margin property of the text box for this column to
	2, the data appears correctly.
	
	Additional query words: misalign
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500aFIX kbvfp500bug kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500
	Version           : WINDOWS:3.0,3.0b,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
