---
layout: page
title: "Q135629: HOWTO: Use the Find &amp; Search Options on a Form Wizard Form"
permalink: kb/135/Q135629/
---

## Q135629: HOWTO: Use the Find &amp; Search Options on a Form Wizard Form

	Article: Q135629
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbwizard kbDesigner kbvfp300 kbvfp500 kbvfp600
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains the functionality of the Find and Search buttons on a Form
	Wizard-generated form to clarify what the search is actually doing.
	
	
	MORE INFORMATION
	================
	
	When you click the Find button on a Form Wizard-generated form, the Search
	dialog box appears so you can select the field and operator, and then insert a
	value for the search criteria. If the search criteria produces at least one
	matching record, a filter is set to that criteria and the record(s) available
	will be limited by that filter.
	
	The availability of the navigational controls Top, Prev, Next, and Bottom is also
	affected. If the search criteria produces a single match, these controls will be
	disabled. Enabling and disabling of these controls will be performed depending
	on the location of the record pointer within the filter.
	
	To clear the search criteria filter and regain access to all of the table
	records, click the Find Button, and then click the All button in the Search
	dialog box.
	
	Additional query words: Navigate Disable Seek
	
	======================================================================
	Keywords          : kbwizard kbDesigner kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
