---
layout: page
title: "Q299304: XFOR: Random Inbound Messages Appear with Empty Fields"
permalink: kb/299/Q299304/
---

## Q299304: XFOR: Random Inbound Messages Appear with Empty Fields

	Article: Q299304
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kb3rdparty kbui kbExchange kbExchange550
	Last Modified: 06-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Microsoft Exchange version 4.0, 5.0, or 5.5 is installed with Internet Mail
	Service behind a Cisco Secure PIX Firewall version 4.2(2), inbound messages may
	randomly appear with an empty To box or an empty message body. In some cases,
	the message body may appear in the header, or the message body may contain a
	long string of X characters.
	
	CAUSE
	=====
	
	This behavior can occur if the version of Cisco Secure PIX Firewall that you are
	using is not fully compatible with your Exchange version, Internet Mail Service,
	or both.
	
	RESOLUTION
	==========
	
	To resolve this behavior, upgrade to Cisco Secure PIX Firewall version 4.2(3) or
	later.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	For information about how to contact Cisco Systems Inc., click the appropriate
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	
	Additional query words: xims outlook
	
	======================================================================
	Keywords          : kb3rdparty kbui kbExchange kbExchange550 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
