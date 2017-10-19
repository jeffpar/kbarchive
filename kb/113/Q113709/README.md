---
layout: page
title: "Q113709: NTBACKUP Doesn't Create Set Description from Command Line"
permalink: /kb/113/Q113709/
---

## Q113709: NTBACKUP Doesn't Create Set Description from Command Line

	Article: Q113709
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install U.S. Service Pack 2, the Windows NT Backup program (NTBACKUP)
	no longer creates a set description when you start it from the command line. For
	example, if you type the following and then press ENTER
	
	  NTBACKUP backup C:\DOS /D "TEST"
	
	NTBACKUP does not create the set description of TEST. Instead, it leaves the set
	description blank on the tape.
	
	CAUSE
	=====
	
	This problem occurs because quotation marks are not handled correctly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. This problem has been corrected in the latest U.S.
	Service Pack for Windows NT and Windows NT Advanced Server version 3.1. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	This problem was corrected in Windows NT version 3.5.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search kbWinNTW310Search
	Version           : :3.1
	
	=============================================================================
	
