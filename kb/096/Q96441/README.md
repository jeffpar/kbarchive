---
layout: page
title: "Q96441: MS-DOS 6 and later Require ASPI4DOS.SYS Version 3.1 or Later"
permalink: /kb/096/Q96441/
---

## Q96441: MS-DOS 6 and later Require ASPI4DOS.SYS Version 3.1 or Later

{% raw %}

	Article: Q96441
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have an Adaptec SCSI controller card that requires the ASPI4DOS.SYS
	device driver, you may receive the following error message if you try to install
	or run MS-DOS:
	
	  unrecoverable error: hard disk is not readable
	
	NOTE: You may also experience problems with other MS-DOS components.
	
	CAUSE
	=====
	
	This error occurs if you are using a version of the ASPI4DOS.SYS device driver
	earlier than version 3.1.
	
	WORKAROUND
	==========
	
	To avoid these problems, upgrade to version 3.1 or later of the ASPI4DOS.SYS
	device driver before you install MS-DOS 6.0 or 6.2.
	
	You may be able to work around the problem by using the following procedure:
	
	1. Run Setup with the /F parameter to create an MS-DOS 6.0 or 6.2 startup disk.
	  For example, type "a:setup /f" (without the quotation marks) at the MS-DOS
	  command prompt and then press ENTER.
	
	2. Restart your computer with the MS-DOS 6.0 or 6.2 startup disk you created in
	  drive A in step 1.
	
	3. Run Setup from Disk 1 of the MS-DOS 6.0 or 6.2 Upgrade disks.
	
	MORE INFORMATION
	================
	
	The products included here are manufactured by Adaptec, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 6.22 6.00 6.20 3RDPARTY stepup upgrade step-up
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
