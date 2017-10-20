---
layout: page
title: "Q137788: Intel 8/16 Lan Adapter Displays Different Name For the Same Card"
permalink: /kb/137/Q137788/
---

## Q137788: Intel 8/16 Lan Adapter Displays Different Name For the Same Card

{% raw %}

	Article: Q137788
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	In SMS Inventory Agent, separate computers display three separate manufacturer
	names for the same network interface card. This problem occurs when the Intel
	8/16 Lan Adapter network card is installed. The following example shows what you
	would see when you double click on each computer name and then click on the
	netcard icon from the Personal Computer Properties Window:
	
	  Client                      NetCard Description
	  =====                       ===================
	  WFW 3.11/MSDOS 6.21         Intel EtherExpress 16 or 16TP
	  Win 3.1/LM 2.2/MSDOS 6.2    EXP16$
	  WFW/MSDOS 5.0               MS$EE16
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0, 1.1, and 1.2. We are researching this problem and will post new
	information in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms sms invdos friendly name
	
	======================================================================
	Keywords          : kbnetwork kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	

{% endraw %}
