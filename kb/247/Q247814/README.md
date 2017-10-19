---
layout: page
title: "Q247814: XADM: KMS Can't Grant V3 Certificates to Users with Long DNs"
permalink: /kb/247/Q247814/
---

## Q247814: XADM: KMS Can't Grant V3 Certificates to Users with Long DNs

	Article: Q247814
	Product(s): Microsoft Exchange
	Version(s): 1.0,5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Certificate Server version 1.0 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using Key Management (KM) Server and Certificate Server to issue V3
	certificates, some mailboxes may not be able to obtain a certificate. After
	submitting a security token from Microsoft Outlook, the following error message
	is returned:
	
	  The message from the Microsoft Exchange Key Management Server could not be
	  processed. Contact your administrator for a new security token, and set up
	  advanced security again.
	
	Additionally, an event similar to the following is logged in the application log
	of the Exchange Server computer:
	
	  Event ID: 5005
	  Source: MSExchangeKMS
	  Description: Mailbox "o=Orgname, ou=Sitename, cn=Recipients, cn=Subcontainer1,
	  cn=Subcontainer2, cn=Subcontainer3, cn=Mailbox" has failed being enabled or
	  recovered.
	
	CAUSE
	=====
	
	Certificate Server 1.0 enforces a 64-character limit on the Subject of a
	certificate. The Subject is a concatenation of each Relative Distinguished Name
	(RDN) within the Distinguished Name (DN). In the example above, the DN is
	"o=Orgname, ou=Sitename, cn=Recipients, cn=Subcontainer1, cn=Subcontainer2,
	cn=Subcontainer3, cn=Mailbox". The limit is placed on the concatenation of
	"Orgname, Sitename, Recipients, Subcontainer1, Subcontainer2, Subcontainer3,
	Mailbox", which is (7 + 8 + 10 + 13 + 13 + 13 + 7). This exceeds the
	64-character limit, and therefore Certificate Server cannot generate a
	certificate for this mailbox.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	
	Additional query words: fail KMS
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbCertServSearch kbZNotKeyword3 kbCertServ100
	Version           : :1.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
