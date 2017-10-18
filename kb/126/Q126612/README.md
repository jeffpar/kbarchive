---
layout: page
title: "Q126612: OS/2 Inventory Does Not Write LastLoggedUser Entry into SMS.INI"
permalink: kb/126/Q126612/
---

## Q126612: OS/2 Inventory Does Not Write LastLoggedUser Entry into SMS.INI

	Article: Q126612
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	INVOS2 does not write the LastLoggedUser entry into SMS.INI. This entry is now
	required by AUDIT16, which does not execute if the entry is absent.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in Systems Management Server
	version 1.2.
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbnetwork kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	
	=============================================================================
	
