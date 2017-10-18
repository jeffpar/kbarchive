---
layout: page
title: "Q175719: Registry Keys Added by Routing and Remote Access Service Update"
permalink: kb/175/Q175719/
---

## Q175719: Registry Keys Added by Routing and Remote Access Service Update

	Article: Q175719
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	When you install the Routing and Remote Access Service Update for Windows NT
	Server 4.0 [R&RAS] and/or the Point to Point Tunneling Protocol [PPTP],
	several registry keys are added or updated. This article provides a list of
	those keys for a reference. This list may be helpful in a situation where an
	uninstall or reinstall of R&RAS or PPTP has failed.
	
	
	MORE INFORMATION
	================
	
	Abbreviations have been used to enhance the readability of this article:
	
	  HKLM = HKEY_LOCAL_MACHINE
	  HKCU = HKEY_CURRENT_USER
	  CCS = CurrentControlSet
	
	In the following registry(s), (x) = number varies with every computer depending
	on the bindings.
	
	Registry Keys for R&RAS
	-----------------------
	
	  HKLM\SYSTEM\CCS\Services\AsyncMac
	
	  HKLM\SYSTEM\CCS\Services\AsyncMac(x)
	
	  HKLM\SYSTEM\CCS\Services\IPFilterDriver
	
	  HKLM\SYSTEM\CCS\Services\IpxPing
	
	  HKLM\SYSTEM\CCS\Services\NdisTapi
	
	  HKLM\SYSTEM\CCS\Services\NdisWan
	
	  HKLM\SYSTEM\CCS\Services\NdisWan(x)
	
	  HKLM\SYSTEM\CCS\Services\NetBT\Adapters\NdisWan(x)
	
	  HKLM\SYSTEM\CCS\Services\NwLnkFlt
	
	  HKLM\SYSTEM\CCS\Services\NwLnkFwd
	
	  HKLM\SYSTEM\CCS\Services\NwlnkIpx\NetConfig\NdisWan(x)
	
	  HKLM\SYSTEM\CCS\Services\RasAcd
	
	  HKLM\SYSTEM\CCS\Services\RasAuto
	
	  HKLM\SYSTEM\CCS\Services\RasMan
	
	  HKLM\SYSTEM\CCS\Services\RasRad
	
	  HKLM\SYSTEM\CCS\Services\RemoteAccess
	
	  HKLM\SYSTEM\CCS\Services\Router
	
	  HKLM\SYSTEM\CCS\Services\Tracing
	
	  HKLM\SYSTEM\CCS\Services\WanArp
	
	  HKLM\SOFTWARE\Microsoft\AsyncMac
	
	  HKLM\SOFTWARE\Microsoft\NdisWan
	
	  HKLM\SOFTWARE\Microsoft\RAS
	
	  HKLM\SOFTWARE\Microsoft\RasAuto
	
	  HKLM\SOFTWARE\Microsoft\RasMan
	
	  HKLM\SOFTWARE\Microsoft\RemoteAccess
	
	  HKLM\SOFTWARE\Microsoft\Router
	
	  HKLM\SOFTWARE\Microsoft\Router Phonebook
	
	  HKLM\SOFTWARE\Microsoft\Windows
	
	  HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\NetworkCards\(x)
	
	  HKCU\Software\Microsoft\RAS Autodial
	
	  HKCU\Software\Microsoft\RAS Monitor
	
	  HKCU\Software\Microsoft\RAS Phonebook
	
	  HKCU\Software\Microsoft\Router
	
	  HKCU\Software\Microsoft\Routing and RAS Admin
	
	NOTE: If you remove the registry keys for RRAS, do not remove values that refer
	to a specific network card. This removes the network card and it will need to be
	reinstalled. Only remove NDISWAN values.
	
	Registry Keys for PPTP
	----------------------
	
	  HKLM\SYSTEM\CCS\Services\NdisWan(x)
	
	  HKLM\SYSTEM\CCS\Services\NetBT\Adapters\NdisWan(x)
	
	  HKLM\SYSTEM\CCS\Services\RASPPTPE
	
	  HKLM\SYSTEM\CCS\Services\RASPPTPF
	
	  HKLM\SYSTEM\CCS\Services\RASPPTPM
	
	  HKLM\SYSTEM\CCS\Services\RASPPTPM(x)
	
	  HKLM\SOFTWARE\Microsoft\RAS\TAPI DEVICES\RASPPTPM
	
	  HKLM\SOFTWARE\Microsoft\RASPPTP
	
	  HKLM\SOFTWARE\Microsoft\RASPPTPE
	
	  HKLM\SOFTWARE\Microsoft\RASPPTPM
	
	  HKLM\SOFTWARE\Microsoft\TAPI DEVICES\RASPPTPM
	
	NOTE: If you remove the registry keys for PPTP, please do not remove values that
	refer to a specific network card. This will remove the network card and it will
	need to be reinstalled. Only remove NDISWAN values.
	
	Additional query words: rras
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : :4.0
	Issue type        : kbinfo
	
	=============================================================================
	
