---
layout: page
title: "Q257808: SMS: Avoiding Duplicate IDs in SMS 2.0"
permalink: /kb/257/Q257808/
---

## Q257808: SMS: Avoiding Duplicate IDs in SMS 2.0

{% raw %}

	Article: Q257808
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbinterop kbClient kbConfig kbsms200 kbInventory
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	In Systems Management Server (SMS) 2.0, clients are differentiated and uniquely
	identified by a Globally Unique Identifier (GUID). A GUID is a combination of
	the client's media access control (MAC) address and the current time when the
	GUID is assigned. This produces a number that is virtually assured of being
	unique. The GUID assignment occurs at different times during the SMS client
	discovery and installation process. After it is generated, this GUID is stored
	in the registry and in a binary file on the client's hard disk.
	
	Duplicate GUIDs can be caused by using disk-duplication (or "cloning") software
	to install workstations. Duplicate GUIDs can cause many problems in SMS
	hierarchies, possibly even disabling the entire site. If you use
	disk-duplication software, you must make sure that GUIDs are not duplicated.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	The process of disk duplication involves creating a master-image computer,
	configuring it, and then copying it to other computers. To correctly prepare the
	master-image computer for duplication and avoid duplicate GUIDs:
	
	1. Use the SMS Installation Wizard to install the SMS 2.0 client software on the
	  master-image client computer. For information about using the wizard, see the
	  SMS 2.0 Administrator's Guide.
	
	2. Restart the client computer and log on as Administrator.
	
	3. On the master-image client computer, start Registry Editor and remove the
	  following SMS Unique Identifier registry value:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SMS\Client\Configuration\Client
	  Properties\SMS Unique Identifier
	
	4. Delete all copies of the Smsuid.dat file from the computer's hard disk.
	
	5. Delete the %SystemRoot%\Smscfg.ini file.
	
	6. Use Registry Editor to remove all registry keys under the following key:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\NAL\Client\AbExprtDB
	
	7. If the master-image computer was a SMS 1.2 client computer upgraded to SMS
	  2.0, then you may have the Sms1x.ini file left on the computer. Delete all
	  copies of the Sms1x.ini file from the computer's hard disk.
	
	After you have followed these steps on the master-image client computer, you can
	duplicate it without creating duplicate GUIDs.
	
	For additional information, see the SMS 2.0 Resource Guide, Chapter 12,
	"Preinstalling SMS Client Software."
	
	For additional information about removing duplicate Computer IDs, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q254735 SMS: How to Clean Up Duplicate Computer IDs
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbinterop kbClient kbConfig kbsms200 kbInventory 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
