---
layout: page
title: "Q153227: SMS: PCM Requires Restart After Running a Package"
permalink: /kb/153/Q153227/
---

## Q153227: SMS: PCM Requires Restart After Running a Package

{% raw %}

	Article: Q153227
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbPCM smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you run a "Run Command on Workstation" job, the following message appears
	on Windows clients:
	
	  Reboot to Complete Installation
	
	  Please close all running applications. The system must be rebooted to complete
	  installation. Press ENTER to reboot.
	
	This message appears even though a restart is not required.
	
	CAUSE
	=====
	
	The following two files may exist in the Windows directory: _Mssetup.bat and
	_Msrstrt.exe. Package Command Manager (PCM) looks for these two files to
	determine whether a restart is required. Many setup programs use these files in
	the installation process. It is possible that a setup program left them behind.
	
	MORE INFORMATION
	================
	
	Setup programs may construct a batch file containing operations that must be
	performed during a restart, by using ExitWindowsExec, and then restarting
	Windows. In order to set up multiple programs before a restart, PCM prevents the
	restart by displaying the message mentioned above, and then performs an
	ExitWindowsExec when the user elects to restart. This also gives the user a
	chance to save any work.
	
	To copy system files that may be in use, or to coordinate multiple or unattended
	setups, the batch file of each setup program can be concatenated to the
	_Mssetup.bat file. If _Mssetup.bat does not exist, then the batch file of the
	first setup program is renamed to _Mssetup.bat. The _Msrstrt.exe program is
	called by ExitWindowsExec and runs the batch file _Mssetup.bat. It then deletes
	both the batch file and _Msrstrt.exe.
	
	For more information on creating Package Definition Files (PDFs), please refer to
	the Microsoft BackOffice SDK.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbPCM smspcm 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	

{% endraw %}
