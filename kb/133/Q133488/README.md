---
layout: page
title: "Q133488: LPR Printing Fails After Setting Up Security"
permalink: /kb/133/Q133488/
---

## Q133488: LPR Printing Fails After Setting Up Security

	Article: Q133488
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A temp file is created in the %SYSTEMROOT%\SYSTEM32 subdirectory when you print
	using the LPR monitor. This requires all users of this print share to have read,
	write, delete privileges to this share. If security is applied to the
	%SYSTEMROOT%\SYSTEM32 directory revoking the required permissions, then printing
	via LPR fails.
	
	RESOLUTION
	==========
	
	To correct this problem, upgrade to Windows NT 3.51 (if you have not already
	done so) and install the latest U.S. Service Pack for Windows NT version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5 and 3.51.
	This problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.51. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q128352
	  TITLE : Print Job to LPR Printer Does Not Print
	
	
	Additional query words: prodnt administrator
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51
	
	=============================================================================
	
