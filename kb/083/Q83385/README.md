---
layout: page
title: "Q83385: Windows 3.1 Setup Asks for Disk 5"
permalink: /kb/083/Q83385/
---

## Q83385: Windows 3.1 Setup Asks for Disk 5

	Article: Q83385
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When updating Windows version 3.0, the Windows version 3.1 Setup will ask for
	Disk 5 before asking for Disk 4, and without copying all the files from Disk 3.
	
	This problem is caused by the Windows version 3.1 Setup program finding the
	Windows version 3.0 SETUP.EXE in the WINDOWS\SYSTEM directory.
	
	Deleting SETUP.EXE from the WINDOWS\SYSTEM directory and restarting the Windows
	version 3.1 Setup from Disk 1 will successfully install Windows version 3.1.
	
	MORE INFORMATION
	================
	
	When updating Windows version 3.0, the Windows version 3.1 Setup program will
	delete any SETUP.EXE file in the WINDOWS directory. However, if a SETUP.EXE
	exists in the WINDOWS\SYSTEM directory it will not be deleted. Because of this,
	when Windows Setup needs to reload itself it may load the Windows version 3.0
	Setup instead.
	
	There are two situations that will arise because of this problem:
	
	1. The Windows version 3.1 Setup will finish copying the files from Disk 2, then
	  ask for Disk 5.
	
	2. The Windows version 3.1 Setup will copy some of the files from Disk 3, bring
	  up Windows to complete the setup, and ask for Disk 5 without copying any
	  additional files from Disk 3.
	
	To successfully install Windows version 3.1, delete the SETUP.EXE from the
	WINDOWS\SYSTEM directory and restart the Windows version 3.1 Setup from Disk 1.
	
	Microsoft is researching this problem and will post new information here as it
	becomes available.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
