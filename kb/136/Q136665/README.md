---
layout: page
title: "Q136665: Err Msg Accessing Netware or Compatible Network: Network Request"
permalink: /kb/136/Q136665/
---

## Q136665: Err Msg Accessing Netware or Compatible Network: Network Request

	Article: Q136665
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
	
	When you click on Netware or Compatible Network in File Manager, the following
	message appears:
	
	  Network Request is not Supported.
	
	CAUSE
	=====
	
	An internal calculation causes the redirector to behave as if burst had failed
	after LIP (large internet packet) failed, when it has not.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in Windows NT Workstation or Server version 4.0.
	
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
