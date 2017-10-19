---
layout: page
title: "Q129121: Compaq ProsigniaVS May Fail to Obtain SFM Routing Information"
permalink: /kb/129/Q129121/
---

## Q129121: Compaq ProsigniaVS May Fail to Obtain SFM Routing Information

	Article: Q129121
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Services for Macintosh (SFM) on a Compaq ProsigniaVS running
	Windows NT Server 3.5 on the same network with a Novell NetWare 3.12 network
	server running AppleTalk, the Compaq machine may fail to respond to AppleTalk
	Lookup Requests.
	
	  Hardware
	  --------
	  Compaq ProsigniaVS
	  Compaq Fast SCSI-2 Controller w/1GB SCSI Drive
	  Compaq Integrated NetFlex - L ENET Controller
	
	  Servers
	  -------
	  NetWare 3.12 running Macintosh services.
	  Compaq running NTS 3.5 and SFM. (Build 807, SSD 1.14)
	
	  Workstation
	  -----------
	  Power Macintosh 7100/66AV (System 7.5)
	
	If the NetWare server starts before the Compaq running Windows NT 3.5 and defines
	a zone, the Compaq Server is not seen on the available servers list in Chooser
	on the Mac. If you define the zone on the Windows NT 3.5 computer and start it
	first, you can see both the Windows NT machine and the Novell server. If you
	define a separate zone on the Windows NT computer, the zone shows up, but there
	are no available servers listed in Chooser. If you go into Control Panel, choose
	Network on the Mac, and try to switch zones, it reports that only the Novell
	zone exists. This problem does not occur with Non-Compaq computers or Compaq
	computers running Non- Compaq NICs.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Define the zones on the Windows NT 3.5 computer and start if first
	
	  -or-
	
	- Use a different type of network interface card (NIC) in the Windows NT 3.5
	  machine.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
