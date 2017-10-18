---
layout: page
title: "Q139350: WinNT General Protection Fault Exiting 16-bit Access Version 2.0"
permalink: kb/139/Q139350/
---

## Q139350: WinNT General Protection Fault Exiting 16-bit Access Version 2.0

	Article: Q139350
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you exit 16-bit Access version 2.0 running on Windows NT version 3.51, a
	General Protection Fault (GPF) occurs and a Dr. Watson log is generated.
	
	
	CAUSE
	=====
	
	This occurs because the Windows NT 3.51 OLE management code incorrectly attempts
	to free up storage previously used by OLE objects within Access.
	
	RESOLUTION
	==========
	
	This problem has been corrected in the latest Service Pack for Windows NT
	version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
