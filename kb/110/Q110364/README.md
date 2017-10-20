---
layout: page
title: "Q110364: PRB: &quot;End of File Encountered&quot; with APPEND GENERAL"
permalink: /kb/110/Q110364/
---

## Q110364: PRB: &quot;End of File Encountered&quot; with APPEND GENERAL

{% raw %}

	Article: Q110364
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b; WINDOWS:2.5,2.5a,2.5b,3.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Macintosh, version 2.5b 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using the APPEND GENERAL command, an "End Of File Encountered"
	error message occurs if no source file is specified and no records are in the
	database.
	
	RESOLUTION
	==========
	
	If a program is interactively allowing a user to enter information in a source
	file, do one of the following to avoid this error:
	
	- Validate the information before issuing the APPEND GENERAL command.
	
	-or-
	
	- Trap for "End Of File Encountered" in an ON ERROR routine.
	
	-or-
	
	- Make sure there is at least one record in the database.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a database that contains a general field.
	
	2. Issue the following command in the Command window:
	
	        APPEND GENERAL <general field>
	
	The error message "End Of File Encountered" is displayed.
	
	Additional query words: VFoxWin FoxMac FoxWin 2.50 eof errmsg err msg
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbFoxPro250 kbFoxPro250a kbFoxPro250b kbVFP300
	Version           : MACINTOSH:2.5b; WINDOWS:2.5,2.5a,2.5b,3.0
	
	=============================================================================
	

{% endraw %}
