---
layout: page
title: "Q155941: Phonebook Entry Is Not Updated After Changing Modem"
permalink: /kb/155/Q155941/
---

## Q155941: Phonebook Entry Is Not Updated After Changing Modem

{% raw %}

	Article: Q155941
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you change the modem in your Windows NT-based computer, you may experience
	one or more of the following problems:
	
	- You can no longer connect to your Dial-Up Networking server or Internet
	  service provider (ISP).
	
	- You consistently connect at a lower speed than expected.
	
	CAUSE
	=====
	
	The Initial BPS setting in the modem configuration for Dial-Up Networking was
	not updated to reflect the settings for the new modem.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following steps to edit each phonebook entry:
	
	1. Double-click My Computer, and then double-click Dial-Up Networking.
	
	2. Click a phonebook entry in the Phonebook Entry To Dial box.
	
	3. Click More, and then click Edit Entry And Modem Properties.
	
	4. On the Basic tab, click Configure.
	
	5. In the Initial Speed (bps) box, click the correct setting for your modem.
	
	6. Repeat steps 2-5 for each phonebook entry.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	4.0. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	If your previous modem had a maximum speed that is slower than your current
	modem, your current modem will only connect at your previous modem's maximum
	speed. Or, if your previous modem had a maximum speed that is faster than your
	current modem, your current modem may not connect to the server at all.
	
	NOTE: If you use a different COM port when you install a new modem, this issue
	does not occur.
	
	Additional query words: prodnt remote access service dun dialup ppp ras
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
