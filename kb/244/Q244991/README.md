---
layout: page
title: "Q244991: Services Do Not Start with Intel EtherExpress Pro 100+ NIC."
permalink: kb/244/Q244991/
---

## Q244991: Services Do Not Start with Intel EtherExpress Pro 100+ NIC.

	Article: Q244991
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start a computer that is running Microsoft Windows NT Server 4.0
	Service Pack 3 and has an Intel EtherExpress Pro 100+ LAN Model # PILA8480
	network interface card (NIC) installed, one or more services may not start
	automatically, and Event Viewer may record the following event:
	
	  Event ID 5719 netlogon
	  No Windows NT Domain Controller is available for domain domain name.
	  The following error occurred:
	  There are currently no logon servers available to service the logon request.
	
	When this occurs, Event Viewer may also record similar events at startup
	involving, but not limited to, the following services:
	
	- Domain Name Service (DNS)
	- Remote Access Service (RAS)
	- Dynamic Host Configuration Protocol (DHCP)
	- Windows Internet Name Service (WINS)
	
	Though these services may not start automatically, the NIC may still initialize
	properly, and you can manually start these services in Control Panel.
	
	CAUSE
	=====
	
	This behavior can occur because the standard NIC driver and the Iaft.sys virtual
	network driver for the Intel EtherExpress Pro 100+ LAN NIC do not load properly.
	
	RESOLUTION
	==========
	
	IMPORTANT: This article contains information about modifying the registry.
	Before you modify the registry, make sure to back it up and make sure that you
	understand how to restore the registry if a problem occurs. For information
	about how to back up, restore, and edit the registry, click the following
	article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To work around this behavior, change the value data in the 'Group' value from
	'NDIS' to 'PNPTDI' in the following registry keys:
	
	HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\IAFT
	HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\IAFTPROTOCOL
	
	NOTE: Intel Corporation supplied this workaround. Microsoft has not tested it and
	therefore cannot guarantee its results.
	
	MORE INFORMATION
	================
	
	The Intel EtherExpress Pro 100+ LAN NIC, Model # PILA8480, is a fault-tolerant
	NIC designed to run in conjunction with another Intel NIC of the same model. The
	Iaft.sys driver affects the functionality of this NIC. To make this NIC work
	properly, please contact the Intel Corporation to inquire about a Network Driver
	Interface Specifications (NDIS) patch for this NIC.
	
	Additional query words: nt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
