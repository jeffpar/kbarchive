---
layout: page
title: "Q131605: Windows NT Help Shows Incorrect Default Log Setting"
permalink: /kb/131/Q131605/
---

## Q131605: Windows NT Help Shows Incorrect Default Log Setting

{% raw %}

	Article: Q131605
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	In Event Viewer Help incorrectly states the following:
	
	  When you select this option, each new event replaces the oldest event if the
	  log is full. This option is the default and the best choice for ease of
	  maintenance.
	
	The "Overwrite Events Older than 7 days" option in Event Viewer is the
	default option. To verify this, choose the Default button in the Event
	Viewer Log Settings dialog box.
	
	To see the above text in Event Viewer:
	
	1. Choose "Use and Manage Event Logs."
	
	2. Choose "Setting Options for Logging Events."
	
	3. Choose "Overwrite Events as Needed."
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	
	=============================================================================
	

{% endraw %}
