---
layout: page
title: "Q246549: Accelerated Remote Control Clients Lose Acceleration with SP1"
permalink: /kb/246/Q246549/
---

## Q246549: Accelerated Remote Control Clients Lose Acceleration with SP1

	Article: Q246549
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP1
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Accelerated Remote Control clients lose acceleration permanently after upgrading
	to Systems Management Server (SMS) 2.0 Service Pack 1 (SP1).
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Only apply it to systems
	that are experiencing this specific problem. This fix may receive additional
	testing. Therefore, if you are not severely affected by this problem, Microsoft
	recommends that you wait for the next Systems Management Server service pack
	that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time    Size       File name        Platform
	  -------------------------------------------------------
	  01/13/2000  11:55p         67  Compver1118.ini  Alpha
	  01/18/2000  12:20a  1,656,697  Remctrl.exe      Alpha
	  01/13/2000  11:55p         67  Compver1118.ini  Intel
	  01/18/2000  12:20a  1,292,504  Remctrl.exe      Intel
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	the above files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0 SP1.
	
	MORE INFORMATION
	================
	
	To install the hotfix, use the appropriate method.
	
	Using the Hotfix Installer
	--------------------------
	
	NOTE: This method is for Intel-based computers only.
	
	1. Create a folder in a location that is accessible to your SMS site servers.
	
	2. Copy the Q246549.exe file and platform folders to the new folder. The folder
	  structure must be such that the program file is located one folder above the
	  platform folders.
	
	3. Log on to your site server by using an account with administrative
	  privileges.
	
	4. From each of the primary and secondary SMS site servers in your environment,
	  run the hotfix program file.
	
	5. Complete any necessary manual installation steps as instructed.
	
	NOTE: You can run the Q246549.exe file silently by using the /s switch.
	
	Manual Installation
	-------------------
	
	1. Copy the updated SMS files to a disk or network share that is accessible from
	  the SMS site server you want to update.
	
	2. Quit the SMS Administrator console and stop all SMS services from within
	  Control Panel. If the SMS_SITE_BACKUP service is running, stop that as well.
	
	3. Copy the Remctrl.exe file from the appropriate <Platform> folder into
	  the <Drive>:\Sms\Inboxes\Clicomp.src\Remctrl\<Platform> folder.
	
	4. Replace the Compver.ini file in the
	  <Drive>:\Sms\Inboxes\Clicomp.src\Remctrl folder with the
	  Compver1118.ini file located in the hotfix bundle source folder after
	  renaming the file to Compver.ini.
	
	5. Restart the SMS site services. The new files are replicated to all logon
	  points and CAPs. After all logon points and CAPs are updated, allow an
	  additional 23 hours for clients to begin their update polling cycle. A reboot
	  of the client may be required to load the updated acceleration driver.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200fix 
	Technology        : kbSMSSearch kbSMS200SP1
	Version           : :2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
