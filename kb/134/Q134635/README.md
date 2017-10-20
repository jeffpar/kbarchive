---
layout: page
title: "Q134635: System Monitor Does Not Display Modem Statistics"
permalink: /kb/134/Q134635/
---

## Q134635: System Monitor Does Not Display Modem Statistics

{% raw %}

	Article: Q134635
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbtool win95 msnetwork
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using System Monitor, the modem performance statistics may not be
	an available option.
	
	CAUSE
	=====
	
	In order to view modem performance statistics in System Monitor, both of the
	following requirements must be met:
	
	- The Record A Log File option must be enabled for the modem.
	
	- You must be using a 32-bit communications program.
	
	RESOLUTION
	==========
	
	To enable the Record A Log File option and view modem performance statistics in
	System Monitor, follow these steps:
	
	1. Click the Start button, point to Settings, and then click Control Panel.
	
	2. Double-click the Modems icon.
	
	3. Click your modem, and then click Properties.
	
	4. On the Connection tab, click the Advanced button.
	
	5. Click the Record A Log File check box to select it, and then click OK. Click
	  OK, and then click Close.
	
	6. Start a 32-bit communications program (such as HyperTerminal or Dial-Up
	  Networking).
	
	7. Click the Start button, point to Programs, point to Accessories, and then
	  click System Monitor.
	
	  NOTE: System Monitor is included only on the Windows 95 CD-ROM and is not
	  installed by default. If you did not install System Monitor when you
	  installed Windows 95, you can install it by double-clicking the Add/Remove
	  Programs icon in Control Panel, and then selecting it on the Windows Setup
	  tab.
	
	8. On the Edit menu, click Add Item.
	
	9. In the Category list, click your modem, click Bytes Received/Sec or Bytes
	  Sent/Sec in the Items list, and then click OK.
	
	MORE INFORMATION
	================
	
	When the Record A Log File option is enabled, a Modemlog.txt file is generated
	in the Windows folder. This log file contains all the commands sent to and
	returned by the modem and is helpful for troubleshooting modem problems.
	
	New information is appended to the Modemlog.txt file each time you use the modem.
	The Modemlog.txt file may become large over time, so you may want to delete it
	periodically.
	
	Additional query words: perfmon stat tracking
	
	======================================================================
	Keywords          : kbtool win95 msnetwork 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
