---
layout: page
title: "Q224197: Cliex32.dll Error 126 Error Message When You Run Smsman.exe"
permalink: /kb/224/Q224197/
---

## Q224197: Cliex32.dll Error 126 Error Message When You Run Smsman.exe

{% raw %}

	Article: Q224197
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsetup kbtool kbsms200
	Last Modified: 22-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install a client by using the Systems Management Installation
	Wizard (Smsman.exe) in Systems Management Server (SMS) 2.0, you may receive the
	following error message (or one similar to it) in the Wnmanual.log file:
	
	  Begin CliEx processing.~
	  ERROR: Load of DLL CliEx32.dll failed:
	  (C:\WINNT\MS\SMS\CORE\BIN\cliex32.dll),126
	  ERROR: Initializing CliEx failed error code 126~
	  Unable to continue; exiting~
	
	CAUSE
	=====
	
	This behavior occurs because of one of the following:
	
	- If you run the Systems Management Installation Wizard from a location other
	  than the \x86.bin\00000409 folder within the SMSLOGON share of an SMS logon
	  point, and then use the Automatically select installation location feature.
	
	- The %TEMP% or %TMP% environment variables do not exist for the target system.
	
	- The %TEMP% or %TMP% environment variables point to a folder which does not
	  exist in the file system.
	
	NOTE: In the case of number 3, a temporary (.TMP) file is created in the root of
	C:\ (in the root of the system/boot partition), causing the sequence of errors
	listed under the symptoms section.
	
	WORKAROUND
	==========
	
	To work around this issue, run the Systems Management Installation Wizard from
	the \x86.bin\00000409 folder within the SMSLOGON share of an SMS logon point.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsetup kbtool kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
