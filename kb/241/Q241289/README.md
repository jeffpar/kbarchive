---
layout: page
title: "Q241289: How to Change the Amount of Memory Used During an Installation"
permalink: kb/241/Q241289/
---

## Q241289: How to Change the Amount of Memory Used During an Installation

	Article: Q241289
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:2000; winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kbsetup w2000setup
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can install Windows NT and Windows 2000 products with limited memory
	settings if necessary. This method allows the "virtual" removal of RAM. You do
	not have to physically remove chips and then replace them after the installation
	is complete.
	
	NOTE: If you use this method for a Windows 2000 installation and your /maxmem
	setting is set to less than 64 MB, you receive the following error message and
	Setup does not continue:
	
	  This computer does not have enough memory to run Windows 2000.
	
	  This version requires 64.00 (MB)of memory (RAM).
	
	  Setup cannot continue. To quit Setup, press F3.
	
	MORE INFORMATION
	================
	
	To install Windows NT or Windows 2000 products with limited memory settings:
	
	1. Edit the Txtsetup.sif file in the source files (this method does not work if
	  you are installing from CD-ROM). The [SetupData] section must read:
	
	  [SetupData]
	  OsLoadOptions = "/nodebug /maxmem=32"
	  OsLoadOptionsVAR = "/maxmem=32"
	
	2. Install Windows NT or Windows 2000.
	
	3. Edit the Boot.ini file to remove the /maxmem switch.
	
	4. Reboot. Windows then uses the installed physical memory.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbsetup w2000setup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbNTTermServ400 kbNTTermServSearch kbWinAdvServSearch
	Version           : WINDOWS:2000; winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
