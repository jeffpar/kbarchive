---
layout: page
title: "Q80297: FASTOPEN Should Not Be Used with Speed Disk or Compress"
permalink: /kb/080/Q80297/
---

## Q80297: FASTOPEN Should Not Be Used with Speed Disk or Compress

{% raw %}

	Article: Q80297
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.01,5.0,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Norton SpeedDisk utility, PC Tools Compress utility, or any disk
	optimization utilities are not compatible with the MS-DOS FASTOPEN.EXE utility.
	
	Microsoft has confirmed that in order to avoid data corruption, FASTOPEN.EXE
	should not be loaded when using a disk optimization or disk compaction utility.
	This is usually done by disabling or removing the FASTOPEN command in the
	AUTOEXEC.BAT or CONFIG.SYS file and rebooting the system before the disk
	optimizer is used.
	
	
	MORE INFORMATION
	================
	
	FASTOPEN.EXE stores the locations of files and directories in memory, making
	access to these files faster than normal. Disk optimizers like Speed Disk and
	Compress move files around, changing the location of the file. However,
	FASTOPEN.EXE does not realize that the file has been moved, and if the file is
	accessed after the disk optimization, the file is not properly read because
	FASTOPEN accesses the file's old location. This can cause file and data
	corruption.
	
	For more information on FASTOPEN.EXE and disk optimizers, query on the following
	words:
	
	  " FASTOPEN DISK OPTIMIZER " (without the quotation marks)
	
	Symantec, manufacturer of Norton Utilitis, has released Norton Utilities version
	6.01, which prompts you to disable FASTOPEN.EXE to prevent you from optimizing
	the disk with it in memory. Owners of Norton Utilities 6.0 may call Norton
	technical support at (213) 319-2000 to obtain a free upgrade to version 6.01.
	
	Reference(s):
	
	"Microsoft MS-DOS User's Guide and Reference," version 5.0, page 487
	
	Additional query words: 6.22 5.00 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401
	Version           : MS-DOS:3.x,4.01,5.0,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
