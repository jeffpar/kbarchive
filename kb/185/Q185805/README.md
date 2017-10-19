---
layout: page
title: "Q185805: SMS: Disabling the Mandatory Countdown Timer in PCM"
permalink: /kb/185/Q185805/
---

## Q185805: SMS: Disabling the Mandatory Countdown Timer in PCM

	Article: Q185805
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2
	Operating System(s): 
	Keyword(s): kbPCM smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The client component Package Command Manager (PCM) in Microsoft Systems
	Management Server version 1.2 has a built-in timer that initiates a countdown of
	5 minutes when a job's mandatory time has been reached. A new version of Package
	Command Manager is available for Systems Management Server 1.2 which allows the
	standard 5 minute mandatory countdown timer to be disabled on a per-client
	basis.
	
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
	
	To disable the 5 minute timer for mandatory Package Command Manager packages,
	apply the updated version of Pcmwin16.exe or Pcmwin32.exe to each affected
	client, and then place the following entry in the [Local] section of the Sms.ini
	file on the Systems Management Server on each client:
	
	     DisablePCMCountdown=TRUE
	
	This resets the timer from 5 minutes to 0 minutes, which effectively disables
	it.
	
	NOTE: This change must be made on a per-client basis, and will not work without
	the new PCM executable.
	
	A Systems Management Server Installer package can be created and distributed to
	implement this Sms.ini change to the required clients.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbPCM smspcm 
	Technology        : kbSMSSearch kbSMS120
	Version           : :1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
