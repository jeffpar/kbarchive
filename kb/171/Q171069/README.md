---
layout: page
title: "Q171069: SMS: Unable to Inventory Macintosh Files w/ Trademark Character"
permalink: /kb/171/Q171069/
---

## Q171069: SMS: Unable to Inventory Macintosh Files w/ Trademark Character

{% raw %}

	Article: Q171069
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to inventory Macintosh software by file name, and the file name
	contains the trademark or registered symbols, Systems Management Server
	inventory will not inventory that file properly, and it will not show up in the
	PC Properties for that system.
	
	CAUSE
	=====
	
	There are two issues. The first is that INVMAC does not properly handle the OEM
	to ANSI character translation. The second is that the Systems Management Server
	site SQL Server also does OEM to ANSI translation. Due to these two issues,
	software inventory fails to properly detect and report the extended characters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0, 1.1, and 1.2. This problem was corrected in the latest Microsoft
	Systems Management Server 1.2 U.S. Service Pack. For information on obtaining
	the service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms Mac Apple TM filename
	
	======================================================================
	Keywords          : kb3rdparty kbenv kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
