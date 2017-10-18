---
layout: page
title: "Q252852: SMS: Admin Console Doesn't Display Local SMS Version Installed"
permalink: kb/252/Q252852/
---

## Q252852: SMS: Admin Console Doesn't Display Local SMS Version Installed

	Article: Q252852
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbConfig kbMMC kbServer kbsms200 kbsms200bug kbsmsAdmin
	Last Modified: 28-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you check for the version of the Microsoft Systems Management Server (SMS)
	Administrator Console that is currently installed on a remote administrative
	computer, the Administrator Console reveals only the version of SMS installed on
	the site server. This does not help you determine if a computer needs to update
	the installed version of the SMS Administrator Console.
	
	WORKAROUND
	==========
	
	To check the remote SMS Administrator Console version on a local computer,
	follow these steps:
	
	1. Use Regedtd32.exe to open the computer's registry.
	
	2. Navigate to the following folder:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\SMS\Setup\UI Version
	
	NOTE: If the version in this registry key is different from the version build
	number of the site, the SMS Administrator Console software should be updated.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	
	MORE INFORMATION
	================
	
	For additional information about how to determine the build number of the site
	and client components, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q213410 SMS: Determining Version and Build Number
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbConfig kbMMC kbServer kbsms200 kbsms200bug kbsmsAdmin 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
