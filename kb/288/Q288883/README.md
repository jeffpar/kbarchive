---
layout: page
title: "Q288883: Error Message: No Server Path Specified"
permalink: /kb/288/Q288883/
---

## Q288883: Error Message: No Server Path Specified

{% raw %}

	Article: Q288883
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbinterop kbsetup kbClient kbConfig kbsms200 kbUpgrade
	Last Modified: 25-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Systems Management Server (SMS) script file (Smsls.bat) to
	install the SMS-based client components, the workstation may not successfully
	install the components, and an error message may be logged in the Wn_logon.log
	file:
	
	  ======= Logging initialized for module
	  "C:\Windows\Ms\Sms\Core\Bin\Boot32wn.exe" =======
	  SmsclientPath (from "C:\Temp") is ""
	  SmstempClientPath (from "C:\Temp") is ""
	  ERROR: No server path specified.
	
	CAUSE
	=====
	
	This behavior can occur when there is an extra space after the Set Temp variable
	in the Autoexec.bat file. You can verify this extra space if you review the
	Wn_logon.log file and the following entry has been logged:
	
	  Wrote "SmsserverPath=\\Usnycns01\Smslogon" into file "C:\Temp \Smsboot1.ini",
	  iRet = 1
	
	WORKAROUND
	==========
	
	To work around this behavior, remove the extra space after the "Set
	Temp=C:\Temp" line in the Autoexec.bat file, restart the workstation, and then
	log on with an account that runs the Smsls.bat logon script.
	
	MORE INFORMATION
	================
	
	If the Smsman.exe program is run from the logon point, you may observe the
	following entry in the Wnmanual.log file:
	
	  ERROR: Load of DLL CliEx32.dll failed
	  (C:\Windows\Ms\Sms\Core\Bin\Cliex32.dll), 1157
	  ERROR: Initializing CliEx failed error code 1157
	
	NOTE: The 1157 error may also be caused by a corrupted Clicore.exe program on the
	logon point.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbinterop kbsetup kbClient kbConfig kbsms200 kbUpgrade 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :2.0,2.0 SP1,2.0 SP2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
