---
layout: page
title: "Q259991: SMS: Smsapm32 Continually Checks for Logged-On User"
permalink: /kb/259/Q259991/
---

## Q259991: SMS: Smsapm32 Continually Checks for Logged-On User

{% raw %}

	Article: Q259991
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbAdvertisement kbPackage kbSoftwareDist kbsms200preSP3fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a mandatory advertisement is assigned and is set to run only when a user is
	logged on, Smsapm32 continually checks for a logged-on user at the client
	computer. This behavior continues until a user logs on. The computer may exhibit
	performance degradation and additional network traffic may be generated.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to
	computers that are experiencing this specific problem. This fix may receive
	additional testing. Therefore, if you are not severely affected by this problem,
	Microsoft recommends that you wait for the next Systems Management Server
	service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The typical support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date     Time    Version        Size     File name     Platform
	  ---------------------------------------------------------------
	  6/10/00  6:15am  2.0.92.1       653,342  Apasetup.exe  Alpha
	  6/10/00  6:15am  2.0.1493.2128  375,568  Smsapm32.exe  Alpha
	  6/10/00  6:15am                          CompverSmsapm32.ini
	  6/10/00  6:15am  2.0.92.1       392,496  Apasetup.exe  Intel
	  6/10/00  6:15am  2.0.1493.2128  280,432  Smsapm32.exe  Intel
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	the above files may also contain additional files.
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, avoid configuring mandatory advertisements to run
	only when a user is logged on.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	The Smsapm32.log file shows that the program is being enabled even though the
	program states that it can run only while a user is logged on. This behavior
	continues until a user logs on and the program runs.
	
	Installing the Hotfix
	---------------------
	
	Using the Hotfix Installer:
	
	NOTE: This method is for Intel-based computers only.
	
	1. Copy the hotfix folder structure to a share on your network. Q259991.exe is a
	  Microsoft SMS Installer file that updates specific files on your site server.
	
	2. Log on to your site server using an account with administrative privileges.
	
	3. On the site server, quit the SMS Administrator console.
	
	4. Run Q259991.exe and follow the instructions in the wizard. You can run the
	  file in Quiet mode by using the /s switch.
	
	Manual Installation:
	
	1. Stop the SMS_EXECUTIVE and the SMS_SITE_COMPONENT_MANAGER services on the
	  site server.
	
	2. Replace the Apasetup.exe file in the
	  <Sms_root>\Inboxes\Clicomp.src\Smsapm32\<Platform> folder with
	  the version obtained from the hotfix.
	
	3. Replace the Compver.ini file in the
	  <Sms_root>\Inboxes\Clicomp.src\Smsapm32 folder with the
	  CompverSmsapm32.ini file obtained from the hotfix, and then rename the file
	  to Compver.ini.
	
	4. Replace the Smsapm32.exe tool in the <Sms_root>\Bin\<Platform>
	  folder with the version obtained from the hotfix.
	
	5. Restart the SMS_EXECUTIVE and the SMS_SITE_COMPONENT_MANAGER services. Allow
	  the updated Compver.ini and Clicore.exe files to be propagated to all logon
	  points and Client Access Points (CAPs) in the site.
	
	NOTE: The default Client Configuration Installation Manager (CCIM) polling
	interval is 23 hours. Therefore, it may take up to 23 hours for the hotfix files
	to be propagated to the clients. To speed up this process, you can stop and
	restart the SMS Client service on each client. You can also create a software
	distribution for one of the Resource Kit tools (Setevnt.exe or Cliutils.exe)
	along with the appropriate parameter(s) to start a CCIM32 work cycle. For
	information about the proper syntax to use with these tools, see the Resource
	Kit documentation.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbAdvertisement kbPackage kbSoftwareDist kbsms200preSP3fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :2.0,2.0 SP1,2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
