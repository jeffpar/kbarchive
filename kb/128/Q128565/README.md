---
layout: page
title: "Q128565: LMHOSTS File Generates STOP 0x00000050"
permalink: /kb/128/Q128565/
---

## Q128565: LMHOSTS File Generates STOP 0x00000050

	Article: Q128565
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
	
	Windows NT provides the ability to search for LMHOSTS files located on other
	systems. This is permitted for file using full path on local machine or the UNC
	path across networks. If you use a #INCLUDE statement with a driver letter in a
	Windows NT LMHOSTS file, the following error message appears:
	
	  STOP: 0x00000050
	  PAGE_FAULT_IN_NONPAGED_AREA (0x50)
	
	For example, the following LMHOSTS file would cause the STOP message:
	
	  #BEGIN_INCLUDE
	  #INCLUDE d:\winnt\system32\drivers\etc\hosts
	  #END_INCLUDE
	
	
	CAUSE
	=====
	
	There is a problem in the text-parsing routines that causes an incorrect full
	path to be generated for the local file.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in the latest U.S. Service Pack for Windows NT version
	3.5. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt trap 0x50
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
