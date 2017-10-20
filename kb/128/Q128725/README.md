---
layout: page
title: "Q128725: Domain Name Ignored by Windows for Workgroups with TCP/IP-32"
permalink: /kb/128/Q128725/
---

## Q128725: Domain Name Ignored by Windows for Workgroups with TCP/IP-32

{% raw %}

	Article: Q128725
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.11a; WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft TCP/IP-32 for Windows for Workgroups, version 3.11a 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a Windows for Workgroups version 3.11 client running TCP/IP-32 version 3.11
	requests an IP address from a Dynamic Host Configuration Protocol (DHCP) server,
	the IP address is received but it is not recognized by the Windows for
	Workgroups client computer. For example, if you type IPCONFIG /ALL at the MS-DOS
	Command Prompt, the domain name of the DHCP server is not displayed. In
	addition, if you PING another computer, the Windows for Workgroups client
	computer does not append the domain name onto the host name.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. Run Network Setup from the Network program group.
	
	2. Choose Drivers.
	
	3. Select Microsoft TCP/IP-32 3.11 and choose Setup.
	
	4. Choose DNS in the Microsoft TCP/IP Configuration dialog box.
	
	5. Enter the Domain Name and choose OK.
	
	6. Quit Network Setup and restart Windows for Workgroups.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in TCP/IP-32 for Windows for
	Workgroups, version 3.11a. This problem was corrected in TCP/IP-32 for Windows
	for Workgroups, versin 3.11b.
	
	Additional query words: prodtcp32 3.11a wfw wfwg option 15
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbTCPIPSearch kbWFWSearch kbZNotKeyword3 kbWFW311 kbTCPIP311a
	Version           : :3.11a; WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
