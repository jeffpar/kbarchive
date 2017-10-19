---
layout: page
title: "Q77853: Older Versions of Disk Manager Do Not Have XBIOS.OVL"
permalink: /kb/077/Q77853/
---

## Q77853: Older Versions of Disk Manager Do Not Have XBIOS.OVL

	Article: Q77853
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Earlier versions of Ontrack Disk Manager do not contain the file XBIOS.OVL.
	Earlier versions of Disk Manager contained the functions of XBIOS.OVL within the
	DMDRVR.BIN file.
	
	This information applies to Microsoft MS-DOS version 5.0.
	
	MORE INFORMATION
	================
	
	When upgrading to MS-DOS 5.0 in accordance with section 2.4 of the README.TXT
	file, README.TXT recommends you back up the current DMDRVR.BIN and XBIOS.OVL
	files. However, there may not be a current XBIOS.OVL file on the hard disk.
	
	Earlier versions of Ontrack Disk Manager contained the necessary information in
	the DMDRVR.BIN file. In these versions, there is no XBIOS.OVL file.
	
	When upgrading from these versions, simply backup the current DMDRVR.BIN and then
	expand the new DMDRVR.BIN and XBIOS.OVL per section 2.4 of the README.TXT file.
	XBIOS.OVL must reside in the root directory. DMDRVR.BIN may reside anywhere on
	the drive as long as the DEVICE statement in the CONFIG.SYS statement points to
	its location.
	
	DMDRVR.BIN loads XBIOS.OVL when the hard disk drive is a nonstandard drive and/or
	has more than 1024 cylinders. This driver is not required for Disk Manager to
	work properly on standard and supported drives.
	
	XBIOS.OVL became a separate file due to a growth in its information. This was a
	result of the invention of IDE drives, the use of IRQ 14 for hard disk
	controller in AT systems, and an increase in the number of unsupported drive
	types.
	
	The product mentioned is manufactured independently of Microsoft; we make no
	warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	REFERENCES
	==========
	
	Ontrack: (612) 937-2121
	
	
	Additional query words: 5.00 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
