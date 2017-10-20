---
layout: page
title: "Q123106: SMS Inventory Disables Speaker on Client Computer"
permalink: /kb/123/Q123106/
---

## Q123106: SMS Inventory Disables Speaker on Client Computer

{% raw %}

	Article: Q123106
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbenv kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Microsoft Systems Management Server Inventory Agent on a client
	computer, the speaker on the client computer stops working.
	
	For example, you can load the speaker by adding the following line to the
	[drivers] section of the SYSTEM.INI file:
	
	     Wave = speaker.drv
	
	After the SMS client runs the inventory, you lose the speaker; that is, if you
	test the CHIMES.WAV file from the Control Panel Sound applet, there is no sound,
	regardless of the volume setting.
	
	CAUSE
	=====
	
	This problem occurs when you use the SPEAKER.DRV file that was written for the
	MCI sound driver.
	
	RESOLUTION
	==========
	
	Restart (reboot) the client computer but do not run the inventory (SMSLS.BAT);
	the speaker will return to normal.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: sms prodsms
	
	======================================================================
	Keywords          : kbenv kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	

{% endraw %}
