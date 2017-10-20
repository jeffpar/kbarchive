---
layout: page
title: "Q129094: FIX: GP Fault in Visual C++ When Separators in Top Level Menu"
permalink: /kb/129/Q129094/
---

## Q129094: FIX: GP Fault in Visual C++ When Separators in Top Level Menu

{% raw %}

	Article: Q129094
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbenv kbide kbVC kbVC200bug kbVC210bug kbVC220fix kbGrpDSToolskbbuglist kbfixlist
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 2.0, 2.1 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 2.0, 2.1 
	- Microsoft Visual C++, 32-bit Learning Edition, versions 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	NOTE: This problem exists only when running the above versions of Microsoft
	Visual C++, 32-bit Edition, under Windows 95 M8 Beta.
	
	SYMPTOMS
	========
	
	The Visual C++ version 2.0 and 2.1 menu editor causes a general protection (GP)
	fault in the M8 beta of Windows 95 when adding a separator to a top level menu
	or opening a menu resource with a separator in the top level menu.
	
	RESOLUTION
	==========
	
	If it is necessary to edit a resource that contains a top-level menu separator,
	you must open the <project>.rc file in a text editor and remove the
	top-level menu separators. Then you can use the Resource Editor to edit a menu
	resource.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem has been corrected in Visual C++ version
	2.2.
	
	MORE INFORMATION
	================
	
	This bug is best observed in the following two scenarios.
	
	Scenario One - Steps to Reproduce Problem
	-----------------------------------------
	
	1. Generate an AppWizard application and select 'Both container and server' in
	  the step 3 property page.
	
	2. Open the <project>.rc file.
	
	3. Open the menu folder.
	
	4. Open the menu with the ID IDR_<project>TYPE_CNTR_IP.
	
	A GP fault will now occur in Visual C++. Choose <Close> because
	<Ignore> will cause Windows 95 to hang.
	
	Scenario Two - Steps to Reproduce Problem
	-----------------------------------------
	
	1. Repeat steps 1 through 3 from Scenario One.
	
	2. Open any menu.
	
	3. Open the properties box for the empty menu item, and add a separator by
	  clearing the Popup checkbox and checking Separator.
	
	A GP fault will now occur in Visual C++. Choose <Close> because
	<Ignore> will cause Windows 95 to hang.
	
	Additional query words: 2.00 2.10 4.00 crash chicago ole GPF
	
	======================================================================
	Keywords          : kbenv kbide kbVC kbVC200bug kbVC210bug kbVC220fix kbGrpDSTools kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbVC200 kbVC210 kbVC32bitSearch
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
