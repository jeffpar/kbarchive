---
layout: page
title: "Q261184: SMS: Tlist Causes Backup to Hang"
permalink: /kb/261/Q261184/
---

## Q261184: SMS: Tlist Causes Backup to Hang

	Article: Q261184
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 28-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Systems Management Server (SMS) Backup service (SMS_BACKUP) runs, the
	backup may not finish and Tlist.exe may stop responding (hang).
	
	During the site backup, the Backup service calls Machineinfo.bat (and therefore
	Tlist.exe) to gather information that is needed by the administrator in case
	rebuilding the site is necessary.
	
	WORKAROUND
	==========
	
	1. Copy the Pulist.exe file from the Microsoft Windows NT Resource Kit to the
	  Sms\Bin\I386 folder.
	
	2. Use a text editor (such as Notepad) to open the Sms\Bin\I386\Machineinfo.bat
	  file.
	
	3. Find the line that reads:
	
	  TLIST.EXE >>%2%3Data.txt
	
	4. Replace the line with a new line that reads:
	
	  PULIST.EXE >>%2%3Data.txt
	
	5. Save and then close the Machineinfo.bat file.
	
	
	Additional query words: prodsms SMS Tlist backup hung
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : winnt:2.0,2.0 SP1,2.0 SP2
	Issue type        : kbprb
	
	=============================================================================
	
