---
layout: page
title: "Q148492: SCSI ID Configuration with Future Domain Controllers"
permalink: kb/148/Q148492/
---

## Q148492: SCSI ID Configuration with Future Domain Controllers

	Article: Q148492
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The SCSI ID configuration for Future Domain SCSI controllers is the reverse of
	the industry standard. The reversal of the SCSI ID is for performance and/or
	priority reasons on the SCSI BUS.
	
	The Future Domain SCSI adapters use the highest SCSI ID for the boot drive, this
	is normally ID 6. When adding new SCSI device it will be important to configure
	the device with a lower SCSI ID then the current boot device.
	
	The following information from the Future Domain Installation Instructions
	discusses the reasoning behind the reverse ID scheme:
	
	  Devices with higher SCSI IDs receive priority from your computer over devices
	  with lower IDs. The controller uses SCSI ID 7, so it is given the highest
	  priority by your computer. You may assign higher IDs to your most often used
	  and fastest devices.
	
	  For example, our main SCSI hard drive should be assigned SCSI ID 6 so that it
	  will receive priority over other SCSI devices.
	
	  Note: If you have more than one SCSI hard drive, the drive with the highest ID
	  will always be the boot drive.
	
	MORE INFORMATION
	================
	
	Consult the Future Domain Instructions manual that was provided with your Future
	Domain product.
	
	The Future Domain SCSI products included here are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: prodnt 3.5
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51
	
	=============================================================================
	
