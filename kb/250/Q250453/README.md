---
layout: page
title: "Q250453: Determining Special Pool Tagging Options When Debugging"
permalink: kb/250/Q250453/
---

## Q250453: Determining Special Pool Tagging Options When Debugging

	Article: Q250453
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 10-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Workstation versions 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Server versions 4.0 SP4, 4.0 SP5, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	NOTE: This article assumes that you are familiar with the information in the
	following Microsoft Knowledge Base article regarding the Windows NT Special Pool
	feature:
	
	  Q188831 How to Use the Special Pool Feature to Isolate Pool Damage
	
	When you are using the Special Pool tagging features of Windows NT 4.0 Service
	Pack 4 and later, you can verify the configuration of the registry options by
	using a Memory.dmp file or a live debug.
	
	You can check the various Special Pool options by using several of the global
	variables available. The ability to verify the settings can be useful when you
	are working with computers that require that Special Pool be used.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	The Windows NT global variable for the PoolTag registry value is
	MmSpecialPoolTag:
	
	  dd nt!MmSpecialPoolTag
	  0x00000000 = No tag specified; Pool Tagging is basically disabled. (Default
	  value)
	  0x0000002a = Most typically used; used to look at all tags. This is the ASCII
	  representation of the asterisk wildcard.
	
	The Windows NT global variable for the PoolTagOverruns registry value is
	MmSpecialPoolCatchOverruns:
	
	  dd nt!MmSpecialPoolCatchOverruns
	  0x00000000 = Underruns
	  0x00000001 = Overruns (Default value)
	
	The Windows NT global variable for the EnableKStackPool registry value is
	MmEnableKStackPool.
	
	This option is available only with Windows NT 4.0, Terminal Server Edition. For
	additional information about this option, click the article number below to view
	the article in the Microsoft Knowledge Base:
	
	  Q188831 How to Enable the Special Pool Feature to Isolate Pool Damage
	
	  dd nt!MmEnableKStackPool
	  0x00000000 = KStack pool disabled.
	  0x00000001 = KStack pool always enabled.
	  0x00000002 = KStack pool enabled for >= 256 MB computers.
	
	The Windows NT global variable MiSpecialPoolEnabled is hard coded to be enabled.
	
	  LOGICAL MiSpecialPoolEnabled = TRUE;
	
	  dd nt!MiSpecialPoolEnabled
	  0x00000000 = Disabled
	  0x00000001 = Enabled (Default value)
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q148658 How to Load Windows NT Memory.dmp File Using I386kd.exe
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTW400sp4 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp6 kbWinNTSEnt400sp5 kbWinNTSEnt400sp4 kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400search kbNTTermServ400sp4 kbNTTermServ400sp5 kbNTTermServSearch kbWinNTW400sp6 kbWinNTSEnt400SP6a kbWinNTW400SP6a
	Version           : :4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Issue type        : kbinfo
	
	=============================================================================
	
