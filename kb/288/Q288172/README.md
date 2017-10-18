---
layout: page
title: "Q288172: How to Remove PPTP Using the Registry and Manually Delete File"
permalink: kb/288/Q288172/
---

## Q288172: How to Remove PPTP Using the Registry and Manually Delete File

	Article: Q288172
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article describes how to completely remove Point-to-Point Tunneling
	Protocol (PPTP) if running the Add/Remove Programs Wizard does not remove all of
	the PPTP files and registry entries.
	
	MORE INFORMATION
	================
	
	1. Start Windows Explorer, and then locate and delete the following files:
	
	  \System32\Raspptpc.dll
	  \System32\Raspptpl.dll
	  \System32\Drivers\Raspptpe.sys
	  \System32\Drivers\Raspptpf.sys
	  \System32\Drivers\Raspptpm.sys
	  \System32\Drivers\Raspptpu.sys
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	2. Start Registry Editor (Regedt32.exe), and then locate and delete the
	  following registry keys:
	
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
	
	3. Quit Registry Editor, and then restart the computer.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
