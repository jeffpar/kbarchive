---
layout: page
title: "Q164890: SMS Software Inventory Package Is Limited to 40 Characters"
permalink: /kb/164/Q164890/
---

## Q164890: SMS Software Inventory Package Is Limited to 40 Characters

	Article: Q164890
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbInventory smsinvkbfixlist
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The software name field under the Packages group of a client's Personal Computer
	properties is truncated to display only the first 40 characters of the package
	name if you have defined a software inventory package that has a description
	exceeding 40 characters.
	
	WORKAROUND
	==========
	
	To work around this problem, reduce the package name of the software inventory
	package to fewer than 40 characters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0, 1.1, and 1.2. This problem was corrected in the latest Microsoft
	Systems Management Server version 1.2 U.S. Service Pack. For information on
	obtaining the service pack, query on the following word in the Microsoft
	Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodsms shorten
	
	======================================================================
	Keywords          : kbInventory smsinv kbfixlist
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	Issue type        : kbbug
	
	=============================================================================
	
