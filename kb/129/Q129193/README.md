---
layout: page
title: "Q129193: FIX: File Added with No Extension is Handled Incorrectly"
permalink: /kb/129/Q129193/
---

## Q129193: FIX: File Added with No Extension is Handled Incorrectly

{% raw %}

	Article: Q129193
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbusage kbSSafe400fix kbDSupport kbfix kbSSafe300bugkbbuglist
	Last Modified: 07-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A file added to SourceSafe with no extension and a period (.) character is
	handled incorrectly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Microsoft SourceSafe versions 3.04
	and 3.1. This problem has been corrected in Microsoft Visual SourceSafe version
	4.0. Microsoft has confirmed this to be a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. From the command line, add a file to SourceSafe with no extension:
	
	        SS ADD makefile.     << make sure you add the period.
	
	2. Issue an SS DIR command. You will see the file listed.
	
	3. Issue an SS GET makefile command. The error, "makefile is not an existing
	  name or project" will occur.
	
	4. Issue an SS GET makefile.* command. This will get the file.
	
	5. From the command line, add the file with no period:
	
	        SS ADD makefile
	
	6. You will see the file listed twice when you use the SS DIR command.
	
	
	1. You can remove the makefile that has no period, but you cannot now remove the
	  one with a period (makefile.).
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage kbSSafe400fix kbDSupport kbfix kbSSafe300bug kbbuglist
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
