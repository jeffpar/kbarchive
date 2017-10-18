---
layout: page
title: "Q233482: STOP 0x0000001E in Win32k.sys on Terminal Server"
permalink: kb/233/Q233482/
---

## Q233482: STOP 0x0000001E in Win32k.sys on Terminal Server

	Article: Q233482
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your computer running Windows NT Server 4.0, Terminal Server Edition stops
	responding (hangs) and displays the following blue-screen error message:
	
	  STOP 0x0000001E (0xC0000005, 0xA3053247, 0x00000000, 0x00000000)
	
	NOTE: The parameters in the STOP code may be different depending on your system
	configuration.
	
	
	CAUSE
	=====
	
	This problem occurs because there is a synchronization problem in the kernel
	mode Win32 subsystem (Win32k.sys). When attempting to realize a GDI palette, a
	lock protecting a list of device contexts is being released too early.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	This problem was first corrected in Windows NT Server 4.0, Terminal Server
	Edition, Service Pack 5.
	
	Additional query words: gdi bugcheck wts tse
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServSearch
	Version           : winnt:4.0,4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
