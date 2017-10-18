---
layout: page
title: "Q247419: XCON: TCP/IP Control Block Shortage Event ID 9156"
permalink: kb/247/Q247419/
---

## Q247419: XCON: TCP/IP Control Block Shortage Event ID 9156

	Article: Q247419
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you apply Service Pack 3 for Exchange Server version 5.5, the following
	error message may be logged in the Windows NT Event Viewer application event
	log:
	
	  Event ID: 9156
	  Source: MSExchangeMTA
	  Type: Warning
	  Category: Resource
	  Description:
	  A resource limit has been reached while attempting to open an association.
	  There is no free control blocks available for network type 1.
	  The configured count is 40. [BASE IL MAIN BASE 1 282] (10)
	
	After this error message is logged, the message transfer agent (MTA) may stop
	processing messages and you may need to restart the service before mail flows
	again.
	
	CAUSE
	=====
	
	The MTA leaks control blocks. Under stress or slow connection conditions this
	issue becomes apparent.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, click the following article number to view the
	article in the Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	WORKAROUND
	==========
	
	You can use the Evtscan utility from the BackOffice Resource Kit to stop and
	start the MTA as soon as you detect a 9156 event in the application event log.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Exchange Server
	version 5.5 Service Pack 3. This problem was first corrected in Exchange Server
	5.5 Service Pack 4.
	
	Additional query words: bridgehead slow link bork
	
	======================================================================
	Keywords          : exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
