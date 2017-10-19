---
layout: page
title: "Q191267: XFOR: IMC Won't Identify Which Server Produced Postmaster NDR"
permalink: /kb/191/Q191267/
---

## Q191267: XFOR: IMC Won't Identify Which Server Produced Postmaster NDR

	Article: Q191267
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a message bounces and a non-delivery report (NDR) is produced, the sender
	will receive a message from the Postmaster. Exchange Server 4.0 will return an
	NDR from postmaster@domain.com, and Exchange Server 5.0 will return a NDR from
	postmaster.hostName@domain.com. Exchange Server 4.0 sends the NDR to the wrong
	administrator, and causes some confusion in troubleshooting the problem.
	
	CAUSE
	=====
	
	This problem was by design and was fixed in Exchange Server 5.0.
	
	WORKAROUND
	==========
	
	The perfect solution would be to upgrade computers running Exchange Server 4.0
	to 5.0.
	
	If that's not possible, the following workaround will resolve the issue of
	misdirected NDR replies from users. However, it affects all Exchange Server
	users and custom recipients on the server. Although this workaround worked in a
	test environment, it should be tested on a large number of servers before
	implementation in a production environment.
	
	1. Double-click the Network icon in Control Panel, and click the Protocols tab.
	
	2. Select TCP/IP Protocol, and click Properties.
	
	3. In the DNS tab, add the server name in front of the domain name in the Domain
	  Name textbox. For example, if you enter Server1.DomainName in the Domain Name
	  textbox, the NDR will be from POSTMASTER@Server1.DomainName.com, where
	  Server1 is the hostname of an Exchange Server computer as specified in the
	  Domain Name Service (DNS).
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
