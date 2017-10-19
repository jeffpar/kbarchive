---
layout: page
title: "Q240250: Migration from SMS 1.2 to 2.0 Uninstalls LANDesk Files"
permalink: /kb/240/Q240250/
---

## Q240250: Migration from SMS 1.2 to 2.0 Uninstalls LANDesk Files

	Article: Q240250
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbUpgrade kbsms200sp2fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When upgrading from a Systems Management Server (SMS) 1.2 client with Intel
	LANDesk installed to a SMS 2.0 client, the migration process may delete the
	following LANDesk files, rendering LANDesk inoperable:
	
	- Kbstuff.sys
	
	- Rchelp.sys
	
	- Idisntkm.dll
	
	- Idis_nt.dll
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.
	
	MORE INFORMATION
	================
	
	To install the hotfix, perform the following steps at the Systems Management
	Server Site Server.
	
	1. Stop the SMS_EXECUTIVE and the SMS_SITE_COMPONENT_MANAGER services.
	
	2. Replace the Clicore.exe file in the
	  <sms_root_directory>\Inboxes\Clicomp.src\Base\<platform>
	  directory with the version obtained from the hotfix.
	
	3. Replace the Compver.ini file in the
	  <sms_root_directory>\Inboxes\Clicomp.src\Base directory with the
	  version obtained from the hotfix.
	
	4. Restart the SMS_EXECUTIVE and the SMS_SITE_COMPONENT_MANAGER services.
	
	When the Clicore.exe files have been updated in the following directories on the
	CAPs and Logon Points, the client upgrades may be started.
	
	CAP_<sitecode>\clicomp.box\base\<platform>\
	SMSLOGON\<platform>.bin\
	
	Additional query words: prodsms RC remote control
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbUpgrade kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
