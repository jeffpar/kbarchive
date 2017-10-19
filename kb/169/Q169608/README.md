---
layout: page
title: "Q169608: Occasional File Corruption When Using Unbuffered I/O"
permalink: /kb/169/Q169608/
---

## Q169608: Occasional File Corruption When Using Unbuffered I/O

	Article: Q169608
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbenv kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	File data may be read incorrectly, or disk files may be corrupted by
	applications that use a combination of buffered and unbuffered I/O to access the
	files.
	
	In particular, if the following sequence is executed repeatedly, data corruption
	can sometimes be observed in under an hour:
	
	1. Open the file cached.
	
	2. Completely write the file with data.
	
	3. Close the file.
	
	4. Open the file non-cached.
	
	5. Read back the data.
	
	The problem described here is exhibited with both FAT and NTFS volumes on Windows
	NT 3.51 systems, but only on FAT volumes on Windows NT 4.0 systems.
	
	CAUSE
	=====
	
	When a file is opened for non-cached access, Windows NT tries to tear down the
	cache map for the file, provided there are no other processes that have the file
	open in a cached mode. This is done to avoid subsequent cache coherency
	overhead. The problem described here comes about because Windows NT fails to
	correctly take into account the fact that the lazy writer might still be
	operating on the file and might need some of the data structures being
	deallocated. Therefore this problem is not likely to be encountered except in
	situations where the non-cached read is performed immediately following the
	cached write.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT To
	resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51.
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbNTTermServ400 kbNTTermServSearch kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
