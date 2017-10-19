---
layout: page
title: "Q160659: Access Violation in Infocomm.dll w/ Incorrectly Formatted URLs"
permalink: /kb/160/Q160659/
---

## Q160659: Access Violation in Infocomm.dll w/ Incorrectly Formatted URLs

	Article: Q160659
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): winnt:2.0,4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Internet Information Server 2.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Microsoft Windows NT 4.0 may experience access violation error messages when a
	URL is based to any services that do not contain a leading "/". While this is an
	incorrectly formatted URL and should never be passed, it does cause the Internet
	Information Server (IIS) Services to stop.
	
	CAUSE
	=====
	
	This problem is caused by a bug in the code, which fails when there is no
	leading "/".
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0. This problem was
	corrected in the latest Windows NT 4.0 U.S. Service Pack. For information on
	obtaining the Service Pack, query on the following word in the Microsoft
	Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbiisSearch kbiis200
	Version           : winnt:2.0,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
