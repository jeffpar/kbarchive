---
layout: page
title: "Q131712: STOP Msg: 0x0000007B or SCSI Devices Missing on Proliant 1500"
permalink: /kb/131/Q131712/
---

## Q131712: STOP Msg: 0x0000007B or SCSI Devices Missing on Proliant 1500

	Article: Q131712
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you apply Service Pack 2 for Windows NT 3.5 to your Compaq Proliant 1500
	computer, it does not boot or you lose access to your SCSI devices.
	
	If your Proliant 1500 has an integrated SCSI controller as its only SCSI host
	adapter, it fails to boot with the following error:
	
	  STOP: 0x0000007B
	  INACCESSIBLE_BOOT_DEVICE
	
	-or-
	
	If you reconnect your boot disk to a secondary SCSI controller, you lose access
	to SCSI devices connected to the integrated controller.
	
	CAUSE
	=====
	
	The Proliant 1500 contains an Integrated SCSI-Fast/Wide controller. Windows NT
	detects the controller as an NCRC810. Service Pack 2 includes a new NCRC810.SYS
	driver. This driver does not load on the Proliant 1500.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem has been corrected in Windows NT version 3.51.
	
	The Compaq Proliant 1500 is manufactured by Compaq Computer Corp., a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
