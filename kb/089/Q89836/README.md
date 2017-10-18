---
layout: page
title: "Q89836: System Hangs with ASPI4DOS.SYS Version 3.0 or Earlier"
permalink: kb/089/Q89836/
---

## Q89836: System Hangs with ASPI4DOS.SYS Version 3.0 or Earlier

	Article: Q89836
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Adaptec's ASPI4DOS.SYS driver versions 3.0 or earlier, you may
	experience problems executing File Manager within Microsoft Windows for
	Workgroups or Microsoft Windows 3.1. After you start File Manager, the cursor
	may remain as an hourglass and the system may subsequently stop responding
	(hang).
	
	Your system may also stop (hang) when you attempt to save files.
	
	CAUSE
	=====
	
	Adaptec's 1542B SCSI controller card requires ASPI4DOS.SYS driver version 3.0a
	or later to operate correctly with version 3.1 of Microsoft Windows or Windows
	for Workgroups.
	
	ASPI4DOS.SYS, version 3.0, works correctly with Microsoft Windows version 3.0.
	
	RESOLUTION
	==========
	
	You need to obtain an updated driver from Adaptec. Contact Adaptec to obtain the
	latest driver.
	
	MORE INFORMATION
	================
	
	If you attempt to share a CD-ROM drive on a Windows for Workgroups machine, and
	you experience frequent system hangs, VSERVER errors or general protection (GP)
	faults, check your ASPI4DOS.SYS driver. It may be too new for your system BIOS.
	
	ASPI4DOS.SYS drivers dated 6/91 or earlier do not work with MS-DOS versions
	greater than 3.0.
	
	
	For more information on ASPI4DOS.SYS, contact Adaptec technical support.
	
	The Adaptec product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: gpf 3.10 3.11 lockup hang 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
