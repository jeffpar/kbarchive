---
layout: page
title: "Q247063: XFOR: DNS Error Installing Internet Mail Service on Windows 2000"
permalink: kb/247/Q247063/
---

## Q247063: XFOR: DNS Error Installing Internet Mail Service on Windows 2000

	Article: Q247063
	Product(s): Microsoft Exchange
	Version(s): 2000,5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install the Internet Mail Service for Exchange Server 5.5 on a
	Windows 2000 member server, it does not install, the installation wizard does
	not continue, and you receive the following error message:
	
	  The internet mail service requires DNS domain name to be configured on
	  [server name]. To configure domain name use network control panel on [server
	  name] or select another server.
	
	This error can occur whether or not there is an entry for the domain name suffix
	on the DNS tab of the Advanced Properties dialog box of the TCP/IP Protocol.
	
	CAUSE
	=====
	
	The DNS entry on the Windows 2000 computer is not recognized as a valid domain
	name entry.
	
	RESOLUTION
	==========
	
	Manually add the DNS suffix to the computer name by following these steps:
	
	1. In Control Panel, double-click System.
	
	  NOTE: Another option is to right-click the My Computer icon on the desktop,
	  and then click Properties. The end result is the same.
	
	2. Click the Network Identification tab.
	
	3. Click on the Properties button to display the Identification Changes dialog
	  box.
	
	4. Click More.
	
	5. Add the DNS suffix in the "Primary DNS Suffix for this Computer" box, or
	  example "microsoft.com".
	
	6. Click OK.
	
	7. Restart the computer when you are prompted.
	
	8. Run the Internet Mail Service installation again.
	
	MORE INFORMATION
	================
	
	This only applies when the Windows 2000 server is a member of a Microsoft
	Windows NT 4.0 domain. In a Windows 2000 domain, the full domain name is already
	implemented and Internet Mail Service installs correctly.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbwin2000Ssearch kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :2000,5.5
	Issue type        : kbprb
	
	=============================================================================
	
