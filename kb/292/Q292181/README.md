---
layout: page
title: "Q292181: Software Inventory Properties Only Allow 32 Inventoried Names"
permalink: /kb/292/Q292181/
---

## Q292181: Software Inventory Properties Only Allow 32 Inventoried Names

	Article: Q292181
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbConfig kbDatabase kbMMC kbServer kbsms200 kbsms200bug kbsms200fix kbInventory kbsmsAd
	Last Modified: 28-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Consolidation of the Company Name property that is collected by Systems
	Management Server (SMS) version 2.0 software inventory into a single company
	name is limited to no more than 32 different inventory names for each displayed
	name.
	
	WORKAROUND
	==========
	
	To work around this problem in instances where there are more than 32 variations
	of a company name, you can configure a second display name to hold an additional
	32 names. Note that this display name cannot be identical to the first display
	name you specify.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	When an SMS 2.0 software inventory collects its data, it analyzes the properties
	of each file of the type you specified to be inventoried. You can manually view
	these properties by right-clicking on a file and then clicking Properties. One
	of the properties that is collected by a software inventory is the publisher
	name, and this property is returned as the company name. You can configure SMS
	to summarize this data and consolidate different representations of the company
	name into a single instance. For example, some files that are published by
	Microsoft have a Company property of Microsoft, while others may have a Company
	property of Microsoft Corp.
	
	You can configure the consolidation of this information by:
	
	1. Double-click the following items:
	
	   - Site Hierarchy
	
	   - Site Code
	
	   - Site Settings
	
	   - Client Agents
	
	   - Software Inventory Client Agent
	
	   - Properties
	
	2. Click the Inventory Names tab, and then type a single display name. Note that
	  you can also specify a maximum of 32 entries under Inventoried Names.
	
	If you try to type more than 32 entries, you receive the following error
	message:
	
	  You can have a maximum of 32 Inventoried names for this display name. Before
	  you can add this inventoried name you must delete one or more other
	  inventoried names.
	
	In addition, the Software Inventory agent is case-sensitive, but the Software
	Inventory Agent property is not. Because of this, changes in the case of the
	company name are recognized as unique instances. For example, Microsoft is
	interpreted as an entry that is different from MICROSOFT. If you attempt to add
	the same name in this manner, you receive the following error message:
	
	  An error occurred updating the database. Some of the rules you have entered
	  conflict with existing rules.
	
	Additional query words: prodsms sinv32
	
	======================================================================
	Keywords          : kbConfig kbDatabase kbMMC kbServer kbsms200 kbsms200bug kbsms200fix kbInventory kbsmsAdmin 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	
	=============================================================================
	
