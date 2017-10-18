---
layout: page
title: "Q149448: Incorrect Node Address In IPX Header Causes Broadcast Storm"
permalink: kb/149/Q149448/
---

## Q149448: Incorrect Node Address In IPX Header Causes Broadcast Storm

	Article: Q149448
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the IPX/SPX-compatible network protocol (Nwlink.vxd) on Windows
	95-based computers on a network with IPX routing, network traffic may
	intermittently increase dramatically, severely degrading network performance.
	This condition is known as a broadcast storm.
	
	CAUSE
	=====
	
	When you start a Windows 95-based computer that uses the IPX/SPX- compatible
	network protocol, frames may be sent out with incorrect IPX header information
	under certain circumstances. Specifically, the node (MAC) address is incorrect.
	Novell NetWare servers and IPX routers try to respond to these frames by sending
	to the incorrect address. Because there is no response, the servers and routers
	continue to retry, eventually generating a broadcast storm.
	
	This problem is especially noticeable if the IPX frame type is set to Auto. In
	this case, the initial RIP and SAP packets that are sent out to detect which
	frame type is in use on the network cause numerous responses to be sent to the
	incorrect MAC address. The effect is less dramatic if the IPX frame type is set
	to a specific type.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	
	Additional query words:
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
