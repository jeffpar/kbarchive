---
layout: page
title: "Q160519: DNS Queries for Root Name Servers Every Hour"
permalink: /kb/160/Q160519/
---

## Q160519: DNS Queries for Root Name Servers Every Hour

	Article: Q160519
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You observe the Domain Name Service (DNS) querying for the root name servers at
	one hour intervals.
	
	CAUSE
	=====
	
	A thread meant to check the time-to-live (TTL) values of the cache file records
	every hour also inadvertently queries for the root name servers every hour.
	
	RESOLUTION
	==========
	
	Apply Windows NT 4.0 Service Pack 2 or greater to fix this.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0.
	
	A supported fix is now available, but has not been fully regression tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
