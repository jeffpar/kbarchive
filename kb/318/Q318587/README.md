---
layout: page
title: "Q318587: Windows NT Server 4.0, Terminal Server Edition SRP Release Notes"
permalink: /kb/318/Q318587/
---

## Q318587: Windows NT Server 4.0, Terminal Server Edition SRP Release Notes

	Article: Q318587
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP6
	Operating System(s): 
	Keyword(s): kbSecurity
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP6, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article contains information about issues that you may experience with the
	Windows NT Server 4.0, Terminal Server Edition, Security Rollup Package (SRP).
	For additional information about the SRP, click the article number below to view
	the article in the Microsoft Knowledge Base:
	
	  Q317636 Windows NT Server 4.0, Terminal Server Edition, Security Rollup
	  Package
	
	MORE INFORMATION
	================
	
	Compaq Array Controller Users
	-----------------------------
	
	If you have installed the Compaq Array Controller Driver (Cpqarray.sys) from the
	Compaq Web Site, Compaq FTP Site, or Compaq SmartStart, please see the following
	article in the Microsoft Knowledge Base regarding Compaq Array controllers and
	the Windows NT 4.0 SRP:
	
	  Q305228 "STOP 0xA" Occurs After Applying Windows NT 4.0 Security Rollup
	  Package
	
	How to Install Optional Services After You Install the SRP
	----------------------------------------------------------
	
	If you add, reconfigure, or remove any optional components after you install the
	SRP, you must reinstall Windows NT Server 4.0, Terminal Server Edition, Service
	Pack 6 (SP6)
	(http://www.microsoft.com/ntserver/terminalserver/downloads/recommended/tsesp6/default.asp),
	and then reinstall the SRP.
	
	How to Install RAS After You Install the SRP
	--------------------------------------------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	If you have difficulty in installing Remote Access Services (RAS) after
	installing the SRP, and if the following registry key is empty, delete the key
	from the registry, reinstall RAS, and then follow the instructions in the "How
	to Install Optional Services After the SRP Has Been Applied" section in this
	article:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Ras
	
	Additional query words: RelNotes Post-Service Pack 6 sp6 post-sp6 kbWinNT400TSEsrpRelNotes
	
	======================================================================
	Keywords          : kbSecurity 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400sp6 kbNTTermServSearch
	Version           : :4.0 SP6
	Issue type        : kbinfo
	
	=============================================================================
	
