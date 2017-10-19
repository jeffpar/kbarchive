---
layout: page
title: "Q121387: Use of the %0&#92;..&#92; Syntax in the Smsls.bat File"
permalink: /kb/121/Q121387/
---

## Q121387: Use of the %0&#92;..&#92; Syntax in the Smsls.bat File

	Article: Q121387
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbConfig smshowto smsconfig
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When programs are run from a logon script, and they are located in the NETLOGON
	share, the actual logon script can not determine what drive or path to execute
	the program from, and the NETLOGON share is not included in the MS-DOS path
	statement. To resolve this, Systems Management Server uses a little known
	feature of MS-DOS to determine the drive and path the script is running from.
	
	MORE INFORMATION
	================
	
	During a log on and when the logon script is running, the Lmscript.exe program
	runs its commands from the NETLOGON share. However, batch files have no way of
	determining where they are running from, and the current directory set by
	Lmscript.exe is not the NETLOGON share. As a workaround, Systems Management
	Server uses the %0\..\ path to indicate the argv[0] present when the batch file
	was run. The batch file can then refer to this path and determine its own
	location and look for other files there.
	
	An example of this can be found in the Slow Network detection portion of the
	Smsls.bat logon script file:
	
	     REM SNET_DOS
	     %0\..\netspeed
	     if not errorlevel 1 goto NET_DOS
	     if not errorlevel 2 goto END
	     if errorlevel 2 %0\..\choice /T:Y,30 Slow network detected. Continue
	     if not errorlevel 2 goto NET_DOS
	     goto END
	
	Prior to use of this technique, Systems Management Server was forced to use
	hard-coded drive Z to reference needed files. Now the drive used during a NET
	LOGON can be arbitrary, and dynamically determined.
	
	Additional query words: sms prodsms login
	
	======================================================================
	Keywords          : kbnetwork kbConfig smshowto smsconfig 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	Issue type        : kbinfo
	
	=============================================================================
	
