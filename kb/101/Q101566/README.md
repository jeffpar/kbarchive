---
layout: page
title: "Q101566: Unable to Access Corel LS2000 SCSI After Upgrading"
permalink: /kb/101/Q101566/
---

## Q101566: Unable to Access Corel LS2000 SCSI After Upgrading

	Article: Q101566
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may be unable to access the Corel LS2000 SCSI device after upgrading to
	MS-DOS.
	
	CAUSE
	=====
	
	Corel Technical Support has confirmed that the device drivers typically used to
	access the LS2000 SCSI drive cannot automatically locate the address range at
	which the device's adapter ROM resides. This problem does not occur with
	previous versions of MS-DOS.
	
	WORKAROUND
	==========
	
	To work around this problem, specify the address range used by the LS2000 when
	you load the SCSI device drivers in the CONFIG.SYS file.
	
	MORE INFORMATION
	================
	
	CUNI_LS2.SYS
	------------
	
	If you try to load CUNI_LS2.SYS with MS-DOS 6.0, you may receive the following
	error message:
	
	  Corel LS2000 SCSI host adapter not found. Host adapter support code not
	  installed.
	
	When the computer has finished booting, the SCSI device is not accessible. To
	work around this problem, you must specify the address range that the device
	uses. Using the following syntax, add the /MEM switch to the line in the
	CONFIG.SYS file that loads CUNI_LS2.SYS
	
	     DEVICE=<drive><path>CUNI_LS2.SYS /MEM:<;xxxx-xxxx>
	
	where <xxx-xxxx> represents the entire address range at which the device is
	located. The default for this range is D800-DBFF, however, it can be changed
	using hardware switches.
	
	CUNIASP.SYS
	-----------
	
	If you try to load CUNIASP.SYS, no error message occurs, but the SCSI device is
	still inaccessible.
	
	To specify the address range while using CUNIASP.SYS, an additional device driver
	must be loaded. The device driver ASPLS_D.SYS should be loaded immediately
	before CUNIASP.SYS in the CONFIG.SYS file and should have the following syntax
	
	     DEVICE=<drive><path>ASPLS_D.SYS /LS2000,<xxxx>,3
	
	where <xxxx> represents the starting address used by the LS2000. The
	default starting address is D800.
	
	For more information on the above device drivers and the LS2000 SCSI device, call
	Corel Technical Support.
	
	Additional query words: 6.00 6.20 6.21 6.22
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
