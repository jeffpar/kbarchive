---
layout: page
title: "Q150388: XCLN: Netware Compatible Shell is not Available"
permalink: kb/150/Q150388/
---

## Q150388: XCLN: Netware Compatible Shell is not Available

	Article: Q150388
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 25-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Microsoft Exchange client for Windows 95, the following error
	message might be displayed when you connect to the Microsoft Exchange Server or
	when you try to read or send mail:
	
	  Netware compatible shell is not available.
	
	MORE INFORMATION
	================
	
	This behavior occurs if the Microsoft Service for NetWare Directory Services
	(NDS) is removed but two files updated by the Microsoft Service for NDS are not
	replaced with the original files.
	
	When you remove the Microsoft Client for NetWare Networks prior to removing the
	Microsoft Service for NetWare Directory Services, registry information that
	other programs might require will be deleted.
	
	RESOLUTION
	==========
	
	To correct this problem, either rename NWNP32.DLL on the local machine, or using
	Regedit.exe, go to the following location:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Exchange\Exchange Provider
	
	and edit the Rpc_Binding_Order key to remove the ncacn_spx data value.
	
	By editing the registry key and removing ncacn_spx, you are eliminating the
	possibility of the IPX transport being used for RPC communications to the
	Microsoft Exchange Server.
	
	If the error still occurs, reinstall the Microsoft Client for NetWare Networks by
	following these steps:
	
	1. In Control Panel, double-click Network.
	
	2. On the Configuration tab, click Add.
	
	3. Click Client, and then click Add.
	
	4. Click the Microsoft Client for NetWare Networks, and then click OK.
	
	5. Restart Windows 95.
	
	After you reinstall the Microsoft Client for NetWare Networks, follow these steps
	to remove the services:
	
	1. In Control Panel, double-click Network.
	
	2. Click the Service for NetWare Directory Services and then click Remove.
	
	3. Click the Client for NetWare Networks and then click Remove.
	
	4. Click OK.
	
	5. Restart Windows 95.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q148729 Err Msg: The NetWare Compatible Shell Is Not Available
	
	Additional query words: inbox outlook
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
