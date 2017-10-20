---
layout: page
title: "Q141314: FIX: Label Wizard Allows Fields to Sort with View"
permalink: /kb/141/Q141314/
---

## Q141314: FIX: Label Wizard Allows Fields to Sort with View

{% raw %}

	Article: Q141314
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500fixkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In step 4 of the Label Wizard, the Sort Order allows a field to be selected when
	a View is the source for the data. When a view is selected as the data source
	for use in creating a label, there should not be any option to sort the data in
	the view; all features of sort should be disabled.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start Label Wizard.
	
	2. Select a view as your table.
	
	3. Go to screen 4 (sort screen). Add accelerator is enabled (select a field and
	  the remove accelerator is also enabled)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
