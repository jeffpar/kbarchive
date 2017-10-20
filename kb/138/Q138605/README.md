---
layout: page
title: "Q138605: Faxes Use Network Fax Server's Dialing Properties"
permalink: /kb/138/Q138605/
---

## Q138605: Faxes Use Network Fax Server's Dialing Properties

{% raw %}

	Article: Q138605
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send a long distance fax through a Microsoft Fax network fax server
	located on another computer on the network, the calling card settings specified
	in your Dialing properties are not used.
	
	The Dialing properties on your computer are used only when you send a fax using a
	modem connected to your computer.
	
	CAUSE
	=====
	
	Faxes sent using a Microsoft Fax network fax server use the Dialing properties
	of the computer on the network to which the modem is connected.
	
	RESOLUTION
	==========
	
	System administrators should implement calling card and billing settings on the
	computer that is used as the network fax server.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
