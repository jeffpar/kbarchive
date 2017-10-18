---
layout: page
title: "Q164838: XCON: MTA Looping Between HP MTA and Exchange MTA"
permalink: kb/164/Q164838/
---

## Q164838: XCON: MTA Looping Between HP MTA and Exchange MTA

	Article: Q164838
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When mail is received from an ADMD such as Pipex in the United Kingdom (who act
	as an X.400 to SMTP gateway) and these messages are subsequently relayed to
	Microsoft Exchange Server through a legacy system, there may be instances where
	some messages cannot be rerouted to Microsoft Exchange Server mailboxes.
	
	These messages are then bounced back to the legacy system, which relays them back
	to Microsoft Exchange Server.
	
	At this point, the loop detection fails and the message goes into a back-
	and-forth state. Eventually the maximum number of reroutes (512) is reached.
	
	Microsoft Exchange Server then detects invalid-GDI in the message (event ID 209);
	this is a bug in the Pipex system because the GDI in the first element of
	TraceInformation should match the value in the MTSID.
	
	However, event ID 209 is no longer treated as a nondelivery report (NDR) by
	Microsoft Exchange Server (due to the proliferation of bad gateways that do not
	follow the rules). So Microsoft Exchange Server overwrites a fatal error
	(loop-detection) with a non-fatal error (mismatched GDI).
	
	CAUSE
	=====
	
	There are bugs in the Pipex system and some legacy systems that do not detect
	loops correctly, and together cause the message to be no longer treated as
	causing an NDR. Therefore, the Microsoft Exchange Server loop detection
	procedures fail.
	
	WORKAROUND
	==========
	
	To work around this problem, obtain the hotfix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange 4.0
	U.S. Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
