---
layout: page
title: "Q245321: SMS: &quot;Stop 0x0000000A&quot; with SMS Remote Control Installed"
permalink: /kb/245/Q245321/
---

## Q245321: SMS: &quot;Stop 0x0000000A&quot; with SMS Remote Control Installed

{% raw %}

	Article: Q245321
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2,2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200sp2fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.2, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running System Management Server (SMS) with Remote Control
	installed, Windows NT may generate the following error message:
	
	  Stop 0x0000000A (0x00373039 , 0x00000002, 0x00000001, 0x8010ab20
	
	CAUSE
	=====
	
	This error message occurs when the SMS Remote Control driver (Rchelp.sys)
	overruns a memory buffer during the loading of the driver.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	
	
	WORKAROUND
	==========
	
	To work around this issue, remove SMS 2.0 Remote Control. You must remove Remote
	Control completely; if you simply rename or delete the Rchelp.sys file, SMS
	reinstalls the file during its regular check of the client once every 30 days.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.Microsoft has confirmed this to be a problem in
	Systems Management Server version 1.2.
	
	MORE INFORMATION
	================
	
	The Rchelp.sys file is not necessary on versions of Microsoft Windows NT later
	than Windows NT 4.0 SP2. Microsoft has confirmed that having the Rchelp.sys file
	installed on these systems is a problem.
	
	How to Install the Hotfix
	-------------------------
	
	1. Create a folder in a location that is accessible to your SMS site server.
	
	2. Copy Q246549.exe and platform folders to the new folder. The folder structure
	  must be such that the executable file is located one folder higher than the
	  platform folders.
	
	3. Log on to your site server using an account with administrative privileges.
	
	4. From each of the primary and secondary SMS site servers in your environment,
	  run the executable file.
	
	5. Finish any necessary manual installation steps as prescribed by the
	  installation.
	
	NOTE: You can run the Q246549.exe file using the /s comand-line switch.
	
	How to Manually Install the Hotfix
	----------------------------------
	
	1. Copy the updated SMS files to a disk or network share that is accessible from
	  the SMS site server you want to update.
	
	2. Close the SMS Administrator console and stop all SMS services from within
	  Control Panel. If the SMS_SITE_BACKUP service is running, stop that as well.
	
	3. Copy the Remctrl.exe file from the appropriate <platform> subfolder
	  into the <driveletter>\Sms\Inboxes\Clicomp.src\Remctrl\<platform>
	  folder.
	
	4. Replace the Compver.ini file in the
	  <driveletter>\Sms\Inboxes\Clicomp.src\Remctrl folder with the
	  Compver1118.ini file located in the hotfix bundle source folder (after you
	  rename this file to Compver.ini).
	
	5. Restart the SMS Site services.
	
	The new files are replicated to all logon points and Client Access Points (CAPs).
	After all logon points and CAPs are updated, allow an additional 23 hours for
	clients to begin their update polling cycle. You may need to restart the client
	to load the updated acceleration driver.
	
	
	
	Additional query words: prodsms Stop 0xA pool corruption
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS120 kbSMS200
	Version           : winnt:1.2,2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
