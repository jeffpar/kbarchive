---
layout: page
title: "Q140940: XFOR: IMC: 821 Routing Email Addresses Cause NDRs"
permalink: /kb/140/Q140940/
---

## Q140940: XFOR: IMC: 821 Routing Email Addresses Cause NDRs

	Article: Q140940
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 13-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Messages received into the Microsoft Exchange Internet Mail Connector (IMC) that
	include 821 source routing prefixing the SMTP address will result in an
	Non-Delivery Report (NDR).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in Microsoft Exchange Server 4.0 U.S.
	Service Pack 2. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	An example of 821 source routing prefixing an SMTP address would be:
	
	  <jcool%p.nuts.org@comic.nuts.org@comic.nuts.org:jcool@p.nuts.org>
	
	Characters preceding and including the ":" comprise the 821 routing prefix. The
	IMC would fail resolving this address to an SMTP proxy address.
	
	The IMC now looks for 821 routing on all MAIL FROM: and RECEIPT TO: fields and
	strips it if it exists.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.0
	
	=============================================================================
	
