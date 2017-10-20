---
layout: page
title: "Q166371: WindowsNT 4.0 Not Filtering Ports Destined for Remote Segments"
permalink: /kb/166/Q166371/
---

## Q166371: WindowsNT 4.0 Not Filtering Ports Destined for Remote Segments

{% raw %}

	Article: Q166371
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT 4.0 Transmission Control Protocol/Internet Protocol (TCP/IP) advanced
	security does not allow for the creation of a firewall.
	
	MORE INFORMATION
	================
	
	Although Windows NT 4.0 offers TCP/IP port filtering, port filtering only
	filters ports destined for the local computer that is entering the card that has
	restricted ports. If Internet Protocol (IP) Forwarding is enabled, the TCP/IP
	packets are forwarded as needed, and then filtered (if enabled) at the receiving
	end.
	
	For example:
	
	Assume you have 3 computers, A, B, and C, running FTP Server and computer B is
	multihomed, connecting the other 2 machines.
	
	If computer B is configured to permit only ports TCP 139, and UDP 137 & 138
	(NetBIOS), then it would seem that none of the clients could FTP to each other.
	However, in this example, A and C can FTP to each other, but neither computer
	can FTP to B. Windows NT by itself is not designed to be used as a firewall,
	however, additional software (from Microsoft and other vendors) can be used to
	add this functionality.
	
	
	Additional query words: howto prodnt router route forward pass thru through proxy
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
