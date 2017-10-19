---
layout: page
title: "Q260366: SMS Executive Service Can Hang If Started by Site Backup Service"
permalink: /kb/260/Q260366/
---

## Q260366: SMS Executive Service Can Hang If Started by Site Backup Service

	Article: Q260366
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP2
	Operating System(s): 
	Keyword(s): kbServer kbsms200 kbsms200bug kbsms200preSP3fix kbsms200SP3fix
	Last Modified: 01-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you perform a site backup, the Systems Management Server (SMS) 2.0 Service
	Pack 2 (SP2) SMS_EXECUTIVE service threads may stop processing, and file
	backlogs may occur in SMS site server inboxes (such as
	Sms\Inboxes\Despoolr.box\Receive).
	
	When this occurs, the following error message is listed in the Despool.log file:
	
	  Waiting for an available despooling thread
	
	Note that this problem can occur even if the SMS Site Backup service is not used.
	
	CAUSE
	=====
	
	When you run the SMS Backup task, the SMS services are stopped and then
	restarted after the backup is completed. The timing with which the services
	restart may cause the SMS_EXECUTIVE service to stop responding (hang).
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	
	WORKAROUND
	==========
	
	To work around this behavior, follow these steps:
	
	1. Stop the SMS_Executive service and then restart it. Note that the
	  SMS_Executive service may be hung and you may not be able to stop it by using
	  the typical methods. You may have to use another method such as the Kill.exe
	  tool from the Microsoft Windows NT 4.0 Resource Kit.
	
	2. Modifying the Sms\Inboxes\Smsbkup.box\Smsmbkup.ctl file may help to work
	  around this issue. This modification places pauses between the starting of
	  the SMS services and may avoid the conflict when the services start. Note
	  that modifying this file may adversely affect your SMS backup procedure; make
	  this change only after you create a backup copy of the original file. The
	  Sleep tool is available in the Windows NT 4.0 Resource Kit; place it in a
	  folder that is contained in the PATH statement. You can modify the
	  Smsmbkup.ctl file as follows:
	
	  sleep 60
	  service \\%SITE_SERVER%\SMS_SITE_COMPONENT_MANAGER
	  sleep 60
	  service \\%SITE_SERVER%\SMS_LICENSE_SERVER
	  sleep 60
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 3.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbServer kbsms200 kbsms200bug kbsms200preSP3fix kbsms200SP3fix 
	Technology        : kbSMSSearch kbSMS200SP2
	Version           : :2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
