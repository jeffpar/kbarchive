---
layout: page
title: "Q192799: Other Gateways Not Used if Default Gateway Is Not Available"
permalink: /kb/192/Q192799/
---

## Q192799: Other Gateways Not Used if Default Gateway Is Not Available

{% raw %}

	Article: Q192799
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbnetwork win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you specify more than one gateway in the TCP/IP Properties dialog box,
	gateway addresses other than the default gateway address may not be used if the
	default gateway is not available.
	
	CAUSE
	=====
	
	This problem occurs because the Transmission Control Protocol/Internet Protocol
	(TCP/IP) stack included with Windows 95 only uses the default gateway.
	
	RESOLUTION
	==========
	
	To resolve this problem, download and install the Winsock 2 update for Windows
	95. For information about how to do so, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q182108 Availability of Windows Sockets 2.0 for Windows 95
	
	STATUS
	======
	
	This problem is fixed in Microsoft Windows 95 OEM Service Release (OSR) 2.0 and
	2.5, and in Microsoft Windows 98.
	
	======================================================================
	Keywords          : kbnetwork win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
