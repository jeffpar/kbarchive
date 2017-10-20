---
layout: page
title: "Q108603: ScanDisk Reports Undo Floppy Is Damaged"
permalink: /kb/108/Q108603/
---

## Q108603: ScanDisk Reports Undo Floppy Is Damaged

{% raw %}

	Article: Q108603
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Running SCANDISK /UNDO results in the following error message:
	
	  The Undo information on the disk in drive A is damaged and cannot be
	  retrieved.
	
	  To undo changes that ScanDisk made previously, insert an Undo disk in drive A,
	  and then choose Try Again. If the Undo disk you want does not fit in drive A,
	  insert the disk in the appropriate drive, and then restart ScanDisk by
	  specifying the /UNDO switch and the appropriate drive letter (for example,
	  SCANDISK /UNDO A:).
	
	  If you do not want to undo ScanDisk's changes, choose Exit.
	
	CAUSE
	=====
	
	This error occurs when the SCANUNDO.DAT file on the Undo disk has a read- only
	attribute, which ScanDisk attempts to clear before opening the file. Because the
	disk is write-protected, attempting to change the attribute fails and results in
	the above error.
	
	RESOLUTION
	==========
	
	Since ScanDisk needs to change the read-only attribute on the Undo disk, first
	verify that the disk is not write protected. If it is write- protected, remove
	the write-protect tab or slide the write-protect tab to the closed position,
	then try running SCANDISK /UNDO again. If the disk is not write-protected, the
	disk may be damaged. Run SCANDISK on the Undo disk to try to correct any
	problems on the floppy disk.
	
	Additional query words: 6.22 6.20 scandisk scan disk undo win95
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
