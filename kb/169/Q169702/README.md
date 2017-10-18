---
layout: page
title: "Q169702: XCLN: Resolve_Netbios_Names_Last Registry Entry Does Not Work"
permalink: kb/169/Q169702/
---

## Q169702: XCLN: Resolve_Netbios_Names_Last Registry Entry Does Not Work

	Article: Q169702
	Product(s): Microsoft Exchange
	Version(s): Win95:4.0,5.0;WinNT:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	Both the Microsoft Exchange Windows 95 client and the Exchange Windows NT client
	provide a registry entry called Resolve_Netbios_Names_Last, which can control
	the name resolution process. This setting prevents the NETBIOS name from being
	sent out first, and allows the Microsoft Exchange Client to send the Fully
	Qualified Domain Name (FQDN) of the Microsoft Exchange Server computer. This
	registry setting can be used to improve the Exchange Client startup time. If you
	use this, in the Client Profile setting, for server name, you must also enter
	the FQDN of the Exchange server (server.domain.com) and NOT the server NETBIOS
	name.
	
	CAUSE
	=====
	
	When the Resolve_Netbios_Names_Last registry key is set to 2 (NETBIOS off),
	Microsoft Exchange Client resets it to 0 (NETBIOS first).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Client
	versions 4.0 and 5.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	For information on how to edit the registry, see the "Changing Keys And Values"
	online Help topic in Registry Editor (Regedit.exe), or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" online Help topics in
	Regedt32.exe.
	
	NOTE: You should back up the registry before you edit it.
	
	Registry value:
	Location: HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Exchange\Exchange Provider
	Parameter: Resolve_Netbios_Names_Last
	Data Type: REG_DWORD
	Value: 0 Resolve netbios names first (default)
	Value: 1 Resolve netbios names last
	Value: 2 Resolve netbios names off
	
	NOTE: The value of Resolve_Netbios_Names_Last = 2 is not supported.
	
	
	For more information on debugging the slow start time, see Q136516, XCLN:
	Improving Windows Client Startup Times and Q155048, XCLN: Troubleshooting
	Startup of Windows Client Using TCP/IP in the Microsoft Knowledge Base.
	
	Additional query words: WINS DNS Name Resolution
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : Win95:4.0,5.0;WinNT:4.0,5.0
	
	=============================================================================
	
