---
layout: page
title: "Q162383: Site Configuration Manager Stops When Enumerating User Groups"
permalink: kb/162/Q162383/
---

## Q162383: Site Configuration Manager Stops When Enumerating User Groups

	Article: Q162383
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup kbSCMan smssetup smssiteconfigman
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If changes to a Systems Management Server site's properties do not go current,
	even after 24 hours, the Systems Management Server Site Configuration Manager
	(SCMAN) may have stopped responding. In the Scman.log file, the last entry will
	be "<Domain name> user groups will be enumerated." No more entries will
	have been logged since that time. SCMAN reports no errors during this time, and
	its status will be "started" in the Services Control Panel. There may be .ct1
	files backed up in the Sitecfg.box directory.
	
	CAUSE
	=====
	
	The Systems Management Server Site Configuration Manager will stop responding
	during Global User Group enumeration if it cannot contact the primary domain
	controller (PDC) of the domain listed. If this occurs, no site changes made can
	be processed. Note that this interferes with neither job nor inventory
	processing.
	
	WORKAROUND
	==========
	
	Stopping and restarting SCMan will alleviate the issue immediately, but a
	longer-term workaround is to use the SETGUG utility to disable Global User Group
	enumeration, either on a permanent basis, or by setting it to a longer interval.
	Setgug.exe is in the BackOffice Resource Kit. It is also in the Support
	directory of the Systems Management Server 1.1 compact disc.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.1 and 1.2. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms hanging hang lock freeze
	
	======================================================================
	Keywords          : kbnetwork kbsetup kbSCMan smssetup smssiteconfigman 
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : winnt:1.1,1.2
	Issue type        : kbbug
	
	=============================================================================
	
