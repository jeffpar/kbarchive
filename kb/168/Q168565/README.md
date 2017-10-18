---
layout: page
title: "Q168565: SMS: Child Site Attachment May Result in Incorrect Inventory"
permalink: kb/168/Q168565/
---

## Q168565: SMS: Child Site Attachment May Result in Incorrect Inventory

	Article: Q168565
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbDatabase kbDataLoader smsdatabase smsdataloader
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a child site attaches to a parent site, inventory on the parent site may
	appear to be inaccurate. Inventory on the child site appears to be correct, but
	the inventory on the parent site does not.
	
	The first child to attach to the parent may appear correct, but the inaccurate
	inventory may appear when a second child attaches. Symptoms will manifest in
	data that is stored as COMMON rather than SPECIFIC according to the DMTF
	specifications. Examples of this would be in the PC_BIOS or Disk data, although
	any COMMON storage may be affected. Symptoms may be displayed as a duplicate
	drive C or no drive A for certain systems. Other symptoms may exhibit themselves
	as well, but depends on the state of the child and parent databases before the
	site attachment.
	
	This problem occurs only during initial site attachments. Any data sent from the
	child to the parent after the initial site attachment is processed differently,
	and is not affected.
	
	CAUSE
	=====
	
	The Systems Management Server DataLoader fails to properly increment an internal
	value that ensures that the COMMON storage values remain unique during a site
	attachment. This only occurs if the COMMON storage attribute does not yet exist
	on the parent site. If the component already exists on the parent site, child
	site data merging will take place properly for that inventory component.
	
	
	STATUS
	------
	
	Microsoft has confirmed this to be a problem in Systems Management Server version
	1.2. This problem was corrected in the latest Microsoft Systems Management
	Server 1.2 U.S. Service Pack. For information on obtaining the service pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodsms database corruption records
	
	======================================================================
	Keywords          : kbnetwork kbDatabase kbDataLoader smsdatabase smsdataloader 
	Technology        : kbSMSSearch kbSMS120
	Version           : :1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
