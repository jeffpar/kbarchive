---
layout: page
title: "Q166223: SNA Server 3.0 Snabase Fails Unexpectedly with Access Violation"
permalink: /kb/166/Q166223/
---

## Q166223: SNA Server 3.0 Snabase Fails Unexpectedly with Access Violation

{% raw %}

	Article: Q166223
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The SNA Server 3.0 SnaBase service may fail unexpectedly with an access
	violation. The failure may occur in a random location, and may not cause a
	Drwtsn32.log entry to be created.
	
	When this failure occurs, current users who are connected through SNA Server can
	continue to work, but new users are unable to establish a new session until SNA
	Server is restarted.
	
	CAUSE
	=====
	
	The SnaBase service was causing corruption of its local process memory heap,
	leading to an access violation when the corrupted heap memory is accessed (via
	RtlAllocateHeap) or deallocated (via RtlDestroyHeap).
	
	
	RESOLUTION
	==========
	
	An update to SNA Server 3.0 is available to correct this problem. To resolve
	this problem, obtain the hotfix mentioned below.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
