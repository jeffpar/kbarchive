---
layout: page
title: "Q154156: Windows NT Not Compatible With U.S. Robotics WinModem"
permalink: kb/154/Q154156/
---

## Q154156: Windows NT Not Compatible With U.S. Robotics WinModem

	Article: Q154156
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT is not compatible with the U.S. Robotics WinModem. In Windows 95,
	this modem is controlled by a device driver that replaces the Windows 95
	Serial.vxd device driver. U.S. Robotics does not have a replacement for the
	Windows NT Serial.sys device driver, so the WinModem will not function in
	Windows NT.
	
	MORE INFORMATION
	================
	
	The U.S. Robotics WinModem is an adapter that plugs in to your computer, similar
	to an internal modem. The WinModem, however, has no modem controller on the
	adapter. The Serial.vxd replacement from U.S. Robotics implements all modem
	functions normally handled by the modem controller, including: AT command
	execution, error control, and data compression.
	
	The WinModem is manufactured by U.S. Robotics, a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: usr
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
