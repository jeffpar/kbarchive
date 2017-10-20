---
layout: page
title: "Q319878: XWEB: How to Make Outlook Web Access the Default Web Site"
permalink: /kb/319/Q319878/
---

## Q319878: XWEB: How to Make Outlook Web Access the Default Web Site

{% raw %}

	Article: Q319878
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange 2000 Server 
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Outlook Web Access, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to modify the Microsoft Internet Information Services
	(IIS) Default Web Site so that clients can access the Outlook Web Access (OWA)
	logon page by typing only "http://ServerName" (without the quotation marks)
	instead of typing "http://ServerName/exchange" (without the quotation marks).
	
	MORE INFORMATION
	================
	
	To redirect the Default Web Site to point to the Exchange virtual directory,
	follow these steps:
	
	1. Start the Microsoft Management Console (MMC) IIS snap-in.
	
	2. Right-click Default Web Site, click Properties on the shortcut menu, and then
	  click the Home Directory tab.
	
	3. Under "When connecting to this resource, the content should come from", click
	  "A redirection to a URL".
	
	4. In the Redirect to box, type one of the following:
	
	  http://ServerName/exchange
	
	  -or-
	
	  http://IPaddress/exchange
	
	  NOTE: If you use Secure Sockets Layer (SSL), type one of the following:
	
	  https://ServerName/exchange
	
	  -or-
	
	  https://IPaddress/exchange
	
	5. Under "The client will be sent to", click "A directory below this one".
	
	6. Stop and start the Default Web Site.
	
	REFERENCES
	----------
	
	For additional information about how to redirect default web access, click the
	article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q268822 XWEB: OWA How to Redirect http://Server_Name/exchange Users to Use
	  https:// Prefix
	
	  Q246203 XWEB: Configuring OWA Outside the Default Web Site
	
	Additional query words: front page
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange2000Search kbOWASearch kbOWA550 kbExchange2000Serv
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
