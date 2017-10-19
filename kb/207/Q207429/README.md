---
layout: page
title: "Q207429: SMS: Cannot Install SMS Client Software in Windows NT and 2000"
permalink: /kb/207/Q207429/
---

## Q207429: SMS: Cannot Install SMS Client Software in Windows NT and 2000

	Article: Q207429
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbinterop kbsetup kbClient kbConfig kbServer kbsms200 kbBindery kbOSNovell
	Last Modified: 08-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Smsls.bat or Smsman.exe to install the Systems Management Server
	(SMS) 2.0 client software on a target Windows NT- or Windows 2000-based
	computer, the SMS 2.0 client installation may not be completed successfully.
	
	CAUSE
	=====
	
	This issue can occur because you are unable to install SMS 2.0 client software
	on a Windows NT- or Windows 2000-based computer if the Workstation and Server
	services are not running. When you disable either of these services, the client
	is not supported as an SMS 2.0 client, and the networking abilities of the
	client are limited.
	
	MORE INFORMATION
	================
	
	For more information about Windows NT Workstation and Server services, consult
	the Windows NT Resource Kit, Chapter 1, "Windows NT Networking Architecture."
	
	The following log files are created on Windows NT- and Windows 2000-based
	computers on which the SMS 2.0 client installation was unsuccessful. These logs
	are located in the %SystemRoot%\Ms\Sms\Logs folder.
	
	WN_logon.log:
	
	  Could not register CCIM; AppRegister return code =1060
	  Waiting for 1 minute for CliSvc to start CCIM~
	  NetServerGetInfo failed (2138)~
	  Unable to create the Client Service Account - The specified service does not
	  exist as an installed service.~~
	  UpdateClientRegistryForCCIMLaunch returned (null)
	
	WNManual.log:
	
	  Could not register CCIM (could be initial install); AppRegister return code
	  =1060
	  Waiting for 1 minute for CliSvc to start CCIM~
	  ERROR: NetServerGetInfo failed (2114)~
	  ERROR: Unable to create the Client Service Account. Win32 Error: 2114
	  Warning: Could not launch/register CCIM - 2114
	  Warning: could not open base component installation properties
	
	Additional query words: prodsms sms20 cli32 file and printer sharing print
	
	======================================================================
	Keywords          : kbinterop kbsetup kbClient kbConfig kbServer kbsms200 kbBindery kbOSNovell 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
