---
layout: page
title: "Q126459: Windows NT Backup Fails During Restore with a DPT 2022"
permalink: kb/126/Q126459/
---

## Q126459: Windows NT Backup Fails During Restore with a DPT 2022

	Article: Q126459
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
	
	When you attempt to restore data using Windows NT Backup with a Mylex DAC 960 as
	the primary SCSI controller and a DPT 2022 as the secondary SCSI controller, the
	following error message appears:
	
	  STOP: 0x0000007B Inaccessible Boot Device
	
	This problem occurs on computers with an EISA bus.
	
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	1. Download the latest DPT 2022 SCSI controller driver (DPTSCSI.SYS) from
	  Distributed Processing Technology's (DPT) bulletin board system (BBS) at
	  (407) 831-6432 or (407) 830-1070. DPTSCSI.SYS is contained in the compressed
	  file NT351JJ.ZIP.
	
	2. Replace the existing driver with the one extracted from NT351JJ.ZIP.
	
	3. If the cache on the DPT 2022 SCSI controller is enabled, use the EISA
	  configuration utility to change the cache from WRITE-BACK to WRITE- THROUGH.
	
	  NOTE: If the problem still occurs after you complete this procedure, disable
	  the cache on the SCSI controller.
	
	4. Ensure the Y50 jumper (above the SCSI controller external connector) is
	  enabled (in the on position). This jumper provides termination power.
	
	5. Reduce the SCSI controller bus speed to 5 megabytes per second with CD-ROM
	  drive(s) connected. If you have more than one CD-ROM connected to the DPT
	  SCSI controller, disconnect all but one of the CD-ROM drives. If you have an
	  external CD-ROM drive, ensure it is not installed on a cabinet. Also, ensure
	  the total SCSI cable length, from the DPT SCSI controller to the last
	  terminating device, does not exceed 9 feet.
	
	6. Make sure that the DPT 2022 SCSI controller is seated in a higher slot than
	  the primary SCSI controller on the EISA bus. For example, seat the Mylex DAC
	  960 SCSI controller in slot 1 and the DPT 2022 SCSI controller in slot 2.
	
	7. Disable any built-in SCSI controllers on the computer motherboard.
	
	Additional query words: trap 0x7b 0x07b prodnt mbps mb blue screen
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
