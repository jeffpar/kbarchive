---
layout: page
title: "Q276209: Print Session Timeout Problems When You Set Large TImeout Value"
permalink: /kb/276/Q276209/
---

## Q276209: Print Session Timeout Problems When You Set Large TImeout Value

{% raw %}

	Article: Q276209
	Product(s): Microsoft SNA Server
	Version(s): 3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbDSupport sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fixkbb
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you set a large time-out value (for example, 15 minutes) and configure "Job
	termination on unbind," you may experience intermittent timing problems when you
	print, and print sessions may stop responding (appear to be "hung") or be
	unresponsive.
	
	CAUSE
	=====
	
	This problem is caused by a timing issue between when one print job actually
	times out and the next print job begins. For example, you do some printing on a
	session, and then end the bracket. Because of the job termination option, this
	action does not close down the printer. About 15 minutes later (or whatever
	value is configured), a new print job comes down (an FMI BID is sent).
	PrintServer replies with a BID ACK, but because the printer is already open, it
	does not actually reset the timer (this is the bug). Unfortunately, the timer
	pops before the next data message arrives, and the session is hung.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version
	4.0.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	Additional query words: sp1 sp2 sp3
	
	======================================================================
	Keywords          : kbDSupport sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : :3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
