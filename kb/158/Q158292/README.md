---
layout: page
title: "Q158292: SMS: Using Policies May Cause SMS Setup to Fail"
permalink: kb/158/Q158292/
---

## Q158292: SMS: Using Policies May Cause SMS Setup to Fail

	Article: Q158292
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork kbsetup smssetup
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When installing Systems Management Server 1.2, the installation may fail with
	the any of the following problems:
	
	- Error 7411 from SMS_SITE_CONFIG_MANAGER in the application event log
	
	- No Systems Management Server service running
	
	- No Systems Management Server shares are created (sms_shr aso.)
	
	- No Logon.srv directory and missing files
	
	Also, the Systems Management Server client installation may be affected on client
	computers running Windows NT. The Client Configuration Manager (CCM) connects to
	the ADMIN$ share of a client computer running Windows NT to install the Systems
	Management Server Remote Control Agent and Client Inventory Agent services. If
	this share is not available, the services will not be installed, and the CCM
	will log the following error in the Clicfg.log file:
	
	  ERROR: The SMS service account does not have administrative rights on machine
	  "<client computer running Windows NT>" for request "YAP00001".
	
	CAUSE
	=====
	
	This problem occurs when the administrator uses the policy editor from Windows
	NT 4.0. Due to a reported problem with the policy editor, all administrative
	shares ($ shares) are disabled after a restart. This causes the setup script to
	fail, because it uses the administrative shares during the installation. Also,
	after Systems Management Server 1.2 is installed, the removal of an
	administrative share may influence normal operation. Systems Management Server's
	architecture is related to the existence of the administrative shares.
	
	For more information, see the following article in the Microsoft Knowledge Base:
	
	  Q156365 Hidden Shares Are No Longer Available After Using System Policy
	
	RESOLUTION
	==========
	
	Make sure that all administrative shares are available before setting up Systems
	Management Server 1.2.
	
	Also read article Q156365 carefully if you use or plan to use the policy editor
	in connection with Systems Management Server 1.2.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 that effects
	Systems Management Server version 1.2. We are researching this problem and will
	post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbinterop kbnetwork kbsetup smssetup 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	
	=============================================================================
	
