---
layout: page
title: "Q132896: FTP Client Scripts Terminate Without Completing"
permalink: /kb/132/Q132896/
---

## Q132896: FTP Client Scripts Terminate Without Completing

	Article: Q132896
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	FTP Client scripts appear to terminate early without performing any work.
	
	CAUSE
	=====
	
	The Windows NT FTP client (FTP.EXE) script handler does not wait for a final
	response before issuing additional commands when a command is responded to by
	multiple Multi-Line Responses ("xyz-"). Per RFC959, Multi- Line Responses should
	be bracketed by prefixing only the first and last line with "xyz-" and
	"xyz<SP>" respectively. The script handler buffers the multiple "xys-"
	responses to satisfy its requests until it receives a QUIT (which terminates the
	session).
	
	
	RESOLUTION
	==========
	
	To correct this problem, install the fix mentioned below. The FTP Client was
	enhanced to accept multiple Multi-Line Responses.
	
	To correct this problem, upgrade to Windows NT 3.51 (if you have not already done
	so) and install the latest U.S. Service Pack for Windows NT version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5 and 3.51.
	This problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.51. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51
	
	=============================================================================
	
