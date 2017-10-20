---
layout: page
title: "Q131276: Cannot Make System Disk from File Manager"
permalink: /kb/131/Q131276/
---

## Q131276: Cannot Make System Disk from File Manager

{% raw %}

	Article: Q131276
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use File Manager to make a system disk, the process may fail and you
	may receive the following error message:
	
	  System Disk Error: Cannot add system files to this disk. Make sure a
	  formatted disk is present in the drive and that the drive door is closed.
	
	In Windows 3.0, the error message is:
	
	  System Disk Error: The current drive does not contain system files.
	
	CAUSE
	=====
	
	This error can occur if you try to use the Make System Disk option with a floppy
	disk that contains files.
	
	RESOLUTION
	==========
	
	To work around this behavior, use either of the following methods:
	
	- Remove all the files from the disk before you make it a system disk.
	
	- Use the MS-DOS SYS command to transfer the system files to the disk. This
	  method works on disks that already contain files. To use this method, type
	  the following line at an MS-DOS prompt:
	
	  sys a:
	
	Additional query words: 3.00 3.10 3.11 winfile
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin300 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.0,3.1,3.11
	
	=============================================================================
	

{% endraw %}
