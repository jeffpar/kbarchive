---
layout: page
title: "Q156206: SMS: OS/2 Inventory Agent Does Not Detect Pentium Processor"
permalink: /kb/156/Q156206/
---

## Q156206: SMS: OS/2 Inventory Agent Does Not Detect Pentium Processor

{% raw %}

	Article: Q156206
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kb3rdparty kbhw kbInventory smsinv kbHardware
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When the Systems Management Server Inventory Agent is run on a computer running
	OS/2 that has a Pentium CPU, the inventory will report that it is a 80486 CPU.
	
	CAUSE
	=====
	
	The OS/2 Inventory Agent is not able to detect Pentium processors at this time.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.1 and 1.2. A supported fix is now available for version 1.1, but has
	not been fully regression-tested and should be applied only to systems
	experiencing this specific problem. Unless you are severely impacted by this
	specific problem, Microsoft recommends that you wait for the next Service Pack
	that contains this fix. Contact Microsoft Technical Support for more
	information.
	
	
	This problem has been corrected in the latest U.S. Service Pack for Systems
	Management Server version 1.2. For information on obtaining the Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  " S E R V P A C K " (without the quotation marks)
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kb3rdparty kbhw kbInventory smsinv kbHardware 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	

{% endraw %}
