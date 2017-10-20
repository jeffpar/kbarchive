---
layout: page
title: "Q135627: FIX: Logical Fields Unavailable in Step 4 of Query Wizard"
permalink: /kb/135/Q135627/
---

## Q135627: FIX: Logical Fields Unavailable in Step 4 of Query Wizard

{% raw %}

	Article: Q135627
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Logical Fields are unavailable in Step 4 - Filtering of the Query Wizard.
	
	WORKAROUND
	==========
	
	Step 4 of the Query Wizard is used to filter your data. Because logical fields
	are unavailable, the Query Designer must be used to modify and execute the
	query. On the Final step of the Query Wizard, Finish, select the 'Save query and
	modify it in the Query Designer' option. In the Query Designer, in the Selection
	Criteria tab, drop down the Fields list and select the desired logical field.
	Select the filter criteria, and enter the example (.T. or .F.). Then execute the
	query.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Visual FoxPro 3.0b
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a table containing logical fields or open an existing table that has
	  logical fields.
	
	2. On the Tools menu, click Wizards and then Query. Open the Query Wizard.
	
	3. On Step 1, select the desired table. Then select the desired fields,
	  including a logical field.
	
	4. On Step 4, the logical field will not be available for filtering.
	
	Additional query words: 3.00 VFoxWin fixlist3.00b buglist3.00
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
