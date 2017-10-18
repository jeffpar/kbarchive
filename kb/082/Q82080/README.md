---
layout: page
title: "Q82080: MicroMASTER 486, SCSI Adapter: Problems with 386/Enhanced Mode"
permalink: kb/082/Q82080/
---

## Q82080: MicroMASTER 486, SCSI Adapter: Problems with 386/Enhanced Mode

	Article: Q82080
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The MicroMASTER 486, AOX Inc.'s upgrade card for the IBM PS/2, may require a
	virtual device driver with certain SCSI adapters for proper Windows 386 enhanced
	mode operation.
	
	MORE INFORMATION
	================
	
	The MicroMASTER upgrades the processor of an IBM PS/2. If an upgrade board and a
	SCSI adapter are both present, you may need to add the virtual device driver
	MMVDMAD.386 to the [386Enh] section of the SYSTEM.INI file.
	
	Two 386 enhanced mode problems may occur:
	
	- Windows installed on the SCSI drive doesn't run.
	
	- Windows installed on a second, non-SCSI drive in a dual hard drive system
	  cannot access the SCSI drive.
	
	These problems can be corrected by installing the MMVDMAD.386 virtual device
	driver.
	
	Copy the file MMVDMAD.386 from the MicroMASTER option disk to the Windows SYSTEM
	subdirectory, and add the following line to the [386Enh] section of the
	SYSTEM.INI file:
	
	  Device=MMVDMAD.386
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	REFERENCES
	==========
	
	"MicroMASTER 486 User's Guide," page 35
	
	Additional query words: 3.00 3.00a 3.0 3.0a 3.1 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
