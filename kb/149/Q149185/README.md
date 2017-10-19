---
layout: page
title: "Q149185: &quot;Registry Subkey Already Exists&quot; When Reinstalling NWLINK"
permalink: /kb/149/Q149185/
---

## Q149185: &quot;Registry Subkey Already Exists&quot; When Reinstalling NWLINK

	Article: Q149185
	Product(s): Microsoft Windows NT
	Version(s): ; winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.1 
	- Microsoft Windows NT Advanced Server 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you attempt to reinstall the NWLINK protocol on a computer running Windows
	NT, one of the following error messages may be displayed:
	
	  The registry service subkey already exists.
	
	  The registry subkey already exists.
	
	CAUSE
	=====
	
	Windows NT is unable to reinstall the NWLINK protocol because key registry
	entries already exist in the registry.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Remove all registry components for the NWLINK protocol and then restart the
	computer.
	
	You must remove the following registry keys:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\NwlnkIpx
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\NwlnkNb
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\NwlnkSpx
	  HKEY_LOCAL_MACHINE\SYSTEM\CCS\Services\NwlnkIpx
	  HKEY_LOCAL_MACHINE\SYSTEM\CCS\Services\NwlnkNb
	  HKEY_LOCAL_MACHINE\SYSTEM\CCS\Services\NwlnkSpx
	
	NOTE: If the
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\WinSock\Parameters\
	Transports value exists, make sure that NwlnkIpx and NwlnkSpx strings are
	removed from that value declaration.
	
	Additional query words: prodnt manual manually
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTAdvSerSearch kbWinNTS351search kbWinNTS350search kbWin3xSearch kbZNotKeyword3 kbWin310
	Version           : :; winnt:3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
