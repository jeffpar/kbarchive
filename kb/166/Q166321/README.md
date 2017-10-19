---
layout: page
title: "Q166321: Configuring Maximum IPX Packet Size in Windows 95"
permalink: /kb/166/Q166321/
---

## Q166321: Configuring Maximum IPX Packet Size in Windows 95

	Article: Q166321
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 1,2,2.1
	Operating System(s): 
	Keyword(s): kbenv osr1 msnets osr2 win95
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 1, 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using the IPX/SPX-compatible protocol that is included in Windows
	95 to communicate across an IPX router, some communications may not work if the
	router requires a smaller packet size than is used by the LAN media (Ethernet or
	Token Ring, for example).
	
	In some cases, NCP-based communications with NetWare servers may succeed, but
	operations using other protocols running over IPX, such as SPX or NetBIOS, may
	not work.
	
	CAUSE
	=====
	
	You may be able to work around such routing restrictions by manually limiting
	the size of IPX packets sent by the communicating systems. However, when you are
	using the version of the IPX/SPX-compatible protocol that is included in Windows
	95 (all versions), it is not possible to manually specify a maximum IPX packet
	size.
	
	RESOLUTION
	==========
	
	An update for Microsoft Windows 95 and OEM Service Release 2 (OSR2) to provide
	this functionality is now available from Microsoft, but has not been fully
	regression tested and should be applied only to computers experiencing this
	specific problem. To resolve this problem immediately, contact Micros ft
	Technical Support to obtain the fix.
	
	For a complete list of Microsoft Technical Support phone numbers and information
	on support costs, please go to the following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	This update for Windows 95 and OEM Service Release 2 should have the following
	file attributes (or later):
	
	  File name     Version    Date      Time     Size
	  ---------------------------------------------------------
	  Nwlink.vxd    4.00.1112  4/23/97   11:12am  51,049 bytes
	
	
	It may be possible to work around this issue by limiting the maximum packet size
	sent by the network adapter itself. Not all network adapter drivers provide such
	a feature, and implementing such a feature, if it exists, may vary among network
	adapter drivers. Contact your network adapter manufacturer for more information
	about this possible workaround.
	
	It may also be possible to resolve this issue by a configuration change or
	updated software or firmware on the router itself. Contact your router
	manufacturer for more information about this possible workaround.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95 and OEM
	Service Release 2 (OSR2).
	
	This updated functionality is not included in Microsoft Windows 98.
	
	MORE INFORMATION
	================
	
	
	For additional information about Windows 95 updates, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q161020 Implementing Windows 95 Updates
	
	For additional information about specifying the maximum IPX packet size for the
	IPX/SPX-compatible protocol that is included in Windows NT, see the following
	article in the Microsoft Knowledge Base:
	
	  Q99745 Tuning NWLINK Registry Parameters
	
	  Q103002 REG: Network Services Entries, Part 6
	
	For information about how to contact third-party vendors, see the following
	articles in the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv osr1 msnets osr2 win95 
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3 kbWin95OPKOSR2 kbWin95OPKOSR1 kbWin95OPKOSR210
	Version           : :1,2,2.1
	
	=============================================================================
	
