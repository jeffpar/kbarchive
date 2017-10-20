---
layout: page
title: "Q166171: Long File Names Are Lost When Connecting to NetWare 4.11"
permalink: /kb/166/Q166171/
---

## Q166171: Long File Names Are Lost When Connecting to NetWare 4.11

{% raw %}

	Article: Q166171
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT 3.51 clients are unable to access files with long names (names that
	are not in the traditional "8.3" format) which are located on NetWare 4.11
	servers. The same clients are able to access files with long names on NetWare
	4.0 servers. Windows NT 4.0 clients are able to access files on NetWare servers
	of either version.
	
	CAUSE
	=====
	
	Changes in the behavior of NetWare servers between version 4.0 and 4.11 left
	Windows NT 3.51 (with or without a service pack applied) unable to access files
	with long names.
	
	WORKAROUND
	==========
	
	Obtain the patch for Windows NT 3.51 listed below or upgrade to version 4.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51.
	
	
	Additional query words: lfn csnw
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
