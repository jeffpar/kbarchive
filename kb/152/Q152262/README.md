---
layout: page
title: "Q152262: Mismatched IPX/SPX Frame Types Prevent Connectivity"
permalink: /kb/152/Q152262/
---

## Q152262: Mismatched IPX/SPX Frame Types Prevent Connectivity

{% raw %}

	Article: Q152262
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): 3rdpartynet msnets win95 kb3rdPartyNetClientkbfaq
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you are using the IPX/SPX-compatible protocol in Windows 95, you may not be
	able to connect to other computers on the network.
	
	CAUSE
	=====
	
	This behavior can occur if the frame type setting for the IPX/SPX- compatible
	protocol on your computer differs from the frame type being used on the server.
	
	RESOLUTION
	==========
	
	Verify that the frame type setting on your computer matches the frame type
	setting on the server. To do so, follow these steps:
	
	1. Use the right mouse button to click the Network Neighborhood icon on the
	  desktop, and then click Properties on the menu that appears.
	
	2. On the Configuration tab, click IPX/SPX-Compatible Protocol, and then click
	  Properties.
	
	3. Click the Advanced tab.
	
	4. In the Property box, click Frame Type.
	
	5. Note the setting in the Value box. If this setting does not match the setting
	  in use on the server, click the appropriate frame type in the Value box, and
	  then click OK.
	
	6. Click OK.
	
	7. If you are prompted to restart your computer, do so.
	
	Additional query words: novell netware
	
	======================================================================
	Keywords          : 3rdpartynet msnets win95 kb3rdPartyNetClient kbfaq
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
