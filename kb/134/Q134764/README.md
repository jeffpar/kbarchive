---
layout: page
title: "Q134764: Windows for Workgroups DHCP TCP/IP-32 Client Fails to Start"
permalink: /kb/134/Q134764/
---

## Q134764: Windows for Workgroups DHCP TCP/IP-32 Client Fails to Start

{% raw %}

	Article: Q134764
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.11,3.11a,3.11b,3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft TCP/IP-32 for Windows for Workgroups, versions 3.11, 3.11a, 3.11b 
	-------------------------------------------------------------------------------
	
	
	SYMPTOM
	=======
	
	The TCP/IP protocol fails after you start your computer when you use the
	following operating system and protocols and enable DHCP:
	
	- Windows for Workgroups with TCP/IP-32.
	
	-or-
	
	- Windows 95 with TCP/IP.
	
	This problem occurs when at least one network device has a static TCP/IP address.
	
	CAUSE
	=====
	
	After a TCP/IP address conflict, your Windows for Workgroups DHCP client fails
	to send a DHCPDECLINE packet and therefore fails to obtain a valid DHCP TCP/IP
	address from the Windows NT DHCP server.
	
	This problem occurs on a Windows NT DHCP network where your Windows for
	Workgroups DHCP client obtains a dynamic TCP/IP address that is identical to the
	static TCP/IP address of another network device.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. Prevent this TCP/IP address conflict from reoccurring by:
	
	   - Excluding the static TCP/IP address from the range of dynamic TCP/IP
	     addresses on the Windows NT DHCP server.
	
	  -or-
	
	   - Configuring the static TCP/IP network device to use a TCP/IP address that
	     does not fall within the dynamic TCP/IP address range of the Windows NT
	     DHCP server.
	
	2. Request a new TCP/IP address for your Windows for Workgroups client from the
	  Windows NT DHCP server:
	
	  a. In a MS-DOS command window of Windows for Workgroups, type: " ipconfig
	     /release " (without the quotation marks)
	
	  b. Type: " ipconfig /renew " (without the quotation marks)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51, and in Microsoft TCP/IP-32 for Windows for Workgroups version 3.11, 3.11a,
	and 3.11b. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The Windows for Workgroups DHCP client accepts the dynamic TCP/IP address from
	the Windows NT DHCP server and sends an ARP (Address Resolution Packet) packet
	to make sure there is no other computer with the same address on the network.
	The TCP/IP network device with the static address replies, indicating that it
	has the same address. This causes the TCP/IP protocol on your Windows for
	Workgroups DHCP client to shut down even though it is supposed to send the
	DHCPDECLINE packet to the Windows NT DHCP server to obtain a valid TCP/IP
	address. The TCP/IP client with the static TCP/IP address shows a message that
	there is a conflict but it functions normally.
	
	Additional query words: wfw prodnt 3.11 3.11a 3.11b IP discover
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbTCPIPSearch kbZNotKeyword3 kbTCPIP311 kbTCPIP311a kbTCPIP311b
	Version           : :3.11,3.11a,3.11b,3.5,3.51
	
	=============================================================================
	

{% endraw %}
