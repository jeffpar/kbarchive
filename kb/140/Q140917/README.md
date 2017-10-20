---
layout: page
title: "Q140917: SMS Sender Sets Enormous Estimated Bandwidth in Registry"
permalink: /kb/140/Q140917/
---

## Q140917: SMS Sender Sets Enormous Estimated Bandwidth in Registry

{% raw %}

	Article: Q140917
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): kbnetwork smssenders kbSMSSender
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Systems Management Server Sender-based bandwidth control writes a initial
	Estimated Bandwidth of 0xffffffff bytes per second (very large) in the registry.
	When you first use the Addresses dialog box in Sender Manager to modify an
	Address-based bandwidth, the Estimated Bandwidth is set to an appropriate
	(lower) value. By default, this value is 0x138880 (10,000 decimal).
	
	However, if you use the Sender dialog box in Sender Manager, this initial value
	is not lowered and Systems Management Server assumes you have erroneously large
	bandwidth.
	
	This error results in the Sender stopping under some conditions.
	
	WORKAROUND
	==========
	
	To work around this problem, in Sender Manager, use the Senders dialog box to
	set the Estimated Bandwidth appropriately and then open the Addresses dialog box
	and choose OK to close it.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in Systems Management Server
	version 1.2.
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbnetwork smssenders kbSMSSender 
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	
	=============================================================================
	

{% endraw %}
