---
layout: page
title: "Q154491: XADM: DS/IS Fails to Re-create Mailboxes in Subcontainers"
permalink: /kb/154/Q154491/
---

## Q154491: XADM: DS/IS Fails to Re-create Mailboxes in Subcontainers

{% raw %}

	Article: Q154491
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 02-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In certain cases of disaster recovery it may be necessary to use the DS/IS
	Consistency Checker to re-populate the Directory Store with the mailboxes that
	exist in the Private Information Store. If some of these users were located in
	subcontainers of the default Recipients container (or any subcontainer of a
	container that is on the same level as the default Recipients container)the
	DS/IS Consistency checker will fail to create the Directory object for these
	users with the following error in the application log.
	
	The Event viewer will report as follows:
	
	  Event ID: 7014
	  Source: MS ExchangeIS Private
	  Type: Information
	  Category: Private IS/DS
	
	  Description:
	  Unable to add a mailbox
	  /O=MICROSOFT/OU=ONE/CN=RECIPIENTS/CN=SUBCONTAINER1/CN=USER2 to the Directory
	  service because the organization or site of the mailbox is different from
	  this server's organization or site.
	
	CAUSE
	=====
	
	The DS/IS consistency checker assumes no longer than two /CN (common name)
	fields in the X.500 distinguished name. This means that the first /CN would be
	used for the server name and the second /CN for the first container. By not
	checking any further than two /CN's the object is assumed to not be a part of
	this site and fails with the above stated error.
	
	WORKAROUND
	==========
	
	Mailboxes that exist in such subcontainers must be re-created manually, using
	the Microsoft Exchange Server Administrator program.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
