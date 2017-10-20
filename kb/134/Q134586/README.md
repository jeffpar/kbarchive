---
layout: page
title: "Q134586: Identifying Identical Network Adapters"
permalink: /kb/134/Q134586/
---

## Q134586: Identifying Identical Network Adapters

{% raw %}

	Article: Q134586
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
	
	When you have two identical network adapters installed on the same computer, the
	adapters appear identical in Device Manager and cannot be uniquely identified.
	
	CAUSE
	=====
	
	The Network Setup user interface does not provide a method for uniquely
	identifying multiple instances of the same adapter. This does not affect the
	functionality of the network adapters, but may be confusing in appearance.
	
	RESOLUTION
	==========
	
	To uniquely identify a network adapter, disable one of the drivers in Device
	Manager and match it to an unplugged adapter. To do so, follow these steps:
	
	1. Double-click My Computer.
	
	2. In the My Computer dialog box, double-click Control Panel.
	
	3. In Control Panel, double-click the System Icon.
	
	4. In the System Properties dialog box, click the Device Manager tab.
	
	5. Double-click the Network Adapters Branch icon to expand it. Note that the two
	  identical drivers are listed there.
	
	6. Click one of the drivers, and then click the Properties button.
	
	7. Under Device Usage, make sure that the box that corresponds to your current
	  configuration is not checked.
	
	8. Quit Device Manager and restart your computer.
	
	9. Unplug the cable from one of the network adapters, and then attempt to make a
	  network connection.
	
	If you are able to connect, the adapter that you disabled in Device Manager is
	binding to the adapter that is unplugged. If you are not able to connect, repeat
	step 9 with the other network cables.
	
	Additional query words: duplicate netcard difference
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
