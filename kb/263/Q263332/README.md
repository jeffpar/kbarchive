---
layout: page
title: "Q263332: Uninstall Does Not Remove SMS Provider from Remote SQL Server"
permalink: /kb/263/Q263332/
---

## Q263332: Uninstall Does Not Remove SMS Provider from Remote SQL Server

	Article: Q263332
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200preSP3
	Last Modified: 02-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you uninstall a Systems Management Server (SMS) site server that has its
	SMS provider and SQL database on a remote SQL server, the databases are removed
	but the Smsprov folder and files remain.
	
	WORKAROUND
	==========
	
	On the SQL server, delete the Smsprov folder and all its files after you remove
	the SMS site.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	Any future installations of SMS that use the SQL server will overwrite the SMS
	provider files that were left over.
	
	Additional query words: prodsms deinstall
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200preSP3 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : winnt:2.0,2.0 SP1,2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
