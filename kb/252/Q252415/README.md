---
layout: page
title: "Q252415: Accelerated Remote Control Clients Lose Acceleration with SP1"
permalink: /kb/252/Q252415/
---

## Q252415: Accelerated Remote Control Clients Lose Acceleration with SP1

{% raw %}

	Article: Q252415
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP1
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200fix kbsms200sp2fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Accelerated Remote Control clients may lose acceleration permanently after being
	upgraded to Systems Management Server (SMS) 2.0 Service Pack 1 (SP1).
	
	CAUSE
	=====
	
	SMS 2.0 includes an accelerated screen driver (Idisntkm) that replaces the video
	driver for improved performance in Remote Control. If the Remote Control client
	installation does not install the accelerated driver properly, the driver is not
	loaded.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	
	
	WORKAROUND
	==========
	
	To work around this behavior, run the following command on the client:
	
	  %systemroot%\ms\sms\clicomp\remctrl\rchwcfg.exe install
	
	This command causes the current settings for Remote Control to be refreshed. You
	can also implement this method by using the SMS software distribution
	capabilities.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0 SP1. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.
	
	MORE INFORMATION
	================
	
	To install the hotfix, use the appropriate method.
	
	Using the Hotfix Installer
	--------------------------
	
	NOTE: This method is only for Intel-based site servers.
	
	1. Create a folder in a location that is accessible to your SMS site server(s).
	
	2. Copy the Q252415.exe file and platform folders to the new folder. The folder
	  structure must be such that the program file is located one folder above the
	  platform folders.
	
	3. Log on to your site server using an account with administrative privileges.
	
	4. Run the program file from each of the primary and secondary SMS site servers
	  in your environment. You can run the Q252415.exe file silently by using the
	  /s switch.
	
	5. Complete any necessary manual installation steps as required by the
	  installation.
	
	Manual Installation
	-------------------
	
	1. Copy the updated SMS files to a disk or network share that is accessible from
	  the SMS site server that you want to update.
	
	2. Quit the Administrator console and stop all SMS services. If the
	  SMS_SITE_BACKUP service is running, stop it also.
	
	3. Copy the Remctrl.exe file from the appropriate <Platform> folder to the
	  <Drive>:\Sms\Inboxes\Clicomp.src\Remctrl\<Platform> folder.
	
	4. Replace the Compver.ini file in the
	  <Drive>:\Sms\Inboxes\Clicomp.src\Remctrl folder with the
	  Compver1409.ini file that is located in the hotfix bundle source folder after
	  renaming the file to Compver.ini.
	
	5. Restart the SMS site services. The new files are replicated to all logon
	  points and Client Access Points (CAPs). After all logon points and CAPs are
	  updated, allow an additional 23 hours for clients to begin their update
	  polling cycle. You may need to reboot the client to load the updated
	  acceleration driver.
	
	NOTE: Update Configuration must be selected, or wait for the 23 hour-cycle in
	order to allow CCIM to recognize new setting.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200fix kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200SP1
	Version           : :2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
