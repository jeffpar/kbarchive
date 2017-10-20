---
layout: page
title: "Q125962: TCP/IP-32 Using DHCP: Can't Override Default Gateway"
permalink: /kb/125/Q125962/
---

## Q125962: TCP/IP-32 Using DHCP: Can't Override Default Gateway

{% raw %}

	Article: Q125962
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.11,3.11a,3.11b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft TCP/IP-32 for Windows for Workgroups, versions 3.11, 3.11a, 3.11b 
	- Microsoft Windows for Workgroups 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If "Enable Automatic DHCP configuration" is selected when configuring a
	TCP/IP-32 client, three fields at the bottom of the screen still allow values to
	be entered. Any values added to these fields should over-ride the associated
	DHCP parameters. However:
	
	- If the DHCP server provides an "Option 003 Router" address to the client, the
	  over-ride doesn't work properly.
	
	- If the DHCP server does not provide an "Option 003 Router" address to the
	  client, and the default gateway field is filled out on the client, there will
	  be no default gateway.
	
	CAUSE
	=====
	
	TCP/IP-32 is ignoring the DefaultGateway parameter in SYSTEM.INI when DHCP is
	enabled.
	
	WORKAROUND
	==========
	
	The following route command may be executed on the client:
	
	  route add 0.0.0.0 MASK 0.0.0.0 <router_address>
	
	where <router_address> is the IP address of the default gateway.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in TCP/IP-32, TCP/IP-32a and
	TCP/IP-32b. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodtcp32 prodtcp 3.11 3.11a 3.11b wfw wfwg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbTCPIPSearch kbWFWSearch kbZNotKeyword3 kbTCPIP311 kbTCPIP311a kbTCPIP311b
	Version           : :3.11,3.11a,3.11b
	
	=============================================================================
	

{% endraw %}
