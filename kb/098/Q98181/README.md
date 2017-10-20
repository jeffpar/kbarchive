---
layout: page
title: "Q98181: How to Quick Format an MSBACKUP.EXE Disk"
permalink: /kb/098/Q98181/
---

## Q98181: How to Quick Format an MSBACKUP.EXE Disk

{% raw %}

	Article: Q98181
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the /Q switch to quick format a floppy disk that was used to store
	backup files created by Microsoft Backup (MSBACKUP.EXE or MWBACKUP.EXE), you may
	receive the following error message:
	
	  Insufficient space for the MIRROR image file.
	  There was an error creating the format recovery file.
	  This disk cannot be unformatted.
	  Proceed with Format (Y/N)?
	
	CAUSE
	=====
	
	This error is generated because FORMAT cannot find enough space to create the
	mirror image file. If you choose Y to proceed, FORMAT formats the disk without
	saving any mirror information.
	
	WORKAROUND
	==========
	
	When Microsoft Backup uses more than one disk, it always uses the entire
	contents of the disk. To avoid this error, use the following command:
	
	  format /q /u <drive letter>:
	
	The /U switch instructs FORMAT to perform an unconditional format of the floppy
	disk and saves no mirror information.
	
	If the disk still cannot be quick formatted, use DELTREE to delete the backup
	file on the disk. For example, type "deltree a:\*.*" (without the quotation
	marks) at the MS-DOS command prompt and then press ENTER.
	
	Additional query words: 6.00 6.20 back up back-up mwbackup msbackup
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	

{% endraw %}
