---
layout: page
title: "Q153948: TN3270E May Encounter Unexpected Application Exception"
permalink: /kb/153/Q153948/
---

## Q153948: TN3270E May Encounter Unexpected Application Exception

{% raw %}

	Article: Q153948
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The SNA Server 2.11 Service Pack 1 TN3270E Server may experience intermittent
	and random access violations.
	
	If this occurs, the SNA Server TN3270E service will log the following event in
	the Windows NT application event log:
	
	  Event ID:5
	
	  The TN3270E Service has abnormally terminated.
	
	  EXPLANATION
	  An exception (0xC0000005) has occurred that has caused the TN3270E
	  Service to terminate.
	
	  ACTION
	  Record message and contact technical support.
	
	CAUSE
	=====
	
	The TN3270 Server uses a critical section to protect its session control blocks.
	However, it was not always using this critical section when it scanned the
	control blocks. This can cause an access violation to occur.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT
	versions 2.11 and 2.11.sp1. This problem was corrected in the latest Microsoft
	SNA Server 2.11 U.S. Service Pack. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna tn3270
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11,2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
