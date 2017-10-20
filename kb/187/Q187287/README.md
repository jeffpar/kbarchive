---
layout: page
title: "Q187287: SMS: PCM Does Not Remind Users of Pending Commands"
permalink: /kb/187/Q187287/
---

## Q187287: SMS: PCM Does Not Remind Users of Pending Commands

{% raw %}

	Article: Q187287
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbPCM smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a new package is available, Package Command Manager (PCM), during its
	polling cycle, will appear and show the user that there is a pending command. If
	the user is busy and closes PCM at that time, the user will not be reminded of
	the pending command again until either the package mandatory date passes or PCM
	is restarted.
	
	CAUSE
	=====
	
	This behavior is by design.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 1.2. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	WORKAROUND
	==========
	
	To work around this problem, obtain the hotfix mentioned in the STATUS section
	of this article, or wait for the next Systems Management Server service pack.
	The hotfix should have the following timestamp:
	
	     3/24/98   3:49pm        463,264 Pcmwin32.exe (Intel)
	     3/24/98   3:49pm      1,164,560 Pcmwin32.exe (Alpha)
	
	Note that this fix only applies to the 32-bit desktop version of PCM.
	
	In addition to applying the hotfixed file mentioned above, you must add the
	following entry to the [Local] section of the Sms.ini file:
	
	  PCMPackageReminderInterval=
	
	This value should be set to a value (in minutes) greater than the PCM polling
	interval. PCM will remind the user of pending commands (by reappearing), if all
	of the conditions below are true:
	
	- There is at least one pending package.
	
	- The reminder interval is greater than zero.
	
	- The internal timer is at or below zero by the time the next polling pass is
	  done.
	
	Setting the value above to zero or removing the value completely causes PCM to
	return to the default behavior of no reminders. Note that manually starting PCM
	does not reset the internal timer.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbPCM smspcm 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
