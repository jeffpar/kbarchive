---
layout: page
title: "Q141375: Winstone 97 May Fail on Windows NT 4.0"
permalink: kb/141/Q141375/
---

## Q141375: Winstone 97 May Fail on Windows NT 4.0

	Article: Q141375
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When run on Windows NT 4.0 with no networking components installed, Winstone 97
	may unexpectedly terminate in the middle of the test. The tests do not fail when
	networking components are present.
	
	CAUSE
	=====
	
	When no networking components are installed, references to active objects are
	released within a short time.
	
	RESOLUTION
	==========
	
	Install networking components on Windows NT or obtain the following update.
	
	Microsoft has updated Rpcss.exe to correct the problem. Instructions for
	installing it are available from Microsoft support channels or directly from the
	following Internet location:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40
	  /hotfixes-postSP1/winstone97
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0 This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
