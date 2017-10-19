---
layout: page
title: "Q259816: Changes in How SMS Logon Server Manager Handles Inactive Sites"
permalink: /kb/259/Q259816/
---

## Q259816: Changes in How SMS Logon Server Manager Handles Inactive Sites

	Article: Q259816
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200sp2fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Included in Systems Management Server (SMS) 2.0 Service Pack 2 (SP2) is a change
	to the way in which SMS_NT_Logon_Server_Manager (LSM) handles inactive sites.
	LSM is the SMS_Executive thread that is responsible for creating and updating
	SMS logon points. LSM in SP2, by default, does not remove any other site's files
	(Smslogon\Sites\<xxx>) from the primary domain controller (PDC). In
	earlier versions, LSM removes other site's files from the PDC if there are
	network issues that prevent other sites from updating the PDC; if a site does
	not update the PDC logon point, the site is marked as "dead." A new registry
	value in SP2 is set by default to prevent sites from being automatically removed
	from logon points. The new value is located in the registry at the following
	location:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Sms\Components\Sms_nt_logon_server_manager\Always
	  Active
	
	The Always Active value is set to 1 (enabled) by default. If you want LSM to
	automatically uninstall sites that have not updated the PDC, set the value to 0.
	Microsoft does not recommend enabling automatic uninstallation if you have many
	sites that share logon points.
	
	By default in SP2, if a site is taken off of the network without Windows
	Networking Logon Client Installation and Discovery being disabled first, an
	orphaned folder for that site remains on the logon points. Clients may attempt
	to install to nonexistent sites if their files are left on logon points. To
	delete such a site from all domain controllers, delete the site's logon
	configuration fie (LCF) file from the Smslogon share on the PDC.
	
	For additional information on how to obtain the latest Systems Management Server
	2.0 service pack, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	MORE INFORMATION
	================
	
	In versions of SMS 2.0 earlier than SP2, LSM may consistently not update its own
	LCF on the PDC in a domain that is shared by many SMS sites. One LCF file
	(Smslogon\Sitescfg\<Sitecode>_cfg.lcf) exists for each site that shares
	the domain. To update its LCF file, LSM must gain exclusive access to the PDC by
	exclusively opening the Nt_logon.tok file that is located in the
	Smslogon\Sitescfg folder. LSM logs the following error message in its
	Nt_logon.log file each time it cannot open the Nt_logon.tok file on the PDC:
	
	  ~Warning Unable to get sole access to domain skipping
	  $$<SMS_NT_LOGON_SERVER_MANAGER>
	
	This condition prevents LSM from updating its LCF file. If the SMS site server is
	unable to update its LCF file after the polling interval plus seven days, or
	seven times the polling interval (whichever is longer), the SMS site is marked
	as "dead" and its folders on the logon points are removed.
	
	If at some point the SMS site server gains access to the PDC and updates its LCF
	file, its folders on the logon points are re-created after the senior site runs
	its full domain update. However, the folders are deleted if LSM consistently
	cannot gain access to the PDC again. This can result in excessive traffic if you
	have slow links.
	
	For additional information about these changes, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q255820 SMS: SMS_NT_Logon_Server_Manager Component Is Now Multithreaded
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :2.0,2.0 SP1,2.0 SP2
	Issue type        : kbinfo
	
	=============================================================================
	
