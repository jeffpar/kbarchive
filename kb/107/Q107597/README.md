---
layout: page
title: "Q107597: Windows for Workgroups Protocol Limits"
permalink: /kb/107/Q107597/
---

## Q107597: Windows for Workgroups Protocol Limits

{% raw %}

	Article: Q107597
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-SEP-1999
	
	3.10 3.11
	
	WINDOWS
	
	kbnetwork
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	Windows for Workgroups 3.1 and 3.11 have a limit of four protocols per
	network card and a maximum of eight protocols that can be installed at any
	given time.
	
	If you are using NDIS 2.0 drivers and the NetBEUI protocol in Windows for
	Workgroups 3.11, you can add only two additional protocols. This differs
	from version 3.1, in which you can load up to four protocols, including
	NetBEUI. If you are using all NDIS 3.0 drivers in Windows for Workgroups
	3.11, you can use four protocols per card.
	
	This limitation exists because the Windows for Workgroups 3.11 NetBEUI
	protocol requires two bindings to the protocol manager: one binding for
	real mode (NDISHLP.SYS) and one for protected mode (NETBEUI.386). If the
	NetBEUI protocol is removed, up to four other protocols can be used.
	
	Additional query words: 3.10 3.11 limit protocols max maximum grey gray greyed grayed add protocol button total
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
