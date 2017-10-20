---
layout: page
title: "Q121005: DHCP Options Supported by Clients"
permalink: /kb/121/Q121005/
---

## Q121005: DHCP Options Supported by Clients

{% raw %}

	Article: Q121005
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT DHCP (Dynamic Host Configuration Protocol) server service allows a
	DHCP server to provide a list of options that can be sent to DHCP clients. The
	options provide configuration information for the DHCP client. Options supported
	by the DHCP server are defined in RFC 1533, and Microsoft DHCP clients can
	accept only a few of these options.
	
	MORE INFORMATION
	================
	
	Currently Microsoft DHCP clients can accept and use the following two options:
	
	  - DHCP Protocol Options
	  - Information Options
	
	NOTE: Values in parentheses () are code numbers for each corresponding option.
	
	DHCP Protocol Options
	---------------------
	
	DHCP message type (53): This option is used to convey the type of the DHCP
	message. The code for this option is 53, and its length is 1. Legal values for
	this option are:
	
	  Value   Message Type
	  -----   ------------
	    1     DHCPDISCOVER
	    2     DHCPOFFER
	    3     DHCPREQUEST
	    4     DHCPDECLINE
	    5     DHCPACK
	    6     DHCPNAK
	    7     DHCPRELEASE
	
	Lease Time (51): This option is used in a client request (DHCPDISCOVER or
	DHCPREQUEST) to allow the client to request a lease time for the IP address. In
	a server reply (DHCPOFFER), a DHCP server uses this option to specify the lease
	time it is willing to offer. The time is in seconds, and is specified as a
	32-bit unsigned integer. The code for this option is 51, and its length is 4.
	
	Renewal Time (58): This option specifies the time interval from address
	assignment until the client transitions to the RENEWING state. The value is in
	seconds, and is specified as a 32-bit unsigned integer. The code for this option
	is 58, and its length is 4.
	
	Rebind Time (59): This option specifies the time interval from address assignment
	until the client transitions to the REBINDING state. The value is in seconds,
	and is specified as a 32-bit unsigned integer. The code for this option is 59,
	and its length is 4.
	
	Information Options
	-------------------
	
	Subnet Mask (1): The subnet mask option specifies the client's subnet mask as per
	RFC 950 [5]. If both the subnet mask and the router option are specified in a
	DHCP reply, the subnet mask option MUST be first. The code for the subnet mask
	option is 1, and its length is 4 octets.
	
	Default Router (3): The router option specifies a list of IP addresses for
	routers on the client's subnet. Routers should be listed in order of preference.
	The code for the router option is 3. The minimum length for the router option is
	4 octets, and the length MUST always be a multiple of 4.
	
	DNS Server (6): The domain name server option specifies a list of Domain Name
	System (STD 13, RFC 1035 [8]) name servers available to the client. Servers
	should be listed in order of preference. The code for the domain name server
	option is 6. The minimum length for this option is 4 octets, and the length must
	always be a multiple of 4.
	
	Domain Name (15): The Domain Name option specifies the DNS Domain Name that the
	DHCP Server is to assign the clients for DNS Host name resolution.
	
	WINS Server (NetBIOS Name Server) (44): The NetBIOS name server (NBNS) option
	specifies a list of RFC 1001/1002 [19] [20] NBNS name servers listed in order of
	preference. The code for this option is 44. The minimum length of the option is
	4 octets, and the length must always be a multiple of 4.
	
	NetBIOS Node Type (46): The NetBIOS node type option allows NetBIOS over TCP/IP
	clients that are configurable to be configured as described in RFC 1001/1002.
	The value is specified as a single octet that identifies the client type as
	follows:
	
	  Value         Node Type
	  -----         ---------
	   0x1           B-node
	   0x2           P-node
	   0x4           M-node
	   0x8           H-node
	
	In the above chart, each value indicates a number in base-16 (hexadecimal). The
	code for this option is 46 and the length is 1.
	
	NetBIOS Scope Id (47): The NetBIOS scope option specifies the NetBIOS over TCP/IP
	scope parameter for the client as specified in RFC 1001/1002. See codes [19],
	[20], and [8] for character-set restrictions. The code for this option is 47 and
	minimum length is 1. Any other options received by the client are ignored and
	discarded, and are not available through any mechanism. Please note that the
	NetBIOS Scope ID is case sensitive.
	
	Router Discovery (31) (Windows 2000 or later): check RFC 2132 for more details.
	
	Classless route (249) (Windows XP or later): check the following Web page for
	more details:
	
	  http://www.ietf.org/internet-drafts/draft-ietf-dhc-csr-06.txt
	
	Static router(33) (Windows or later): Check RFC 2132 for more details.
	
	NOTE: The DHCP client can change registry settings as defined by rules in:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\Dhcp\Parameters\Options\<Option
	  ID>
	
	Each of these options has corresponding code in the DHCP client that, among
	others, needs to convert the data before it can be added to the Windows NT
	registry. Thus, it is not possible to add additional keys here as no data
	conversion would take place.
	
	
	Additional query words: prodnt RFC NBT NetBT
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbWin95search kbZNotKeyword3
	Version           : :3.5,3.51,4.0
	
	=============================================================================
	

{% endraw %}
