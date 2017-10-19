---
layout: page
title: "Q156607: HP OEM Matrox Ultima Plus Video Card Causes WinNT to Hang"
permalink: /kb/156/Q156607/
---

## Q156607: HP OEM Matrox Ultima Plus Video Card Causes WinNT to Hang

	Article: Q156607
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Hewlett-Packard systems using the OEM MATROX Ultima Plus video card may stop
	responding intermittently when running 16-bit applications under Windows NT. The
	following error occurs at random times:
	
	  An error has occurred in your application
	
	After this error occurs, the system may stop responding, requiring you to restart
	Windows NT.
	
	
	CAUSE
	=====
	
	This problem may be caused by the Hewlett-Packard OEM version of the MATROX
	Ultima Plus Video card with the following DAC Type:
	
	  DAC: TI TVP3020
	
	NOTE: The Hewlett-Packard OEM version of the MATROX Ultima Plus Video card with
	DAC Type TI TVP3026 does not experience this problem.
	
	Perform the following steps to view the DAC Type:
	
	1. Click the Start button, point to Settings, click Control Panel, and then
	  double-click Display.
	
	2. Click the Settings tab, and then click Display Type.
	
	RESOLUTION
	==========
	
	To resolve this problem, use one of the following workarounds:
	
	- Contact MATROX Technical Support for an updated Mgs.sys device driver for
	  Windows NT 3.51. However, all video device drivers were re-written to run in
	  kernel-mode under Windows NT 4.0 and there are no updated drivers available
	  from MATROX to correct this problem for Windows NT 4.0 at this time.
	
	-or-
	
	- Replace the video card with another type or manufacturer.
	
	For further information, please see the following article in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q137476
	  TITLE : NTVDM Error with MATROX Video Card
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The MATROX Ultima plus video cards are manufactured by MATROX, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	
