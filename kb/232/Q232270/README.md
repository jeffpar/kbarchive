---
layout: page
title: "Q232270: &quot;Help on Property&quot; Command Unavailable in Network Monitor"
permalink: /kb/232/Q232270/
---

## Q232270: &quot;Help on Property&quot; Command Unavailable in Network Monitor

	Article: Q232270
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:95,98,98 Second Edition; winnt:3.1,3.5,3.51,4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbnetwork kbtool
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP4 
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Windows NT Workstation versions 3.1, 3.5, 3.51, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows 98 Second Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Network Monitor, online help is available for certain properties
	using the context menu (the menu that appears when you right-click an item).
	When you right-click a packet, the Help On Property command may be unavailable.
	
	CAUSE
	=====
	
	This behavior occurs because the packet does not contain server message block
	(SMB) information. At this time, SMB information is the only type of information
	for which this command is available.
	
	MORE INFORMATION
	================
	
	In Network Monitor, you can view detailed information contained in a packet to
	examine a frame's data. After you open a packet, you can right-click a protocol
	or value to display the context menu, which contains the following commands:
	
	- Find Next Instance - Finds the next occurrence of the value.
	
	- Add to Filter - Filters the property or value.
	
	- Help on Property - Provides details about SMB information contained in the
	  packet.
	
	Additional query words: netmon bh bloodhound sniff nm
	
	======================================================================
	Keywords          : kbnetwork kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTW400sp2 kbWinNTW400sp1 kbWinNTW310 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp4 kbWinNTSEnt400 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWin95search kbWin98search kbWin98SEsearch kbWinNT310Search kbWinNTW310Search kbZNotKeyword3 kbWin98 kbWin98SE
	Version           : WINDOWS:95,98,98 Second Edition; winnt:3.1,3.5,3.51,4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbprb
	
	=============================================================================
	
