---
layout: page
title: "Q170862: Virtual Servers and HOST Name Resolution"
permalink: /kb/170/Q170862/
---

## Q170862: Virtual Servers and HOST Name Resolution

	Article: Q170862
	Product(s): Internet Information Server
	Version(s): winnt:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Internet Information Server (IIS) configured with multiple virtual servers can
	cause problems with applications that are running on a computer that performs a
	lookup of its own HOST name.
	
	On a computer running Microsoft Windows NT Server with multiple IP addresses
	assigned to the same network interface card, resolving the computer's HOST or
	NetBIOS name will return the last IP address listed in the Network Control Panel
	Advanced TCP/IP Properties, rather than the first address listed. All other
	computers on the network that resolve this name will correctly get the first IP
	address listed.
	
	WORKAROUND
	==========
	
	If you are using DNS for name resolution, you can add an additional record for
	the same computer with a different name. For example, if your computer name is
	listed in DNS as WEBSERVER, you may also want to add an entry in DNS for WWW
	that refers to the same IP address.
	
	In this case, when you type "PING WWW," the name is not resolved locally, but
	rather at the DNS server, and the correct IP address will be indicated in the
	reply.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	4.0. This problem was corrected in the latest Microsoft Windows NT 4.0 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The following is an example of this configuration:
	
	  HOST name = MACHINE1
	  Assigned IP Addresses #1= 192.168.1.1
	  Assigned IP Addresses #2= 192.168.1.2
	  Assigned IP Addresses #3= 192.168.1.3
	
	If you are at MACHINE1, and you type "PING MACHINE1," your reply will indicate
	the 192.168.1.3 address.
	
	If you are at another computer on the network, and you type "PING MACHINE1," your
	reply will indicate the 192.168.1.1 address.
	
	Additional query words: iis
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis300
	Version           : winnt:3.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	
	=============================================================================
	
