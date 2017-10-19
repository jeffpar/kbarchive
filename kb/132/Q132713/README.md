---
layout: page
title: "Q132713: Event ID 22 Appears After Upgrading to Windows NT 3.51"
permalink: /kb/132/Q132713/
---

## Q132713: Event ID 22 Appears After Upgrading to Windows NT 3.51

	Article: Q132713
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install or upgrade to Windows NT 3.51 on a computer using a Matrox MGA
	or Compaq QVision 2000 Compatible video adapter driver shipped with Windows NT
	3.51, the following system events appear in the Event Viewer:
	
	  Event ID: 22
	  Source: MGA
	  Type: Error
	  Description: A conflict has been detected between two drivers which
	  claimed two overlapping IO port regions. Driver Amsint with device
	  \device\<scsiport0 or video0>.translated claimed an IO port range with
	  starting address in data address <hex address> and <hex address>,
	  and length in data address <hex address>.
	
	The same event may appear multiple times with the following drivers:
	
	  i8042prt
	  sndsys (adlib.mid)
	  sndsys (WSSWave1n0)
	  atdisk
	
	
	RESOLUTION
	==========
	
	Matrox has developed a fix for this card that can obtained from Compaq at:
	
	  http://www.compaq.com/support/files/drvVideo.html
	
	The correct file for Windows NT 3.5 and 3.51 is:
	
	  Filename:    SP1322.EXE
	  Size:        895k
	  Date:        25 August 95
	  Description: Windows NT 3.5 and 3.51 Graphics Support Disk for Compaq
	               Systems Version2.30A This diskette contains the latest
	               graphics drivers for the Windows NT 3.5 and 3.51 operating
	               system running on Compaq hardware.
	
	Before applying the SP1322 patch ensure the Compaq system BIOS is 1/96 or newer
	or a STOP: 0x0000000A will occur.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	
	
	Additional query words: prodnt display card board
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
