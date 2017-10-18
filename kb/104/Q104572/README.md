---
layout: page
title: "Q104572: Using Microsoft Scenes Version 1.0 with Windows NT"
permalink: kb/104/Q104572/
---

## Q104572: Using Microsoft Scenes Version 1.0 with Windows NT

	Article: Q104572
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains information or issues on using Microsoft Scenes version
	1.0 with Windows NT.
	
	
	MORE INFORMATION
	================
	
	Opening a directory listing of Picture Sets
	-------------------------------------------
	
	When adding a custom picture set in Microsoft Scenes version 1.0 under Windows
	NT, you may have to double-click the desired folder (directory) twice, instead
	of once, to open a directory listing of picture sets.
	
	In the Scenes Wizards, when you are prompted to select a directory where the
	pictures are located and you select (double-click) the desired directory, the
	number of pictures available will be the same as the number from the last
	directory. Double-clicking the desired directory again displays the proper
	number of pictures available or a performed picture set, if available.
	
	System Error: Cannot read from drive B adding a picture set
	-----------------------------------------------------------
	
	If you try to add a new picture set with Microsoft Scenes under Windows NT, you
	may receive the following error message:
	
	  System Error: Cannot read from drive B
	
	Steps to Reproduce Problem
	--------------------------
	
	1. From the Scenes menu, choose the Scenes Wizards option.
	
	2. Choose Add A Picture Set.
	
	3. When prompted "Where are the pictures Stored?," choose drive C.
	
	4. Choose Next.
	
	The above error message appears.
	
	If you choose Cancel, Scenes will add the picture set correctly and continue as
	usual.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	
