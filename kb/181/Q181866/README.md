---
layout: page
title: "Q181866: Fatal Exception Error Accessing Windows NT Share From Windows 95"
permalink: /kb/181/Q181866/
---

## Q181866: Fatal Exception Error Accessing Windows NT Share From Windows 95

{% raw %}

	Article: Q181866
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95; WINNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbfasttip win95
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to open a file or folder on Windows NT shared network drive
	that is on a NTFS partition, you may receive the following error message:
	
	  A Fatal Exception 0E has occurred at 0028:C0231810 in VXD VMM(0D) +
	  00001810.
	
	  The current Application will be terminated.
	
	CAUSE
	=====
	
	This behavior can occur if both of the following conditions exist:
	
	- The file or folder you are attempting to open has a long file name.
	
	- You have disabled short file name (standard 8.3 naming) creation on the
	  Windows NT computer.
	
	RESOLUTION
	==========
	
	To resolve this issue, obtain and install Microsoft Windows 95 Service Pack 1.
	
	For information about Windows 95 Service Pack 1, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q142794 Availability of Microsoft Windows 95 Service Pack 1
	
	MORE INFORMATION
	================
	
	This behavior can also occur if the networking components have been removed and
	reinstalled on a computer that has Windows 95 Service Pack 1 installed.
	Reinstalling the networking components from the Windows 95 CD-ROM overwrites the
	Windows 95 Service Pack 1 version of the networking files. You should reinstall
	Windows 95 Service Pack 1 after installing network files from the Windows 95
	CD-ROM.
	
	======================================================================
	Keywords          : kbnetwork kbfasttip win95 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95; WINNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
