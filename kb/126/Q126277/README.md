---
layout: page
title: "Q126277: 16-Bit Process Creation Can Result in Memory Loss"
permalink: kb/126/Q126277/
---

## Q126277: 16-Bit Process Creation Can Result in Memory Loss

	Article: Q126277
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a 16-bit Windows-based application creates another 16-bit Windows-based
	applications, the WOW environment can lose memory. Continuous memory loss can
	cause applications to fail.
	
	
	CAUSE
	=====
	
	Thread objects are lost when on 16-bit processes creates another 16-bit
	processes. Also, the Win16 GetIconInfo() function causes memory loss when memory
	is not correctly de-allocated. According to Neil Sandlin, the memory leak
	manifests itself in WINSRV (CSRSS), although the fault is in WOW32.DLL.
	
	RESOLUTION
	----------
	
	To correct this problem, obtain and install Windows NT U.S. Service Pack 2.
	
	STATUS
	------
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation and
	Windows NT Server version 3.5. This problem has been corrected in the latest
	U.S. Service Pack for Windows NT version 3.5. For information on obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	S E R V P A C K
	
	This problem was corrected in Windows NT version 3.51.
	
	Additional query words: prodnt loss windows on
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : :3.5
	
	=============================================================================
	
