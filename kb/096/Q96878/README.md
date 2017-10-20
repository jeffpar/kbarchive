---
layout: page
title: "Q96878: File Manager Does Not Create Complete MS-DOS 6.x System Disk"
permalink: /kb/096/Q96878/
---

## Q96878: File Manager Does Not Create Complete MS-DOS 6.x System Disk

{% raw %}

	Article: Q96878
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): MS-DOS:6.0,6.2,6.21,6.22; WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-SEP-1999
	
	3.10 3.11 | 6.00 6.20 6.21 6.22
	WINDOWS   | MS-DOS
	kbtool kbprb
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows File Manager does not create a complete MS-DOS 6.x system
	disk.
	
	MORE INFORMATION
	================
	
	A complete MS-DOS 6.x system disk includes IO.SYS, MSDOS.SYS, COMMAND.COM, and
	DBLSPACE.BIN or DRVSPACE.BIN. Because File Manager does not copy DBLSPACE.BIN to
	the floppy disk when you create a system disk, you cannot have access to your
	compressed DoubleSpace drives if you start your computer from a system disk
	created using File Manager.
	
	To work around this problem, copy DBLSPACE.BIN or DRVSPACE.BIN from the DOS
	directory to the floppy disk before you restart your computer. To do this from
	the MS-DOS command line, type the following at the MS-DOS command prompt and
	then press ENTER:
	
	  copy c:\dos\dblspace.bin a:
	
	-or-
	
	  copy c:\dos\drvspace.bin a:
	
	Additional query words: 3.10 3.11 6.00 6.20 6.21 6.22 dos startup boot bootup bootable win30 wfw wfwg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311 kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22; WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
