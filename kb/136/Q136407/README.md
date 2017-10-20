---
layout: page
title: "Q136407: Accton MPX EN1652 Network Adapter Not Detected"
permalink: /kb/136/Q136407/
---

## Q136407: Accton MPX EN1652 Network Adapter Not Detected

{% raw %}

	Article: Q136407
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
	
	The Accton MPX EN1652 NE2000-compatible network adapter in your computer may not
	be detected by Setup or the Add New Hardware Wizard.
	
	CAUSE
	=====
	
	This problem can occur if the network adapter is configured to use one of the
	following base I/O addresses:
	
	- 240
	
	- 280
	
	- 2C0
	
	Although these are valid settings for the network adapter, Windows 95 does not
	query these addresses when it searches for NE2000-compatible network adapters.
	
	RESOLUTION
	==========
	
	To work around this problem, use either of the following methods:
	
	- Manually install the Accton MPX EN1652 network adapter as an NE2000-
	  compatible network adapter by following these steps:
	
	  1. Click the Start button, point to Settings, and then click Control Panel.
	
	  2. Double-click the Add New Hardware icon, and then click Next.
	
	  3. Click the No option button, and then click Next.
	
	  4. Double-click Network Adapters.
	
	  5. In the Manufacturers box, click Novell/Anthem. In the Models box, click
	     NE2000 Compatible.
	
	  6. Click OK, and then click Next.
	
	- Use the configuration utility included with the network adapter to configure
	  it to use one of the following valid base I/O addresses:
	
	   - 300
	   - 320
	   - 340
	   - 360
	
	  After you configure the network adapter to use one of these base I/O
	  addressed, run the Add New Hardware Wizard to install the network adapter.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
