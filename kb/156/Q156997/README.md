---
layout: page
title: "Q156997: XFOR: IMC NDRs or Misdirects Mail Without Domain Address"
permalink: kb/156/Q156997/
---

## Q156997: XFOR: IMC NDRs or Misdirects Mail Without Domain Address

	Article: Q156997
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 13-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Internet Mail Connector (IMC) may return outbound mail as undeliverable,
	giving the reason "Host Unreachable," or it may misdirect mail to an incorrect
	SMTP host.
	
	CAUSE
	=====
	
	If the SMTP recipient address does not include the "@domain" part of an address,
	the IMC attempts to resolve a domain name consisting simply of the period (.).
	If the Domain Name Service (DNS) queries for the domain "." result in an answer,
	the mail is sent to that SMTP host. The message will eventually be rejected by
	the receiving host, because the user name does not exist on that erroneous SMTP
	host. If the DNS queries for domain "." do not result in an answer, the message
	is re-queued by the IMC for possible delivery later with the reason "Host
	Unreachable".
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- On the Connections property page, configure the IMC to deliver all mail to a
	  specific host that is able deliver mail without the domain part of the
	  address.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server version 4.0. We
	are researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
