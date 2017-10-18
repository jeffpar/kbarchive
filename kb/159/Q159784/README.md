---
layout: page
title: "Q159784: Sony SDT 5000 Problems on AHA-1510"
permalink: kb/159/Q159784/
---

## Q159784: Sony SDT 5000 Problems on AHA-1510

	Article: Q159784
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you attempt to use a SONY SDT 5000 SCSI tape backup drive on an Adaptec
	AHA-1510 SCSI host adapter, the device may appear to function incorrectly, or to
	log errors during operation.
	
	MORE INFORMATION
	================
	
	The SONY SDT 5000 SCSI tape drive and the Adaptec AHA-1510 SCSI host adapter are
	both on the Microsoft Windows NT Hardware Compatibility List (HCL). However, the
	use of these two devices together is not a supported configuration. This is
	documented in the HCL as a subnote to the Sony SDT 5000 tape drive.
	
	The drive may also have problems when used with the other Adaptec controller
	cards of the same series that use the AIC-6360 chipset. Some of adapters that
	use this chipset are: AVA-1505, AVA-1515, AHA-1520, and AHA-1522.
	
	The hardware components mentioned in this article are manufactured by vendors
	independent of Microsoft. Microsoft makes no warranty, implied or otherwise,
	regarding these products' performance or reliability.
	
	
	Additional query words: sony adaptec
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	
	=============================================================================
	
