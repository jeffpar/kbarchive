---
layout: page
title: "Q239130: SMS: 32-Bit Package Does Not Remove Duplicate Registry Entries"
permalink: /kb/239/Q239130/
---

## Q239130: SMS: 32-Bit Package Does Not Remove Duplicate Registry Entries

	Article: Q239130
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug smsinst kbsms200sp2fix
	Last Modified: 25-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Systems Management Server 2.0 SP1 32-bit Installer version 2.0.91 does not
	remove duplicate registry keys when you perform an uninstallation. This behavior
	occurs only when the package is compiled in 32-bit mode.
	
	For example, if you create a script that adds the following keys, the second key
	is not removed during uninstallation:
	
	  HKEY_CURRENT_USER\Software\SOFTAPPx\
	
	  HKEY_LOCAL_MACHINE\Software\SOFTAPPx\
	
	When the same script is compiled in 16/32-bit mode, the uninstallation process
	removes both entries.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, use one of the following methods:
	
	- Compile the script in 16/32-bit mode.
	
	- Use a version of SMS Installer earlier than version 2.0.91.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	Installer version 2.0.91.
	
	Additional query words: prodsms smsinst uninstall rollback
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug smsinst kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMSI200
	Version           : WINDOWS:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
