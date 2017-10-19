---
layout: page
title: "Q137860: STOP Msg: 0x0000007B Installing Windows NT on HP Vectra XU/XUC"
permalink: /kb/137/Q137860/
---

## Q137860: STOP Msg: 0x0000007B Installing Windows NT on HP Vectra XU/XUC

	Article: Q137860
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows NT 3.5 or 3.51 on a Hewlett-Packard (HP) Vectra XU/XUC
	P5 Pentium-based computer using an on-board AMD SCSI controller, the following
	STOP Message appears after Setup completes the mass storage device detection and
	reboots your computer:
	
	  STOP: 0x0000007B
	  INACCESSIBLE_BOOT_DEVICE
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	1. Ensure the BIOS version of your Vectra computer is 5.08 or above. If it is
	  not, contact HP Vectra DeskTop Support at (970) 635-1000 for a BIOS update.
	
	2. Obtain VJS2NIUS.EXE, which contains a new AMD SCSI controller driver
	  AMSINT.SYS, from the HP Bulletin Board Service at (208) 344-1691 or HP's web
	  site at http://www.hp.com. Extract VJS2NIUS.EXE on another computer.
	
	3. Run Windows NT Setup by typing the following (which creates the Windows NT
	  Setup floppy disks):
	
	  WINNT /OX
	
	  -or-
	
	  WINNT32 /OX
	
	4. Replace the AMSINT.SYS driver on the third Windows NT Setup floppy disk with
	  the SCSI driver obtained from HP (Step 2 above).
	
	5. Continue Windows NT Setup.
	
	Additional query words: trap 0x7b blue hang
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
