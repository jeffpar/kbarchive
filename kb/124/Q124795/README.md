---
layout: page
title: "Q124795: Cannot Start Windows NT on Notebook with Docking Station"
permalink: kb/124/Q124795/
---

## Q124795: Cannot Start Windows NT on Notebook with Docking Station

	Article: Q124795
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
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
	
	After you install Windows NT on a notebook computer outside of the docking
	station and place the notebook computer in the docking station, the following
	error message may appear:
	
	  The system did not load because it cannot find the following file:
	  <systemroot>\SYSTEM32\NTOSKRNL.EXE
	  Please reinstall a copy of the above file.
	  Boot failed.
	
	CAUSE
	=====
	
	This problem occurs due the limitation of the computer BIOS. The docking station
	may have another hard disk controller and hard disk which may be set as the
	master hard disk. If the docking station equipped notebook computer is placed in
	the station, the hard disk on the notebook computer may be assigned as a slave
	hard disk. When the notebook computer is placed in the docking station, the boot
	sector read is the one on the notebook computer, and the ARC path specified in
	its BOOT.INI file is the first hard disk (hard disk on the docking station).
	
	RESOLUTION
	==========
	
	In the CMOS setup of the notebook computer, set the hard disk controller from
	Internal/Docking Station to Internal Only. This disables the access to the hard
	disk on the docking station and reads the hard disk on the notebook computer.
	
	Additional query words: prodnt 3.10 rom rdisk ntldr
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	
