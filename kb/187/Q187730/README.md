---
layout: page
title: "Q187730: Cannot Delete the Testdir.tmp File on a Shared NTFS Volume"
permalink: /kb/187/Q187730/
---

## Q187730: Cannot Delete the Testdir.tmp File on a Shared NTFS Volume

	Article: Q187730
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you copy a file or folder to a shared NT File System (NTFS) volume, a
	Testdir.tmp file may be created that you do not have permission to delete.
	
	CAUSE
	=====
	
	This behavior can occur if your user account or the group in which you are a
	member does not have Delete permissions for the shared NTFS volume.
	
	RESOLUTION
	==========
	
	To resolve this behavior, add Delete permissions for the shared NTFS volume to
	your user account or to the group in which you are a member. To do so, follow
	these steps:
	
	NOTE: You must be logged on to the computer as an administrator.
	
	1. In My Computer or Windows NT Explorer, right-click the NTFS volume, and then
	  click Properties.
	
	2. On the Security tab, click Permissions.
	
	3. Click the user account or group you want.
	
	4. In the Type Of Access box, click Special File Access.
	
	5. Click the Delete check box to select it, and then click OK.
	
	6. Click OK, and then click OK again.
	
	MORE INFORMATION
	================
	
	When you copy a file or folder to a shared NTFS volume with Full or special
	Delete permissions, the Testdir.tmp file is usually deleted after the file or
	folder is copied. If your user account or group does not have Delete permissions
	for the NTFS volume, Windows NT is unable to delete the file or folder after it
	is copied.
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : WINNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
