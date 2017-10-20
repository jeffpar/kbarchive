---
layout: page
title: "Q277770: XADM: Event 7000 Occurs Attempting to Start Exchange Service"
permalink: /kb/277/Q277770/
---

## Q277770: XADM: Event 7000 Occurs Attempting to Start Exchange Service

{% raw %}

	Article: Q277770
	Product(s): Microsoft Exchange
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange 2000 Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	IMPORTANT: This article contains information about modifying the registry.
	Before you modify the registry, make sure to back it up and make sure that you
	understand how to restore the registry if a problem occurs. For information
	about how to back up, restore, and edit the registry, click the following
	article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	When you attempt to start Exchange 2000 Server services that run in the
	Inetinfo.exe tool, you may receive the following error message:
	
	  Error 1083: The executable program that this service is configured to run in
	  does not implement the service.
	
	The following event is logged in the system event log:
	
	  Event Type: Error
	  Event Source: Service Control Manager
	  Event Category: None
	  Event ID: 7000
	  Date: 10/23/2000
	  Time: 10:03:03 AM
	  User: N/A
	  Computer: SERVER12345
	  Description: The Microsoft Exchange <Service name> service failed to
	  start due to the following error: The executable program that this service is
	  configured to run in does not implement the service.
	
	This issue occurs when you start the following services:
	
	- Simple Mail Transport Protocol (SMTP)
	
	- Network News Transport Protocol (NNTP)
	
	- Post Office Protocol version 3 (POP3)
	
	- Internet Message Access Protocol version 4 (IMAP4)
	
	- Microsoft Exchange Routing Engine
	
	CAUSE
	=====
	
	This issue can occur because these services have not been configured to run in
	the Inetinfo.exe tool. They have been either configured to run in the
	Dllhost.exe tool, or not configured to run in any tool.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this issue, follow these steps:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate and click the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\InetInfo\Parameters\DispatchEntries
	
	3. Click the value for the service that you attempted to start.
	
	4. On the Edit menu, click Multi String, and then add the following values:
	
	  "Ldapsvc" (without the quotation marks)
	  "Smtpsvc" (without the quotation marks)
	  "Nntpsvc" (without the quotation marks)
	  "Imap4svc" (without the quotation marks)
	  "Pop3svc" (without the quotation marks)
	  "Resvc" (without the quotation marks)
	
	5. Click OK.
	
	6. Quit Registry Editor.
	
	7. Start Administrative Tools, click Services, and then restart the Internet
	  Information Service (IIS) Administrator service.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Exchange 2000
	Server.
	
	Additional query words: exch2kp2w
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbExchangeSearch kbExchange2000Search kbExchange2000Serv
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
