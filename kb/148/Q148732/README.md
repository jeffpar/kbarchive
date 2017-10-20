---
layout: page
title: "Q148732: XADM: Setting TCP/IP Port Numbers for Internet Firewalls"
permalink: /kb/148/Q148732/
---

## Q148732: XADM: Setting TCP/IP Port Numbers for Internet Firewalls

{% raw %}

	Article: Q148732
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 14-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article explains how to configure the Microsoft Exchange Information Store,
	Directory, and System Attendant Services to use predefined TCP/IP port numbers.
	This is useful when configuring Internet firewalls or routers.
	
	MORE INFORMATION
	================
	
	Some Internet firewalls may not accept TCP/IP port numbers that Microsoft
	Exchange Server uses for Remote Procedure Call (RPC) communication. To solve
	this problem, add port 135 to your firewall and configure Microsoft Exchange
	Server to use the ports that your firewall will allow. The computer must be
	restarted for these changes to take effect.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To configure the RPC Port for the Microsoft Exchange Directory Service:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Find the following registry subkey:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeDS\Parameters
	
	3. Add the following registry value
	
	  TCP/IP port
	
	  as DWORD value, specifying the port to be used. The radix should be set to
	  decimal when entering the value.
	
	4. Quit Registry Editor.
	
	To configure the RPC Port for the Microsoft Exchange Information Store Service:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Find the following subkey:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIS\ParametersSystem
	
	3. Add the following registry value
	
	  TCP/IP port
	
	  as DWORD value, specifying the port to be used. The radix should be set to
	  decimal when entering the value.
	
	4. Quit Registry Editor.
	
	To configure the RPC Port for the Microsoft Exchange System Attendant:
	
	NOTE: In order to administer an Exchange Server across a firewall, the Microsoft
	Exchange System Attendant should be configured to use a specific RPC port as
	well.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Find the following subkey:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeSA\Parameters
	
	3. Add the following registry value
	
	  TCP/IP port
	
	  as DWORD value, specifying the port to be used. The radix should be set to
	  decimal when entering the value.
	
	4. Quit Registry Editor.
	
	NOTE: The DWORD value should be in decimal.
	
	NOTE: You have to change this registry setting only on the computer that runs
	Microsoft Exchange Server. Clients always connect to port 135, the RPC endpoint
	mapper, and then ask what ports they should use for the Directory and
	Information Store Services.
	
	WARNING: Do not assign ports immediately above the 1023 range. For additional
	information about the ramifications and guidelines for static port assignment of
	Exchange services, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q180795 XADM: Intrasite Directory Replication Fails with Error 1720
	
	For additional information Exchange Services for Internet Firewalls and port
	considerations, click the article numbers below to view the articles in the
	Microsoft Knowledge Base:
	
	  Q155831 XADM: Setting TCP/IP Ports for Exchange and Outlook Client
	  Connections Through a Firewall
	
	  Q194952 XADM: Statically Mapped Port Limitations for Exchange Server
	
	
	Additional query words: proxy map static port mapping
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
