---
layout: page
title: "Q117397: Incorrect File Size Displayed Using FTP Service"
permalink: kb/117/Q117397/
---

## Q117397: Incorrect File Size Displayed Using FTP Service

	Article: Q117397
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The DIR command in the FTP service in Windows NT displays the incorrect file
	size if it is larger than 4 GB. As a result, copying files larger than 4 GB may
	fail.
	
	
	CAUSE
	=====
	
	The FTP Server is only displaying the lower 32-bits of the file size. For
	example, if you have a file that is (2^32)+1 bytes in size, it will be display
	as being 1 byte in size.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. This problem was corrected in Windows NT version
	3.5.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	
