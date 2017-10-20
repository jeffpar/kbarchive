---
layout: page
title: "Q182048: SMS: Suppressing Unaddressable Sites Message Opening SMS Admin"
permalink: /kb/182/Q182048/
---

## Q182048: SMS: Suppressing Unaddressable Sites Message Opening SMS Admin

{% raw %}

	Article: Q182048
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2
	Operating System(s): 
	Keyword(s): kbsmsAdmin smsadmin
	Last Modified: 27-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	If any primary site has more than 1,800 sites reporting to it, the Systems
	Management Server Administrator program displays the following message:
	
	  Some machines in your database are associated with sites or domains that do
	  not appear in your Sites tree. The missing items are listed below.
	
	This message includes a list of everything the Systems Management Server
	Administrator program cannot address.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 1.2. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	To install this hotfix, perform the steps below. Note that this procedure
	involves editing the system registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Stop all Systems Management Server services.
	
	2. Rename the existing Sms.exe file to Sms.old (this file will most likely be
	  located in either the Sms\Site.srv\X86.bin or Sms\Site.srv\Alpha.bin
	  directories).
	
	3. Copy the new (hotfix) version of Sms.exe to the directory the existing
	  Sms.exe file was located in.
	
	4. Start the Systems Management Server Administrator program.
	
	5. On the Tools menu, click Options.
	
	6. Click Save Settings Now (this creates the SuppressMissingAddressDialog value
	  in the AppSettings key in HKEY_CURRENT_USER in the system registry).
	
	7. Start RegEdt32.exe.
	
	8. Navigate to the following key:
	
	HKEY_CURRENT_USER\Software\Microsoft\SMS\Main\AppSettings
	
	9. Change SuppressMissingAddressDialog value from 0 to 1.
	
	10. Close and reopen the Systems Management Server Administrator program.
	
	Additional query words: prodsms client ui dialogue dialog box
	
	======================================================================
	Keywords          : kbsmsAdmin smsadmin 
	Technology        : kbSMSSearch kbSMS120
	Version           : :1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
