---
layout: page
title: "Q176280: TN3270 Name Resolution Requires Fully Qualified Domain Names"
permalink: /kb/176/Q176280/
---

## Q176280: TN3270 Name Resolution Requires Fully Qualified Domain Names

{% raw %}

	Article: Q176280
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The TN3270 service included with SNA Server version 3.0 (and later) allows an
	administrator to restrict access to specific TN3270 clients by assigning either
	IP addresses or host names to LUA LUs/Pools assigned to the TN3270 service.
	
	When you restrict access to TN3270 sessions using host names, TN3270 clients fail
	to connect to the TN3270 service if the host name used is the NETBIOS name (that
	is, computer name) of the client. The exact error that the client sees will
	depend on the TN3270 emulator being used.
	
	The 3270 applet included with SNA Server 3.0 Service Pack 2 when configured for
	TN3270E Server Connection returns the following error when this problem occurs:
	
	  [TN3270-33]: ERROR - The server is unable to satisfy the session request.
	
	A TN3270 internal trace returns the following message to the TN3270 client:
	
	  >10/31 14:00:50.491 (+ smidgen ) Event=TEV_DataToClient
	  Thread = 0x00000145 Session = 0x0009F6F0 Socket = 0x00000300
	  SUBNEG BEGIN TN3270E DEVICE-TYPE REJECT
	  Number of bytes = 9
	
	CAUSE
	=====
	
	If the TN3270 service is configured for Use Name Resolution, it requires the use
	of fully qualified domain names (FQDNs). The TN3270 service does not allow
	clients to connect to LUA LUs/Pools that are configured with client NETBIOS
	names.
	
	Note: You must select the Use Name Resolution option under TN3270 Server
	properties when you restrict access via host names.
	
	WORKAROUND
	==========
	
	Specify the fully qualified domain names in the LUA LUs/Pools properties when
	restricting access by host name. A simple way of determining the FQDN for a
	client is to Ping the client. For example:
	
	c:\> ping client1
	
	 Pinging client1.dns.company.com [ip address] with 32 bytes of data:
	
	 Reply from <ip address>: bytes=32 time<10ms TTL=128
	 Reply from <ip address>: bytes=32 time<10ms TTL=128
	 Reply from <ip address>: bytes=32 time<10ms TTL=128
	 Reply from <ip address>: bytes=32 time<10ms TTL=128
	
	In this case, the LUA LU/Pool should be configured with a name of
	client1.dns.company.com to allow a user on the CLIENT1 system to access this
	LU/Pool.
	
	STATUS
	======
	
	The TN3270 service has been updated to correctly use both NETBIOS names and
	FQDNs for name resolution.
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0 SP1,
	and 3.0 SP2.
	
	This problem was corrected in the latest SNA Server version 3.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	The name resolution method used is determined by the Windows NT Server computer
	on which SNA Server is installed. There are currently four NetBIOS over TCP/IP
	name resolution methods: b-node, p-node, m-node, and h-node. For more
	information about these name resolution methods, please refer to the following
	Microsoft Knowledge Base article:
	
	  Q119493 NetBIOS over TCP/IP Name Resolution and WINS
	
	To determine which name resolution method is being used by a Windows NT system,
	use the IPCONFIG utility from a command prompt as shown here:
	
	  "c:\> ipconfig /all" (without the quotation marks)
	
	The IPCONFIG /ALL command will return information similar to the following:
	
	Windows NT IP Configuration
	
	  Host Name . . . . . . . . . : server1.companyname.com
	  DNS Servers . . . . . . . . : 123.23.234.123
	                             123.23.235.124
	  Node Type . . . . . . . . . : Mixed
	
	  NetBIOS Scope ID. . . . . . :
	
	  IP Routing Enabled. . . . . : No
	
	  WINS Proxy Enabled. . . . . : No
	
	  NetBIOS Resolution Uses DNS : No
	
	Ethernet adapter El90x1:
	
	  Description . . . . . . . . : 3Com 3C90x Ethernet Adapter
	
	  Physical Address. . . . . . : 00-80-C7-55-55-C5
	
	  DHCP Enabled. . . . . . . . : Yes
	
	  IP Address. . . . . . . . . : 124.24.235.123
	
	  Subnet Mask . . . . . . . . : 255.255.248.0
	
	  Default Gateway . . . . . . : 124.24.235.1
	
	  DHCP Server . . . . . . . . : 124.24.235.111
	
	  Primary WINS Server . . . . : 123.23.234.125
	
	  Secondary WINS Server . . . : 123.23.234.126
	
	  Lease Obtained. . . . . . . : Tuesday, January 01, 1998 7:30:00 AM
	
	  Lease Expires . . . . . . . : Saturday, November 05, 1998 7:30:00 AM
	
	The name resolution method used for this sample system is Mixed (m-node) as shown
	by the Node Type parameter above.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
