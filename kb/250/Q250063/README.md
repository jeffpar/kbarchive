---
layout: page
title: "Q250063: Duplicates in Inventory After Site Inventory Synchronization"
permalink: /kb/250/Q250063/
---

## Q250063: Duplicates in Inventory After Site Inventory Synchronization

{% raw %}

	Article: Q250063
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbDatabase kbServer kbsms120 kbsms120bug kbDataLoader kbInventory kbsmsUtil
	Last Modified: 10-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a site is attached to another site, the inventory is replicated to the
	parent site in a process called inventory synchronization. You can also initiate
	this process by using the "preinst /syncparent" command as outlined in the
	Microsoft Systems Management Server Resource Guide.
	
	In some cases, this process can introduce duplicate records into the inventory
	groups within the site database. This can cause unpredictable results when you
	attempt to build reports or use the Administrator console to view computer data.
	
	CAUSE
	=====
	
	This behavior occurs when data is partially inserted before the error condition.
	The problem causes the SMS_INVENTORY_DATALOADER thread to continue as if the
	site synchronization for the group had never taken place. When this occurs, the
	next rows added for the group can have the same data key value as the partially
	synchronized data.
	
	WORKAROUND
	==========
	
	Use the utilities discussed in the following Microsoft Knowledge Base article to
	remove any duplicate data from the database and allow the normal inventory cycle
	to repopulate the data:
	
	  Q192859 SMS: SMS 1.2 SP4 Includes SMSIDDUP, DATDUPC, and DATDUPCL
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbDatabase kbServer kbsms120 kbsms120bug kbDataLoader kbInventory kbsmsUtil 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
