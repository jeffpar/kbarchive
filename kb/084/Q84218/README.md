---
layout: page
title: "Q84218: File Manager Brings over Wrong Hidden Files"
permalink: /kb/084/Q84218/
---

## Q84218: File Manager Brings over Wrong Hidden Files

{% raw %}

	Article: Q84218
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 3.1,3.11,5.0,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft MS-DOS operating system versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use Windows' File Manager to format a floppy system disk on a computer
	that originally had IBM DOS installed and was upgraded to MS-DOS 5.0 or 6.0, the
	correct MS-DOS COMMAND.COM is copied over, and the incorrect IBMBIO.COM and
	IBMDOS.COM files may be copied to the system disk instead of the MS-DOS 5.0 or
	6.0 files MSDOS.SYS and IO.SYS.
	
	WORKAROUND
	==========
	
	There are two workarounds to this problem:
	
	- Remove the two hidden IBM files from the root directory of the hard drive.
	
	
	- Format the system disks outside of Windows. The MS-DOS SYS.COM does not get
	  confused by the hidden files.
	
	MORE INFORMATION
	================
	
	When an IBM DOS system is upgraded to MS-DOS 5.0, the IBM hidden files are left
	on the hard drive because it is difficult to know if these files belong to IBM
	DOS or IBM OS/2. The IBM OS/2 files take up too much space to be copied to the
	MS-DOS 5.0 uninstall disk.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311 kbMSDOSSearch kbMSDOS600 kbMSDOS500
	Version           : :3.1,3.11,5.0,6.0
	
	=============================================================================
	

{% endraw %}
