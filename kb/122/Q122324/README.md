---
layout: page
title: "Q122324: DEC Turbo Port Addresses Appear Reported Incorrectly"
permalink: /kb/122/Q122324/
---

## Q122324: DEC Turbo Port Addresses Appear Reported Incorrectly

{% raw %}

	Article: Q122324
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Systems Management Server appears to incorrectly report the actual
	port address for DEC Turbo network cards.
	
	CAUSE
	=====
	
	DEC Turbo DE20x NICs support only a primary or secondary I/O port address.
	Because of this, the DEC Turbo MAC driver needs only to configure the drivers
	I/O port Registry entry for 0x1 or 0x2.
	
	Systems Management Server reads the Registry entries for NIC drivers when it
	collects hardware inventory. Because of the special configuration of DEC Turbo
	NIC Registry entries, Systems Management Server reports the NIC I/O port
	addresses as 0x1 or 0x2.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	DEC Turbo network cards are manufactured by Digital Equipment Corporation, a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding this product's performance or reliability.
	
	Additional query words: sms adapter prodsms
	
	======================================================================
	Keywords          : kbnetwork kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	

{% endraw %}
