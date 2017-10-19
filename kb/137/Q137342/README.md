---
layout: page
title: "Q137342: Incorrect Drive Size Reported Using Compaq SmartSCSI Array"
permalink: /kb/137/Q137342/
---

## Q137342: Incorrect Drive Size Reported Using Compaq SmartSCSI Array

	Article: Q137342
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): kb3rdparty kbhw kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you add another Compaq SmartSCSI Array controller and configure it for
	hardware RAID level 5 array using the EISA Configuration utility, Windows NT
	reports the hard drive sizes incorrectly.
	
	CAUSE
	=====
	
	This problem occurs if the SmartSCSI Array controller's ROM information is not
	reset after configuring the controller using the EISA Configuration utility.
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	1. Reboot your computer with the EISA Configuration Utility disk in Drive A.
	
	2. Press CTRL+A to enable and view Advanced mode configuration.
	
	3. Select System Configuration and then select Configure Hardware.
	
	4. Select Review or Modify Hardware Settings.
	
	5. Select View or Edit Details.
	
	6. From the list of controllers, select SmartSCSI Array Controller.
	
	7. Choose Reset Controller.
	
	8. Save and exit the utility.
	
	9. Reboot the computer and restart Windows NT.
	
	For more information, contact Compaq Technical Support at (800) 652-6672.
	
	The Compaq products discussed here are manufactured by Compaq Computer Corp., a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding these products' performance or reliability.
	
	Additional query words: prodnt bios cmos
	
	======================================================================
	Keywords          : kb3rdparty kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51
	
	=============================================================================
	
