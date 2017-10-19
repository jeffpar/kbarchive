---
layout: page
title: "Q139983: Class C Subnetting Options for RAS Routing"
permalink: /kb/139/Q139983/
---

## Q139983: Class C Subnetting Options for RAS Routing

	Article: Q139983
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT Remote Access Service (RAS) routing for LAN connectivity to an
	Internet Provider requires an IP subnet address for the local LAN and a
	different subnet addresses for the RAS link.
	
	This article describes subnetting options with a class C address. A class "C"
	address must be registered with the InterNIC. The InterNIC can be found at
	http://rs.internic.net or by sending mail to Hostmaster@NIC.DDN.MIL . Your
	Internet Service Provider may also supply you with a valid range of addresses.
	
	MORE INFORMATION
	================
	
	Following are 3 options to configure different subnet addresses for the RAS link
	and local LAN:
	
	Option 1
	--------
	
	Have the Internet Provider give you one address to use on your RAS link outside
	of your class C addresses. This leaves you with the full 254 addresses for your
	own use and no special subnetting. Many Internet Providers will not give you an
	additional IP address. They may give you an entire additional class C range for
	a fee.
	
	Option 2
	--------
	
	Subnet mask of 255.255.255.192
	
	This gives you 2 valid subnets with a maximum of 62 clients on the local LAN.
	Subnet 1 would have the fourth octet of 64-127 (65-126 can be assigned). Subnet
	2 would have the fourth octet of 128-191 (129-190 can be assigned). For example
	XXX.XXX.XXX.65 would be the first address of subnet 1 and could be used for the
	Windows NT network card and XXX.XXX.XXX.129 would be the first address of subnet
	2 and could be used for the RAS connection.
	
	Option 3 (unsupported)
	----------------------
	
	Subnet mask of 255.255.255.128.
	
	This gives you 2 subnets with a maximum of 126 clients on the Local LAN. Both
	subnets are technically invalid but work with Windows NT 3.5 and 3.51. Be sure
	all clients on the network support this subnet mask. Microsoft cannot guarantee
	this will work in future releases of Windows NT. Subnet 1 would have the fourth
	octet of 0-127 (1-126 can be assigned). Subnet 2 would have the fourth octet of
	128-255 (129-254 can be assigned). For example XXX.XXX.XXX.1 is the first
	address of subnet 1 and could be used for the Windows NT network card and
	XXX.XXX.XXX.129 is the first address of subnet 2 and could be used for the RAS
	connection.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.0
	Issue type        : kbhowto
	
	=============================================================================
	
