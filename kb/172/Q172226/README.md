---
layout: page
title: "Q172226: SMS: Applying SMS 1.2 SP2 May Overwrite Some SQL Server Files"
permalink: kb/172/Q172226/
---

## Q172226: SMS: Applying SMS 1.2 SP2 May Overwrite Some SQL Server Files

	Article: Q172226
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2 SP2
	Operating System(s): 
	Keyword(s): kbsetup smssetup
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Applying Systems Management Server 1.2 Service Pack 2 overwrites the SQL Server
	files listed below, even though the existing files are of a later version. If
	SQL Server 6.5 Service Pack 2 or later has been applied, followed by Systems
	Management Server 1.2 Service Pack 2, it may be necessary to examine these files
	and make certain the latest versions are still in place.
	
	File name     Systems Management     SQL Server     SQL Server
	             Server 1.2 SP2 date    6.5 SP2 date   6.5 SP3 date
	
	Ntwdblib.dll     6/10/96               12/17/96       6/16/97
	Dbnmpntw.dll     6/10/96               12/17/96       6/16/97
	Msvcrt40.dll     9/29/95               12/17/96       6/16/97
	
	CAUSE
	=====
	
	The Systems Management Server 1.2 Service Pack 2 Setup program does not perform
	any file version checking on these files before replacing them.
	
	WORKAROUND
	==========
	
	To work around this problem, do either of the following:
	
	- Reapply the appropriate SQL Server service pack.
	
	-or-
	
	- Manually copy these files from the SQL Server service pack to their
	  appropriate locations.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2 Service Pack 2. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms sp higher
	
	======================================================================
	Keywords          : kbsetup smssetup 
	Technology        : kbSMSSearch kbSMS120SP2
	Version           : winnt:1.2 SP2
	Issue type        : kbbug
	
	=============================================================================
	
