---
layout: page
title: "Q114231: STOP 0x1E in SFMRV.SYS When Running Services for Macintosh"
permalink: kb/114/Q114231/
---

## Q114231: STOP 0x1E in SFMRV.SYS When Running Services for Macintosh

	Article: Q114231
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 06-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A STOP message appears (0x0000001E in SFMSRV.SYS) when running Windows NT
	Advanced Server with Services for Macintosh.
	
	
	CAUSE
	=====
	
	A null pointer was passed in one case.
	
	
	RESOLUTION
	==========
	
	SFMSRV.SYS has been fixed to prevent the null pointer from being passed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. This problem has been corrected in the latest U.S.
	Service Pack for Windows NT and Windows NT Advanced Server version 3.1. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	S E R V P A C K
	
	Additional query words: sfm prodnt blue trap
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : :3.1
	
	=============================================================================
	
