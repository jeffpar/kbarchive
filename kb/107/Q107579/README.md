---
layout: page
title: "Q107579: Novell: Direct Hosting Works on ODI Drivers Only"
permalink: /kb/107/Q107579/
---

## Q107579: Novell: Direct Hosting Works on ODI Drivers Only

{% raw %}

	Article: Q107579
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	If you have Windows for Workgroups 3.11 running on a Novell network, Windows for
	Workgroups will support direct hosting only on machines running Novell's ODI
	drivers.
	
	MORE INFORMATION
	================
	
	Direct hosting is a new feature in Windows for Workgroups 3.11 that allows the
	virtual redirector to interface with the IPX/SPX Compatible protocol, bypassing
	NetBIOS. This new technology allows the redirector to transfer data faster
	across the network.
	
	For direct hosting to work correctly, the IPX/SPX Compatible protocol must be
	installed. This protocol cannot be installed on machines running IPX.COM or
	ArcNet; therefore, direct hosting does not work on these machines.
	
	Additional query words: 3.11 3rdparty
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
