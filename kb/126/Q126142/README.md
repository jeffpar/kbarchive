---
layout: page
title: "Q126142: Windows NT Mail Err Msg: The Network Path You Entered Could..."
permalink: /kb/126/Q126142/
---

## Q126142: Windows NT Mail Err Msg: The Network Path You Entered Could...

	Article: Q126142
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
	
	The following error message appears the first time you access a Microsoft Mail
	postoffice on a Novell file server from the Windows NT Microsoft Mail:
	
	  The network path you entered could not be found
	
	CAUSE
	=====
	
	The 32-bit Microsoft Mail client calls the API FindFirstFile() on the
	postoffice. FindFirstFile() requires filescan trustee directory rights.
	
	WORKAROUND
	==========
	
	To work around this problem, give filescan trustee directory rights to each user
	accessing Microsoft Mail postoffices on Novell file servers.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.5. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	This problem was corrected in Windows NT version 3.51.
	
	
	Additional query words: prodnt 3.10 netware post office file scan
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
