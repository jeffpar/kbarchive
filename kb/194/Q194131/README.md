---
layout: page
title: "Q194131: XFOR: Disabling Inbound ESMTP Advertisement"
permalink: /kb/194/Q194131/
---

## Q194131: XFOR: Disabling Inbound ESMTP Advertisement

{% raw %}

	Article: Q194131
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	Under specific circumstances, dependent on a customer's messaging environment,
	network, and/or topology, it may be necessary to disable automatic advertising
	of ESMTP extensions when a remote host connects to an Exchange Server 5.0 and/or
	5.5 Internet Mail Service. If a host connects to the Internet Mail Service,
	which is operating normally, the Internet Mail Service sends back the banner:
	
	  220 <host fully qualified domain name> ESMTP Server (Microsoft Exchange
	  Internet Mail Service 5.5.2232.0) Ready.
	
	If automatic advertising of ESMTP extensions is disabled, it will instead send
	back the banner:
	
	  220 <host fully qualified domain name>  SMTP Server (Microsoft Exchange
	  Internet Mail Service 5.5.2232.0) Ready.
	
	To disable advertising ESMTP Extensions, a registry change must be made. To do
	so, follow these steps:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSExchangeIMC
	  \Parameters
	 
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	3. On the Edit menu, click Add Value, and then add the following registry
	  value:
	
	     Value Name: "AdvertiseSMTPExtensions"
	     Data Type:  REG_DWORD
	     Value:      0
	 
	
	4. Quit Registry Editor.
	
	5. Stop and restart the Internet Mail Service.
	
	6. Telnet to the server's port 25, and verify that ESMTP is no longer advertised
	  when connecting to the computer.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
