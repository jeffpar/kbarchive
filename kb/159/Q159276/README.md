---
layout: page
title: "Q159276: TN3270E May Encounter Unexpected Application Exception"
permalink: kb/159/Q159276/
---

## Q159276: TN3270E May Encounter Unexpected Application Exception

	Article: Q159276
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
	
	The SNA Server 2.11 TN3270E Server may experience intermittent and random access
	violations.
	
	If this occurs, the SNA Server TN3270E service will log the following event in
	the Windows NT application event log:
	
	  Event ID:5
	
	  The TN3270E Service has abnormally terminated.
	
	  EXPLANATION
	  An exception (0xC0000005) has occurred that has caused the TN3270E Service to
	  terminate.
	
	  ACTION
	  Record message and contact technical support.
	
	CAUSE
	=====
	
	The TN3270E server has an array of entries that are used to track licensing
	information. This array can be accessed by any other thread in the TN3270E
	Server. However, it was not using a critical section when accessing the array.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server 2.11 and
	2.11sp1.
	This problem was corrected in the latest Microsoft SNA Server 2.11 U.S. Service
	Pack. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodsna tn3270
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11,2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
