---
layout: page
title: "Q251814: XADM: Exchange Server 5.5 Setup Fails on a Member Server"
permalink: /kb/251/Q251814/
---

## Q251814: XADM: Exchange Server 5.5 Setup Fails on a Member Server

{% raw %}

	Article: Q251814
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 16-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Setup of Microsoft Exchange Server on a member server doesn't work and you
	receive on of the following error messages:
	
	When installing Exchange Server 5.5:
	
	  This computer must belong to a Windows NT domain before Microsoft Exchange
	  can be installed.
	
	When installing Exchange Server 5.0:
	
	  You must be logged into an NT domain to run Microsoft Exchange Server Setup.
	
	CAUSE
	=====
	
	This error occurs if you are logged on to the local computer instead of the
	domain while you are running the Setup program.
	
	RESOLUTION
	==========
	
	Specify a domain when you log on to the server.
	
	1. Log off of the server.
	
	2. Log on and specify the domain name in either the Log on to field (for
	  Microsoft Windows 2000) or the Domain field (for Microsoft Windows NT) in the
	  Logon dialog box.
	
	NOTE: You may need to click Options to see the Log on to field.
	
	MORE INFORMATION
	================
	
	Exchange Server uses the security features of Windows NT Server or Windows 2000
	including authentication, access control, and auditing, to prevent unauthorized
	use of the system. As a result, Exchange Server must be installed on a computer
	running either Windows NT Server or Windows 2000 that is part of a domain,
	rather than a workgroup.
	
	Additional query words: security
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
