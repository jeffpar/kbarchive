---
layout: page
title: "Q179118: SMS: Scheduler &amp; Despooler Fail When Permissions Are Wrong"
permalink: kb/179/Q179118/
---

## Q179118: SMS: Scheduler &amp; Despooler Fail When Permissions Are Wrong

	Article: Q179118
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbConfig kbDespooler kbScheduler kbsmsAdmin smsadmin smsdespooler smsconfig smsschedule
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Despooler log shows:
	
	     Cannot find the package file. we'll fail the job (Job ID = M020002D1
	     Package ID = W_M0200024)
	     CDeltaSource: InitDeltaFile - couldn't get file name
	     CDeltaSource: AddObjectAndDeliver - couldn't initialize Delta file
	     Despooler failed to execute the instruction, error code = C000000b
	
	If new Run Command on Workstation jobs are sent after this Despooler error is
	logged, they fail at the Scheduler level and the Scheduler log displays the
	following message:
	
	  ERROR: Cannot connect to secondary source. Scheduler will not attempt to
	  transfer jobs from secondary to primary source.
	
	No Run Command on Workstation or Share Package on Server jobs are able to get
	past the Scheduler.
	
	CAUSE
	=====
	
	The problem occurs because the logon (Sender) account specified does not have
	permissions on the Site.srv\Despoolr.box\Receive directory (that is, the
	SMS_SITE share) of the Systems Management Server site server. You can check the
	permissions by opening the Site Properties, clicking Addresses, and then
	clicking Properties (of the local site code), and finally clicking Details.
	
	If a Sender Service is configured to use an account that is not the same as the
	Systems Management Server service account, then the security context of this
	Sender Service account is used by some other Systems Management Server
	subservices of the SMS Executive program.
	
	If this Sender account does not have permissions on the SMS_SITE share, then the
	Scheduler and the Despooler services stop working.
	
	RESOLUTION
	==========
	
	The Logon (Sender) Account is used by the Sender to connect to the SMS_SITE
	share of the Systems Management Server site server and must have Full Control
	permissions for the SMS_SITE share. The account must also have Read and Write
	permissions for the Site.srv\Despoolr.box\Receive directory on the site server.
	
	MORE INFORMATION
	================
	
	The Sender Account that the site uses to connect to itself should usually be the
	same as the SMS service account for that site, but you can use a different
	Sender Account to connect to other sites in the hierarchy.
	
	IMPORTANT: If you change the Systems Management Server Service Account using
	Systems Management Server Setup, the Sender Accounts are not changed. To
	successfully change the permissions, you must manually change the Sender
	Accounts in the Site Properties of the Systems Management Server site server.
	
	Additional query words: prodsms server kbnetwork
	
	======================================================================
	Keywords          : kbConfig kbDespooler kbScheduler kbsmsAdmin smsadmin smsdespooler smsconfig smsscheduler smssenders kbSMSSender 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	
	=============================================================================
	
