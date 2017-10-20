---
layout: page
title: "Q130821: Configuring IBM Token Ring Card to Handle Large Packets"
permalink: /kb/130/Q130821/
---

## Q130821: Configuring IBM Token Ring Card to Handle Large Packets

{% raw %}

	Article: Q130821
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
	
	The maximum value you can set for the Receive Buffer Size setting for the IBM
	Token Ring 16/4 network adapter is 2040 bytes. However, you can configure the
	IBM Token Ring 16/4 network adapter to use a packet size larger than 2040 bytes
	by modifying the Receive Buffers setting.
	
	MORE INFORMATION
	================
	
	To configure the IBM Token Ring 16/4 network adapter to use a packet size larger
	than 2040 bytes, follow these steps:
	
	1. Click the Start button, point to Settings, then click Control Panel.
	
	2. Double-click the Network icon.
	
	3. Click the IBM Token Ring network adapter, then click the Properties button.
	
	4. Click the Advanced tab.
	
	5. Set the Receive Buffer Size setting to 2040, then set the Receive Buffers
	  setting to a value greater than 1.
	
	Although the maximum value you can set for the Receive Buffer Size setting is
	2040 bytes, the network adapter has the ability to chain receive buffers
	together to receive larger packets. Valid values for the Transmit Buffer Size
	setting range from 256 to 17,952 bytes. Valid values for the Receive Buffer Size
	setting range from 256 to 2040 bytes.
	
	If you set the Transmit Buffer Size setting to a value larger than 2040 bytes,
	you must configure the network adapter to receive packets of at least that size
	to communicate on the network.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
