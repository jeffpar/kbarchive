---
layout: page
title: "Q296879: XFOR: Sent Messages Appear in the IMS Queue and Event ID 3038"
permalink: /kb/296/Q296879/
---

## Q296879: XFOR: Sent Messages Appear in the IMS Queue and Event ID 3038

	Article: Q296879
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kbExchange550
	Last Modified: 09-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you examine the Outbound Awaiting Conversion queue of the Internet Mail
	Service, messages that are already sent may still appear in the queue.
	
	Also, the application event log reports the following event:
	
	  Event ID: 3038
	  Source: MSExchangeIMC
	  Description: An attempt to remove processed messages from the outbound store
	  queue has failed. The removal will be retried later. If the messages are not
	  removed before the service is shutdown, the mail will be resent at service
	  startup causing duplicate mail.
	
	You may also find that messages are sent more than once to recipients who are not
	within the Exchange organization.
	
	CAUSE
	=====
	
	This behavior can occur if there is corruption on a folder level in the Internet
	Mail Connector (IMC) mailbox.
	
	RESOLUTION
	==========
	
	To resolve this behavior, recreate the Internet Mail Service:
	
	1. Delete the Internet Mail Service, and then recreate the In and Out folders in
	  the Imcdata folder.
	
	2. Defragment the information store.
	
	3. Recreate the Internet Mail Service, and then check the mail flow.
	
	MORE INFORMATION
	================
	
	This behavior has been observed when the Exchange Server computer uses Network
	Associates' GroupShield Exchange 4.0.4. You may need to change GroupShield's
	scanning settings:
	
	1. As an Exchange Administrator, go to the GroupShield properties.
	
	2. Click the On-Access(Mailboxes) tab, and then click Exclusion List.
	
	3. Add the IMS mailbox.
	
	Alternatively, you can upgrade to GroupShield Exchange 4.5, which by default
	scans the correct API mode.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	For information about how to contact Network Associates' McAfee, click the
	appropriate article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	Additional query words:
	
	======================================================================
	Keywords          : kbExchange550 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
