---
layout: page
title: "Q262104: Options Are Not Sent to DHCP Clients Using DHCP Inform Packets"
permalink: /kb/262/Q262104/
---

## Q262104: Options Are Not Sent to DHCP Clients Using DHCP Inform Packets

{% raw %}

	Article: Q262104
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Dynamic Host Configuration Protocol (DHCP) clients that request additional
	option information from a Windows NT 4.0 (any service pack) DHCP server by
	issuing a DHCP Inform packet, do not receive the additional information from the
	DHCP server.
	
	CAUSE
	=====
	
	This behavior occurs because Windows NT 4.0 does not support DHCP Inform
	packets. When a client sends a DHCP Inform packet, the Windows NT 4.0 DHCP
	Server ignores the DHCP Inform packet because it does not know how to process
	it.
	
	RESOLUTION
	==========
	
	To configure custom options to be sent to a client from a Windows NT 4.0 DHCP
	server, the client must request the options in the Parameter Request List of the
	DHCP Request packet or upgrade the DHCP server to Windows 2000 DHCP server.
	
	MORE INFORMATION
	================
	
	Microsoft Windows 2000 DHCP server does support DHCP Inform packets.
	
	Additional query words: DHCPInform rfc 2132
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
