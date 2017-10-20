---
layout: page
title: "Q136789: Drive Uncompress Fails Because Drive Letter Change Not Allowed"
permalink: /kb/136/Q136789/
---

## Q136789: Drive Uncompress Fails Because Drive Letter Change Not Allowed

{% raw %}

	Article: Q136789
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to uncompress a drive compressed with DriveSpace or DoubleSpace,
	you may receive one of the following error messages:
	
	  - You compressed an existing drive and then installed Windows 95 on the
	  compressed drive.
	
	  - After you compressed a drive, you installed Windows 95 on the uncompressed
	  (host) portion of the drive.
	
	  - If a Windows-based program was installed on the host drive, there may be
	  references to the program's components in the registry or System.ini file.
	  For example, a .386 file may be referenced in the System.ini file.
	
	CAUSE
	=====
	
	These error messages can occur for any of the following conditions:
	
	- You compressed an existing drive and then installed Windows 95 on the
	  compressed drive.
	
	- After you compressed a drive, you installed Windows 95 on the uncompressed
	  (host) portion of the drive.
	
	- If a Windows-based program was installed on the host drive, there may be
	  references to the program's components in the registry or System.ini file.
	  For example, a .386 file may be referenced in the System.ini file.
	
	Uncompressing a compressed drive changes the path of the Windows folder, but the
	Windows folder path is not updated in the registry.
	
	RESOLUTION
	==========
	
	You cannot uncompress the drive. If you want Windows 95 to be located in a
	folder on a different drive, reinstall Windows 95 on that drive, and then
	reinstall your programs.
	
	NOTE: Installing Windows 95 in a new folder causes you to lose all the Windows
	configuration information. Make sure to back up all the unique data in the
	Windows folder before you perform this procedure.
	
	
	MORE INFORMATION
	================
	
	The Windows 95 registry contains many entries that refer to the path for the
	Windows folder. These values are created when you install Windows 95. If you
	change the path for the Windows folder by modifying its installed drive letter,
	the entries become invalid.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
