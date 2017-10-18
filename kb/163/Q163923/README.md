---
layout: page
title: "Q163923: HOST Name Resolution Returns Last IP Addr on Multihomed Computer"
permalink: kb/163/Q163923/
---

## Q163923: HOST Name Resolution Returns Last IP Addr on Multihomed Computer

	Article: Q163923
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a computer running Windows NT with multiple IP addresses assigned to the same
	network interface card, resolving the computer's HOST or NetBIOS name will
	return the last IP address listed in the Network Control Panel Advanced TCP/IP
	Properties, rather than the first address listed. All other computers on the
	network that resolve this name will correctly get the first IP address listed.
	
	This can cause problems with applications that are running on a computer that
	performs a lookup of its own HOST name. One example of this is when you use
	Microsoft FrontPage and Internet Information Server (IIS) with multiple virtual
	servers.
	
	WORKAROUND
	==========
	
	If you are using DNS for name resolution, you can add an additional A record for
	the same computer, with a different name. For example, if your computer name is
	listed in DNS as WEBSERVER, you may also want to add an entry in DNS for WWW
	that refers to the same IP address. In this case, when you type "PING WWW"
	(without the quotation marks), the name is not resolved locally, but rather at
	the DNS server, and the correct IP address will be indicated in the reply.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The following is an example of this configuration:
	
	  HOST name = MACHINE1
	  Assigned IP Addresses #1= 192.168.1.1
	  Assigned IP Addresses #2= 192.168.1.2
	  Assigned IP Addresses #3= 192.168.1.3
	
	If you are at MACHINE1 and type "PING MACHINE1" (without the quotation marks),
	your reply will indicate the 192.168.1.3 address.
	
	If you are at another computer on the network and type "PING MACHINE1" (without
	the quotation marks), your reply will indicate the 192.168.1.1 address.
	
	Additional query words: internet information server
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
