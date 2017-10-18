---
layout: page
title: "Q117160: File Manager Shows Wrong File Size for Files Larger than 4G"
permalink: kb/117/Q117160/
---

## Q117160: File Manager Shows Wrong File Size for Files Larger than 4G

	Article: Q117160
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	File Manager shows the wrong file size for files that are greater than 4 GB in
	size. The file size shown is the difference between the file's actual size and 4
	GB. For example, if the actual file size is 4,819,255,296 bytes, File Manager
	shows the size as 524,288,000:
	
	    4,819,255,296 (file size)
	  - 4,294,967,296 (4 GB)
	  ---------------------------
	      524,288,000
	
	The DIR command displays file sizes correctly.
	
	
	CAUSE
	=====
	
	File Manager ignores the high DWORD for computing the file size.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.1. We are
	researching this problem and will post new information here as it becomes
	available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	
