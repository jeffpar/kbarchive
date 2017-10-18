---
layout: page
title: "Q125978: SMS Will Not Deinstall On Windows for Workgroups clients"
permalink: kb/125/Q125978/
---

## Q125978: SMS Will Not Deinstall On Windows for Workgroups clients

	Article: Q125978
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:; winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork smsgeneral kbArtTypeINF
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run DEINSTAL.BAT on a Windows for Workgroups SMS client machine and
	Logon at Startup is not selected, the following message appears:
	
	  Your machine has successfully been prepared for deinstallation. Microsoft SMS
	  will be deinstalled the next time you start Windows. Phase 1 of Client
	  de-install complete. If this is a Windows machine, you must start or restart
	  Windows now for the deinstallation to complete.
	
	The next time you start Windows for Workgroups, SMS is not removed.
	
	However, the next time you start Windows for Workgroups, choose the Log On/Off
	icon in the Network group, and log on, a similar message appears. Neither the
	SMS nor program groups are removed. In addition, the applications specified on
	the SMSRUN16.INI autostart line are not run.
	
	CAUSE
	=====
	
	SMS does not display a dialog box asking the user to logon when it detects that
	the Windows for Workgroups machine is not logged on.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. Run Control Panel and choose the Networks icons.
	
	2. Choose Startup.
	
	3. Select Log On at Startup.
	
	4. Choose OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	When you run DEINSTAL.BAT or UPGRADE.BAT, Client Setup flags the SMS.INI file to
	indicate that SMS needs to do one or more of the following:
	
	- Install a new client component.
	
	- Remove a client component.
	
	- Complete client upgrade.
	
	- Remove the client.
	
	When Windows is restarted, SMSRUN16/32 checks the SMS.INI file. If SMS determines
	in needs to perform one of the previously mentioned tasks, it connects to the
	logon server and launches SMSSRV16/32. SMSRUN16/32 then calls Client Setup to do
	the actual installation or removal of files. When Client Setup is done,
	SMSSRV16/32 processes the SMSRUN*.INI file and loads the applications to be
	automatically started.
	
	SMS uses this sequence because SMSRUN16/32 has to ensure that none of the SMS
	client components, including itself, are running while Client Setup tries to
	delete or overwrite their files.
	
	Additional query words: sms prodsms section SMS.INI SetupPhase=deinstall [WorkstationStatus] (CLI_DOS, CLI_NT) deinstall autostarted deinstalled
	
	======================================================================
	Keywords          : kbnetwork smsgeneral kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : WINDOWS:; winnt:1.0,1.1
	
	=============================================================================
	
