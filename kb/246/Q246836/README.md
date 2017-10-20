---
layout: page
title: "Q246836: User Manager for Domains and Server Manager Cannot Find PDC"
permalink: /kb/246/Q246836/
---

## Q246836: User Manager for Domains and Server Manager Cannot Find PDC

{% raw %}

	Article: Q246836
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to open the User Manager for Domains utility from a primary
	domain controller (PDC) running Microsoft Windows NT Server 3.51 or 4.0, User
	Manager for Domains may not open and you may receive the following error
	message:
	
	  Could not find domain controller for this domain. Do you want to select
	  another domain to administer?
	
	Also, when you attempt to open the Server Manager utility, you are not able to
	find the PDC.
	
	CAUSE
	=====
	
	This behavior can occur when the PDC is also configured as a Windows Internet
	Naming Service (WINS) server and the primary and secondary WINS server fields in
	the Transmission Control Protocol/Internet Protocol (TCP/IP) configuration are
	blank. The User Manager for Domains and Server Manager utilities rely on these
	domain<1bh> and domain<1ch> network basic input/output system
	(NetBIOS) mappings to locate the PDC, even when you are running these utilities
	from the PDC itself.
	
	RESOLUTION
	==========
	
	To resolve this issue, in the TCP/IP configuration of the PDC/WINS server,
	configure the server to point to itself as the primary and secondary WINS
	server. Follow these steps:
	
	1. In Control Panel, double-click Network, and then click the Protocols tab.
	
	2. In the Network Protocols box, click TCP/IP Protocol, and then click
	  Properties.
	
	3. Click the WINS Address tab, and then type the IP address of the PDC/WINS
	  server in both the Primary WINS Server and Secondary WINS Server boxes.
	
	4. Click OK, and then click Close.
	
	5. Click Yes to restart the computer.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
