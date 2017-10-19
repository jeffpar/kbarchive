---
layout: page
title: "Q224834: Setting Filter to View Only Browser Frames in Network Monitor"
permalink: /kb/224/Q224834/
---

## Q224834: Setting Filter to View Only Browser Frames in Network Monitor

	Article: Q224834
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbtool
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to set a capture filter to view only browser frames
	in Network Monitor.
	
	MORE INFORMATION
	================
	
	When you are troubleshooting browsing-related problems, a network trace may
	help. Because browser traffic is somewhat infrequent, however, the trace may
	need to run for an extended period of time to gather enough data for analysis.
	Some browser information is sent only every 15 minutes, making it difficult to
	capture those packets. Depending on network usage, a Network Monitor trace can
	quickly become very large (many megabytes).
	
	You can configure Network Monitor to capture only browser frames by using a
	pattern match to identify these frames. This significantly reduces the size of
	the capture. To set a capture filter in Network Monitor to capture only browser
	packets:
	
	1. On the Capture menu, click Filter.
	
	2. Double-click Pattern Matches.
	
	3. In the Offset box, type "cb" (without the quotation marks). Click "From Start
	  of Frame".
	
	4. In the Pattern box, type "4252" (without the quotation marks). Click Hex.
	
	5. Click OK.
	
	6. Click OK.
	
	7. Start the capture.
	
	For more information about using Network Monitor, see the Network Monitor Help
	file in the "Systems Management Server Administrator's Guide."
	
	Additional query words: browse netmon master 8021 8003 8032 event browstat browmon
	
	======================================================================
	Keywords          : kbnetwork kbtool 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
