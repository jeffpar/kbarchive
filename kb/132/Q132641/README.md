---
layout: page
title: "Q132641: Automatically Detecting Racal Modem Causes Modem Hang"
permalink: /kb/132/Q132641/
---

## Q132641: Automatically Detecting Racal Modem Causes Modem Hang

{% raw %}

	Article: Q132641
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
	
	After Windows 95 automatically detects your Racal modem, the modem stops
	working.
	
	CAUSE
	=====
	
	Windows 95 sends the command "AT%V" to the modem. This command switches some
	Racal modems into V.25 mode, causing the modem to stop responding (hang).
	
	RESOLUTION
	==========
	
	To reset the modem, turn your computer off and back on.
	
	To install the modem, follow these steps:
	
	1. Click the Start button, point to Settings, then click Control Panel.
	
	2. Double-click the Add New Hardware icon, then click Next.
	
	3. When you are prompted "Do you want Windows to search for your new hardware?"
	  click No, then click Next.
	
	4. In the Hardware Types box, click Modem, then click Next.
	
	5. Click the "Don't detect my modem; I will select it from a list" check box to
	  select it, then click Next.
	
	6. In the Manufacturers box, click Racal. In the Models box, click the modem you
	  are using. Click Next.
	
	7. In the "Select the port to use with this modem" box, click the appropriate
	  communications port, then click Next.
	
	8. Click Finish.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
