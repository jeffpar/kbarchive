---
layout: page
title: "Q258149: SMS: Verify Hotfix Installation in System Management Server 2.0"
permalink: /kb/258/Q258149/
---

## Q258149: SMS: Verify Hotfix Installation in System Management Server 2.0

	Article: Q258149
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to determine which hotfixes have been installed on a
	site running Systems Management Server 2.0 Service Pack 1 or later.
	
	MORE INFORMATION
	================
	
	There has been a change in the way hotfix update programs are written for
	Systems Management Server 2.0 Service Pack 1. When the update program runs, it
	writes an entry to the registry of the site server at the following location:
	
	  HKLM\Software\Microsoft\Updates\SMS 2.0\<Service Pack Level>
	
	The hotfix setup program will write a key at that location that corresponds to
	the ID number of the Knowledge Base article for the hotfix that was applied.
	
	A log with the hot fix number is also created under \SMS\LOGS, and a QFE Update
	group is created which lists the hot fixes under Hardware inventory in the
	Resource Explorer of the server.
	
	Note: Hotfixes released earlier than Service Pack 1 do not have this
	functionality.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200SP1 kbSMS200SP2
	Version           : winnt:2.0 SP1,2.0 SP2
	Issue type        : kbinfo
	
	=============================================================================
	
