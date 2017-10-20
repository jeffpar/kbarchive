---
layout: page
title: "Q134570: Network Adapter Errors Using Proteon 1346 ISA TokenRing Card"
permalink: /kb/134/Q134570/
---

## Q134570: Network Adapter Errors Using Proteon 1346 ISA TokenRing Card

{% raw %}

	Article: Q134570
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using a Proteon P1346 TokenRing network adapter, you may encounter
	errors with the network adapter or experience network problems.
	
	CAUSE
	=====
	
	Some models of the Proteon P1346 network adapter do not function correctly with
	Windows 95. These network adapters were shipped without EPROMs.
	
	RESOLUTION
	==========
	
	You may be able to resolve this issue by setting a jumper labeled PHROM on the
	network adapter. With this jumper enabled, the network adapter looks for
	initialization information in a file called Prorapm.dwn. This file must be
	located in the folder from which you start the network software.
	
	Note that this procedure may or may not work. If this procedure does not work,
	obtain an updated network adapter from the manufacturer, or contact the
	manufacturer to inquire about obtaining the necessary EPROM to update the
	network adapter.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	

{% endraw %}
