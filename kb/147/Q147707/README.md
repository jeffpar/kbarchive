---
layout: page
title: "Q147707: INVProc Does Not Remove Packages Group when It Is Empty"
permalink: /kb/147/Q147707/
---

## Q147707: INVProc Does Not Remove Packages Group when It Is Empty

{% raw %}

	Article: Q147707
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When the number of inventory packages drops to 0 (zero), inventory processor
	fails to create the Pragma: delete in the delta mif file, which leaves the
	history records as current.
	
	CAUSE
	=====
	
	The *.RAW file created by the inventory has no Software entry (it is reporting
	correctly). However, the delta MIF files created by Inventory Processor have no
	":deletepragma" for the Packages group to update the database.
	
	WORKAROUND
	==========
	
	To remove all the inventory packages, use DBClean.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in System Management Server
	versions 1.1 and 1.2. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : winnt:1.1,1.2
	
	=============================================================================
	

{% endraw %}
