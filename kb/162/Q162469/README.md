---
layout: page
title: "Q162469: Windows NT 4.0 SP3 Overwrites HyperTerminal Private Edition"
permalink: kb/162/Q162469/
---

## Q162469: Windows NT 4.0 SP3 Overwrites HyperTerminal Private Edition

	Article: Q162469
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP3
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 SP3 
	- Microsoft Windows NT Server version 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT 4.0 Service Pack 3 contains an updated version of the HyperTerminal
	product included with Windows NT. If you installed Hilgraeve's Private Edition,
	you may need to reinstall this application after you install Service Pack 3.
	
	MORE INFORMATION
	================
	
	HyperTerminal Private Edition is an enhanced version of the HyperTerminal
	application provided with Windows NT.
	
	The default installation behavior of HyperTerminal Private Edition is to "Install
	where HyperTerminal is normally located (This will overwrite HyperTerminal.)"
	However, Service Pack 3 overwrites HyperTerminal Private Edition version 3.0
	without warning. HyperTerminal provided with Windows NT 4.0 is identified as
	version 4.0 (version of the operating system). The update supplied with Service
	Pack 3 is considered more recent.
	
	To work around this issue, you must reinstall HyperTerminal Private Edition after
	Service Pack 3 has been applied.
	
	If "Specify a new directory and Start menu location (This will leave
	HyperTerminal intact.)" is selected during the installation of HyperTerminal
	Private Edition, Service Pack 3 does not overwrite HyperTerminal Private Edition
	and reinstallation is not necessary.
	
	The Hyperterminal product discussed here is manufactured by Hilgraeve Inc. a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding this product's performance or reliability.
	
	Additional query words: prodnt 4.00 SP3
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp3 kbWinNTSsearch kbWinNTS400sp3 kbWinNTS400search
	Version           : :4.0 SP3
	
	=============================================================================
	
