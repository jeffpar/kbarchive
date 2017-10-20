---
layout: page
title: "Q175953: XADM: Disabling Proxy Address Generation Does Not Work"
permalink: /kb/175/Q175953/
---

## Q175953: XADM: Disabling Proxy Address Generation Does Not Work

{% raw %}

	Article: Q175953
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0,5.0, 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Server version 5.0 and 5.5 Administrator programs have
	the ability to disable the generation of proxy addresses for certain address
	types. This is done on the Site Addressing page of the Site Addressing object
	under the Configuration object.
	
	This functionality only works on Microsoft Exchange Server, version 5.0 or
	above.
	
	Therefore, if an Exchange Server site contains both version 4.0 and 5.0 or above
	servers, mailboxes that were created on the version 5.0 or above server, will
	not have the proxy addresses automatically created because the option was
	disabled. However, if a mailbox is created on a version 4.0 server, the mailbox
	will have all the proxy addresses automatically created.
	
	The same results occur, when mailboxes are modified using the Import/Export
	functionality of the Administrator program. If the import is done on a version
	5.0 or above server, the disabled proxy addresses are not added to the
	mailboxes, however, if the import is done on a version 4.0 server, the disabled
	proxy addresses will be added to the server.
	
	CAUSE
	=====
	
	The problem occurs because the functionality to disable certain proxy addresses
	from being generated was added in version 5.0.
	
	The System Attendant service is responsible for generating proxy addresses. It
	does so by calling the proxy generators registered with the Exchange Directory,
	for the current hardware platform. To confirm which proxy generators are
	registered, double-click "Configuration\Addressing\E-Mail Address Generators" in
	the right pane of the Microsoft Exchange Administrator program.
	
	In version 5.0 and above, the System Attendant service looks at the
	"Disabled-Gateway-Proxy" attribute on the Site Addressing object and does not
	call the proxy address generators corresponding to the address types listed in
	the above attribute.
	
	In version 4.0, the System Attendant does not use the "Disabled-Gateway- Proxy"
	attribute, and calls each proxy address generator registered for the current
	hardware platform. This results in the generation of proxy addresses for address
	types that have been disabled.
	
	WORKAROUND
	==========
	
	In a site with a mixture of version 4.0 and 5.0 or above servers, the easiest
	way to generate mailboxes or custom recipients without proxy addresses of a
	certain type, is to make all the additions or modifications are performed on a
	version 5.0 or above server.
	
	In version 4.0, the only way to prevent the generation of an address is to remove
	the proxy address generator.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0,5.0, 5.5
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
