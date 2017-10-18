---
layout: page
title: "Q181629: SMS: &quot;Unexpected Error Creating the Unique Id File&quot; Occurs"
permalink: kb/181/Q181629/
---

## Q181629: SMS: &quot;Unexpected Error Creating the Unique Id File&quot; Occurs

	Article: Q181629
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you run Runsms.bat to install the Microsoft Systems Management Server
	client, you may receive the following error message:
	
	  Unexpected error creating the Unique Id file
	
	MORE INFORMATION
	================
	
	A permissions problem may exist. To confirm whether this is the case, check the
	following:
	
	1. The user who is logged on to the domain is logged on as at least a Domain
	  User.
	
	2. The SMS_SHR share on the logon server has the permissions for both
	  Administrators and Everyone set at Full Control.
	
	3. The Sms\Logon.srv\Smsid subdirectory on the logon server has the permissions
	  for both Administrators and Everyone set at Change.
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q154936 SMS Displays # When Attempting to Create SMS Client
	
	  Q127052 SMS Unique ID (SMSID) Allocation
	
	  Q168543 SMS: InocuLAN 4.0 May Interfere with SMS Client Setup
	
	Additional query words: smsconfig smssetup
	
	======================================================================
	Keywords          : kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbinfo
	
	=============================================================================
	
