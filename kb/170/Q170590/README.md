---
layout: page
title: "Q170590: RIP Announcements Are Not Sent After Installing MPR"
permalink: kb/170/Q170590/
---

## Q170590: RIP Announcements Are Not Sent After Installing MPR

	Article: Q170590
	Product(s): Microsoft Windows NT
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 23-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Multiple Protocol Router (MPR) in Windows NT Server 3.51 or
	4.0, routing information protocol (RIP) announcements are not sent.
	
	CAUSE
	=====
	
	This problem occurs when you have a multihomed computer using a multiple-
	interface network adapter, and SilentRIP is set to 1 in the registry.
	Multiple-interface adapters have multiple network interfaces on one card.
	
	RESOLUTION
	==========
	
	To enable RIP on the network adapter, the SilentRIP registry key must be
	disabled.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	To enable RIP broadcasts, the SilentRIP registry entry must be set to zero. To do
	this, perform the following steps:
	
	1. Run Registry Editor (Regedt32.exe).
	
	2. Go to the following key in the registry:
	
	     HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\ 
	     IpRip\Parameters
	
	3. On the Edit menu, click Add Value and use the following entry:
	
	     Value Name: SilentRIP
	     Data Type:  REG_DWORD
	     Value:      0
	
	  NOTE: Setting this to 1 lets the server accept but not send RIP packets.
	  Setting this to 0 causes the server to also send RIP packets.
	
	MORE INFORMATION
	================
	
	RIP for Internet Protocol (IP RIP) can be installed on Windows NT Server with
	one network adapter. When IP RIP is installed on a computer with only one
	network adapter, IP RIP is configured to run in Silent Mode. In Silent Mode, IP
	RIP will receive RIP routing announcements and update its routing table, but it
	will not send any routing announcements.
	
	Windows NT Server recognizes the multi-interface adapter as one network adapter
	and enables SilentRIP.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : :3.51,4.0
	
	=============================================================================
	
