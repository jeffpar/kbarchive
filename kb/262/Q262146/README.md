---
layout: page
title: "Q262146: XCON: Messages to Custom Recipients Are Undeliverable with SP1"
permalink: /kb/262/Q262146/
---

## Q262146: XCON: Messages to Custom Recipients Are Undeliverable with SP1

{% raw %}

	Article: Q262146
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP1
	Operating System(s): 
	Keyword(s): exc55sp1
	Last Modified: 28-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you apply Exchange Server 5.5 Service Pack 1 (SP1), messages that you send
	to Fenestrae Faxination custom recipients are returned as undeliverable by the
	message transfer agent (MTA) with the following non-delivery report:
	
	  Your message did not reach some or all of the intended recipients.
	
	  Subject: Test Fax
	  Sent: 11/22/99 12:55 PM
	
	  The following recipient(s) could not be reached:
	
	  FaxTest on 11/22/99 12:55 PM
	  The recipient name is not recognized
	  The MTS-ID of the original message is: <msg-id>
	  MSEXCH:MSExchangeMTA:OrgName:SITENAME
	
	The MTA also records the following event:
	
	  Event ID: 290
	  Source: MSExchangeMTA
	  Category: X.400 Service
	  Type: Warning
	  Description: A non-delivery report was (reason code unable-to-transfer and
	  diagnostic code unrecognized-OR-name) is being generated for message
	  <msg-id>. It was originally destined for <Faxination Custom
	  Recipient>, and was to be redirected to . [MTA DISP:RESULT 19 136] (12)
	
	Additional notes about this problem:
	
	- This problem cannot be reproduced with the original release of Exchange
	  Server 5.5.
	
	- This problem cannot be reproduced if Exchange Server 5.5 Service Pack 2 (SP2)
	  or later is applied without first installing SP1.
	
	- When you apply SP2 or later, the problem is not resolved.
	
	CAUSE
	=====
	
	This problem may be caused by the lack of an X.400 proxy address for the custom
	recipients.
	
	RESOLUTION
	==========
	
	To resolve this problem, add an X.400 proxy address for all custom recipients.
	You can do this manually in the Exchange Administration program or
	programmatically by using a variety of tools.
	
	MORE INFORMATION
	================
	
	Exchange Server versions 4.0 through 5.5 are all X.400-based, and the routing of
	messages depends heavily on X.400 addresses. It is not typical that an Exchange
	Server-based computer routes messages to objects without X.400 proxy addresses,
	but it is typical that an Exchange Server-based computer returns such messages
	as undeliverable.
	
	To illustrate the importance of the X.400 proxy address, administrators may
	locate the Site Addressing object in the Configuration container of any site,
	and then click the Site Addressing tab in properties. If the administrator
	attempts to clear the X.400 E-mail address, the administrator receives the
	following error message:
	
	  The X.400 site address cannot be disabled. All recipients must have an X.400
	  address in Microsoft Exchange.
	
	There is no way to remove or disable the X.400 site proxy address. However, the
	Exchange Server-based computer does allow administrators to remove X.400 proxy
	addresses for recipients, custom recipients, and distribution lists, and the
	administrator does not receive any warning messages when they do this.
	Administrators are therefore cautioned to only remove proxy addresses when they
	are fully aware of the implications of that action.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp1 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP1
	Version           : winnt:5.5 SP1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
