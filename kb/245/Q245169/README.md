---
layout: page
title: "Q245169: SMS: DDM May Stop Unexpectedly During Site Attachment Processing"
permalink: /kb/245/Q245169/
---

## Q245169: SMS: DDM May Stop Unexpectedly During Site Attachment Processing

	Article: Q245169
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200sp2fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During site attachment and processing of .sha files, the Discovery Data Manager
	(DDM) thread of the SMS_EXECUTIVE service may stop processing until the service
	is restarted.
	
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
	
	During site attachment, .sha files are placed in Sms\Inboxes\ddm.box as
	notification for DDM that sites have been added to the hierarchy.
	
	To install the hotfix, use the appropriate method on the Systems Management
	Server site server.
	
	Method 1: Using the Hotfix Installer
	------------------------------------
	
	NOTE: You can use this method only on Intel-based computers.
	
	1. Copy the hotfix folder structure to a share on your network. Q245169.exe is a
	  Microsoft Windows Installer file that updates specific files on your site
	  server.
	
	2. Log on to your site server with an account with administrative privileges.
	
	3. On the site server, quit the Systems Management Server Administrator console.
	
	4. Run Q245169.exe and follow the directions in the wizard. You can run the file
	  in Quiet mode by using the /s switch.
	
	Method 2: Manual Installation
	-----------------------------
	
	1. On each site server, stop the SMS_SITE_COMPONENT_MANAGER service and then the
	  SMS_EXECUTIVE service.
	
	2. Replace the Ddm.dll file in the Sms\Bin\<Platform> folder with the file
	  from this hotfix that corresponds to the platform of the site server.
	
	3. Restart the SMS_SITE_COMPONENT MANAGER and SMS_EXECUTIVE services.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
