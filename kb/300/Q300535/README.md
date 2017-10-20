---
layout: page
title: "Q300535: Error Message When You Run Internet Mail Connector"
permalink: /kb/300/Q300535/
---

## Q300535: Error Message When You Run Internet Mail Connector

{% raw %}

	Article: Q300535
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kberrmsg kbExchange
	Last Modified: 09-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to run the Internet Mail Connector (IMC), Setup may stop and
	you may receive the following error message:
	
	  The service did not respond to the start or control request in a timely
	  fashion
	  Microsoft Windows NT
	  ID No:0xc002041d
	
	CAUSE
	=====
	
	This error message can appear if the Internet Mail Service Administrator mailbox
	that is specified during the Internet Mail Service Setup Wizard process has no
	X.400 address space.
	
	RESOLUTION
	==========
	
	To resolve this issue, specify a mailbox or distribution list that has the X.400
	address space:
	
	1. Restart the Internet Mail Wizard, and then follow the on-screen instructions.
	
	2. When you are prompted to specify the administrator mailbox to which to send
	  notification of non-delivery reports, click "Select a mailbox or distribution
	  list", specify a mailbox or distribution list that has the X.400 address
	  space, and then click Next.
	
	  Alternatively, click "(Create/Use) the mailbox called Administrator", and then
	  click Next.
	
	3. Continue to follow the on-screen instructions to reinstall the Internet Mail
	  Service.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbExchange 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
