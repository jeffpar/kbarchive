---
layout: page
title: "Q265686: IPCONFIG Returns &quot;Fatal Error: Inconsistent Registry Contents&quot;"
permalink: kb/265/Q265686/
---

## Q265686: IPCONFIG Returns &quot;Fatal Error: Inconsistent Registry Contents&quot;

	Article: Q265686
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a multihomed server running the Check Point Firewall-1 software, you may
	receive the following error message when you attempt to use the IPCONFIG
	command:
	
	  Fatal error: Inconsistent Registry contents
	
	CAUSE
	=====
	
	This behavior can occur when you remove a network interface card entry from the
	registry or if you make substantial changes to the network after installing the
	Check Point Firewall-1 software.
	
	WORKAROUND
	==========
	
	To work around this behavior, update the Tcpip.sys file. Follow these steps:
	
	1. Uninstall the Check Point Firewall-1 software.
	
	2. Expand the Tcpip.sys file from the latest Windows NT Server 4.0 Service Pack.
	
	3. Copy the new Tcpip.sys file to the %SystemRoot%\System32 folder.
	
	4. Restart the server.
	
	5. Reinstall the Check Point Firewall-1 software.
	
	MORE INFORMATION
	================
	
	For information about how to contact Check Point Software Technologies, Ltd.,
	click the appropriate article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
