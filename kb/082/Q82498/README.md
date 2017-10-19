---
layout: page
title: "Q82498: Windows Setup Fails If No WIN.INI or SYSTEM.INI"
permalink: /kb/082/Q82498/
---

## Q82498: Windows Setup Fails If No WIN.INI or SYSTEM.INI

	Article: Q82498
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Setup fails to upgrade an existing installation of Microsoft Windows if the
	WIN.INI and/or SYSTEM.INI file has been deleted.
	
	MORE INFORMATION
	================
	
	Before upgrading Windows over previous versions, you should not delete the
	existing WIN.INI or SYSTEM.INI file located in the Windows directory by default.
	These files contain important information regarding desktop settings, display
	drivers, and overall customization, which are not preserved if the files are
	deleted. Additionally, Setup may fail if these files are deleted.
	
	NOTE: Setup does not check for existing .INI files before upgrading Windows.
	
	If you deleted these files, you can correct your installation by reinstalling
	your earlier version of Windows or performing a full installation of the new
	version.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
