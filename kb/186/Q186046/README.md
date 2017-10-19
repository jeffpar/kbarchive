---
layout: page
title: "Q186046: Mylex Dac960nt.sys May Not Find SCSI CD Devices Set to ID 6"
permalink: /kb/186/Q186046/
---

## Q186046: Mylex Dac960nt.sys May Not Find SCSI CD Devices Set to ID 6

	Article: Q186046
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	SYMPTOMS
	========
	
	When you add a SCSI CD-ROM drive and set it to ID 6 on a Mylex controller using
	the Dac960nt.sys driver, the Mylex controller will not recognize the SCSI CD-ROM
	drive and it will not be seen under Windows NT.
	
	RESOLUTION
	==========
	
	To resolve this problem, change the SCSI ID to an ID other than SCSI ID 6 and
	the SCSI CDROM will be available under Windows NT.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
