---
layout: page
title: "Q120717: Blue Screen: Init1 - System Processor"
permalink: /kb/120/Q120717/
---

## Q120717: Blue Screen: Init1 - System Processor

{% raw %}

	Article: Q120717
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.10 3.50
	
	WINDOWS
	
	kbother
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If there is corruption within certain Windows NT system files, a blue screen may
	appear with the following text at the top of the screen when you start your
	computer:
	
	  Init1         System Processor
	
	CAUSE
	=====
	
	This is due to corruption to system files which may include HAL.DLL,
	NTOSKRNL.EXE or other system files vital to starting Windows NT.
	
	(Note: Your HAL file may differ from others. Depending on your hardware
	environment, it could be called HAL486C.DLL, HALAST.DLL, HALCBUS.DLL,
	HALMCA.DLL, or HALNCR.DLL.)
	
	RESOLUTION
	==========
	
	If the Server or Workstation is in a production environment, you must have an
	up-to-date Emergency Repair Disk (ERD). Using the ERD, you can choose the Verify
	System Files option to restore valid files from CD or disk.
	
	If the ERD is missing or corrupt itself, there is another workaround that may
	restore your system files:
	
	1. Make a backup of your current Windows NT files. This includes the WINNT
	  directory and all subdirectories.
	
	2. Install Windows NT to a different directory.
	
	3. Apply any relevant Service Packs.
	
	4. From the newly installed Windows NT directory, copy the entire SYSTEM32
	  directory to the SYSTEM32 directory of the old installation.
	
	Additional query words: prodnt 3.10
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	

{% endraw %}
