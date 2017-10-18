---
layout: page
title: "Q163872: PRB: Sysdiff Cannot Delete Files"
permalink: kb/163/Q163872/
---

## Q163872: PRB: Sysdiff Cannot Delete Files

	Article: Q163872
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbOPK kbSBKkbbuglist
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you apply a Sysdiff package that includes information that files should be
	deleted, only one file per directory is actually deleted.
	
	RESOLUTION
	==========
	
	Apply the hotfix mentioned below. Please note that you must rebuild any packages
	that were built using the previous Sysdiff.exe.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	For more information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q157576 How to Troubleshoot the Sysdiff Tool in Windows NT
	
	Additional query words: unattended OPK SBK
	
	======================================================================
	Keywords          : kbnetwork kbOPK kbSBK kbbuglist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
