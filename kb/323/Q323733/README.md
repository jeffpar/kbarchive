---
layout: page
title: "Q323733: XCON: Two Servers in the Same Site Cannot Exchange E-Mail"
permalink: /kb/323/Q323733/
---

## Q323733: XCON: Two Servers in the Same Site Cannot Exchange E-Mail

{% raw %}

	Article: Q323733
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may notice that two servers running Exchange Server 5.5 in the same site
	cannot exchange e-mail. E-mail is queuing to be sent to the other server but the
	e-mail is not sent. These servers have successfully exchanged e-mail in the
	past, and no other Exchange Server computer in your site has problems sending
	e-mail or receiving e-mail.
	
	One of the servers is running Microsoft Windows NT Server 4.0, Service Pack 6 and
	the other is running Microsoft Windows 2000 Server, Service Pack 2.
	
	If you test for network connectivity between the two servers using utilities such
	as RPC Ping, Ping, and Net Use, all tests are successful.
	
	You may also find the following events listed in the Application log of the Event
	Viewer:
	
	  Event ID: 9322
	  Source: MSExchangeMTA Type: Warning
	  Description: An interface error has occurred. An MtaBindBack over RPC has
	  failed. Locality Table (LTAB) index: 68, NT/MTA error code: 5. Comms error 5,
	  Bind error 0, Remote Server Name OTHERSERVER, Protocol String
	  ncacn_ip_tcp:your server IP address[3208] [BASE IL INCOMING RPC 39 507] (14)
	
	  -and-
	
	  Event ID: 9318
	  Source: MSExchangeMTA
	  Type: Warning
	  Description: An RPC communications error occurred. Unable to bind over RPC.
	  Locality Table (LTAB) index: 70, NT/MTA error code: 5. Comms error 5, Bind
	  error 0, Remote Server Name OTHERSERVER [MAIN BASE 1 500 %10] (14)
	
	CAUSE
	=====
	
	This issue may be caused by the installation of the Microsoft Windows 2000
	Security Rollup Package on the Windows 2000 Server-based computer.
	
	RESOLUTION
	==========
	
	To resolve this issue, remove the Windows 2000 Security Rollup Package from the
	Exchange Server computer that is running Windows 2000. To do this, follow these
	steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. Click "Windows 2000 Security Rollup Package", and then click Change/Remove.
	
	4. Click Yes to return to your previous configuration.
	
	5. Click OK to restart your computer.
	
	NOTE: If Microsoft Internet Explorer 6 was installed after the Windows 2000
	Security Rollup Package was installed on your computer, you cannot remove the
	Windows 2000 Security Rollup Package without first removing Internet Explorer.
	You must remove Internet Explorer 6 before you can remove Windows 2000 Security
	Rollup Package.
	
	MORE INFORMATION
	================
	
	For additional information about this security patch, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q311401 Windows 2000 Security Rollup Package 1 (SRP1), January 2002
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q272218 RPC Ping Utility and Exchange 2000 Server
	
	  Q323388 HOW TO: Diagnose and Test TCP/IP or NetBIOS Network Connections
	
	  Q177446 How to Test Microsoft Remote Procedure Call Performance
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbZNotKeyword6 kbExchangeSearch kbExchange550 kbExchangeClientSearch kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
