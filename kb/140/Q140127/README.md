---
layout: page
title: "Q140127: PPP Authentication Fails with SP2 and Shiva Dialer"
permalink: /kb/140/Q140127/
---

## Q140127: PPP Authentication Fails with SP2 and Shiva Dialer

	Article: Q140127
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When you use the Shiva PPP Dialer, which uses SPAP Authentication, the
	authentication process fails if Windows NT 3.51 Service Pack 2 is installed. The
	problem does not occur with the original 3.51 installation.
	
	WORKAROUND
	==========
	
	To resolve this problem, install the fix mentioned below.
	
	After upgrading to Service Pack 2, replace RASPPPEN.DLL with the original file
	from the CD-ROM.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest U.S. Service Pack for Windows NT Workstation
	or Server version 3.51. For information on obtaining this update, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
