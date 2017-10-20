---
layout: page
title: "Q185916: SMS: PCMCIA Network Card May Not Be Reported by Win95 Inventory"
permalink: /kb/185/Q185916/
---

## Q185916: SMS: PCMCIA Network Card May Not Be Reported by Win95 Inventory

{% raw %}

	Article: Q185916
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Systems Management Server inventories notebook computers that are running
	Windows 95 and using certain PCMCIA network cards, the inventory may not report
	the NETCARD inventory property.
	
	CAUSE
	=====
	
	The Windows 95 inventory process uses an inventory agent, INVDOS, which in turn
	calls a module, Getnet.exe to obtain network interface card (NIC) information.
	Getnet parses the Protocol.ini file for NIC information. Newer PCMCIA cards use
	the registry instead of the Protocol.ini file. The Protocol.ini file has a
	[data] section that contains only the entry "Netcards=". This is a default
	setting.
	
	The Systems Management Server inventory process assumes that the "Netcards="
	entry in the [data] section of the Protocol.ini file means that a NIC does not
	exist. Consequently, the NETCARD inventory property is not reported.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server version 1.2. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
