---
layout: page
title: "Q115835: TCP/IP Stack for Workgroups Add-On 3.11 Fails to Load"
permalink: /kb/115/Q115835/
---

## Q115835: TCP/IP Stack for Workgroups Add-On 3.11 Fails to Load

{% raw %}

	Article: Q115835
	Product(s): Microsoft Disk Operating System
	Version(s): 3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Workgroup Add-On for MS-DOS, version 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The setup procedure of the TCP/IP stack for Windows for Workgroups 3.11 to
	Workgroups Add-On version 3.11 does not prompt for the default gateway, IP
	address, and Subnet mask. As a result, TCP/IP stack fails to load.
	
	RESOLUTION
	==========
	
	After setup of TCP/IP is complete, do the following:
	
	1. Add the following three lines to the [TCPIP] section of the PROTOCOL.INI
	  file:
	
	     DefaultGateway0= <default gateway address>
	     SubnetMask0= <subnet mask>
	     IPAddress0= <IP address>
	
	  NOTE: Each octet above must be separated by a space.
	
	2. Save the PROTOCOL.INI file and reboot the workstation.
	
	Additional query words: wfw wfwg 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311DOS
	Version           : :3.11
	
	=============================================================================
	

{% endraw %}
