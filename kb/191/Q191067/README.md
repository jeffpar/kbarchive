---
layout: page
title: "Q191067: SMS: PGC Fails to Configure Apps When Roaming Profiles Are Used"
permalink: kb/191/Q191067/
---

## Q191067: SMS: PGC Fails to Configure Apps When Roaming Profiles Are Used

	Article: Q191067
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbsms120 kbsms120bug kbPGC smspgc
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When roaming user profiles are used, it is possible that Appctl32.exe will
	attempt to configure the desktop before the server-based profile is loaded on to
	the local workstation. This will result in Appctl32.exe failing to configure the
	user's desktop with the shared applications.
	
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
	
	  Date      Time            Size     File name    Platform
	  --------------------------------------------------------
	
	  08/05/98   04:39pm       87.1 KB   Smsrun32.exe (x86)
	  08/05/98   04:40pm       97.8 KB   Smsrun16.exe (x86)
	  08/05/98   03:30pm      173.0 KB   Smsrun32.exe (Alpha)
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	the above files may also contain additional files.
	
	
	
	WORKAROUND
	==========
	
	To work around this problem and successfully configure the desktop computer,
	manually run Program Group Control (PGC) from the SMS Client group after logging
	on.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	MORE INFORMATION
	================
	
	The new version of Smsrun32.exe implements a configurable time delay before
	loading the applications in the [Startup] section of the Smsrun32.ini file.
	
	To configure the amount of time Smsrun32.exe will wait, add the following line to
	the [Local] section of the Sms.ini file on the client, where xxxxx is the time
	in milliseconds:
	
	  SmsrunStartupDelay=xxxxx
	
	When Smsrun32.exe starts, it will sleep for the requested amount of time before
	starting to load the applications in the [Startup] section of the Smsrun32.ini
	file. This should allow sufficient time for Windows to complete loading the user
	profile.
	
	To install the hotfix, perform the following steps on the Systems Management
	Server site server:
	
	1. Replace the Smsrun32.exe file in the
	  <SMS_root>\Site.srv\Maincfg.box\Client.src\<Platform>.bin
	  directory with the hotfixed version.
	
	2. Replace the Smsrun16.exe file in the
	  <SMS_root>\Site.srv\Maincfg.box\Client.src\X86.bin directory with the
	  hotfixed version.
	
	3. Maintenance Manager will replicate the new Smsrun32.exe to the
	  Logon.srv\<Platform>.bin directory on the Systems Management Server
	  logon servers during its next work cycle. After that occurs, you can update
	  the clients. To update the clients, either manually run Upgrade.bat on each
	  client or follow the instructions in the following article in the Microsoft
	  Knowledge Base:
	
	  Q166771 SMS: How to Force Site-Wide Client Updates
	
	4. Then update the Sms.ini file on the clients with the SmsrunStartupDelay line.
	  An easy way to do this is to create a Systems Management Server Installer
	  script that modifies the Sms.ini and sends it as a Package Command Manager
	  (PCM) job to the client computers.
	
	NOTE: You can perform steps 1 and 2 automatically by running Hotfix.exe with the
	Hotfix.ini file provided.
	
	
	Additional query words: prodsms logon login
	
	======================================================================
	Keywords          : kbsms120 kbsms120bug kbPGC smspgc 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
