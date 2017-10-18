---
layout: page
title: "Q126689: STOP Msg: c000021a Logging on a Second Time to WinNT 3.51 w/ SP2"
permalink: kb/126/Q126689/
---

## Q126689: STOP Msg: c000021a Logging on a Second Time to WinNT 3.51 w/ SP2

	Article: Q126689
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbdisplay
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under some video resolutions and using specific wallpaper bitmaps, when you log
	in for the second time after rebooting on your Windows NT 3.51 computer with
	Windows NT 3.51 Service Pack 2 installed, the following error message appears:
	
	  Application error - WINLOGON.EXE The exception unknown software exception
	  (0xc0000037) occurred in the application at location 0x77fa02fd
	
	When you choose to terminate the application, the following STOP Message
	appears:
	
	  STOP:c000021a (fatal system error)
	
	RESOLUTION
	==========
	
	Microsoft has modified the file, WINSRV.DLL, to correct this problem. Upgrade to
	the latest Windows NT 3.51 U.S. Service Pack.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 3.51 U.S. Service
	Pack 2. This problem was corrected in the latest Windows NT 3.51 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbdisplay 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
