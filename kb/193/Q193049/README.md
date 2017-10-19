---
layout: page
title: "Q193049: XCON: MTA Stops; Events 2110, 2171, &amp; 9299 Appear in Event Log"
permalink: /kb/193/Q193049/
---

## Q193049: XCON: MTA Stops; Events 2110, 2171, &amp; 9299 Appear in Event Log

	Article: Q193049
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix exc55
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When the message transfer agent (MTA) attempts to send a message to multiple
	recipients at the same time, the MTA may stop unexpectedly and the following
	events may appear in the event log:
	
	  Event: 2110
	  Source: MSExchangeMTA
	  Type: Error
	  Category: Internal Processing
	  Description: A fatal MTA database server error was encountered. A bad
	  list member length is on object 06000454. File offset: 1442. Attribute
	  ID: 11. Referenced object 00000000 (0 => N/A). Referenced object error:
	  0. [DB Server RTSE 31 42] (16)
	
	  Event: 2171
	  Source: MSExchangeMTA
	  Type: Warning
	  Category: Internal Processing
	  Description: An MTA database server error was encountered while reading
	  an attribute. Called from PLATFORM. Procedure: 142. Database error
	  code: 2110. Object at fault: 0600045A. Attribute identifier: 2. Value
	  number: 1. Referenced object: 06000454 (00000000 => N/A). Referenced
	  object error 2110. [DB Server RTSE 31 26] (14)
	
	  Event: 9299
	  Source: MSExchangeMTA
	  Type: Information
	  Category: X.400 Service
	  Description: Service closedown complete, version 5.5 (build 2232.4).
	  [BASE IL MAIN BASE 33 490] (16)
	
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
	  Dbserver.sch   5.5.2363.0
	  Dcprods.cat    5.5.2363.0
	  Ems_rid.dll    5.5.2363.0
	  Emsmta.exe     5.5.2363.0
	  Info4log.cfg   5.5.2363.0
	  Infodlog.cfg   5.5.2363.0
	  Infollog.cfg   5.5.2363.0
	  Infotlog.cfg   5.5.2363.0
	  Mtacheck.exe   5.5.2363.0
	  Mtamsg.dll     5.5.2363.0
	  P2.xv2         5.5.2363.0
	  X400om.dll     5.5.2363.0
	  X400omv1.dll   5.5.2363.0
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 2.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp2fix exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
