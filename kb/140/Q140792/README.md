---
layout: page
title: "Q140792: FIX: CheckBox Control in Grid Cannot Be Set to Read Only"
permalink: /kb/140/Q140792/
---

## Q140792: FIX: CheckBox Control in Grid Cannot Be Set to Read Only

{% raw %}

	Article: Q140792
	Product(s): Microsoft FoxPro
	Version(s): 3.0 3.0b
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500aBUGkbbuglist
	Last Modified: 23-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Setting the Readonly property to True for a column that contains a check box
	does not prevent the check from being changed at run-time. Setting the Readonly
	property of a column containing a text box to true prevents the entries in that
	column from being changed at run-time.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This bug has been fixed in Visual FoxPro 5.0.
	
	WORKAROUND
	==========
	
	Set the Enabled property of the column to false. The column displays but the
	colors are dimmed. You can change these colors. However, the column will not
	display disabledforecolor as black even with an entry of 0,0,0. The check box
	also remains dimmed.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a form, and place the Products table in the data environment of the
	  form. Drag the Products table onto the form to place a grid on the form.
	
	2. Change the grid's Columncount property to 2.
	
	3. Make the controlsource for column1 product_id, and set the Readonly property
	  to true.
	
	4. Add a check box to column2, and make the controlsource for column2
	  discontinu, which is a logical field. Set the column2 Readonly property to
	  true. Change the sparse setting for column2 to false.
	
	5. Remove text1 under column2 by selecting it in the property sheet, clicking
	  the title bar of the form, and pressing the DELETE key.
	
	6. Set the Readonly property for the grid to true.
	
	7. Run the form. You will not be able to change the product_id in column1, but
	  you will be able to select and clear the check box in column2 to change the
	  field.
	
	Additional query words: 3.0b kbvfp300 kbvfp300b kbvfpfix500
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500aBUG kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : 3.0 3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
