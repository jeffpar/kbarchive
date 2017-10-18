---
layout: page
title: "Q134698: Windows NT Setup Does Not Detect QLogic PCI SCSI Adapter"
permalink: kb/134/Q134698/
---

## Q134698: Windows NT Setup Does Not Detect QLogic PCI SCSI Adapter

	Article: Q134698
	Product(s): Microsoft Windows NT
	Version(s): 
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
	
	When you install Windows NT 3.51, the following error message appears:
	
	  Setup is unable to locate the hard drive partition prepared by the MS-DOS
	  portion of Setup.
	
	This symptom occurs if your boot drive is connected to a QLogic PCI SCSI host
	adapter that is the primary device controller on your computer.
	
	CAUSE
	=====
	
	Windows NT Setup does not automatically detect the QLogic PCI SCSI host adapter.
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	- If your SCSI host adapter is the primary device controller, reinstall Windows
	  NT 3.51 and skip the mass storage device detection. Then install the correct
	  driver for your SCSI host adapter (QL10WNT.SYS) by selecting it from the list
	  of drivers provided by Setup .
	
	  -or-
	
	- If your SCSI host adapter is the secondary device controller, continue with
	  Setup and add the correct SCSI driver later by running Windows NT Setup from
	  the Program Manager Main group.
	
	Additional query words: prodnt scsi eide
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	
	=============================================================================
	
