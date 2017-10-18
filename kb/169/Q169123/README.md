---
layout: page
title: "Q169123: Error Message: Installation Failed While Installing from .INF"
permalink: kb/169/Q169123/
---

## Q169123: Error Message: Installation Failed While Installing from .INF

	Article: Q169123
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a user, who does not belong to the Administrators local group, tries to run
	an INF file by right-clicking the INF file and choosing the Install Context menu
	item, the following error message appears:
	
	  Installation failed
	
	CAUSE
	=====
	
	The Setupapi.dll that processes the INF files [DefaultInstall] section needs to
	write to the registry key HKLM\Software\Microsoft\Windows\
	CurrentVersion\RunOnce to prepare the launch of Grpconv.exe when the
	installation script is completed. Because a user, not belonging to the
	Administrators local group, does not have full control permission to this
	registry key, the according API function, RegOpenKeyEx(), returns an error 5
	(access denied). This error occurs when the Setupapi.dll attempts to open the
	key using the KEY_ALL_ACCESS flag. The Setupapi.dll in turn generates the error
	message "Installation failed."
	
	RESOLUTION
	==========
	
	To prevent the error message described above, either log on with an
	administrative account or give the user in question (or the Users local group)
	full control permission to the HKLM\Software\Microsoft\Windows\
	CurrentVersion\RunOnce registry key.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0.
	
	Additional query words: inf installation runonce prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
