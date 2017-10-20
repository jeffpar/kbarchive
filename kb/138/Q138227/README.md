---
layout: page
title: "Q138227: Network Monitor Agent Does Not Deallocate Memory in Winlogon"
permalink: /kb/138/Q138227/
---

## Q138227: Network Monitor Agent Does Not Deallocate Memory in Winlogon

{% raw %}

	Article: Q138227
	Product(s): Microsoft Windows NT
	Version(s): winnt:1.0,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	- Microsoft Systems Management Server version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT computers show increased paging activity to the swap file. This
	generally is observable by a slowdown in computer performance. Computers
	exhibiting intense paging activity can appear hung, the mouse can skip as you
	move it, and the disks with paging file(s) appear constantly active.
	
	CAUSE
	=====
	
	When performance monitor connects to a computer across a network, Winlogon on
	the remote computer is responsible for passing performance statistics back to
	the performance monitor client. Network Monitor Agent allocates approximately
	1.5 Megabytes of memory that it does not free when the performance monitor
	client disconnects. This non-deallocated memory consumes an additional 1.5
	Megabytes of page file memory with each connection by a performance monitor
	client. This occurs even if the service is installed but not running.
	
	RESOLUTION
	==========
	
	Microsoft has modified the Network Monitor Agent to free the memory it
	allocates.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem has been corrected in Windows NT version 3.51. A version 3.5 fix to this
	problem is in development, but has not been regression-tested and may be
	destabilizing in production environments. Microsoft does not recommend
	implementing this fix at this time. Contact Microsoft Product Support Services
	for more information on the availability of this fix.
	
	
	Additional query words: netmon prodnt 3.50 memory leak
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search kbSMSSearch kbSMS100
	Version           : winnt:1.0,3.5
	
	=============================================================================
	

{% endraw %}
