---
layout: page
title: "Q139338: WINS Counters Disappear from Performance Monitor"
permalink: /kb/139/Q139338/
---

## Q139338: WINS Counters Disappear from Performance Monitor

	Article: Q139338
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows Internet Name Service (WINS) counters disappear from the list of
	available counters in Performance Monitor.
	
	CAUSE
	=====
	
	This problem is caused by stopping, and later restarting the WINS service. The
	reason the problem occurs is because the WINS counter library routine that
	initializes, and binds the counters to the WINS Name Server is only called once.
	Because the initialization/bind routine is only called once, if the service is
	later stopped and restarted the Performance Monitor counters originally bound
	are no longer valid resulting in the counters disappearing.
	
	RESOLUTION
	==========
	
	This problem has been corrected in the latest Service Pack for Windows NT
	version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
