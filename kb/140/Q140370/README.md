---
layout: page
title: "Q140370: Error Running NTBACKUP On DEC XL 590 Celebris"
permalink: kb/140/Q140370/
---

## Q140370: Error Running NTBACKUP On DEC XL 590 Celebris

	Article: Q140370
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Windows NT Backup Program (NTBACKUP) with an external SCSI 4MM
	tape Device (DEC TLZ06) on a DEC XL 590 Celebris with an embedded NCR SCSI
	53C810 controller, the following error message appears:
	
	  Error: The tape device reported an error on a request to write data to the
	  tape. Error Reported: Bus Reset
	
	The following event appears in the system log:
	
	  EventID: 9
	  Source: Symc8XX
	  Description: The device, \Device\ScsiPort0, did not respond within the timeout
	  period.
	
	RESOLUTION
	==========
	
	To resolve this problem, do one or all of the following:
	
	- Verify that the SCSI configuration and terminations are correct.
	
	- Check to make sure the System BIOS is current. The current Flash BIOS
	  available on the DEC BBS as of 11/23/95 is version 2.01.
	
	
	- Check to make sure you are running the current NCR SCSI 53C810 driver. The
	  current driver available from SYMBIOS as of 11/23/95 is SYMC8XX.SYS V2.00.00.
	
	The products included here are manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: digital prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
