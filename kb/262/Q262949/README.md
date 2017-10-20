---
layout: page
title: "Q262949: SMS: During 1.2 Upgrade, RC Won't Complete if Sms.ini Deleted"
permalink: /kb/262/Q262949/
---

## Q262949: SMS: During 1.2 Upgrade, RC Won't Complete if Sms.ini Deleted

{% raw %}

	Article: Q262949
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbClient kbConfig _IK964 kbsms200 kbHelpDesk kbUpgrade kbRemoteProg
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	When you upgrade a Systems Management Server (SMS) 1.2 client to SMS 2.0 without
	removing the old SMS client software, but you delete the Sms.ini file on the
	client, the Remote Control service may log messages in the Remctrl.log, noting
	that it is in an install pending state.
	
	After you restart the client, none of the SMS 1.2 services are running.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	SMS 2.0 uses three markers to determine if a client is an SMS 1.2 client:
	
	1. The Sms.ini file.
	
	2. In the SMS registry entry, it checks the load key under
	  HKCU\Software\Microsoft \WindowsNT\CurrentVersion\Windows to see if it
	  contains Smsrun32.
	
	3. It checks the load line in the Win.ini file to see if it contains
	  Smsrun16.exe.
	
	The upgrade from the SMS 1.2 Remote Control components to the SMS 2.0 Remctrl.exe
	(the SMS 2.0 remote control bundle) consists of two parts: One that depends on
	migration (Migrat1x.exe) to complete, and another test that it performs
	separately from the migration.
	
	Migrat1x.exe can only remove the SMS 1.2 components that it knows about. It uses
	the Sms.ini file as the key to the SMS 1.2 components that are present, and
	where a component can be found to remove it. If the Sms.ini file is not present,
	a number of SMS 1.2 components will remain on that client (including Remote
	Control), because the key to the entire cleanup, or migration process has been
	removed.
	
	As a result, other client components may not be upgraded either.
	
	The Remctrl.log file generates the following message every time the computer
	starts:
	
	  Remote Control Installation starting
	  Looking for conflicting products on an NT system
	  SMS 1.2 Client Migration is not yet complete.
	  Migration status is 'Failed'
	  Abandoning installation until after next reboot
	  Successfully notified SMS that installation has not completed
	  Installation abandoned at <date>
	
	The Install.log for the Remote Control component generates the following
	message:
	
	  *** Installation Started <date> ***
	  Title: SMS Remote Control Installation
	  Source: \\SCHULZ\CAP_MFS\clicomp.box\remctrl\i386\remctrl.exe
	  SMS 1.2 Remote Control client on workstation.
	  Abandoning installation until after next reboot.
	
	There is an SMS Client Installation State registry key in the registry that is
	located in HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SMS\Client\Client
	Components\Remote Control\Installation Properties. Until migration is completed,
	and until this key is set to Done (which Migrat1x.exe was unable to set upon
	completion), SMS 2.0 Remctrl.exe does not try to install Remote Control
	components. If it were to do so, Migrat1x.exe might unknowingly clean up
	incoming SMS 2.0 Remote Control components.
	
	If you experience this condition, the migration can be continued by replacing the
	contents of this registry key with "Done" (without the quotation marks), and
	then restarting the computer, at which point the migration continues.
	
	After the migration is complete, the Remctrl bundle scans all local hard drives
	for copies of Wuser.exe, and Wuser32.exe. If it finds either of these files, it
	assumes a third-party Remote Control agent is resident, chooses not to replace
	it, logs an error in the Remctrl.log file, stops gracefully, and then waits for
	someone to read the log and make the necessary adjustments so that it can
	install SMS 2.0 Remote Control at some point in the future.
	
	REFERENCES
	==========
	
	For additional information about the functions of Migrat1x.exe, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q199227 Functions of Migrat1x.exe
	
	For additional information about migrating SMS 1.2 clients to SMS 2.0, refer to
	Chapter 12, in the Microsoft Systems Management Server 2.0 Resource Guide.
	
	Additional query words: prodsms remote control upgrade Remctrl log Sms ini SMSRUN32 Win Smsrun16 exe Migrat1x Wuser Wuser32
	
	======================================================================
	Keywords          : kbClient kbConfig _IK964 kbsms200 kbHelpDesk kbUpgrade kbRemoteProg 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :2.0,2.0 SP1,2.0 SP2
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
