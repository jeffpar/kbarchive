---
layout: page
title: "Q126008: Registry Value for Routing PPP Packets Incorrect"
permalink: kb/126/Q126008/
---

## Q126008: Registry Value for Routing PPP Packets Incorrect

	Article: Q126008
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	- MSPRESS Microsoft Windows NT Resource Kit, version 3.5 
	-------------------------------------------------------------------------------
	
	Page 420 (Chapter 22: Remote Access Service and the Internet) of the
	Windows NT version 3.5 Resource Kit Networking Guide states the following
	concerning the DisableOtherSrcPackets registry entry:
	
	  Since the packets that come from LAN clients are not originating
	  from the RAS computer, you must set DisableOtherSrcPacket to 1 so
	  the header sent over the PPP link retains the IP address of the
	  LAN clients.
	
	This is incorrect. In order for the header sent over the PPP link to retain
	the LAN client IP address, you must set the DisableOtherSrcPackets value to
	0. The default value is 1.
	
	Also note that the text refers to DisableOtherSrcPacket (singular). The
	correct entry is DisableOtherSrcPackets (plural).
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them.
	Microsoft cannot guarantee that any problems resulting from the use of
	Registry Editor can be solved. Use this tool at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Go to the following key:
	
	  HKEY_LOCAL_MACHINE\
	  System\CurrentControlSet\Services\RasArp\Parameters
	
	3. From the Edit menu, click Add Value.
	
	4. Enter the following value:
	
	  Value name: DisableOtherSrcPackets
	  Value Type: REG_DWORD
	  Range: Boolean (0 or 1)
	  Default: 1 (not in Registry)
	
	5. Exit Registry Editor.
	
	NOTE: This change to the Windows NT registry requires the computer to be
	restarted to take effect. Do not restart the computer right now, though,
	because there are some additional settings that must be changed.
	
	Additional query words: prodnt ras point-to-point zero
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbMSPressSearch kbWinNTS350search kbZNotKeyword6 kbZNotKeyword2
	Version           : :3.5
	
	=============================================================================
	
