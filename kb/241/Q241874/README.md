---
layout: page
title: "Q241874: XCON: MIXER is Triggered Only for Transiting Mail"
permalink: /kb/241/Q241874/
---

## Q241874: XCON: MIXER is Triggered Only for Transiting Mail

	Article: Q241874
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When users, who have mailboxes located on the Exchange Server computer on which
	the MIME Internet X.400 Enhanced Relay (MIXER) is configured, send mail to an
	X.400 recipient and an SMTP recipient, both recipients see the other one as if
	the MIXER had not been invoked.
	
	The X.400 recipient sees in the distribution list the SMTP recipient with
	domain-defined attribute (DDA) type SMTP. The SMTP recipient sees in the
	distribution list the X.400 recipient as (for example):
	IMCEAX400-c=US+3Ba=+20+3Bp=MS+3Bo=PARIS+3Bs=user+3B@host.microsoft.com.
	
	MORE INFORMATION
	================
	
	Sections 4.2 and 4.3 of the Request for Comments (RFC) 2156 (MIXER) are included
	in Exchange Server 5.5 Service Pack 3. RFC 2156 defines a way to automatically
	map SMTP addresses to X.400 addresses and vice versa without the need of custom
	recipient.
	
	The MIXER is to be used on mail hubs where interconnectivity between X.400 and
	SMTP is needed. It is not meant to be activated on a mailbox server.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbinfo
	
	=============================================================================
	
