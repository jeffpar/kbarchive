---
layout: page
title: "Q152309: WinNT 3.51 w/ CPU Maxed Prints Very Slowly to Banding Printers"
permalink: kb/152/Q152309/
---

## Q152309: WinNT 3.51 w/ CPU Maxed Prints Very Slowly to Banding Printers

	Article: Q152309
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	
	SYMPTOMS
	========
	
	Windows NT version 3.51 does not print as efficiently as Windows NT 3.5 does to
	banding printers (for example, the Hewlett-Packard DeskJet & BubbleJet).
	Printing a single page can take 30 minutes. This only happens when an
	application is fully utilizing the CPU.
	
	
	WORKAROUND
	==========
	
	To work around this problem, use the Windows NT 3.5 PARPORT.SYS driver. You must
	shutdown and restart Windows NT after you replace the driver.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51.
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
