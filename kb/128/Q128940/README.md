---
layout: page
title: "Q128940: Cannot Install DC21X4.SYS Driver Included in Service Pack 2"
permalink: kb/128/Q128940/
---

## Q128940: Cannot Install DC21X4.SYS Driver Included in Service Pack 2

	Article: Q128940
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
	
	You are unable to install the updated driver for the DEC DC21040 PCI Ethernet
	adapter (DC21X4.SYS) included with Windows NT 3.5 U.S. Service Pack 2.
	
	CAUSE
	=====
	
	The file name of the DEC DC21040 driver included with Windows NT 3.5 is
	DC21040.SYS. Because the file name is different than the file name of the DEC
	DC21040 driver included with Service Pack 2, the driver is not updated when you
	install Service Pack 2.
	
	Service Pack 2 does not include an .INF file that can be used to install the
	DC21X4.SYS driver. The INF file included with Windows NT 3.5 cannot be used to
	correctly install the DC21X4.SYS driver.
	
	RESOLUTION
	==========
	
	The DC21040.SYS driver included with Windows NT 3.5 is version 6.0. DEC has
	released version 6.3 of this driver. Please contact DEC to obtain this driver.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: digital equipment corporation prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
