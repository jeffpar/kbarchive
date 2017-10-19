---
layout: page
title: "Q243316: RAS with Multiple-Port Digi Adapter Does Not Answer Calls"
permalink: /kb/243/Q243316/
---

## Q243316: RAS with Multiple-Port Digi Adapter Does Not Answer Calls

	Article: Q243316
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbhw kbnetwork kbHardware
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Windows NT server running Remote Access Services (RAS) with a Digi AccelPort
	8r 920 multiple-port adapter does not answer incoming calls after the first call
	per line.
	
	CAUSE
	=====
	
	The Digi AccelPort 8r 920 multiple-port adapter connects to an RJ45 input/output
	(I/O) serial box. This connection requires a 10-pin RJ45 connector-to-DB25 cable
	that is supplied by Digi. If you are using an 8-pin RJ45 connector-to-DB25
	cable, pin 1 (Ring Indicator, or RI) and pin 10 (Data Carrier Detect, or DCD)
	are not connected. RAS uses RI for answering incoming calls.
	
	RESOLUTION
	==========
	
	Use the 8-port Octopus cable with DB25 connectors in this configuration.
	
	MORE INFORMATION
	================
	
	For more information about the cabling specifics recommended by Digi
	International, please visit the following Digi Web site:
	
	  http://support.digi.com/techsupport/common/cable.html
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	Additional query words: multiport card digiboard
	
	======================================================================
	Keywords          : kbhw kbnetwork kbHardware 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
