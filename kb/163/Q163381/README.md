---
layout: page
title: "Q163381: SMS: Setup Limits SQL Database and Device Names to 21 Characters"
permalink: kb/163/Q163381/
---

## Q163381: SMS: Setup Limits SQL Database and Device Names to 21 Characters

	Article: Q163381
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup smssetup
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When specifying database or device names in Systems Management Server Setup, you
	are only able to specify names of fewer than or equal to 21 characters. It is
	not possible to enter a database name of greater length. However, SQL Server
	allows you to create names of up to 30 characters, and the Systems Management
	Server Help files indicate that it accepts up to 30 characters.
	
	WORKAROUND
	==========
	
	To work around this problem, use device or database names of 21 or fewer
	characters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.1 and 1.2. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbsetup smssetup 
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : winnt:1.1,1.2
	
	=============================================================================
	
