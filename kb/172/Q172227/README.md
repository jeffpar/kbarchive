---
layout: page
title: "Q172227: Network Address Translators Can Block Netlogon Traffic"
permalink: kb/172/Q172227/
---

## Q172227: Network Address Translators Can Block Netlogon Traffic

	Article: Q172227
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you have a Network Address Translator (NAT) separating a Windows NT domain
	controller from its domain members or other trusted domains, Netlogon
	communication may fail. You will still be able to successfully redirect a drive
	across the NAT, and browse across the NAT, but logon attempts and trusts may
	fail. For example:
	
	- When a client attempts to log on to the domain across the NAT, it may receive
	  an error message similar to the following:
	
	  A domain controller for your domain could not be contacted. You have been
	  logged on using cached account information. Changes to your profile since you
	  last logged on may not be available.
	
	  -or-
	
	- When you attempt to establish a trust relationship between domains, you may
	  receive an error message similar to the following:
	
	  Could not find domain controller for this domain.
	
	NOTE: The error messages and conditions may differ from the above, but it will
	always be Netlogon communications that fail.
	
	
	CAUSE
	=====
	
	Your NAT is not translating the source IP address from the NetBIOS header in
	your network traffic.
	
	RESOLUTION
	==========
	
	To successfully implement a Windows NT domain structure using a NAT, the NAT
	will have to translate the addresses in NetBIOS datagram headers. Please consult
	the vendor of your NAT for information on this issue.
	
	MORE INFORMATION
	================
	
	NATs are used in IP networks to translate addresses from one network to another.
	For example, if an internal network used one of the non-routable private network
	IDs from RFC1597, such as 10.0.0.0, you could use a NAT to translate these
	addresses into a public IP address and route them to the Internet. When a packet
	comes back to the NAT, it retranslates the address back to the private address
	of the originating host.
	
	If you send a NetBIOS datagram, as Netlogon does, the NetBIOS header contains the
	source IP address. The reply to this NetBIOS datagram will be sent directly to
	this IP address that is found in the NetBIOS header as defined in RFC1002,
	section 4.4. If the NAT only translates addresses in the IP header, and not in
	the NetBIOS header, the packet may be sent to the wrong address. In this
	example, the packet would be sent back to the computer on the 10.0.0.0 network,
	which is a private address and not routeable.
	
	The following NetBIOS headers contain an Owner IP address field which may require
	translation:
	
	NetBIOS Name Management
	-----------------------
	
	- Name Registration/Refresh/Release Request
	
	- Name Registration/Refresh/Release Response
	
	- Positive Name Query Response
	
	NetBIOS Datagram
	----------------
	
	- Datagram Service Header
	
	- Directed and Broadcast Datagram
	
	- Datagram Error Packet
	
	NetBIOS datagrams are used for the following purposes:
	
	- Locating a logon server
	
	- Sending a logon request
	
	- Performing domain synchronization
	
	- Browser host name announcements
	
	- Browser workgroup/domain announcements
	
	- NetBIOS Master Browser Existence and Election Packets
	
	- NET SEND /d:<Domain> "Message"
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	REFERENCES
	==========
	
	For more information on NATs, see RFC 1631.
	
	For information about obtaining an RFC document, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q185262 How to Obtain Request for Comments Documents from the Internet
	
	
	Additional query words: validation rras nat
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : winnt:3.5,3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
