---
layout: page
title: "Q135135: Setup Hangs Some Racal Modems"
permalink: /kb/135/Q135135/
---

## Q135135: Setup Hangs Some Racal Modems

{% raw %}

	Article: Q135135
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
	
	When the hardware detection portion of Windows 95 Setup detects a Racal modem,
	the modem may stop working.
	
	CAUSE
	=====
	
	Setup sends an "AT%V" command to the modem. This switches some Racal modems into
	V.25 mode, causing the modem to stop responding (hang).
	
	RESOLUTION
	==========
	
	To reset the modem, turn your computer off and then back on.
	
	To set up a Racal modem, follow these steps:
	
	1. In Control Panel, double-click the Add New Hardware icon, and then click
	  Next.
	
	2. Click the No option button, and then click Next.
	
	3. In the Hardware Types box, click Modem, and then click Next.
	
	4. Click the "Don't detect my modem; I will select it from a list" check box to
	  select it, and then click Next.
	
	5. In the Manufacturers box, click Racal. In the Models box, click the
	  appropriate modem, and then click Next.
	
	6. Click the appropriate communications port, click Next, and then click Finish.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
