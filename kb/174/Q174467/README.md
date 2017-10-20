---
layout: page
title: "Q174467: Two Separate Threads In WinSLI Critical Section Can Cause Hang"
permalink: /kb/174/Q174467/
---

## Q174467: Two Separate Threads In WinSLI Critical Section Can Cause Hang

{% raw %}

	Article: Q174467
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Two separate threads from an SLI application appear to gain access to the SLI
	critical section, coinciding with an application's SLI call that hangs and never
	completes. This problem was observed with a Win32 SLI application which
	supported over 50 different threads, each calling the SLI interface. At times,
	an SLI call would hang and fail to complete.
	
	CAUSE
	=====
	
	The SNA Server Winsli32.dll was not behaving correctly.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0 and
	3.0sp1. This problem was corrected in the latest SNA Server version 3.0 U.S.
	Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: critical section hang thread
	
	======================================================================
	Keywords          : kbnetwork kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
