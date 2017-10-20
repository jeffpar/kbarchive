---
layout: page
title: "Q266213: Event id:7 service failed to start"
permalink: /kb/266/Q266213/
---

## Q266213: Event id:7 service failed to start

{% raw %}

	Article: Q266213
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start your computer, you may receive an error message indicating that
	the Keyex and Mouex drivers did not start, and Event Viewer logs the following
	event:
	
	  Event Id:7
	  Description: service failed to start.
	  Source: Keyex.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the Devices tool in Control Panel to disable Keyex
	and Mouex and to enable the Keyboard Class Driver and Mouse Class Driver.
	
	MORE INFORMATION
	================
	
	The Keyex and Mouex drivers are not native to Microsoft Windows NT 4.0; they are
	installed by IBM's Netfinity remote control software. To disable and replace
	them, follow these steps:
	
	1. Start Control Panel.
	
	2. Double-click Devices.
	
	3. In the Devices dialog box, under Device, select Keyex, click Startup, click
	  Disabled, and then click OK. Use the same procedure to disable Mouex.
	
	4. To enable the Keyboard Class Driver, select Keyboard Class Driver, click
	  Startup, click System, and then click OK. Use the same procedure to enable
	  the Mouse Class Driver.
	
	5. Click Close to close the Devices dialog box. Quit Control Panel, and then
	  restart the computer.
	
	For information about how to contact IBM, click the appropriate article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
