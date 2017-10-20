---
layout: page
title: "Q104995: Using SCSI Devices that Require Device Drivers"
permalink: /kb/104/Q104995/
---

## Q104995: Using SCSI Devices that Require Device Drivers

{% raw %}

	Article: Q104995
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0,5.0a,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Your computer may not operate properly if you have a SCSI controller installed
	but do not have a SCSI device driver loaded in your CONFIG.SYS file. A SCSI
	driver can serve one or more of the following purposes:
	
	- Use Virtual DMA Services (VDS) to correctly compute physical addresses
	
	- Fix bugs in the SCSI controller ROM BIOS
	
	- Add features not included in the SCSI controller ROM BIOS
	
	If your SCSI device driver is not loaded, you may have problems ranging from
	occasional system hangs to complete disk data loss. These symptoms are usually
	accelerated if you are using an upper memory block (UMB) provider (such as
	EMM386.EXE) or you are running Windows in 386 enhanced mode.
	
	MORE INFORMATION
	================
	
	Any device (SCSI being the most common) that uses direct memory access (DMA)
	controller hardware to transfer data to and from system memory can encounter
	problems if it used in conjunction with an 80386 memory manager (such as
	EMM386.EXE, QEMM.EXE, 386MAX.EXE, and so forth).
	
	The ROM BIOS code that supports a DMA device must be aware that under an 80386
	memory manager, linear addresses used by MS-DOS programs may not correspond in
	the usual manner to physical addresses on the system bus.
	
	The Virtual DMA Services is a standard supported by 80386 memory managers that
	allows ROM BIOS and device drivers to determine the correct "linear-to-
	physical" memory mapping for a particular linear address, ensuring that the
	correct DMA transfer address is generated for I/O requests.
	
	SCSI controller cards can be grouped in three categories with regards to VDS
	compliance:
	
	- SCSI controller cards that have "VDS-compliant" ROM BIOS. (No additional
	  driver software is needed.)
	
	- SCSI controller cards that have a non-DMA transfer mode. (These do not need
	  to be VDS aware.)
	
	- SCSI controller cards that are not VDS compliant. (These require an
	  installable MS-DOS device driver.)
	
	RESOLUTION
	==========
	
	If you don't have the correct driver for your SCSI controller, contact your SCSI
	hardware vendor. In the interim, adding the following command to your CONFIG.SYS
	file may help to work around the problem:
	
	  " DEVICE=C:\DOS\SMARTDRV.EXE /DOUBLE_BUFFER " (without the quotation marks)
	
	Additional query words: 6.22 5.0, 5.0a 5.00 5.00a 6.00 6.20 config.sys stop responding hang
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.0,5.0a,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
