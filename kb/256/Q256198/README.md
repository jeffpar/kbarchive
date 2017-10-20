---
layout: page
title: "Q256198: SMS: Hardware Inventory Uses SMSCliToknAcct&amp; on Mapped Drives"
permalink: /kb/256/Q256198/
---

## Q256198: SMS: Hardware Inventory Uses SMSCliToknAcct&amp; on Mapped Drives

{% raw %}

	Article: Q256198
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbWBEM kbsms200 kbsms200bug kbInventory
	Last Modified: 02-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Systems Management Server (SMS) 2.0 client takes hardware inventory on a
	system that has network drives mapped at the time inventory is taken, the
	SMSCliToknAcct& account can be used. Because the SMSCliToknAcct& account
	is not a domain account, but is a local account, its use on the network can lock
	out the same account on the systems on which the network drives are mapped.
	
	CAUSE
	=====
	
	This behavior occurs when the Windows Management service queries the
	Win32_DiskDrive and Win32_DiskPartion WBEM classes to enumerate local drives.
	
	WORKAROUND
	==========
	
	You can configure SMS Hardware Inventory not to query these particular WBEM
	classes. For more information about accomplishing this task, please refer to the
	"Systems Management Server 2.0 Administrator's Guide."
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbWBEM kbsms200 kbsms200bug kbInventory 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
