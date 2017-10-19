---
layout: page
title: "Q142627: Ntdetect.com Incorrectly Detects Some S3 Video Controllers"
permalink: /kb/142/Q142627/
---

## Q142627: Ntdetect.com Incorrectly Detects Some S3 Video Controllers

	Article: Q142627
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbdisplay
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	During the startup sequence of Windows NT 3.51, when Ntdetect.com is running,
	the system either stops responding or fails to detect the proper video adapter.
	
	CAUSE
	=====
	
	Ntdetect.com accesses an incorrect port during the S3 detection routine, which
	causes a problem on some computers.
	
	WORKAROUND
	==========
	
	Install Service Pack 5 or later for Windows NT 3.51 or upgrade to Windows NT
	4.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbdisplay 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
