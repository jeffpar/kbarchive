---
layout: page
title: "Q139494: Multiple CRC Errors and Hardware Overruns Using RAS"
permalink: /kb/139/Q139494/
---

## Q139494: Multiple CRC Errors and Hardware Overruns Using RAS

	Article: Q139494
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	RAS Monitor reports multiple CRC errors and Hardware Overruns when you transfer
	files over a Remote Access Service (RAS) connection. This problem occurs on your
	Windows NT 3.51 RAS client computer if you have installed Windows NT 3.51
	Service Pack 2 and you are using the ATAPI.SYS device driver.
	
	NOTE: The ATAPI.SYS device driver is used for IDE CD-ROM drives and Enhanced IDE
	(EIDE) hard disks.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, use one of the following:
	
	- Use the Atapi.sys device driver from the original Windows NT 3.51
	  distribution media. Copy the original Windows NT 3.51 Atapi.sys file to your
	  %SystemRoot%\system32\drivers directory.
	
	  NOTE: This workaround should be used only if you do not require the updated
	  ATAPI.SYS device driver included in Windows NT 3.51 Service Pack 2 for proper
	  functionality of your EIDE hard disk.
	
	  -or-
	
	- Obtain the latest Service Pack for Windows NT.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt ftp copy download
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
