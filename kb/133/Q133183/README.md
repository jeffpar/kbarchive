---
layout: page
title: "Q133183: STOP 0x7A with Adaptec 2740A SCSI and 3Com Etherlink III"
permalink: /kb/133/Q133183/
---

## Q133183: STOP 0x7A with Adaptec 2740A SCSI and 3Com Etherlink III

	Article: Q133183
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
	
	SUMMARY
	=======
	
	When you use an Adaptec 2740A SCSI controller and a 3Com Etherlink III network
	interface card (NIC) in Windows NT 3.51, the following error message appears:
	
	  STOP: 0x0000007a (0x00000103, 0xC0000185, 0x00000000, 0x00043000)
	  Kernel_Data_Inpage_Error
	  CPU ID:Genuine Intel 5.2.5 IRQ1:1F Sys Version:0xF0000327
	
	CAUSE
	=====
	
	This problem occurs if the Adaptec 2740A SCSI controller and the 3Com Etherlink
	III NIC are using the same IRQ. The Adaptec 2740A SCSI controller uses a default
	IRQ of 10.
	
	RESOLUTION
	==========
	
	To correct this problem, configure the IRQ of the 3Com Etherlink III NIC or the
	Adaptec 2940A SCSI controller to another, unused IRQ.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: trap 7A elnkiii
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	
	=============================================================================
	
