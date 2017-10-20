---
layout: page
title: "Q158251: BUG: Incorrect Group Header Information in Report"
permalink: /kb/158/Q158251/
---

## Q158251: BUG: Incorrect Group Header Information in Report

{% raw %}

	Article: Q158251
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp500 kbvfp600
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Group header information prints incorrectly when all of the following are true:
	
	- The group is set to start on a new page.
	
	- The group header is set to print on every page.
	
	- The group header and footer are the only bands that print on the page (no
	  detail printed).
	
	In this case, the group header information printed on the current page of the
	group is actually the header information for the next record.
	
	WORKAROUND
	==========
	
	For more information about one method of solving this problem, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q135617 BUG: Group Header Information Prints Incorrectly
	
	The above method works in some cases, but may not work correctly with a Print
	Preview. In the case of a Print Preview, follow these steps:
	
	1. Move field(s) from the Group Header to Page Header. Double-click the field
	  and change the following Print When options:
	
	        Set the Print Repeated Values to No.
	        In Also Print section,
	           check When This Group Changes
	           check When Detail Overflow to New Page/Column
	
	2. Field(s) in the Group Footer remains the same.
	
	3. Make sure that Group Properties (in Data Grouping) are set to "Start Each
	  Group on a New Page" option.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: VFoxWin kbdse
	
	======================================================================
	Keywords          : kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Version           : WINDOWS:3.0,3.0b,5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
