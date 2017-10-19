---
layout: page
title: "Q130917: Trantor T160 or T260 May Cause Windows NT to Hang"
permalink: /kb/130/Q130917/
---

## Q130917: Trantor T160 or T260 May Cause Windows NT to Hang

	Article: Q130917
	Product(s): Microsoft Windows NT
	Version(s): 3.10 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the Trantor T130b SCSI adapter driver for Trantor T160 or Trantor
	T260 SCSI adapters, Windows NT may stop responding (hang).
	
	RESOLUTION
	==========
	
	The Trantor T160 and T260 SCSI controllers are not on the Windows NT Hardware
	Compatibility List (HCL). A driver is provided by Trantor Systems on CompuServe
	in the CD-ROM Vendor B (CDVENB) forum. The file name is TSLDRV.ZIP and it is
	located in the Trantor Systems section (#3) of the CDVENB forum. The TSLDRV.ZIP
	supports for the following Trantor SCSI controllers: T160, T260, T338, T348, and
	T358. See the READ_NT.ME file that accompanies the SCSI adapter driver or
	contact Trantor Systems Technical Support at (800) 959-SCSI for more
	information.
	
	
	The Trantor products discussed here are manufactured by Trantor Systems, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: prodnt 3.10 scsi controller
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.10 3.50
	
	=============================================================================
	
