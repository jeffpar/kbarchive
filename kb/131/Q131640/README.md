---
layout: page
title: "Q131640: 100% CPU Usage Running SNA Windows 3.x Client on Windows NT"
permalink: /kb/131/Q131640/
---

## Q131640: 100% CPU Usage Running SNA Windows 3.x Client on Windows NT

	Article: Q131640
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,3.0,4.0
	Operating System(s): 
	Keyword(s): sna4
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you run the SNA Server Windows 3.x client under Windows NT 3.1 or 3.5,
	Performance Monitor shows CPU utilization at 100 percent. This occurs whenever
	the SNA Server Windows 3.x client process (WNAP.EXE) is running, even if it is
	not being used.
	
	The WNAP process, which calls PeekMessage(), is causing the Windows NT WOW
	subsystem to use all available idle CPU cycles. However, due to sophisticated
	Windows NT process scheduling, other tasks/threads running at a higher priority
	(including foreground tasks), and tasks/threads running at the same priority,
	continue to run. You will probably not notice any performance degradation.
	
	The excessive CPU usage does not occur under Windows NT 3.51.
	
	
	MORE INFORMATION
	================
	
	The high CPU usage occurs on Windows NT 3.1 or 3.5 with any 16-bit Windows
	application which implements a PeekMessage() loop to process Windows messages.
	The SNA Server Windows 3.x client (WNAP.EXE) uses a PeekMessage() loop.
	
	
	Additional query words: prodsna 2.00 2.10 3.50 CPU
	
	======================================================================
	Keywords          : sna4 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ400 kbSNAServ210
	Version           : WINDOWS:2.0,2.1,2.11,3.0,4.0
	
	=============================================================================
	
