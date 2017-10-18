---
layout: page
title: "Q103811: How Windows NT Constructs the supported Network Adapter List"
permalink: kb/103/Q103811/
---

## Q103811: How Windows NT Constructs the supported Network Adapter List

	Article: Q103811
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you choose to manually add a network adapter either during setup or after
	setup through Control Panel, Windows NT presents you with a list of network
	adapter choices. The contents of the list depends on which network adapters you
	have .INF files for in your SYSTEM32 subdirectory of Windows NT, as well as the
	bus type of your computer.
	
	MORE INFORMATION
	================
	
	All network adapters that can be installed under Windows NT must have an .INF
	file for them in the SYSTEM32 subdirectory of Windows NT. These files are always
	of the following format
	
	  OEMNADxx.INF
	
	where "xx" is a two-letter abbreviation representing the network adapter. Each
	.INF file contains a section with the following header:
	
	  [PlatformsSupported]
	
	This section can contain the following values:
	
	  ISA
	  EISA
	  MCA
	  "Jazz-Internal Bus"
	
	Each value indicates a bus type that is supported by the network cards described
	in the .INF file.
	
	NOTE: "Jazz-Internal Bus" is the bus on Advanced RISC Computing (ARC) computers
	such as the SGI MIPS and DEC Alpha.
	
	When the network Setup program compiles the list of network adapters that can be
	added to the computer, it parses these files and lists any adapters whose .INF
	file contains the correct bus option for the computer on which you are
	installing the network adapter. Note that while network adapters that are
	ISA-only can be installed on EISA computers and are therefore listed as an
	available option, the reverse is not true.
	
	The text strings that are added to the network adapter options list are contained
	in each .INF file in the [OptionsTextENG] section.
	
	
	For more information on the network adapter INF files, query on the following
	words in the Microsoft Knowledge Base:
	
	  network and services and inf
	
	Additional query words: prodnt NETWORK SERVICES
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5 3.51
	
	=============================================================================
	
