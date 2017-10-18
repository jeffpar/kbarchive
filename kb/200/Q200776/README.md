---
layout: page
title: "Q200776: OS/2 DHCP Clients Fail to Get Name Resolution or Communicate"
permalink: kb/200/Q200776/
---

## Q200776: OS/2 DHCP Clients Fail to Get Name Resolution or Communicate

	Article: Q200776
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv kbnetwork kbsetup
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An OS/2 Warp DHCP client may fail to get options such as Default Router (3) or
	Name Server (6/44), and so on, from a Windows NT DHCP Server. However, it has no
	such problems if a lease is granted from a OS/2 Warp DHCP Server.
	
	MORE INFORMATION
	================
	
	A trace indicates that the OS/2 DHCP client does not request DHCP options from
	the DHCP server. It is neccessary for DHCP clients to request the options they
	want to obtain.
	
	OS/2 DHCP clients, by default, request no DHCP options. To force OS/2 clients to
	request specific options, edit the Dhcpcd.cfg client file. When the DHCP client
	builds a DISCOVER or REQUEST, packet it reads the options listed in this file.
	
	To direct the client to send its reguested options to a Windows NT DHCP server,
	remove the remark sign in the lines for Default Router, Name Server, and so on,
	and remove the "exec" statement behind the options, which is only valid for
	OS/2-based DHCP servers.
	
	According to RFC, if a DHCP client has not asked for options, a DHCP server
	should not send any. Windows NT DHCP server follows the RFC.
	
	Additional query words: dhcp options default router name server resolution OS/2 Warp dhcpcd.cfg
	
	======================================================================
	Keywords          : kb3rdparty kbenv kbnetwork kbsetup 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
