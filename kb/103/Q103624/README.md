---
layout: page
title: "Q103624: Err Msg: Winlogon.exe-Drive Not Ready"
permalink: /kb/103/Q103624/
---

## Q103624: Err Msg: Winlogon.exe-Drive Not Ready

{% raw %}

	Article: Q103624
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5
	Operating System(s): 
	Keyword(s): kbsetup
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
	
	In Microsoft Windows NT, when the static Drive Letter in Disk Administrator is
	changed on the logical drive that Windows NT is presently installed on, you will
	receive one of the following error messages, or a combination of the messages:
	
	  Winlogon.exe-Drive not ready
	  The drive is not ready for use; its door may be open. Please check drive [C:]
	  and make sure that a disk is inserted and that the drive door is closed.
	
	  -or-
	
	  Winlogin.exe-No Disk
	  There is no disk in the drive. Please insert a disk into drive [C:]
	
	  -or-
	
	  System Error
	  Cannot read from drive [C:]
	
	WORKAROUND
	==========
	
	Change the drive letter in Disk Administrator back to it's original logical
	drive letter assignment.
	
	MORE INFORMATION
	================
	
	Assignment of drive letters affects only the way the device drivers assign drive
	letters to disks attached to the system. It does not remap any existing
	references to drive letters. Additionally, there may be active system processes
	that cannot be stopped in order to change the drive letter references.
	
	Static drive letter assignment is useful in the following cases:
	
	- To snapshot the existing drive letter assignments, so that new disks can be
	  added to the system without changing the drive letter assignments of the
	  existing disks.
	
	- To assign a particular drive letter to an existing volume. The former case
	  allows the user to add new disks without having to change environment
	  variables, page file location, .INI files, or application initialization data
	  stored in the registry. However, in the second case, the user (who must be an
	  administrator) is responsible for updating all references to the drive.
	
	For more information, query on the following words in the Microsoft Knowledge
	Base:
	
	  virtual and drive
	
	Additional query words: prodnt sticky
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5
	
	=============================================================================
	

{% endraw %}
