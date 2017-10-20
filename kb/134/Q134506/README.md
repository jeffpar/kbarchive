---
layout: page
title: "Q134506: System Hangs Formatting an Unformatted Floppy Disk"
permalink: /kb/134/Q134506/
---

## Q134506: System Hangs Formatting an Unformatted Floppy Disk

{% raw %}

	Article: Q134506
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade from an earlier version of Windows to Windows 95, your
	computer may stop responding (hang) when you try to format an unformatted floppy
	disk. If you make any attempt to recover before you restart your computer, the
	operating system may be damaged.
	
	CAUSE
	=====
	
	This problem can occur if you are loading Intel's DMI service layer driver
	(Sl.exe) in the Autoexec.bat file. This driver causes the system to use the
	real-mode mapper and interferes with the drives.
	
	RESOLUTION
	==========
	
	Remove Sl.exe from the Autoexec.bat file and add it to the [SafeList] section of
	the Ios.ini file in the Windows folder, and then restart your computer.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
