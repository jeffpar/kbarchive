---
layout: page
title: "Q169474: SMS: PCM Does Not Consider Windows 95 Daylight Savings Time"
permalink: kb/169/Q169474/
---

## Q169474: SMS: PCM Does Not Consider Windows 95 Daylight Savings Time

	Article: Q169474
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbPCM smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send a "run command on workstation" job to a Windows 95 client, it will
	execute one hour later than the "offer after" date if the Windows 95 client is
	observing daylight savings time and the Windows NT Server site server is not.
	
	CAUSE
	=====
	
	Windows 95 does not change the actual time of the computer, only the displayed
	time in the user interface when the daylight savings time option is enabled.
	
	WORKAROUND
	==========
	
	To avoid this problem, configure both the Windows NT Server site server and the
	Windows 95 computer to observe daylight savings time. Do change the setting, use
	the following steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click the Date/Time icon.
	
	3. Click the Time Zone tab.
	
	4. Click to select the "Automatically adjust clock for daylight saving changes"
	  check box and then click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.0, 1.1, and 1.2. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms pcmwin16
	
	======================================================================
	Keywords          : kbnetwork kbPCM smspcm 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	Issue type        : kbbug
	
	=============================================================================
	
