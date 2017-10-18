---
layout: page
title: "Q271937: SMS: Systems Management Server 2.0 Support of SQL Server 2000"
permalink: kb/271/Q271937/
---

## Q271937: SMS: Systems Management Server 2.0 Support of SQL Server 2000

	Article: Q271937
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP2
	Operating System(s): 
	Keyword(s): kbenv kbinterop
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes Microsoft SQL Server 2000 support in Microsoft Systems
	Management Server 2.0.
	
	MORE INFORMATION
	================
	
	SQL Server 2000 is fully supported in Systems Management Server 2.0 Service Pack
	2 (SP2) with the following limitations:
	
	- Only the default SQL Server instance is supported for use as Systems
	  Management Server site databases. Additional instances can be used for other
	  applications that support instancing.
	
	- Mixed-mode security is required on the SQL server for the software metering
	  database to function properly. NT Only mode causes an error during the
	  configuration of software metering tables.
	
	
	Additional query words: sql2000
	
	======================================================================
	Keywords          : kbenv kbinterop 
	Technology        : kbSMSSearch kbSMS200SP2
	Version           : :2.0 SP2
	Issue type        : kbinfo
	Solution Type     : kbnofix
	
	=============================================================================
	
