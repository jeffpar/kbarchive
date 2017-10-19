---
layout: page
title: "Q177118: Registry Keys Added by Remote Access Service"
permalink: /kb/177/Q177118/
---

## Q177118: Registry Keys Added by Remote Access Service

	Article: Q177118
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	When you install the Remote Access Service [RAS] and/or the Point to Point
	Tunneling Protocol [PPTP], several registry keys are added or updated. This
	article provides a list of those keys for a reference. This list may be helpful
	in a situation where an uninstall or reinstall of the either RAS or PPTP has
	failed.
	
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	A few abbreviations have been used to enhance the readability of this article:
	
	CCS = CurrentControlSet
	HKCU = HKEY_CURRENT_USER
	HKLM = HKEY_LOCAL_MACHINE
	(x) = Number will vary with every computer depending on the bindings
	
	Registry Keys for RAS
	---------------------
	
	  HKLM\SYSTEM\CCS\Services\AsyncMac
	  HKLM\SYSTEM\CCS\Services\AsyncMac(x)
	  HKLM\SYSTEM\CCS\Services\NdisTapi
	  HKLM\SYSTEM\CCS\Services\NdisWan
	  HKLM\SYSTEM\CCS\Services\NdisWan(x)
	  HKLM\SYSTEM\CCS\Services\NetBT\Adapters\NdisWan(x)
	  HKLM\SYSTEM\CCS\Services\RasAcd
	  HKLM\SYSTEM\CCS\Services\RasArp
	  HKLM\SYSTEM\CCS\Services\RasAuto
	  HKLM\SYSTEM\CCS\Services\RasMan
	  HKLM\SYSTEM\CCS\Services\RemoteAccess
	
	  HKLM\SOFTWARE\Microsoft\AsyncMac
	  HKLM\SOFTWARE\Microsoft\NdisWan
	  HKLM\SOFTWARE\Microsoft\RAS
	  HKLM\SOFTWARE\Microsoft\RasAuto
	  HKLM\SOFTWARE\Microsoft\RasMan
	  HKLM\SOFTWARE\Microsoft\RemoteAccess
	  HKLM\SOFTWARE\Microsoft\TAPI DEVICES
	  HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\NetworkCards\(x)
	
	  NOTE: If you remove the registry keys for RAS, do not remove values that refer
	  to a specific network adapter. This will remove the specified network adapter
	  and it will need to be reinstalled. Only remove NDISWAN values.
	
	  HKCU\Software\Microsoft\RAS Autodial
	  HKCU\Software\Microsoft\RAS Monitor
	  HKCU\Software\Microsoft\RAS Phonebook
	
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
	  HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\NetworkCards\(x)
	
	  NOTE: If you remove the registry keys for PPTP, do not remove values that
	  refer to a specific network adapter. This will remove the specified network
	  adapter and it will need to be reinstalled. Only remove NDISWAN values.
	
	Additional query words: manually
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
