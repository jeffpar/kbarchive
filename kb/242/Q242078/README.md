---
layout: page
title: "Q242078: Stop 0xA When SNMP Extensions Enabled with SP4"
permalink: kb/242/Q242078/
---

## Q242078: Stop 0xA When SNMP Extensions Enabled with SP4

	Article: Q242078
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you enable some Simple Network Management Protocol (SNMP) extensions on a
	Microsoft Windows NT Server 4.0-based computer with Service Pack 4 installed,
	you may receive a STOP 0x0000000A error message.
	
	CAUSE
	=====
	
	This behavior can occur when you use the Symc810.sys driver.
	
	RESOLUTION
	==========
	
	Download and install the Sym8xx.sys file from the following Microsoft FTP site:
	
	  ftp://ftp.symbios.com/pub/symchips/scsi/drivers/Windows_Drivers/WindowsNT/
	
	Additional query words: nt 4.0 sp 4 stop
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
