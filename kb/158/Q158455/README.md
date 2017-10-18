---
layout: page
title: "Q158455: Supported Network Adapters for Remoteboot Clients and WinNT 4.0"
permalink: kb/158/Q158455/
---

## Q158455: Supported Network Adapters for Remoteboot Clients and WinNT 4.0

	Article: Q158455
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists the supported network adapters for remoteboot clients.
	
	MORE INFORMATION
	================
	
	Adapters That Support Windows 95, Windows 3.1, and MS-DOS on the Client
	-----------------------------------------------------------------------
	
	NOTE: The supported cards are made by the manufacturer listed and are not clone
	or compatible cards. Currently, Microsoft doesn't support compatible network
	cards with remoteboot clients. For instance, the Novell NE2000 adapter is
	supported, but NE2000 clones are not.
	
	Support for Windows 95 using remoteboot token ring cards is currently not
	supported.
	
	  3Com EtherLink II
	  3Com EtherLink III
	  AMD Series 2100 Ethernet - Note 1
	  Intel EtherExpress 16
	  Intel Ether Express Pro  - Note 2
	  Novell Ne2000  - Note 2
	  Western Digital/ SMC EtherCardPlus (8000 series) - Note 3
	
	Note 1: AMD Series 2100 Ethernet
	
	The Windows 95 Setup program can stall for lengthy periods (20 minutes or more)
	when the client boots from an AMD Series 2100 Ethernet network adapter. Wait for
	the Setup program to continue.
	
	Note 2: Novell NE2000 and Intel EtherExpress PRO
	
	The Windows 95 Setup program can fail to auto-detect the Novell NE2000 and Intel
	EtherExpress PRO network adapters in a remoteboot environment. You may have to
	add the network adapter information manually.
	
	Note 3: Western Digital(TM)/SMC EtherCard(TM) Plus (8000 series)
	
	In the client's machine directory, add a line of the form
	
	  EMMExclude=CC00-CFFF
	
	(using the appropriate exclusion range for your SMC8000 configuration) to the
	[386Enh] section of System.ini).
	
	Adapters That Support Windows 3.1 and MS-DOS on the Client
	----------------------------------------------------------
	
	NOTE: The supported cards are made by the listed manufacturer and are not clone
	or compatible cards. Currently, Microsoft doesn't support compatible network
	cards with remoteboot clients. For instance, the Novell NE2000 adapter is
	supported, but NE2000 clones are not.
	
	  3Com EtherLink
	  3Com EtherLink Plus
	  3Com EtherLink/MC
	  3Com EtherLink II
	  3Com EtherLink III
	  3Com TokenLink
	  3Com TokenLink III
	  3Com 3Station
	  AMD Series 2100 Ethernet
	  HP Ethertwist
	  IBM Token Ring
	  IBM Ethernet
	  Intel EtherExpress 16
	  Intel Ether Express Pro
	  Madge Token-Ring
	  Nokia/ICL Ethernet IIe
	  Novell NE1000
	  Novell Ne2000
	  Racal Interlan NI5210
	  Racal Interlan NI6510
	  Western Digital/SMC Ethernet
	  Western Digital/ SMC EtherCardPlus (8000 series) - Note 4
	
	Note 4: Western Digital(TM)/SMC EtherCard(TM) Plus (8000 series)
	
	In the client's machine directory, add a line of the form
	
	  EMMExclude=CC00-CFFF
	
	(using the appropriate exclusion range for your SMC8000 configuration) to the
	[386Enh] section of System.ini).
	
	Configuration Tips
	------------------
	
	Most network adapters work best with the Windows NT Remoteboot service when using
	their default settings. Any changes to the default settings should be noted in
	the Protocol.ini file located in the
	<systemroot>\RPL\BBLOCK\NETBEUI\adapter directory, where "adapter" is the
	name of the particular network adapter.
	
	Additional query words: nt rpl remote boot
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
