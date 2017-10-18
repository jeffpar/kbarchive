---
layout: page
title: "Q121852: Network Client Support for Systems Management Server"
permalink: kb/121/Q121852/
---

## Q121852: Network Client Support for Systems Management Server

	Article: Q121852
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbtool kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	When using MS-DOS Network Client version 3.0, included with Windows NT
	Server, only inventory capabilities are supported due to a restriction in
	the NetBIOS interface on the client. This restriction precludes the use of
	the NetBIOS interface for Diagnostics and Help Desk features and should be
	corrected in the next release of the networking client.
	
	Using the NWLink protocol with this client causes inventory to return all
	0's for the network card ID. This is because the NWLink protocol does not
	have NetBIOS turned on by default, which is used to get the network card
	ID.
	
	There are also restrictions on the use of the Package Command Manager and
	Program Group Controller due to a limited implementation of the WNet and
	LAN Man Networking application programming interface (API) when Windows NT
	is running with MS-DOS Network Client 3.0. Microsoft recommends using
	Windows for Workgroups 3.11 or LAN Manager 2.2 clients at a minimum when
	Systems Management Server client support is needed.
	
	Additional query words: sms wfw wfwg prodsms
	
	======================================================================
	Keywords          : kbtool kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
