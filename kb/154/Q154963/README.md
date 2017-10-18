---
layout: page
title: "Q154963: DosSetSigHandler API Not Behaving as Expected in OS/2 Subsystem"
permalink: kb/154/Q154963/
---

## Q154963: DosSetSigHandler API Not Behaving as Expected in OS/2 Subsystem

	Article: Q154963
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The DosSetSigHandler API does not behave as it should in the Windows NT OS/2
	SubSystem when called with a NULL Handler and SIGA_IGNORE, as in the following
	example:
	
	  DosSetSigHandler(NULL,..,SIGA_IGNORE)
	
	CAUSE
	=====
	
	In the OS/2 Subsystem a macro was generating an incorrect address in the case
	where a null handler value was passed in as a parameter.
	
	RESOLUTION
	==========
	
	Apply the fix mentioned below. The solution was to recognize the null value and
	flag the IGNORE parameter. This is the expected behavior for DosSetSigHandler
	handling in this case.
	
	
	STATUS
	======
	
	This problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt OS2
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	
	=============================================================================
	
