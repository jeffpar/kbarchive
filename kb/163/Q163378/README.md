---
layout: page
title: "Q163378: Microsoft Exchange Hangs Sending Message Using SPX"
permalink: /kb/163/Q163378/
---

## Q163378: Microsoft Exchange Hangs Sending Message Using SPX

{% raw %}

	Article: Q163378
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork win95kbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Exchange or Windows Messaging may stop responding (hang) when you try
	to transmit a message using SPX over a dial-up connection.
	
	This problem occurs only if the installed version of NWLINK is dated before
	6/27/96 and the Wsipx.vxd file is dated before 3/5/97.
	
	CAUSE
	=====
	
	This problem occurs only when Microsoft Exchange or Windows Messaging is started
	offline and you use the Deliver Now command to deliver messages over a dial-up
	connection.
	
	The problem occurs because WSIPX submits a larger frame than is supported. SPX
	checks the NDIS packet frame size against the connection's maximum frame size
	and hangs or returns a "The message cannot be delivered" error message. The NDIS
	packet frame size is 1497 bytes and the maximum frame size is 1160 bytes.
	
	
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
	Keywords          : kberrmsg kbnetwork win95 kbfixlist
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
