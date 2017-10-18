---
layout: page
title: "Q225236: Error Message When You Start Administrator Tool"
permalink: kb/225/Q225236/
---

## Q225236: Error Message When You Start Administrator Tool

	Article: Q225236
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4
	Operating System(s): 
	Keyword(s): kb3rdparty kbdisplay kberrmsg kbtool kbui
	Last Modified: 24-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4 
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to start the Microsoft Systems Management Server (SMS) version 1.2
	Administrator tool, you may receive the following error message on a blue
	screen:
	
	  STOP 0x0000001E (0xC000005, 0xFB7D8C92, 0x00000000, 0x02234000)
	
	CAUSE
	=====
	
	This issue can occur if you are using Diamond Multimedia's Viper 330 video
	adapter with an out of date video driver. Some drivers for this device are not
	totally compatible with Windows NT 4.0 Service Pack 4.
	
	RESOLUTION
	==========
	
	To resolve this issue, obtain and install the most current driver for this
	device. For information about how to do so, view the documentation included with
	the device, or contact Diamond Multimedia.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 1.20 4.00
	
	======================================================================
	Keywords          : kb3rdparty kbdisplay kberrmsg kbtool kbui 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400xsearch kbWinNTW400sp4 kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400xsearch kbWinNTS400
	Version           : winnt:4.0,4.0 SP4
	Issue type        : kbprb
	
	=============================================================================
	
