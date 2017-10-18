---
layout: page
title: "Q161484: Memory Leak in NET VIEW Command with CSNW"
permalink: kb/161/Q161484/
---

## Q161484: Memory Leak in NET VIEW Command with CSNW

	Article: Q161484
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a Windows NT 4.0-based computer using the Client Services for NetWare (CSNW),
	the NET VIEW command may seem to stop responding (hang). It then terminates with
	an "Insufficient virtual memory to complete this task" error message.
	
	CAUSE
	=====
	
	The Nwwks.dll dynamic-link library has a memory leak that occurs when you view
	NetWare or Windows NT servers running the File and Print Services for NetWare
	(FPNW) service with more than 32 volumes.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the U.S. Service Pack 2 for Windows NT 4.0. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base:
	
	  SERVPACK
	
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q160189
	  TITLE : CSNW Cannot See More Than 32 Volumes Per Server
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
