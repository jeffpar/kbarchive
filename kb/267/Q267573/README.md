---
layout: page
title: "Q267573: XADM: Error 0xc00206b7 When You Start the System Attendant"
permalink: /kb/267/Q267573/
---

## Q267573: XADM: Error 0xc00206b7 When You Start the System Attendant

{% raw %}

	Article: Q267573
	Product(s): Microsoft Exchange
	Version(s): 2000,5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Exchange 2000 Server 
	- Microsoft Small Business Server 2000 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you start the Exchange Server system attendant on a computer that runs
	Microsoft Windows 2000, you may receive one of the following error messages:
	
	  Source: MSExchangeSA
	  Event ID: 1028
	  Description: Unexpected error - There are no protocol sequences available. NT
	  ID 0xc00206b7
	
	  -or-
	
	  Event Type:Error Event Source:MSExchangeSA Event Category:General Event
	  ID:1005 Description: Unexpected error - There are no protocol sequences.
	  Facility: Win32 ID no: c00706b7 Microsoft Exchange System Attendant occurred.
	
	Exchange Sever Setup is also unable to start the system attendant, and the
	following event is written in the application Event Log:
	
	  Event ID: 1005 from the MSexchangeSA with the error code 0xc00206b7
	
	The following event may also appear in the application Event log:
	
	  Source: MSExchangeSA
	  Category: General
	  Event ID: 1005
	  Description:
	  Unexpected error. There are no protocol sequences. Facility: Win32 ID no:
	  c00706b7 Microsoft Exchange System Attendant occurred.
	  For more information, click http://www.microsoft.com/contentredirect.asp.
	
	CAUSE
	=====
	
	The HKEY_LOCAL_MACHINE\Software\Microsoft\Rpc\ClientProtocols registry key is
	absent. It is likely that the removal of a previous software application removed
	this key by mistake.
	
	RESOLUTION
	==========
	
	Replace the key in the registry and it enables the system attendant to start.
	
	NOTE: Import this registry key from a Microsoft Windows 2000-based server that
	has the same protocols installed on it. You can manually rebuild the
	ClientProtocols folder and add all the protocol values, but it is recommended
	that you import this key from a Windows 2000-based server running with the same
	protocols.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	You can manually add the needed registry key and values. To do this, perform the
	following steps:
	
	1. Open regedit.
	
	2. Browse to the HKLM\SOFTWARE\Microsoft\Rpc key.
	
	3. Under RPC, If there is not a subkey named ClientProtocols, add one. Under the
	  subkey named ClientProtocols, if any of the following values and data strings
	  are missing, add them.
	
	Value 0
	 Name:            ncacn_http
	 Type:            REG_SZ
	 Data:            rpcrt4.dll
	
	Value 1
	 Name:            ncacn_ip_tcp
	 Type:            REG_SZ
	 Data:            rpcrt4.dll
	
	Value 2
	 Name:            ncacn_nb_tcp
	 Type:            REG_SZ
	 Data:            rpcrt4.dll
	
	Value 3
	 Name:            ncacn_np
	 Type:            REG_SZ
	 Data:            rpcrt4.dll
	
	Value 4
	 Name:            ncadg_ip_udp
	 Type:            REG_SZ
	 Data:            rpcrt4.dll
	
	4. Close regedit.
	
	Now you can start Exchange 2000 successfully.
	
	Additional query words: c00706b7 sbs2000
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange2000Search kbSBServSearch kbZNotKeyword3 kbExchange2000Serv kbSBServ2000
	Version           : :2000,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
