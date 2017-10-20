---
layout: page
title: "Q120223: Sending Messages from WinPopup to NWPOPUP in Windows 95"
permalink: /kb/120/Q120223/
---

## Q120223: Sending Messages from WinPopup to NWPOPUP in Windows 95

{% raw %}

	Article: Q120223
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Although you can use WinPopup to send messages to someone using NWPOPUP, there
	are some limitations.
	
	MORE INFORMATION
	================
	
	Windows 95 lets you run the client for Windows networks (VREDIR) and the Client
	for NetWare networks (NWREDIR) together. If you send a message using WinPopup,
	VREDIR handles the request. In the event that VREDIR fails, WinPopup attempts to
	send the pop-up message to everyone on your preferred or default NetWare
	server.
	
	The fact that the recipient must be on your preferred server is one of the
	limitations. The other limitation is that the message cannot exceed 38
	characters.
	
	Novell NetWare is manufactured by Novell, Inc., a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: winpopup.exe nwpopup.exe 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
