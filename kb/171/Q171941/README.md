---
layout: page
title: "Q171941: TN3270 Event 1-5, 601, 602 Don't Appear When Filtering Events"
permalink: /kb/171/Q171941/
---

## Q171941: TN3270 Event 1-5, 601, 602 Don't Appear When Filtering Events

	Article: Q171941
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist
	Last Modified: 01-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you are filtering TN3270 events using the Windows NT Event Viewer, the
	following TN3270 events do not appear in the filtered view:
	
	  Event 1: The TN3270E Service started successfully...
	  Event 2: The TN3270E Service has been paused by an administrator.
	  Event 3: The TN3270E Service has been returned to normal operation.
	  Event 4: The TN3270E Service has been terminated by an administrator.
	  Event 5: The TN3270E Service has abnormally terminated.
	  Event 601: TN3270(E) session established with client at ...
	  Event 602: TN3270(E) session terminated normally with client at ...
	
	CAUSE
	=====
	
	The TN3270 server indicates an invalid Windows NT error log severity value for
	these events, causing the Windows NT Event Viewer to fail to display these
	events when filtering on TN3270 event messages.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server TN3270 server version
	2.11, 2.11 SP1, 2.11 SP2, 3.0 and 3.0 SP1. This problem was corrected in the
	latest SNA Server version 3.0 U.S. Service Pack. For information on obtaining
	this Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP1
	Version           : WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
