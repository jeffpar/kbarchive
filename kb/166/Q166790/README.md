---
layout: page
title: "Q166790: Novell DOS/WIN Client-32 Not Registering Hostname w/DHCP"
permalink: /kb/166/Q166790/
---

## Q166790: Novell DOS/WIN Client-32 Not Registering Hostname w/DHCP

{% raw %}

	Article: Q166790
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After applying Windows NT 4.0 Service Pack 2, the DHCP server service does not
	register the Hostname or Machine Name for a DHCP client using the Novell NetWare
	Client-32 for DOS/WIN. As a result, the Windows NT DHCP Administrator shows the
	IP address assigned to a Null string.
	
	CAUSE
	=====
	
	The Novell NetWare Client-32 for DOS/WIN sends the host name without the null
	termination in the DHCP Discover Packet. When the DHCP server tries to convert
	this host name to Unicode, the conversion process fails and, as a result, the
	Host name entry is set to Null in the Jet database.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0 Service
	Pack 2. This problem was corrected in the latest Microsoft Windows NT 4.0 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: dhcp hostname client32
	
	======================================================================
	Keywords          : kbnetwork kbbuglist
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
