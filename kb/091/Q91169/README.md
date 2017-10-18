---
layout: page
title: "Q91169: Computer Hangs After Removing Token Ring Card"
permalink: kb/091/Q91169/
---

## Q91169: Computer Hangs After Removing Token Ring Card

	Article: Q91169
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your computer may stop responding (hang) after you remove your IBM Token Ring
	adapter if you have installed Novell NetWare as a secondary network in Windows
	for Workgroups. When you start your computer, the AUTOEXEC.BAT file processes
	successfully until it reaches the NET START command. It displays the following
	message:
	
	  Microsoft NetBind version 2.1
	
	Your computer then hangs. To start your computer and gain access to your hard
	drive, you must use a bootable floppy.
	
	RESOLUTION
	==========
	
	To correct the problem, remove the network device driver statements from the
	CONFIG.SYS file.
	
	MORE INFORMATION
	================
	
	If you are not using an IBM Token Ring adapter or have not installed Novell
	NetWare as your secondary network, you may receive errors after removing your
	network adapter. During CONFIG.SYS processing, the following displays:
	
	  MAC0006: Network interface hardware not found or not responding.
	
	  MAC0001: Init failure
	  Press any key to continue...
	
	Once you press a key and the AUTOEXEC.BAT file begins processing, the following
	is displayed:
	
	  Error 5733: The protocol manager has reported an incomplete binding.
	
	Although these errors do not prevent you from using your computer, they may be
	signs of an unstable configuration. Microsoft recommends that you remove the
	network device drivers from CONFIG.SYS and AUTOEXEC.BAT until your network
	adapter is back in your computer.
	
	The products included here is manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.10 3.11 crash freeze
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
