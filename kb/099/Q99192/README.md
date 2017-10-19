---
layout: page
title: "Q99192: Lanabase Changes when DOS Client not In Default Directory"
permalink: /kb/099/Q99192/
---

## Q99192: Lanabase Changes when DOS Client not In Default Directory

	Article: Q99192
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	When you install a LAN Manager 2.2 Windows client for NetBEUI and TCP/IP, the
	TCP/IP LANA base changes to 0 instead of 1 if you don't install an MS-DOS client
	in the default directory (LANMAN.DOS). To keep this from happening, you must
	either install the MS-DOS client in the default directory or manually change the
	PROTOCOL.INI file.
	
	Note: LANA = local area network adapter.
	
	
	Here is a sample PROTOCOL.INI:
	
	[PROTMAN]
	 DRIVERNAME = PROTMAN$
	 DYNAMIC = YES
	 PRIORITY = NETBEUI
	
	[TCPIP_XIF]
	
	 DRIVERNAME      = TCPIP$
	 IPADDRESS0 = 130 20 7 68
	 SUBNETMASK0 = 255 255 0 0
	 DEFAULTGATEWAY0 =
	 NBSESSIONS = 6
	   ; the following two parameters added after documentation was completed
	 TCPSEGMENTSIZE  = 1450
	 TCPWINDOWSIZE   = 1450
	 LOAD            = tcptsr[c],tinyrfc[c],emsbfr[cr]
	 UNLOAD     = "unloadt /notsr[dc]"
	 BINDINGS = "UBNEITP_NIF"
	 LANABASE = 0
	
	[NETBEUI_XIF]
	 Drivername = netbeui$
	 SESSIONS = 6
	 NCBS = 12
	 BINDINGS = "UBNEITP_NIF"
	 LANABASE = 1
	
	[UBNEITP_NIF]
	   DriverName = UBNEI$
	   AdapterType = NIUpc/EOTP
	   MemoryWindow = 0xD8000
	   IO_Port = 0x368
	   IRQ_Level = 5
	   SlotNumber = 4
	   MaxRequests = 6
	   MaxTransmits = 6
	   ReceiveBufSize = 600
	   MaxMulticast = 16
	   ReceiveMethod = ReceiveLookahead
	   ReceiveBuffers = 64
	
	Additional query words: 2.20 2.2
	
	======================================================================
	Keywords          : kbnetwork 
	
	=============================================================================
	
