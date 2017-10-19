---
layout: page
title: "Q137271: Group Policies Are Not Recognized with NETX or VLM"
permalink: /kb/137/Q137271/
---

## Q137271: Group Policies Are Not Recognized with NETX or VLM

	Article: Q137271
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbnetwork 3rdpartynet win95 kb3rdPartyNetClient
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Group Policies may not be recognized.
	
	CAUSE
	=====
	
	Group Policy resolution does not function with Novell's real-mode NETX and VLM
	redirectors.
	
	RESOLUTION
	==========
	
	To work around this problem, use the protected-mode Microsoft Client for NetWare
	Networks, or the Novell NetWare Client 32 update for Windows 95 (C3295d.exe)
	available from Novell.
	
	NOTE: The Microsoft Client for NetWare Networks cannot access Novell NetWare 4.x
	servers using NetWare Directory Services (NDS) without bindery emulation enabled
	on the servers. In addition, programs designed to use the Novell DOS Requester
	(Vlm.exe) or Netx.exe exclusively may not function properly.
	
	To install the Microsoft Client for NetWare Networks, follow these steps:
	
	1. In Control Panel, double-click the Network icon.
	
	2. Click Add, click Client, and then click Add.
	
	3. Click Microsoft, click Client For NetWare Networks, and then click OK until
	  you return to Control Panel.
	
	STATUS
	======
	
	This behavior is by design. Policies do not work with a real-mode client. To use
	policies, you must be using the protected-mode Microsoft client for NetWare
	Networks.
	
	======================================================================
	Keywords          : kbnetwork 3rdpartynet win95 kb3rdPartyNetClient 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
