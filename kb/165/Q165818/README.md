---
layout: page
title: "Q165818: Truncation of Backup Log In Eastern Europe or Russian NT 4.0"
permalink: /kb/165/Q165818/
---

## Q165818: Truncation of Backup Log In Eastern Europe or Russian NT 4.0

	Article: Q165818
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you make a backup using Windows NT Backup (Ntbackup.exe) on an Eastern
	European or Russian version of Windows NT 4.0, several truncated lines appear at
	the end of the backup log.
	
	CAUSE
	=====
	
	There is a problem in Windows NT Backup that causes it to truncate the log when
	an extended character is encountered. This problem has been specifically
	observed in the Eastern European and Russian versions of Windows NT 4.0 and may
	occur in other localized versions that use multibyte character sets.
	
	RESOLUTION
	==========
	
	Apply the hotfix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: 4.00 prodnt
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
