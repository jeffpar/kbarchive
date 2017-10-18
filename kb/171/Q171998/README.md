---
layout: page
title: "Q171998: &quot;A&quot; Records Automatically Appear and Disappear in DNS Manager"
permalink: kb/171/Q171998/
---

## Q171998: &quot;A&quot; Records Automatically Appear and Disappear in DNS Manager

	Article: Q171998
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In DNS Manager, you may notice that "A" records randomly appear and disappear
	without you entering or deleting them.
	
	CAUSE
	=====
	
	This issue will occur if your DNS zone is configured to query WINS.
	
	RESOLUTION
	==========
	
	These records are not a problem, but if you wish to alter the amount of time
	they appear in DNS Manager you need to edit the Cache Timeout Value using the
	following steps:
	
	1. From DNS Manager, right-click the zone where the entries are appearing.
	
	2. Click Properties, click WINS Lookup, and then click Advanced.
	
	3. Change the Cache Timeout Value to the desired setting.
	
	4. Click OK, then click OK again.
	
	MORE INFORMATION
	================
	
	When DNS resolves a query through WINS, DNS will cache the name in memory for
	the amount of time specified in the 'Cache Timeout Value' field under the
	Advanced WINS Lookup configuration of the zone properties. The records are
	visible from DNS Manager only, and they do not get added to the actual zone
	file. Only successful name queries are placed into cache.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
