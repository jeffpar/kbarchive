---
layout: page
title: "Q164982: Lack of Secondary Address May Cause DNS Service to Hang"
permalink: /kb/164/Q164982/
---

## Q164982: Lack of Secondary Address May Cause DNS Service to Hang

{% raw %}

	Article: Q164982
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Domain Name System (DNS) fails with an access violation, and ceases to
	resolve names.
	
	CAUSE
	=====
	
	You check the box "Only allow access from secondaries Included on Notify list"
	in the zone properties dialog box, but do not have any secondaries listed.
	
	An attempted zone transfer from either a secondary DNS or NSLOOKUP will cause the
	DNS service to stop responding.
	
	RESOLUTION
	==========
	
	To resolve this issue, use one of the following methods:
	
	- Include the address of the secondary servers in the notify list using the
	  following steps:
	
	  1. From the DNS Manager, select your zone, right click, then click
	     Properties.
	
	  2. Click Notify then add the addresses of the secondary servers to the Notify
	     list.
	
	  -or-
	
	- Obtain the latest Windows NT Service Pack.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
