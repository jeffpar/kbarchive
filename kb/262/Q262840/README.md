---
layout: page
title: "Q262840: The New SMS 2.0 Site Is Unable to Run SQL Setup"
permalink: kb/262/Q262840/
---

## Q262840: The New SMS 2.0 Site Is Unable to Run SQL Setup

	Article: Q262840
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP2
	Operating System(s): 
	Keyword(s): kbinterop kbsetup kbDatabase kbServer kbsms200 kbsms200bug
	Last Modified: 09-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install a new Microsoft Systems Management Server (SMS) version 2.0
	site, the SMS Setup program may run the Microsoft SQL Setup program to install a
	local copy of SQL version 6.5 or 7.0 to contain the SMS site database. However,
	the SQL Setup program is unsuccessful when instructed to run on your system.
	
	CAUSE
	=====
	
	This behavior may occur because the SMS Setup program attempted to install
	Microsoft SQL 2000 as its version of the SQL program.
	
	WORKAROUND
	==========
	
	To work around this behavior, you must install SQL 2000 before you run the SMS
	Setup program.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbinterop kbsetup kbDatabase kbServer kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200SP2
	Version           : :2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
