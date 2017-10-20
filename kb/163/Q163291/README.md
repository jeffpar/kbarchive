---
layout: page
title: "Q163291: TN3270E Sets Incorrect Sequence Number on ACKLUA Messages"
permalink: /kb/163/Q163291/
---

## Q163291: TN3270E Sets Incorrect Sequence Number on ACKLUA Messages

{% raw %}

	Article: Q163291
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetwork kbusagekbbuglist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you type commands too quickly on a TN3270 emulator, for example without
	waiting for the result of the previous command to display on the screen, the
	TN3270 client session may stop responding (hang).
	
	CAUSE
	=====
	
	In this circumstance, the TN3270 Server issues an RUI_READ before it has
	finished processing the previous RUI_READ. This causes it to set incorrect
	sequence numbers on messages which it sends to the host.
	
	RESOLUTION
	==========
	
	An SNA Server update is available to correct this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 2.11 Service
	Pack 1.
	
	
	A supported 2.11 fix is now available, but has not been fully regression- tested
	and should be applied only to systems experiencing this specific problem. Unless
	you are severely impacted by this specific problem, Microsoft recommends that
	you wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words: prodsna 2.11.sp1
	
	======================================================================
	Keywords          : kbnetwork kbusage kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ211SP1
	Version           : WINDOWS:2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
