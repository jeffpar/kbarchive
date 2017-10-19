---
layout: page
title: "Q133280: FTPSVC: Delay Receiving FTP Directory Annotation and Prompt"
permalink: /kb/133/Q133280/
---

## Q133280: FTPSVC: Delay Receiving FTP Directory Annotation and Prompt

	Article: Q133280
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you logon to a very busy Windows NT 3.51 ftp server, you experience a delay
	receiving the directory annotation and ftp prompt (after you enter your
	password).
	
	Network Performance Monitor (PERFMON.EXE) shows the number of ftp server current
	connections increasing, but the number of anonymous users logged on decreasing.
	The system normally recovers within a few minutes.
	
	CAUSE
	=====
	
	The FTP service was modified for Windows NT version 3.51 to provide directory
	annotation of the ftp root directory at logon. The calls used to do this
	annotation involved unnecessary file locking, especially when no ~ftpsvc~.ckm
	(directory annotation) file existed in the ftp root directory.
	
	RESOLUTION
	==========
	
	To correct this problem, install the latest U.S. Service Pack for Windows NT
	version 3.51.
	
	Microsoft corrected this problem in the modified file, FTPSVC.DLL. This fix
	improves logon performance by optimizing the directory annotation code so it
	does less file locking.
	
	NOTE: This fix was tested on ftp.microsoft.com, which performs over 50,000
	anonymous ftp logons per day.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.51. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt log on ons
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
