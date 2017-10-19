---
layout: page
title: "Q154945: FlushFileBuffers Not Committing Filesize Properly in NT3.51 SP4"
permalink: /kb/154/Q154945/
---

## Q154945: FlushFileBuffers Not Committing Filesize Properly in NT3.51 SP4

	Article: Q154945
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If your system crashes immediately after you do a FlushFileBuffers() on a file
	located on an Windows NT file system (NTFS) partition, upon rebooting, the
	filesize for that file may be reported as 0 bytes.
	
	This is only a problem in Windows NT 3.51 with Service Pack 4 Build 1057.
	
	CAUSE
	=====
	
	When you do a Flush Buffers on a file, the data is actually written to disk, and
	the Filesize (and ValidDataLength) is effectively flushed to a logfile. This
	logfile is not properly committed to disk causing an incorrect filesize to be
	reported when doing a dir.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	
	=============================================================================
	
