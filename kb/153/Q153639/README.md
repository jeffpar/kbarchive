---
layout: page
title: "Q153639: SMS Site Server's Number of SQL Connections Continue to Grow"
permalink: kb/153/Q153639/
---

## Q153639: SMS Site Server's Number of SQL Connections Continue to Grow

	Article: Q153639
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbDatabase smsdatabase
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	The number of connections from the SMS Site Server to the SQL Server may grow
	under heavy loads. The use of the Net Session command on the SMS Site Server
	indicates that the number of sessions to the SQL Server can grow from five to 15
	(or greater) connections.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. This problem has been corrected in Systems Management
	Server version 1.2.
	
	Additional query words: prodsms sql connections
	
	======================================================================
	Keywords          : kbnetwork kbDatabase smsdatabase 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
