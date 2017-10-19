---
layout: page
title: "Q170587: XCLN: Schedule+ Always Prompts for Shared Schedule Password"
permalink: /kb/170/Q170587/
---

## Q170587: XCLN: Schedule+ Always Prompts for Shared Schedule Password

	Article: Q170587
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 11-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+, version 7.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you migrate an MSMail account to Microsoft Exchange using the MSMail
	Migration Wizard, you may receive the following message when you start
	Schedule+:
	
	  Please type the password for your shared schedule Password
	
	If you enter the correct password, Schedule+ opens and the migrated information
	is available; however, there are two side effects:
	
	- When you click Change Password on the Tools menu, no Old Password box is
	  displayed. Only the New Password and Verify New Password boxes appear. Once
	  you enter a new password, the proper dialog box appears.
	
	- Regardless of the new password you set, Schedule+ continues to prompt for the
	  shared schedule password. This password remains the one that existed before
	  you migrated the MSMail account.
	
	CAUSE
	=====
	
	This problem occurs when you follow these steps:
	
	1. Run Schedule+ 1.0 against a user's MSMail account.
	
	2. Run Schedule+ 7.5 against the same MSMail account.
	
	3. Migrate that user to Microsoft Exchange with the MSMail Migration Wizard.
	
	WORKAROUND
	==========
	
	To work around this problem, follow these steps in Schedule+:
	
	1. On the File menu, point to Export, and then click Schedule+ Interchange.
	
	2. Enter the file name and click OK to export all Schedule+ data.
	
	3. On the File menu, click Exit and Log Off to quit Schedule+.
	
	4. In Microsoft Explorer, press and hold CTRL+SHIFT while you double-click the
	  Schedule+ icon.
	
	  A dialog box confirms that you want to clear your schedule data.
	
	5. Click Yes to continue.
	
	  If you are prompted for the profile, click the appropriate profile and click
	  OK.
	
	  Schedule+ starts with a new local and server schedule.
	
	6. On the File menu, point to Import, and then click Schedule+ Interchange.
	
	7. Locate the Schedule+ export file saved in step 1. Click to select the file,
	  and then click Open.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Schedule+ for Windows.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbZNotKeyword2 kbScheduleSearch kbSchedule750
	Version           : WINDOWS:7.5
	Issue type        : kbbug
	
	=============================================================================
	
