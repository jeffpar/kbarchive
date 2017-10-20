---
layout: page
title: "Q96938: Interlnk Drives Appear as Removable Media"
permalink: /kb/096/Q96938/
---

## Q96938: Interlnk Drives Appear as Removable Media

{% raw %}

	Article: Q96938
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22; WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Interlnk drives are considered removable media because their connections can be
	broken at any time.
	
	MORE INFORMATION
	================
	
	If you load Interlnk in the CONFIG.SYS file, all Interlnk drives (both active
	and inactive) appear as removable media. DoubleSpace reports each drive as a
	removable, normal local drive. Windows and Windows for Workgroups File Manager
	display each drive as a removable media icon (sometimes called a "floppy icon").
	SMARTDrive shows Interlnk drives as read-cached in its status table. The
	Microsoft Diagnostic Utility (MSD) report Interlnk drives as floppy drives of
	one cylinder.
	
	If you try to change to an unconnected Interlnk drive, a disk error is displayed.
	Once the drive connection is established, you can change between physical and
	Interlnk drives normally and transparently.
	
	Additional query words: 6.22 6.00 6.20 3.00 3.00a 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbWFW310 kbWFW311 kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22; WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
