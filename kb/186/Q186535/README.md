---
layout: page
title: "Q186535: Information Regarding Peoplesoft Cache Files"
permalink: /kb/186/Q186535/
---

## Q186535: Information Regarding Peoplesoft Cache Files

{% raw %}

	Article: Q186535
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	PeopleSoft cache files should not to be confused with Windows NT cache
	files. These cache files are for caching Peoplesoft's panels from within
	their application. There is a tremendous amount of small network traffic,
	especially when first initializing panels, that goes on between the
	database server and the computer where the cache files are located.
	PSTOOLS creates these cache files from data stored in the database.
	Better performance will be seen when the cache is handled by a separate
	computer and not on the Terminal Server.
	
	SUMMARY
	=======
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
