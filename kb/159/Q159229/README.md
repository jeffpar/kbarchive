---
layout: page
title: "Q159229: S3 Trio64V+ Not Supported on IBM Carolina Computer"
permalink: kb/159/Q159229/
---

## Q159229: S3 Trio64V+ Not Supported on IBM Carolina Computer

	Article: Q159229
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbhw kbsetup kbHardware
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On IBM Carolina computers with an onboard S3 video adapter and an additional S3
	765 video adapter, the onboard adapter is detected first.
	
	Also, Windows NT 4.0 may not start under this configuration.
	
	CAUSE
	=====
	
	This is a known issue with the IBM Carolina. IBM does not currently support the
	S3 765 chip set on this computer.
	
	RESOLUTION
	==========
	
	Please contact IBM for information regarding firmware updates.
	
	Windows NT 4.0 has been tested on this computer with the S3 764, 864, and 964
	chip sets.
	
	MORE INFORMATION
	================
	
	The Carolina firmware contains a routine to place the S3 765 chip set into 764
	compatibility mode. This effectively makes the chip set invisible to the ARC
	hardware detection.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbhw kbsetup kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
