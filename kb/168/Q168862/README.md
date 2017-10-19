---
layout: page
title: "Q168862: How to Install ISO and TP4 Parser for Network Monitor"
permalink: /kb/168/Q168862/
---

## Q168862: How to Install ISO and TP4 Parser for Network Monitor

	Article: Q168862
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 17-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to configure the ISO and TP4 Parser for Network
	Monitor.
	
	MORE INFORMATION
	================
	
	1. Copy the Iso.dll, Iso.ini, Tp4.dll files to your NetMon\Parsers subdirectory.
	  These files are located in the BackOffice Resource Kit.
	
	2. Make following additions to your Parser.ini file. The Parser.ini file is
	  located in the NetMon directory.
	
	In the [PARSERS] section of the Parser.ini add:
	
	  TP4.DLL = 0: TP4
	  ISO.DLL = 0: ISO, TPDU, SPDU, PPDU, ACSE, RTSE, RTS
	
	Then add these following new sections to the Parser.ini file:
	
	[RTS]
	   Comment     = "1984 Reliable Transport Service"
	   FollowSet   =
	   HelpFile    =
	
	[RTSE]
	   Comment     = "Reliable Transport Service Element"
	   FollowSet   =
	   HelpFile    =
	
	[ACSE]
	   Comment     = "Association Control Service Element"
	   FollowSet   =
	   HelpFile    =
	
	[PPDU]
	   Comment     = "Presentation Packet Data Unit"
	   FollowSet   =
	   HelpFile    =
	
	[SPDU]
	   Comment     = "Session Packet Data Unit"
	   FollowSet   =
	   HelpFile    =
	
	[TPDU]
	   Comment     = "Transport Packet Data Unit"
	   FollowSet   =
	   HelpFile    =
	
	[ISO]
	   Comment     = "ISO RFC 1006 Protocol"
	   FollowSet   =
	   HelpFile    =
	
	[TP4]
	   Comment     = "TP4 OSI CLNP Protocol"
	   FollowSet   = TPDU
	   HelpFile    =
	
	Modify the "FollowSet=" entry in the [LLC] section to equal TP4. The [LLC]
	section will then read:
	
	[LLC]
	   Comment     = "Logical Link Control/802.2 protocol"
	   FollowSet   = TP4
	   HelpFile    =
	
	After adding these parsers, it would completely parse the X.400
	connection/disconnection and data transfer packets. The ISO parser would parse
	the following information. 1988 RFC1006 wrapper for X.400 over TCP/IP
	
	  ACSE
	  TPDU
	  SPDU
	  PPDU
	  RTSE
	
	1984 RFC1006 wrapper for X.400 overTCP/IP
	
	  TPDU
	  SPDU
	  RTS   (plus X.410)
	
	The ISO and TP4 Network Monitor Parsers are part of the BackOffice Resource Kit
	version 3.0.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
