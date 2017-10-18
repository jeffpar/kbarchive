---
layout: page
title: "Q149957: SMS Shared Packages Can Change Existing Rights on NetWare"
permalink: kb/149/Q149957/
---

## Q149957: SMS Shared Packages Can Change Existing Rights on NetWare

	Article: Q149957
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbDespooler kbPGC smsdespooler smsgeneral smspgc kbArtTypeINF
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When sending a sharing package to a NetWare distribution server where a directory
	already exists for the package share name, SMS will change the rights on that
	directory and all subdirectories beneath it.
	
	CAUSE
	=====
	
	When the Despooler places a package on an existing directory structure, it
	cannot determine which rights will be adequate for that directory and the
	subdirectories below it, and will change the rights for EVERYONE to RWCMEF
	(Read, Write, Create, Modify, Erase, File Scan), depending on whether the job
	was created with Read or Read Access selected.
	
	RESOLUTION
	==========
	
	To work around this problem, create the package with NO permissions set in the
	Access box. Then, the package should inherit the rights from the parent
	directory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.x. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbDespooler kbPGC smsdespooler smsgeneral smspgc kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	Issue type        : kbprb
	
	=============================================================================
	
