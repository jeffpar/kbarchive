---
layout: page
title: "Q174865: Compressed Read-Only Drive Not Mounted at Startup"
permalink: kb/174/Q174865/
---

## Q174865: Compressed Read-Only Drive Not Mounted at Startup

	Article: Q174865
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2,2.1
	Operating System(s): 
	Keyword(s): kbenv osr2kbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, versions 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If Windows 95 OEM Service Release 2 (OSR2) is installed on or configured to boot
	from a compressed drive, the compressed volume may not be mounted and Windows
	may not start if the drive is read-only. This may occur with removable disks
	such as floppy disks which can be write-protected.
	
	CAUSE
	=====
	
	The real-mode DriveSpace driver (Drvspace.bin) does not mount a compressed
	volume on a read-only drive.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q96200 DoubleSpace Cannot Mount Compressed Write-Protected Disk
	
	  Q137001 Automatic Mounting in Real Mode Disabled in DriveSpace 3
	
	Additional query words: boot
	
	======================================================================
	Keywords          : kbenv osr2 kbfixlist
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR2 kbWin95OPKOSR210
	Version           : :2,2.1
	Issue type        : kbprb
	
	=============================================================================
	
