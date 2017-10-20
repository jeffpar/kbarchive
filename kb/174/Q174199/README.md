---
layout: page
title: "Q174199: XFOR: How to Change the NNTP Port"
permalink: /kb/174/Q174199/
---

## Q174199: XFOR: How to Change the NNTP Port

{% raw %}

	Article: Q174199
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc5 exc55
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	The Services file, located in the %SystemRoot%\System32\Drivers\Etc folder,
	contains a list of well-known port numbers for TCP/IP services. Microsoft
	Exchange Server uses the Services file to determine which TCP port is used for
	accepting or initiating NNTP connections. This article tells you how to change
	the NNTP port used.
	
	MORE INFORMATION
	================
	
	For connections using Secure Sockets Layer (SSL), the port number associated
	with the SNEWS service is used; for all other connections, the port number
	associated with the NNTP service is used.
	
	To change the port number used by the server, edit the Services file and change
	the port number associated with these services. The default port numbers for the
	SNEWS and NNTP services are 563 and 119, respectively.
	
	You can also force the Internet News Service to connect to a specific port number
	you when make an outbound connection for a news feed. This is useful when
	traversing a firewall that can map port numbers to different destination hosts
	on the Internet. To specify the port number for outbound connections, you need
	to edit the registry.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To specify the port number for outbound connections:
	
	1. Create the news feed.
	
	2. Create the following REG_DWORD registry value, and set it to a value between
	  1 and 65535:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeINS
	  \Parameters\Newsfeeds\Newsfeed Test\PortNumber
	
	The Newsfeed Test registry value should be replaced with the name of the news
	feed you want to customize. If this registry value exists, it overrides the
	value in the Services file for any outbound NNTP connections for that news feed.
	It does not affect the port number used for accepting inbound NNTP connections.
	That is always obtained from the Services file.
	
	If you plan to specify a custom NNTP port, you may not be able to download the
	active newsgroup list from your news provider with the Newsfeed Configuration
	Wizard because the registry value does not exist at that point. Instead, you
	should import it from a file or download the active file after you have set the
	registry value.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
