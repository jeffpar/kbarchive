---
layout: page
title: "Q226832: SMS: Software Licensing Offline Uploads Cease w/Synchronization"
permalink: /kb/226/Q226832/
---

## Q226832: SMS: Software Licensing Offline Uploads Cease w/Synchronization

	Article: Q226832
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsmsMeter
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the date and time settings on a Microsoft Systems Management Server (SMS)
	2.0 client computer that runs the software metering client agent is accidentally
	set forward, the client no longer forwards software metering information to the
	software metering server when it (the client) is in offline mode. If the date
	and time settings are reset correctly, the client does not send data until the
	current date and time catch up to the incorrect date and time that had been set.
	
	CAUSE
	=====
	
	This behavior occurs because when software metering is configured in offline
	mode, clients maintain a local log of software usage and then upload this
	information to the software metering server on a schedule. The next scheduled
	upload is based on the date and time settings of the client. When you reset the
	client date and time settings from a future date and time to the current date
	and time, the next scheduled upload time is not reset, and the client's
	next-upload time remains at the erroneous setting (in the future).
	
	WORKAROUND
	==========
	
	To work around this issue, follow these steps:
	
	1. Refer to the following Microsoft Knowledge Base article, and then remove SMS
	  2.0 client components from the computer that displays this behavior:
	
	  Q199078 How to Remove a Systems Management Server 2.0 Client
	
	2. Correct the time on the client.
	
	3. Reinstall the SMS client components.
	
	The only way to work around this issue is to uninstall and then reinstall the SMS
	2.0 client.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server version 2.0.
	
	MORE INFORMATION
	================
	
	You can use the Client Cleaner tool (20CliCln.bat) to remove all SMS 2.0 client
	components. SMSMan.exe may leave some files and registry entries on clients
	after being run. You must have Administrator rights on the client computer when
	you use the Client Cleaner tool. Otherwise, some SMS 2.0 files and registry
	settings will not be removed. 20CliCln.bat can be found in the Systems
	Management Server Resource Kit and in the supportability files that come with
	SMS 2.0.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsmsMeter 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :2.0,2.0 SP1,2.0 SP2
	Issue type        : kbbug
	
	=============================================================================
	
