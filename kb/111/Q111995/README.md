---
layout: page
title: "Q111995: STOP Message: 0xc000000D"
permalink: kb/111/Q111995/
---

## Q111995: STOP Message: 0xc000000D

	Article: Q111995
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- 
	   - Microsoft Windows NT Server version 3.1 
	   - Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Macintosh clients assess network file and print resources on a Windows NT
	Advanced Server with Services for Macintosh (SFM), the server fails and the
	following STOP message appears:
	
	  0xc000000D.
	
	
	CAUSE
	=====
	
	There is a conflict between Windows NT Advanced Server Services for Macintosh
	volumes created in the root directory of an NTFS partition if PAGEFILE.SYS is
	present on the same partition.
	
	WORKAROUND
	==========
	
	Place PAGEFILE.SYS on a separate partition without SFM volumes to prevent
	conflicts.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. This problem has been corrected in the latest U.S.
	Service Pack for Windows NT and Windows NT Advanced Server version 3.1. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt blue trap
	
	======================================================================
	Keywords          : kbother 
	Version           : 3.1
	
	=============================================================================
	
