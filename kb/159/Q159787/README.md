---
layout: page
title: "Q159787: System May Hang with Diamond Stealth 3D Video Adapter"
permalink: kb/159/Q159787/
---

## Q159787: System May Hang with Diamond Stealth 3D Video Adapter

	Article: Q159787
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the standard VGA driver with a Diamond Stealth 3D display adapter
	under Windows NT 4.0, the system may appear to stop responding (hang) when the
	video resolution is changed.
	
	CAUSE
	=====
	
	The Diamond Stealth 3D video adapter requires a special driver supplied by the
	manufacturer or available in the Drvlib directory on the Windows NT 4.0 compact
	disc. If the standard VGA driver is used instead of the special driver, the
	system may appear to stop responding if the video resolution is changed. This is
	not a problem with Microsoft Windows NT. The video adapter requires a special
	driver for resolutions above 640 x 480.
	
	MORE INFORMATION
	================
	
	For more information about the Diamond Stealth 3D display adapter and drivers,
	contact Diamond Multimedia Systems:
	
	- Technical support: (408) 325-7100
	
	- BBS Support: [2400-14,400 bps] (408) 325-7080
	  [9600-28,800 bps] (408) 325-7175
	
	- World Wide Web: http://www.diamondmm.com/ or ftp://ftp.diamondmm.com/
	
	The products discussed here are manufactured by Diamond Multimedia systems Inc,
	vendors independent of Microsoft; we make no warranty, implied or otherwise,
	regarding the products' performance or reliability.
	
	
	Additional query words: setup video diamond
	
	======================================================================
	Keywords          : kb3rdparty kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	Issue type        : kbprb
	
	=============================================================================
	
