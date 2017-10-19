---
layout: page
title: "Q74984: EMM386.EXE Hangs Machine with Adaptec Controller"
permalink: /kb/074/Q74984/
---

## Q74984: EMM386.EXE Hangs Machine with Adaptec Controller

	Article: Q74984
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using Microsoft MS-DOS 5.0 EMM386.EXE with an Adaptec host adapter,
	some of your device drivers and terminate-and-stay-resident (TSR) programs may
	not load or your system may stop responding (hang).
	
	WORKAROUND
	==========
	
	To work around this problem, you must obtain the current ASPI (Advance SCSI
	Programming Interface) device drivers from Adaptec. The ASPI device drivers are
	included with new Adaptec EZ-SCSI software. You can purchase the Adaptec EZ-SCSI
	software by calling Adaptec.
	
	If you already have an ASW-1410 or ASW-1210 controller card, you can upgrade to
	the current ASPI version by downloading it from the Adaptec bulletin board
	service.
	
	If you already have ASPI drivers, you should move the command for those drivers
	to the first line of your CONFIG.SYS file.
	
	For more information, please contact Adaptec Technical Support.
	
	The products included here are manufactured by Adaptec, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 5.00 3rdparty third-party third party
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x
	
	=============================================================================
	
