---
layout: page
title: "Q256309: Site Reset May Lock Out SMSSERVER_&lt;xxx&gt; Account"
permalink: /kb/256/Q256309/
---

## Q256309: Site Reset May Lock Out SMSSERVER_&lt;xxx&gt; Account

	Article: Q256309
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200preSP3 kbsms200sp2fixkbfaq kbfixlist
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a Systems Management Server (SMS) 2.0 Service Pack 1 (SP1) site, the Site
	System Connection account (SMSServer_<xxx>, where <xxx> is the site
	code) password is reset when you run a site reset.
	
	If the hotfix described in the following Microsoft Knowledge Base article is
	applied to the site, the site reset does not automatically cause Microsoft
	Windows NT Logon Server Manager to perform a logon point update:
	
	  Q253151 SMS: Systems Management Server 2.0 Dependency Package Contents
	
	The Logon Discovery agent that is running on logon points attempts to copy
	Discovery Data Records (DDR) to the site server by using the
	SMSServer_<xxx> account. If the logon points are not updated after the
	site reset, the old password is used and the SMSServer_<xxx> account is
	locked out.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	This issue has been addressed in SMS 2.0 Service Pack 2 (SP2). After you apply
	SP2, you are prompted to confirm whether or not the SMSServer_<xxx>
	account password should be reset during a site reset. You receive the following
	warning:
	
	  If you have account lockout policy enabled, you may not want to reset the
	  server connection account at this time. For more information, please refer to
	  the release notes.
	
	If you do want to reset the SMSServer_<xxx> account password during a site
	reset, you can force a Windows NT Logon Server Manager polling cycle that
	updates all logon points with the new password. A polling cycle begins if any of
	the following conditions exist:
	
	- A polling cycle is actually due.
	
	- A polling cycle was due to take place during the period Windows NT Logon
	  Server Manager was stopped.
	
	- A site control file property changed for Windows NT Logon Server Manager
	  since it was stopped.
	
	For additional information, see the SMS 2.0 SP2 Release Notes.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.
	
	Additional query words: prodsms LSM
	
	======================================================================
	Keywords          : kbsms200 kbsms200preSP3 kbsms200sp2fix kbfaq kbfixlist
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : :2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
