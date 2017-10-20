---
layout: page
title: "Q310720: SMS: SMS Backup Task May Not Run Machinfo.bat Correctly"
permalink: /kb/310/Q310720/
---

## Q310720: SMS: SMS Backup Task May Not Run Machinfo.bat Correctly

{% raw %}

	Article: Q310720
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2,2.0 SP3,2.0 SP4
	Operating System(s): 
	Keyword(s): kbfile kbsms200 kbsms200bug kbBackUp
	Last Modified: 31-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2, 2.0 SP3, 2.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Systems Management Server (SMS) built-in backup task may not finish or may
	stop running and the following error message may be logged as the last log entry
	in the Smsbkup.log file:
	
	  Successfully ran command line 'ECHO' (exit status 0). SMS_SITE_BACKUP Tue Jan
	  01 1:23:45.6789 2001 Eastern Daylight Time thread=001 (0x001)
	
	CAUSE
	=====
	
	This problem occurs because there are spaces in the backup location path. A
	valid path to a backup location cannot contain spaces.
	
	
	WORKAROUND
	==========
	
	To work around this problem, manually stop and then restart all SMS services.
	
	You can also change the backup folder location to a share or file location that
	does not contain any spaces, for example, you can change the location to
	G:\Smsbackup.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbfile kbsms200 kbsms200bug kbBackUp 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2 kbSMS200SP3 kbSMS200SP4
	Version           : :2.0,2.0 SP1,2.0 SP2,2.0 SP3,2.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
