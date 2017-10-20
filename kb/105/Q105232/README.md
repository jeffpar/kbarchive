---
layout: page
title: "Q105232: Using RAS 1.1a Client with Workgroup Connection for MS-DOS"
permalink: /kb/105/Q105232/
---

## Q105232: Using RAS 1.1a Client with Workgroup Connection for MS-DOS

{% raw %}

	Article: Q105232
	Product(s): Microsoft Windows NT
	Version(s): 3.1 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	To use Remote Access Service (RAS) 1.1a Client software with Windows
	3.1 to connect to a Windows NT RAS Server, you must first install
	Microsoft Network Client software. One option is to install Workgroup
	Connections for MS-DOS and allow the stand-alone Windows 3.1 computer
	to then be able to install and use the RAS 1.1a Client software.
	
	Use the following procedure to install RAS 1.1a Client software on a
	standalone Windows 3.1 machine with Workgroup Connections:
	
	1. Outside of Windows 3.1, install Workgroup Connections for MS-DOS by typing in
	  A:\setup.
	
	2. Select No Network Adapter during the installation. (It may also be advisable
	  to not install the Mail files to save on hard disk space).
	
	3. After the installation is complete, restart the computer for the changes to
	  take effect.
	
	4. Place the RAS Client Setup disk in drive A, start Windows 3.1, and from the
	  Program Manager window, choose Run from the File menu, type the following in
	  the Command Line field and then choose OK:
	
	  A:\SETUP
	
	5. After the installation is complete, create an icon for the RAS 1.1a Client
	  software that executes the RASPHONE.EXE file.
	
	6. Quit Windows 3.1, switch to the Windows directory, and run SETUP.EXE to enter
	  MS-DOS mode maintenance setup for Windows.
	
	7. Select the Network setting and change it from No Network Installed to
	  Microsoft Network (or 100% Compatible).
	
	8. After quitting Setup, restart the computer and restart Windows 3.1 and the
	  RAS 1.1a Client software should be installed properly.
	
	Additional query words: prodnt WC
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 4.0
	
	=============================================================================
	

{% endraw %}
