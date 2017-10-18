---
layout: page
title: "Q185265: Err Msg: Repair Disk Utility Could Not Save All Configuration..."
permalink: kb/185/Q185265/
---

## Q185265: Err Msg: Repair Disk Utility Could Not Save All Configuration...

	Article: Q185265
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbtool
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Update Repair Info option in the Rdisk.exe tool, you may
	receive the following error message:
	
	  Repair Disk Utility could not save all configuration files.
	
	When you click OK, you may receive the following error message:
	
	  Unable to apply appropriate security on sensitive configuration files
	  in the system repair directory. This may leave your system vulnerable
	  to security attacks. Please ensure that all files under c:\WINNT\repair
	  are accessible only to Administrators and Local System.
	
	CAUSE
	=====
	
	This behavior can occur if either of the following conditions exists:
	
	- You do not have Back Up Files And Directories permissions.
	
	- NT file system (NTFS) permissions are set on the %SystemRoot%\Repair folder.
	
	RESOLUTION
	==========
	
	To resolve this behavior, use the appropriate method below:
	
	Method 1
	--------
	
	Add the Back Up Files And Directories permission to the user account. To do so,
	follow these steps:
	
	1. In User Manager, click User Rights on the Options menu.
	
	2. In the Right box, click Back Up Files And Directories, and then click Add.
	
	3. Click the user account you want, and then click Add.
	
	4. Click OK, and then click OK again.
	
	5. Quit User Manager.
	
	Method 2
	--------
	
	Add Change permissions to the user account for the %SystemRoot%\Repair folder. To
	do so, follow these steps:
	
	1. In My Computer or Windows NT Explorer, right-click the %SystemRoot%\Repair
	  folder, and then click Properties.
	
	2. On the Security tab, click Permissions.
	
	3. Click Add.
	
	4. Click the user account you want, and then click Add.
	
	5. In the Type Of Access box, click Change, and then click OK.
	
	6. Click OK, and then click OK again.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	You receive the second error message only if you do not have Change permissions
	for the %SystemRoot%\Repair folder on an NTFS partition.
	
	======================================================================
	Keywords          : kberrmsg kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : WINNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
