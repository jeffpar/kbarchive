---
layout: page
title: "Q124284: STOP 0x00000026 when Accessing a CD Using an Indirect Path"
permalink: /kb/124/Q124284/
---

## Q124284: STOP 0x00000026 when Accessing a CD Using an Indirect Path

{% raw %}

	Article: Q124284
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you execute the command:
	
	  dir \\.\<x>:
	
	where <x> specifies a CD-ROM drive, this STOP message appears:
	
	  STOP 0x00000026 (0x000d0259,0x00000001,0x00000000,0x000000000)
	  CDFS_FILE_SYSTEM
	
	CAUSE
	=====
	
	The CD-ROM file system fails to correctly parse this specific indirect path
	specification.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation and
	Windows NT Server version 3.5. This problem was corrected in the latest U.S.
	Service Pack for Windows NT version 3.5. For information on obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt archive dec blue trap screen
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	

{% endraw %}
