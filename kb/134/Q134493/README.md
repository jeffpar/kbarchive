---
layout: page
title: "Q134493: Cannot Synchronize Files with Briefcase After Moving"
permalink: kb/134/Q134493/
---

## Q134493: Cannot Synchronize Files with Briefcase After Moving

	Article: Q134493
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95 4.00
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you move a Briefcase to another computer on the network, the Briefcase may
	not be able to update files that require updating. When this occurs, you may
	receive an error message stating that the synchronization copy is unavailable,
	even though the file is actually available on the network.
	
	CAUSE
	=====
	
	When you drag a file into the Briefcase, information such as the Universal
	Naming Convention (UNC) path, volume label, and path are stored in the database.
	This information is refreshed in the database whenever the Briefcase is opened.
	
	If a file is not accessible with a UNC path name at the time that it is dropped
	into the Briefcase, UNC information is not stored for that file. If you later
	share a folder above the original file, the new UNC information is not
	propagated to the Briefcase database until you open the Briefcase.
	
	If you move the Briefcase to another computer before the UNC path is refreshed in
	the database, no UNC path is carried to the new computer.
	
	RESOLUTION
	==========
	
	Make sure to open the Briefcase at least once after the file is made available
	with a UNC path before moving the Briefcase to another computer.
	
	Additional query words: 4.0
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbZNotKeyword3
	Version           : 95 4.00
	
	=============================================================================
	
