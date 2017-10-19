---
layout: page
title: "Q163620: STOP 0x50 in Rdr.sys If Pathname Too Long in SMB"
permalink: /kb/163/Q163620/
---

## Q163620: STOP 0x50 in Rdr.sys If Pathname Too Long in SMB

	Article: Q163620
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Windows NT to access a file with an extremely long file name that
	is nested in a long path, the following blue screen STOP error message may
	occur:
	
	  STOP 0x00000050 (0xff737000 0x00000001 0x00000001 0x00000000)
	
	Note: The first parameter will vary, but the last three should always be the
	same.
	
	CAUSE
	=====
	
	The Redirector (Rdr.sys) does not check the path name before sending a
	Query_Information server message block (SMB).
	
	
	RESOLUTION
	==========
	
	To resolve this problem, use one of the following methods:
	
	- Reduce the length of the path and/or the length of the filename of the file
	  being accessed on the server.
	
	- Apply the Windows NT service pack mentioned in this article.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem is corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: 0xa nwrdr hotfix
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
