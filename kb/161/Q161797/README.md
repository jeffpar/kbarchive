---
layout: page
title: "Q161797: BUG: Grid Builder Inserts Incorrect Column Headings in Grid"
permalink: /kb/161/Q161797/
---

## Q161797: BUG: Grid Builder Inserts Incorrect Column Headings in Grid

{% raw %}

	Article: Q161797
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp500bug kbvfp600bug
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Grid Builder places the incorrect column headings above the various columns
	in the grid. This problem often occurs when building a grid from a table with a
	considerable number of fields, such as the Tastrade Customer table.
	
	The Grid Builder works properly in Visual FoxPro 3.0b.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form and place a grid object on it.
	
	2. Right-click on the grid object and click Builder on the shortcut menu.
	
	3. In the Grid Builder, click the Customer table located in the
	  \Vfp5\Samples\Data\ folder and move all the fields to the Selected Fields
	  box.
	
	4. Click on the Style tab.
	
	5. After the thermometer bar disappears, click on the Layout tab.
	
	6. Notice the column headings are incorrect.
	
	7. Run the form. The column headings are not correct. If a table contains fewer
	  fields, such as the Orditems table, the Grid Builder does work properly.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp500bug kbvfp600bug 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
