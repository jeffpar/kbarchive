---
layout: page
title: "Q159087: SMS Does Not Identify Pentium Pro (P6) Processor Speeds"
permalink: /kb/159/Q159087/
---

## Q159087: SMS Does Not Identify Pentium Pro (P6) Processor Speeds

{% raw %}

	Article: Q159087
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2
	Operating System(s): 
	Keyword(s): kbenv kbhw kbother kbInventory smsinv kbHardwarekbfixlist
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	On computers running MS-DOS and 16-bit Windows systems, the Systems Management
	Server Inventory Agent does not detect Intel Pentium Processors (P5) with a
	speed of 125 MHz or higher. Nor does it detect Intel Pentium Pro (P6) processors
	of any speed; the Inventory Agent reports these processors as P5-150.
	
	CAUSE
	=====
	
	The processor normalization code that determines the processor speed does not
	have the ability to identify the Pentium Processors (P5) with a speed of 125 MHz
	or higher, or any Pentium Pro (P6) processors. These processors were released
	after the Systems Management Server inventory code was written. (Computers
	running Windows NT Workstation or Windows NT Server report their inventory based
	on the current registry configuration, and are not affected by this problem.)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	
	A supported fix is now available, but is not fully regression-tested and should
	be applied only to systems experiencing this specific problem. Unless you are
	severely impacted by this specific problem, Microsoft recommends that you wait
	for the next Service Pack that contains this fix. Contact Microsoft Technical
	Support for more information.
	
	
	
	MORE INFORMATION
	----------------
	
	The following P5 and P6 processors are reported as P5-150 in the Systems
	Management Server database:
	
	  P5-133
	  P5-150
	  P5-200
	  P6-180
	  P6-200
	
	REFERENCES
	----------
	
	For more information, see the following article in the Microsoft Knowledge Base:
	
	  Q149497 SMS Does Not Correctly Identify New Pentium Processor Speeds
	
	Additional query words: prodsms 1.20
	
	======================================================================
	Keywords          : kbenv kbhw kbother kbInventory smsinv kbHardware kbfixlist
	Technology        : kbSMSSearch kbSMS120
	Version           : :1.2
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
