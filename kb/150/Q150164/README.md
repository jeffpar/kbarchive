---
layout: page
title: "Q150164: VFBACKUP Could Not Load VFD.VXD"
permalink: /kb/150/Q150164/
---

## Q150164: VFBACKUP Could Not Load VFD.VXD

{% raw %}

	Article: Q150164
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbhw diskmem win95 kbHardware kbDiskMemory
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start your computer, you may receive the following error message:
	
	  VFBACKUP could not load VFD.VXD
	
	CAUSE
	=====
	
	The error message can be caused by one of the following:
	
	- SCSI controllers
	
	- Controllers that incorrectly assume maximum total physical memory of 16
	  megabytes (MB)
	
	- Controllers that use their own DMA controller (as opposed to one of the
	  pre-defined DMA channels on the system board) and whose BIOS lacks support
	  for Virtual DMA Services (VDS)
	
	- A damaged or missing Vfd.vxd file in the Windows\System folder
	
	RESOLUTION
	==========
	
	Follow these steps to enable double-buffering support for Windows 95:
	
	1. At the MS-DOS prompt, type "attrib -r -s -h c:\msdos.sys" (without the
	  quotation marks), and then press ENTER.
	
	2. Type "edit c:\msdos.sys" (without the quotation marks), and then press ENTER.
	
	3. Add the line "DoubleBuffer=1" (without the quotation marks) to the [Options]
	  section of the Msdos.sys file, save the changes, and quit MS-DOS Editor.
	
	4. At the MS-DOS prompt, type "attrib +r +s +h c:\msdos.sys" (without the
	  quotation marks), and then press ENTER.
	
	5. Restart the computer.
	
	If following these steps does not resolve the behavior, repeat steps 1-5, and
	change the line in the Msdos.sys file to DoubleBuffer=2.
	
	NOTE: If your boot drive is compressed, make sure you edit the copy of the
	Msdos.sys file located on the host drive for drive C.
	
	If the Vfd.vxd file is missing or damaged, extract a new copy from your original
	Windows disks or CD-ROM to the Windows\System folder. For information about
	extracting a new copy of a file, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	MORE INFORMATION
	================
	
	If Windows Setup determines that your controller may need double- buffering, it
	will add a DoubleBuffer=1 (or 2) entry to the [Options] section of the Msdos.sys
	file, which will automatically load Dblbuff.sys. To manually enable
	double-buffering, you can either add the entry described in the "Resolution"
	section to the Msdos.sys file, or add the following line to the Config.sys
	file:
	
	  DEVICE=<drive>:\<path>\DBLBUFF.SYS [/D+]
	
	The optional /D+ parameter instructs Dblbuff.sys to double-buffer all disk I/O
	all the time. By default, it will only double-buffer I/O to upper memory blocks
	(UMBs), and it will automatically stop double-buffering if it appears to be
	unnecessary.
	
	Failures related to a need for double-buffering usually occur first during read
	operations, but the computer may eventually write incorrect data to the drive
	resulting in file corruption.
	
	Additional query words: buffering doublebuffer
	
	======================================================================
	Keywords          : kbenv kberrmsg kbhw diskmem win95 kbHardware kbDiskMemory 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
