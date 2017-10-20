---
layout: page
title: "Q246929: URI Cache Flushes Performance Counter Initializes Above Zero"
permalink: /kb/246/Q246929/
---

## Q246929: URI Cache Flushes Performance Counter Initializes Above Zero

{% raw %}

	Article: Q246929
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the URI Cache Flushes performance counter in the Windows 2000
	Performance Monitor, the counter appears to initialize at a value greater than
	zero.
	
	RESOLUTION
	==========
	
	The "URI Cache Flushes" performance counter is defined as the "URI Cache Flushes
	since server startup," and is reset to zero when Internet Information Services
	(IIS) restarts, but it increases immediately when you restart, as IIS often
	flushes the URI cache.
	
	The following is a quote from the IIS 5.0 Resource Guide, which is available from
	Microsoft Press:
	
	  Cache flushes are regulated, in part, by an internal timer. The timer
	  activates the object-cache scavenger, which deletes expired objects. Objects
	  are flushed from the cache if they change, or if they time out before they
	  are reused.
	
	  To measure cache flushes, compare the number of cache flushes over time to the
	  number of cache misses and to the rate of page faults in the Inetinfo process
	  (as indicated by the Process\ Page Faults/sec: Inetinfo counter). It is
	  important to observe these values over time. Like the other global IIS 5.0
	  counters, Cache Flushes displays an instantaneous value, not an average.
	
	
	MORE INFORMATION
	================
	
	The IIS 5.0 Resource Guide is available as part of the Windows 2000 Resource
	Kit, which is available from Microsoft Press.
	
	
	Additional query words: iis 5.0 iis5
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
