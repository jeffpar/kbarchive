---
layout: page
title: "Q76749: Enabling Internal Modem on Zenith Laptop"
permalink: kb/076/Q76749/
---

## Q76749: Enabling Internal Modem on Zenith Laptop

	Article: Q76749
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After installing Microsoft MS-DOS 5 Upgrade on a Zenith laptop with an internal
	modem, the modem may cease to function. The modem must be turned on using the
	original Zenith DOS MACHINE command as follows:
	
	  machine modem on
	
	MORE INFORMATION
	================
	
	To extend battery life, power is not supplied to the internal modem until it is
	turned on with the MACHINE MODEM ON command. You may need to copy the
	MACHINE.COM file from the OLD_DOS.1 directory or the original Zenith DOS disks
	and use the SETVER command to report the original Zenith DOS version to
	MACHINE.COM.
	
	For more information on the SETVER command, see pages 561-564 of version 5.0
	"Microsoft MS-DOS User's Guide and Reference."
	
	The product included here is manufactured by vendors independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: 5.00 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
