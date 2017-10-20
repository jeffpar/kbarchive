---
layout: page
title: "Q164491: Stop: 0x0000000A in Rdr.sys When Mailslot Message &gt; 512 Bytes"
permalink: /kb/164/Q164491/
---

## Q164491: Stop: 0x0000000A in Rdr.sys When Mailslot Message &gt; 512 Bytes

{% raw %}

	Article: Q164491
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist kbfixlist
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you start a computer running Windows NT 4.0, you may experience a Stop
	0x0000000A in Rdr.sys if one of the first three mailslot messages received is
	over 512 bytes in size.
	
	CAUSE
	=====
	
	The browser mailslot overran its buffer.
	
	
	RESOLUTION
	==========
	
	Apply the hotfix mentioned in this article.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt 0xa 0x0a
	
	======================================================================
	Keywords          : kbnetwork kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
