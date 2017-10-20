---
layout: page
title: "Q164052: PPTP and Interoperability with Other Local Machine Services"
permalink: /kb/164/Q164052/
---

## Q164052: PPTP and Interoperability with Other Local Machine Services

{% raw %}

	Article: Q164052
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbusage
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If a Microsoft Windows NT Server service, such as a Proxy server, DHCP server,
	web, FTP and so forth, is installed on a computer running Windows NT Server 4.0
	(which has IP Forwarding enabled) that also employs Point- to- Point Tunneling
	Protocol (PPTP) filtering on an interface, no requests can be resolved through
	that filtered interface unless the client is PPTP enabled. This is to protect
	the computer from attack from Internet sources.
	
	RESOLUTION
	==========
	
	A change has been made in Windows NT Service Pack 2 (SP2) that enables the PPTP
	service to allow packets to services running on the computer running Windows NT
	Server. If a registry parameter is set, PPTP will allow packets on a PPTP
	filtering enabled interface to reach the local machine.
	
	This allows RAS (PPTP) and Proxy servers (or any other server services) to be
	enabled at the same time, without the fear of the protected network being
	attacked from the Internet due to packet forwarding.
	
	To protect the private network:
	
	1. Install Service Pack 2 (or later) for Windows NT Server 4.0.
	
	2. Enable PPTP filtering by checking the Enable PPTP Filtering check box in the
	  Advanced TCP/IP properties of the Network Control Panel. This setting does
	  not allow any packets other than PPTP to come and go out of that interface.
	
	3. To allow clients on the Internet to access services running on the Windows NT
	  computer, change the following registry parameter and restart the machine.
	
	  WARNING: Using Registry Editor incorrectly can cause serious, system- wide
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of
	  Registry Editor can be solved. Use this tool at your own risk.
	
	  a. Open the Registry Editor (Regedt32.exe).
	
	  b. Go to the following location in the Registry and add the following value:
	
	        HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\RASPPTPF
	         \Parameters\ 
	
	        Value Name: AllowPacketsForLocalMachine
	         Data Type: REG_DWORD
	              Data: 1
	
	With this additional setting, PPTP clients can connect to the local computer from
	the Internet. Computers on the Internet can see this server, and can access
	services (FTP, WWW, and so forth) running on this server. However, computers on
	the Internet cannot see past the server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	4.0. This problem is corrected in Windows NT 4.0 U.S. Service Pack
	
	1. For information on obtaining the Service Pack, query on the following word in
	  the Microsoft Knowledge Base:
	
	  " SERVPACK " (without the quotation marks)
	
	This is a hotfix, and distribution requires manager approval. To receive the
	hotfix, customers must be encountering the bug as described above. You must
	track the customers you send this to and supply them with the next Service Pack
	when it becomes available. The new file is RASPPTPF.SYS on http://hotfix.
	
	MORE INFORMATION
	================
	
	The following are considerations when applying the PPTP filter.
	
	On a multi-homed machine, PPTP filtering should be enabled on the network
	interface over which the PPTP connection is being made.
	
	In the example of using PPTP internally to tunnel out to the Internet, you would
	enable PPTP filtering on the LAN adapter attached to your network. This
	configuration allows only PPTP control/data packets to pass between the LAN and
	the Internet, making the PPTP RAS server act like a firewall.
	
	If the tunnel is being made from an ISP over the Internet to a multi-homed RAS
	server on the LAN, PPTP filtering would be enabled on the Internet adapter.
	
	Additional query words: prodnt multihomed
	
	======================================================================
	Keywords          : kbnetwork kbusage 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
