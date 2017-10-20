---
layout: page
title: "Q138878: Routing TCP/IP Packets On a Multihomed RAS Computer"
permalink: /kb/138/Q138878/
---

## Q138878: Routing TCP/IP Packets On a Multihomed RAS Computer

{% raw %}

	Article: Q138878
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
	
	A TCP/IP workstation can be configured to use only one default gateway, which
	may present a challenge to users that are connected to a local TCP/IP network
	through a network interface card (NIC) and to a remote network using Windows NT
	Remote Access Services (RAS).
	
	NOTE: A computer connected to more than one LAN segment in this way is known as a
	multihomed system.
	
	MORE INFORMATION
	================
	
	If you are running Windows NT and you computer is connected to both a remote and
	local TCP/IP network and you attempt to access an IP address, the destination
	host is located using the following process:
	
	1. If you have enabled the option to "Use default gateway on remote network" in
	  the TCP/IP options of the RAS PhoneBook entry used to dial the remote
	  network:
	
	  a. If the destination IP address is on the same subnet as your computer's
	     NIC, the packets are sent via the NIC.
	
	  b. If the destination IP address is not on the same subnet as your computer's
	     NIC, the packets are sent via your RAS connection to the default gateway
	     assigned by the RAS server.
	
	2. If you have not enabled the option to "Use default gateway on remote network"
	  in the TCP/IP options of the RAS PhoneBook entry used to dial the remote
	  network:
	
	  a. If the destination IP address is on the same subnet as your computer's
	     assigned RAS IP address, the packets are sent via the RAS connection.
	
	  b. If the destination IP address is not on the same subnet as your computer's
	     assigned RAS IP address, the packets are sent via your computer's NIC.
	
	This may present a problem to some users. For example, if your LAN is divided
	into two Class C subnets, 1.1.1.x and 1.1.2.x, and you configure your computer
	on the 1.1.1.x subnet to use RAS with the "Use default gateway on remote
	network" option enabled, all packets you send to the 1.1.2.x subnet will be sent
	via the RAS connection and not your computer's NIC.
	
	To workaround this problem, you can use the Windows NT ROUTE command to add a
	static route to your TCP/IP route table that will instruct Windows NT to send
	packets intended for the 1.1.2.x subnet to a router on the 1.1.1.x subnet. For
	more information on using the Windows NT ROUTE command, refer to the Windows NT
	Command Reference section of the Windows NT Help file (WINHLP32.EXE).
	
	REFERENCES
	==========
	
	"Microsoft Windows NT Resource Kit, Vol. 2, Windows NT Networking Guide," Pages
	414 and 415, Microsoft Press, 1995.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.0
	
	=============================================================================
	

{% endraw %}
