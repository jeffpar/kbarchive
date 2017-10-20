---
layout: page
title: "Q173458: XCON: Event ID 9406 Occurs When Memory or Free Disk Space is Low"
permalink: /kb/173/Q173458/
---

## Q173458: XCON: Event ID 9406 Occurs When Memory or Free Disk Space is Low

{% raw %}

	Article: Q173458
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	The Microsoft Exchange Message Transfer Agent (MTA) may shut down and the
	following event may be recorded in the Windows NT Server Event Viewer
	Application log:
	
	  Event ID: 9406
	  Source: MSExchangeMTA
	  Category: Resource
	  There is not enough Performance Monitor memory to display the MTA Connections
	  information. Stop attached Performance Monitors and re-start the MTA. [BASE
	  TIMER 3] (14)
	
	CAUSE
	=====
	
	The server is running low on disk space and/or virtual memory.
	
	RESOLUTION
	==========
	
	Free up hard disk space by removing or deleting unneeded files. You should have
	at least 10MB of free space or the MTA will shut down automatically. You should
	also increase the size of the Windows NT Pagefile.
	
	Additional query words: perfmon virtual bytes low
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	
	=============================================================================
	

{% endraw %}
