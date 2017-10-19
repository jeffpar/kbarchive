---
layout: page
title: "Q122053: System Hangs at Startup with Maxtor Mobile Max Hard Disk"
permalink: /kb/122/Q122053/
---

## Q122053: System Hangs at Startup with Maxtor Mobile Max Hard Disk

	Article: Q122053
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start up your computer with the Maxtor Mobile Max PCMCIA hard disk
	plugged into the PCMCIA slot, your computer stops responding (hangs).
	
	CAUSE
	=====
	
	The computer hangs if you load the IFSHLP.SYS file from your CONFIG.SYS file
	when the Mobile Max hard disk plugged in.
	
	WORKAROUND
	==========
	
	Remove the Mobile Max hard disk from the PCMCIA slot, then restart your
	computer. After you restart your computer, plug in the Mobile Max hard disk. You
	should now be able to successfully access the hard disk.
	
	MORE INFORMATION
	================
	
	The Mobile Max products included here are manufactured by Maxtor Corporation,
	vendors independent of Microsoft; we make no warranty, implied or otherwise,
	regarding these products' performance or reliability.
	
	Additional query words: 3rdparty 3.10 3.11 hard drive hang hung crash crashed locks locked frozen freezes crashing quit quits stopped crashes bomb bombs bombed boot bootup reboot
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
