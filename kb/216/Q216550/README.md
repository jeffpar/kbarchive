---
layout: page
title: "Q216550: XFOR: Meetings Can't Be Used Between French Exchange &amp; PROFS"
permalink: kb/216/Q216550/
---

## Q216550: XFOR: Meetings Can't Be Used Between French Exchange &amp; PROFS

	Article: Q216550
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	With an Exchange Server 5.5 computer plus the WEB2 release, a meeting request
	sent from PROFS to Exchange Server is not transmitted using the correct IPM, and
	is received as a "normal" message (IPM.NOTE).
	
	On the other hand, a request sent from Exchange Server to PROFS can be received
	in English using the following workaround: in the [LME-PROFS] section of the
	Exchconn.ini file in Exchsrvr\Connect\Exchconn directory, set language=1033.
	
	The dates are always transmitted in U.S. format.
	
	CAUSE
	=====
	
	When sending an OV/VM meeting from the host to a non-English locale, Exchange
	Server is sent as normal mail because the connector picks up the localized
	strings to compare for the JP/GR/FR equivalent, but the host is sending the
	literals in English. Since the connector cannot find the keywords from the
	incoming meeting invitations, it turns the invitations to an ordinary message.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Exchange PROFS Connector
	
	+------------------------+
	| File name   | Version  | 
	+------------------------+
	| Lsdiavm.exe | 5.5.2541 | 
	+------------------------+
	| Lscps.dll   | 5.5.2541 | 
	+------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	MORE INFORMATION
	================
	
	To customize the way dates are sent and received, three new parameters have been
	added to the Exchconn.ini file under the [LME-PROFS] section:
	
	- CalendarDateFormat = U | I | E, default is U
	- CalendarTimeFormat = 12 | 24, default is 12
	- CalendarDateSeparator = / | - | ? | <whatever char>, default is /
	
	This solution assumes all OV/VM nodes that the connector is talking to are using
	the same set of configurations.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
