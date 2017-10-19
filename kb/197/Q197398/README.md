---
layout: page
title: "Q197398: XCON: MTA Stops Processing Mail with Events 57, 2051 and 1105"
permalink: /kb/197/Q197398/
---

## Q197398: XCON: MTA Stops Processing Mail with Events 57, 2051 and 1105

	Article: Q197398
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 28-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Exchange Server Message Transfer agent (MTA) may stop processing mail under
	a heavy load. It may also generate the following Event id's in the Windows NT
	Application Event log:
	
	  Event ID: 57
	  Source: MSExchangeMTA
	  Type: Warning
	  Category: X.400 Service
	  Description: The limit on the number of associations allowed to and from
	  entity /O=MICROSOFT/OU=TEST/CN=CONFIGURATION/CN=SERVERS/CN=TEST
	  /CN=MICROSOFT MTA has been reached. The limit is 2032. [MTA MAIN BASE 1
	  43] (14)
	
	  Event ID: 2051
	  Source: MSExchangeMTA
	  Type: Error
	  Category: Internal processing
	  Description: A fatal internal MTA error has occurred. The internal
	  directory replication agent (DRA) Dispatcher thread did not execute. If
	  this message is logged more that 5 times restart the directory. Contact
	  Microsoft Technical Support. An illegal GET from element 00000000
	  occurred at offset 1. [BASE OPERATOR 18 110] (16)
	
	  Event ID: 1105
	  Source: MSExchangeDS
	  Type: Error
	  Category: Replication
	  Description: The internal directory replication agent (DRA) Dispatcher
	  thread did not execute. If this message is logged more that 5 times
	  restart the directory.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Message Transfer Agent (MTA)
	
	  File Name      Version
	  -------------------------
	  Dbserver.sch   5.5.2448.1
	  Dcprods.cat    5.5.2448.1
	  Ems_rid.dll    5.5.2448.1
	  Emsmta.exe     5.5.2448.1
	  Info4log.cfg   5.5.2448.1
	  Infodlog.cfg   5.5.2448.1
	  Infollog.cfg   5.5.2448.1
	  Infotlog.cfg   5.5.2448.1
	  Mtacheck.exe   5.5.2448.1
	  Mtamsg.dll     5.5.2448.1
	  P2.xv2         5.5.2448.1
	  X400om.dll     5.5.2448.1
	  X400omv1.dll   5.5.2448.1
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
