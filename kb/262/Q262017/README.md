---
layout: page
title: "Q262017: Memory Leak in TN3270 Service When Printing Through TN Emulator"
permalink: /kb/262/Q262017/
---

## Q262017: Memory Leak in TN3270 Service When Printing Through TN Emulator

	Article: Q262017
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): sna4 kbSNA400sp4fix kbSNA400PreSP4fix
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print from a TN3270 emulator session, an internal memory leak may occur
	in the TN3270 Server service, causing the server to eventually run out of
	virtual memory.
	
	If you view the Tn3servr.exe file in Task Manager or Performance Monitor, you
	will see that the memory use rises at a fairly high rate (10 to 20 megabytes in
	a 12-hour period).
	
	
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
	
	
	Additional query words: tn3720 memory leak
	
	======================================================================
	Keywords          : sna4 kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3
	Version           : WINDOWS:4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
