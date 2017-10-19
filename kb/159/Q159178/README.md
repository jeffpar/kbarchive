---
layout: page
title: "Q159178: MSMail Windows Client Fails to Delete Files"
permalink: /kb/159/Q159178/
---

## Q159178: MSMail Windows Client Fails to Delete Files

	Article: Q159178
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Mail Windows client version 3.2 or newer running under Windows NT
	3.51 will not delete files on a postoffice located on a Novell server's volume
	if filescan rights are not assigned.
	
	
	CAUSE
	=====
	
	Windows NT will perform a search command on the file before deleting or erasing
	the file. The search command will reply a failure and the operating system will
	not perform the delete or erase command causing the file to become stranded.
	
	WORKAROUND
	==========
	
	Assign filescan rights to Microsoft Mail Windows client users operating under
	Windows NT.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT 3.51.
	
	A supported fix is now available, but has not been fully regressions tested and
	should be applied only to systems experiencing this specific problem. Contact
	Microsoft Technical Support for more information.
	
	
	
	Additional query words: wincli stranded mai att wow tmp
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	Issue type        : kbbug
	
	=============================================================================
	
