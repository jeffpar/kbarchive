---
layout: page
title: "Q247230: SMS: Multiple Advertisements to the Same Program/Package Do Not"
permalink: /kb/247/Q247230/
---

## Q247230: SMS: Multiple Advertisements to the Same Program/Package Do Not

{% raw %}

	Article: Q247230
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbsms200bug kbsms200fix kbAdvertisement kbsms200sp2fix
	Last Modified: 25-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create multiple advertisements for the same program or package, 'run'
	status is only reported for the first advertisement. The remaining
	advertisements receive no run status at all. If the first advertisement is
	subsequently removed, 'orphan' status continues to be reported on it, and not
	for the remaining advertisements.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	CAUTION: Do not apply this hotfix if you have previously applied the Client
	Hotfix Bundle described in the following Microsoft Knowledge Base article (this
	hotfix is included in the bundle and reinstallation can cause client and/or site
	system problems):
	
	  Q246527 SMS: Systems Management Server 2.0 Service Pack 1 Client Hotfix
	  Bundle
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.
	
	MORE INFORMATION
	================
	
	To install the hotfix, perform one of the following procedures:
	
	Using The Hotfix Installer
	--------------------------
	
	i386 Platforms Only
	
	1. Copy the hotfix directory structure to a share on your network. Q247230.exe
	  is a Microsoft Windows Installer file that updates specific files on your
	  site server.
	
	2. Log on to your site server using an account with administrative privileges.
	
	3. On the site server, close the SMS Administrator console.
	
	4. Start Q247230.exe and follow the directions in the wizard. The file can be
	  run in quiet mode using the /s switch.
	
	Manual Installation
	-------------------
	
	1. Stop the SMS_EXECUTIVE and SMS_SITE_COMPONENT_MANAGER services on the site
	  server.
	
	2. Copy the updated APASetup.exe file to the
	  <Sms_root_directory>\Inboxes\Clicomp.src\Smsapm32\<Platform>
	  folder.
	
	3. Copy the updated Compver.ini file to the
	  <Sms_root_directory>\Inboxes\Clicomp.src\Smsapm32 folder.
	
	4. Copy the Smsapm32.exe file to the
	  <Sms_root_directory>\Bin\<Platform> folder.
	
	5. Start the SMS_SITE_COMPONENT_MANAGER and SMS_EXECUTIVE services. When the
	  Client Access points and Logon points have been updated, the clients may be
	  updated.
	
	NOTE: The default Client Configuration Installation Manager (CCIM) polling
	interval is 23 hours. Therefore, it may take up to 23 hours for the hotfixed
	files to be propagated to the clients. To speed up this process, you can stop
	and restart the SMS Client Service on each client. You can also create a
	software distribution for one of the Resource Kit tools Setevnt.exe or
	Cliutils.exe along with the appropriate parameter(s) to start a CCIM work cycle.
	For information on the proper syntax to use with these tools, see the Resource
	Kit documentation.
	
	Additional query words: prodsms apm offer
	
	======================================================================
	Keywords          : kbsms200bug kbsms200fix kbAdvertisement kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
