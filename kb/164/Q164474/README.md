---
layout: page
title: "Q164474: 0E Exception in NWLINK Sending Message from Microsoft Exchange"
permalink: kb/164/Q164474/
---

## Q164474: 0E Exception in NWLINK Sending Message from Microsoft Exchange

	Article: Q164474
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork win95kbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to send a message in Microsoft Exchange or Windows Messaging using
	SPX over a dialup connection, you may receive the following error message:
	
	  An exception 0E has occurred at 0028:c00175e6 in VxD NWLINK(01) + 0000438A.
	  This was called from 0028:c0017014 in VxD NWLINK(01) + 00003db8. It may be
	  possible to continue normally.
	
	This problem occurs only when you start Microsoft Exchange or Windows Messaging
	offline and then use the Deliver Now command to deliver messages using a dialup
	connection.
	
	CAUSE
	=====
	
	Nwlink.vxd is accepting packets larger than the maximum frame size.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	For information about configuring the maximum IPX packet size, see the following
	article in the Microsoft Knowledge Base:
	
	  Q166321 Configuring Maximum IPX Packet Size in Windows 95
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbnetwork win95 kbfixlist
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3
	Version           : :2.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
