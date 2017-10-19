---
layout: page
title: "Q231429: XFOR: Can Send But Cannot Receive Inbound Internet Mail"
permalink: /kb/231/Q231429/
---

## Q231429: XFOR: Can Send But Cannot Receive Inbound Internet Mail

	Article: Q231429
	Product(s): Microsoft Exchange
	Version(s): 5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Exchange Server Internet Mail Service, you can send Internet
	mail but you cannot receive it.
	
	CAUSE
	=====
	
	This issue can occur if the Simple Mail Transfer Protocol (SMTP) Service from
	the Microsoft Windows NT 4.0 Option Pack has been installed.
	
	RESOLUTION
	==========
	
	To resolve this issue, open Control Panel, double-click Services, and then
	disable the SMTP Service.
	
	MORE INFORMATION
	================
	
	The SMTP Service is an optional service which can be installed when you install
	Microsoft Internet Information Server (IIS) 4.0. Do not install the SMTP Service
	when you install IIS on an Exchange Server computer. IIS is required by Outlook
	Web Access (OWA); during IIS installation, the SMTP Service may be installed by
	mistake.
	
	The Internet Mail Service needs exclusive use of TCP port 25 to successfully
	transport SMTP mail. If another program reserves port 25, the Internet Mail
	Service may start successfully, but incoming mail may not be accepted. For
	additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q146157 XFOR: Should Have Exclusive Access to Port 25
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : :5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
