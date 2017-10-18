---
layout: page
title: "Q130016: Removing Everyone On Root Dir. Leaves Limited Virtual Memory"
permalink: kb/130/Q130016/
---

## Q130016: Removing Everyone On Root Dir. Leaves Limited Virtual Memory

	Article: Q130016
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5
	Operating System(s): 
	Keyword(s): kbnetwork
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
	
	If you remove the Everyone group from the root directory permissions of a
	Windows NT file system (NTFS) formatted partition that contains the PAGEFILE.SYS
	file, the following error message appears when you log on:
	
	  Limited Virtual Memory
	  Your system is running without a properly sized paging file.
	  Please use the virtual memory option of the System applet in the
	  Control Panel to create a paging file, or to increase the initial
	  size of your paging file.
	
	RESOLUTION
	==========
	
	To correct this problem, add the Everyone group with Full Control permission to
	the NTFS partition that contains the PAGEFILE.SYS file.
	
	MORE INFORMATION
	================
	
	Microsoft does not recommend removing the Everyone group from the root directory
	permissions of a Windows NT file system (NTFS) formatted partition. By default,
	the root directory of a drive is an administrative share in Windows NT.
	Therefore, it is not necessary to remove the Everyone group from the root
	directory to increase security or prevent certain users on a network to gain
	access to your root directory.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5
	
	=============================================================================
	
