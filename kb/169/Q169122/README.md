---
layout: page
title: "Q169122: Non-rfc Compliant DHCP Server Does Not Send DHCPNAK to Client"
permalink: /kb/169/Q169122/
---

## Q169122: Non-rfc Compliant DHCP Server Does Not Send DHCPNAK to Client

{% raw %}

	Article: Q169122
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork
	Last Modified: 25-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a Windows NT DHCP client is moved to another subnet (without issuing the
	ipconfig/release command before moving), the client will request its previous IP
	address. Usually this IP address is not valid for usage on the new subnet.
	
	When a DHCP server detects that the client requests an IP address that does not
	fit for the current subnet, the DHCP server must send a DHCPNAK to the client
	(according to RFC1541).
	
	Some non-rfc compliant DHCP servers do not send this DHCPNAK. Because of this,
	the client does not attempt to lease a new IP address on the new subnet and
	tries to use its old IP address (see the frame information later in this
	article).
	
	This problem has been experienced only when using a third-party DHCP server. The
	Microsoft Windows NT DHCP server does not experience this behavior.
	
	MORE INFORMATION
	================
	
	Per RFC1541, a DHCP server sends a DHCPNAK to a client that requests an IP
	address but is not located on the current subnet. According to RFC1541 (page
	28):
	
	  In particular, if the previously allocated network address in the ciaddr
	  field from the client does not match the network address recorded by the
	  server for that client, the server sends a DHCPNAK to the client.
	
	After receiving a DHCPNAK, the DHCP client will restart the DHCP lease process by
	sending DHCPDISCOVER.
	
	
	RESOLUTION
	==========
	
	Contact the non-rfc compliant DHCP server vendor for assistance or use the
	Microsoft Windows NT DHCP server.
	
	Additional query words: SRD970304000093
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	
	=============================================================================
	

{% endraw %}
