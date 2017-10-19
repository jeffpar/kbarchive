---
layout: page
title: "Q154995: Cannot Compress WinNT 4.0 Files from a WinNT 3.51 Client"
permalink: /kb/154/Q154995/
---

## Q154995: Cannot Compress WinNT 4.0 Files from a WinNT 3.51 Client

	Article: Q154995
	Product(s): Microsoft Windows NT
	Version(s): 3.1,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.1, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to compress files located on a computer running Microsoft Windows
	NT version 4.0 from a Microsoft Windows NT version 3.51 client, either server or
	workstation, compression fails on each file with the following error message
	from File Manager:
	
	  Cannot change compression attribute.
	
	Running the Compact utility returns the following error message:
	
	  Access denied.
	
	If you click Retry, the file will usually compress. However, the next file fails
	to compress with the same error messages.
	
	MORE INFORMATION
	================
	
	This problem is independent of other applications or users who might be
	accessing the file. The problem does not occur between two Microsoft Windows NT
	version 4.0 workstations.
	
	RESOLUTION
	==========
	
	Perform "over the network" file compression functions from a Microsoft Windows
	NT version 4.0 Workstation or Server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	4.0. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS310 kbWinNTS310search kbWinNT310Search
	Version           : :3.1,3.51,4.0
	
	=============================================================================
	
