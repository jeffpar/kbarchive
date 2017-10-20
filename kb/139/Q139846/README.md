---
layout: page
title: "Q139846: Floppy Disk Drive Letters Not Swapped in Windows 95"
permalink: /kb/139/Q139846/
---

## Q139846: Floppy Disk Drive Letters Not Swapped in Windows 95

{% raw %}

	Article: Q139846
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): diskmem win95 kbDiskMemory
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SYMPTOMS
	========
	
	If you change the drive letters assigned to floppy disk drives in your
	computer's CMOS setup utility, the drive letters may not be changed correctly in
	Windows 95. When you try to access the A or B drive, the wrong floppy disk drive
	may be accessed. Note that this problem does not occur if you boot to a Windows
	95 command prompt or to your previous operating system.
	
	CAUSE
	=====
	
	This problem can occur if the method used by your computer to swap floppy disk
	drive letters is different than the method used by most computer, and is not
	recognized by Windows 95.
	
	
	RESOLUTION
	==========
	
	NOTE: For information about how to edit the registry, view the Changing Keys And
	Values online Help topic in Registry Editor (Regedit.exe). Note that you should
	make a backup copy of the registry files (System.dat and User.dat) before you
	edit the registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	To resolve the problem described in this article, remove the Int13ToDrvSelMap
	value under the following registry key, and then restart your computer:
	
	  Hkey_Local_Machine\System\CurrentControlSet\Services\Class\Fdc\0000
	
	======================================================================
	Keywords          : diskmem win95 kbDiskMemory 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
