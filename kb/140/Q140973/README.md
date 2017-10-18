---
layout: page
title: "Q140973: Inaccessible Floppy Disk Drive on Toshiba Portege 610CT"
permalink: kb/140/Q140973/
---

## Q140973: Inaccessible Floppy Disk Drive on Toshiba Portege 610CT

	Article: Q140973
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you install Windows NT on a Toshiba Protege 610CT computer, the floppy
	disk drive is inaccessible.
	
	CAUSE
	=====
	
	The Toshiba Protege 610CT computer takes approximately 18 milli-seconds (ms) to
	seek and settle to track 0 on the floppy disk which is too slow for the Windows
	NT floppy disk driver (FLOPPY.SYS) which expects to gain access within 4 ms.
	
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
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	
