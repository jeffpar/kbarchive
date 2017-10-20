---
layout: page
title: "Q138435: BUG: Changing Grid View Property Incorrectly Displays Grid"
permalink: /kb/138/Q138435/
---

## Q138435: BUG: Changing Grid View Property Incorrectly Displays Grid

{% raw %}

	Article: Q138435
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS: 3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbtool kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 24-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Grid is a container object that contains column objects. A column can contain
	a header object and controls. Because a grid and its columns, headers, and
	controls each have their own set of properties, you have complete control over
	each element of the grid. When the view property setting in a grid is modified
	to browse-change or change-change, the grid headers do not show, and the "ab"
	symbols for the text box objects contained in the columns of the grid are cut
	off. Not being able to see the fields in the grid prevents the designer from
	designing a grid in the change mode.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a new form.
	
	2. Right-click the Form, and click Data Environment.
	
	3. Right-click the Data Environment window, and select the Customers table
	  located in the Samples\Data directory within FoxPro.
	
	4. Drag the Customer table onto the form to create a grid.
	
	5. Select the grid, and modify the ColumnCount property to 4.
	
	6. Note that the column headers are displayed.
	
	7. Change the View property to change-change or browse-change.
	
	8. Look at the grid, and note that the headers have disappeared and the "ab"
	  symbols are cut off.
	
	Additional query words: kbvfp300 kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbtool kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS: 3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
