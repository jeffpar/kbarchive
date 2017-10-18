---
layout: page
title: "Q221989: XADM: Buffer Overrun in Exchange Server 5.5 LDAP Service"
permalink: kb/221/Q221989/
---

## Q221989: XADM: Buffer Overrun in Exchange Server 5.5 LDAP Service

	Article: Q221989
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5,5.5 SP1,5.5 SP2
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 EXC55SP3Fix
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A buffer overrun may occur in the bind function of the Lightweight Directory
	Access Protocol (LDAP) service in Exchange Server. This could allow
	specially-malformed bind requests to cause unexpected behavior on the Exchange
	Server computer. The most common result of a malformed bind request is that the
	directory service stops unexpectedly, which prevents the server from delivering
	messages. However, in a more esoteric variant of the attack, a highly-skilled
	malicious user could exploit the vulnerability to run arbitrary code on the
	server.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Directory
	
	+--------------------------+
	| File name   | Version    | 
	+--------------------------+
	| Dsamain.exe | 5.5.2575.0 | 
	+--------------------------+
	
	NOTE: You must apply Exchange Server 5.5 Service Pack 2 before applying this
	fix.
	
	This hotfix has been posted to the following Internet location as Psp2diri.exe
	(x86) and Psp2dira.exe (Alpha):
	
	  ftp://ftp.microsoft.com/bussys/exchange/exchange-public/fixes/eng/Exchg5.5/PostSP2/DIR-fix/
	
	
	WORKAROUND
	==========
	
	This vulnerability in the directory service is only exposed when the directory
	service is configured to allow programs to access the directory using LDAP. You
	can prevent this vulnerability from being exploited by turning off the LDAP
	protocol support on a server or across a whole Exchange site. In order to do
	this, start the Microsoft Exchange Server Administrator program and view the
	properties of the LDAP Protocol object under the Protocols container. Click to
	clear the Enable Protocol check box.
	
	Customers who require LDAP protocol support and who cannot apply the hotfix can
	use the following workaround to temporarily address this issue:
	
	- If such an attack causes one or more services to stop, the service failure
	  can be detected by the server monitor feature of the Exchange Server
	  Administrator program. The server monitor can be configured to automatically
	  restart the affected Exchange services if they unexpectedly stop, reducing
	  the impact of the service failure.
	
	- You can prevent this vulnerability from being exploited by filtering incoming
	  data sent through Transmission Control Protocol (TCP) port 389.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words: denial of service
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2
	Version           : winnt:5.5,5.5 SP1,5.5 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
