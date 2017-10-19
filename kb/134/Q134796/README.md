---
layout: page
title: "Q134796: App Hangs Printing Directly to Port without Printer Connected"
permalink: /kb/134/Q134796/
---

## Q134796: App Hangs Printing Directly to Port without Printer Connected

	Article: Q134796
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Printing from a 16-bit application, such as Windows Write, causes the
	application to stop responding (hang) if the application prints directly to the
	ports and there is no printer attached to the port. Once the application has
	hung, it cannot be terminated.
	
	RESOLUTION
	==========
	
	Do not print to a port that does not have a printing device attached to it or
	there is a problem with the print device.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt lock
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51
	
	=============================================================================
	
