---
layout: page
title: "Q163379: SMS: Sender Capacity May Cause Secondary Site Install Failure"
permalink: kb/163/Q163379/
---

## Q163379: SMS: Sender Capacity May Cause Secondary Site Install Failure

	Article: Q163379
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1,1.2
	Operating System(s): 
	Keyword(s): kbsetup kbConfig smssetup smsconfig smssenders kbSMSSender
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When the sender capacity is set to 0, secondary sites may fail at Phase 4
	because they are unable to communicate with the parent site.
	
	The LAN sender log (Lansend.log) will show the following message:
	
	  Checking for sending capacity. Used 0 out of 0, no sending capacity so not
	  checking for send requests.
	
	WORKAROUND
	==========
	
	To work around this problem, use the following procedure to modify the site
	server's registry to restore the default values.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Start Registry Editor and locate the following key:
	
	HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Sms\Components\Sms_Lan_Sender
	
	2. Change the Maximum Concurrent Sendings value from 0 to 5.
	
	3. Change the Maximum Concurrent Site Sendings value from 0 to 3.
	
	4. Exit Registry Editor.
	
	5. Stop and restart the Systems Management Server Executive service.
	
	Additional query words: prodsms lansender upgrade
	
	======================================================================
	Keywords          : kbsetup kbConfig smssetup smsconfig smssenders kbSMSSender 
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : winnt:1.1,1.2
	Issue type        : kbprb
	
	=============================================================================
	
