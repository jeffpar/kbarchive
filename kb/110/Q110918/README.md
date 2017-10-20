---
layout: page
title: "Q110918: BUG: Graphical Help Redraws Multiple Times"
permalink: /kb/110/Q110918/
---

## Q110918: BUG: Graphical Help Redraws Multiple Times

{% raw %}

	Article: Q110918
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,3.0b
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft FoxPro for Macintosh, version 2.5b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the graphical-style help is invoked in FoxPro for Macintosh, the Help
	dialog box redraws multiple times.
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in FoxPro version 2.5b for
	Macintosh. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	To reproduce this problem, type the following commands in the Command window:
	
	     SET HELP TO FOXHELP.HLP
	     HELP
	
	When the Help window first appears, it redraws multiple times before activating
	and displaying correctly.
	
	Additional query words: vFoxmac FoxMac 3.00 buglist2.50b
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbVFP300bMac
	Version           : MACINTOSH:2.5b,3.0b
	
	=============================================================================
	

{% endraw %}
