---
layout: page
title: "Q126354: Video Performance and Display Problems with Matrox MGA Driver"
permalink: kb/126/Q126354/
---

## Q126354: Video Performance and Display Problems with Matrox MGA Driver

	Article: Q126354
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use the Matrox MGA video driver shipped with Windows NT version 3.5,
	you may experience the following video performance and display problems:
	
	- When you are working on a spreadsheet in Quattro Pro for Windows and you
	  select a tab on the bottom of the screen to switch pages, the page you are on
	  turns black.
	
	- When you run Quattro Pro for Windows, the Mystify (32) screen saver runs
	  slower than it normally does.
	
	- When you start Quicken for windows version 3.0, the Twinkle Star bitmap is
	  displayed one frame at a time with a ten second pause between frames.
	
	CAUSE
	=====
	
	This problem occurs if you are configure the driver for high resolution
	(1024x768) and 65,536 colors.
	
	WORKAROUND
	==========
	
	To work around this problem, set the video display for a lower resolution and
	fewer colors.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The Matrox MGA video driver shipped with the Windows NT version 3.5 CD supports
	all MGA Ultima, Ultima-Plus, Impression, Impression-Plus and Impression-Pro
	video boards. The video driver is located at the \DRVLIB\VIDEO\MATROX
	subdirectory.
	
	The third-party video adapters discussed here are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: prodnt 65536 palette qpro quattropro
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
