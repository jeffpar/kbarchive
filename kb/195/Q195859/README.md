---
layout: page
title: "Q195859: SMS: How to Enable Remote Control Logging for WUSER in SMS 2.0"
permalink: kb/195/Q195859/
---

## Q195859: SMS: How to Enable Remote Control Logging for WUSER in SMS 2.0

	Article: Q195859
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): _IK964 kbsms200 kbRemoteProg
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	In addition to the mainstream logging of the Install.log and Remctrl.log files,
	a very low level of client-side remote tools logging is available to log all
	transactions during remote transactions. This level of logging is disabled by
	default, and can only be enabled by creating a registry value. Although very
	detailed information is captured by this WUSER logging, no passwords or
	encrypted information is passed. The results of this file are only for use by
	Microsoft Product Support Services in troubleshooting transaction or
	connection-level problems.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To confirm that the client has received and installed the Remote Control
	components, check for the existence of an Install.log file in the
	%windir%\MS\SMS\Clicomp\RemCtrl directory.
	
	This installation log file indicates all of the steps taken during the
	installation (or removal) of the Remote Control components, including registry
	key creation and security. Because the installation log file is created at the
	completion of Remote Control installation, the existence of this Install.log
	file indicates that the client side installation was successful.
	
	Additionally, the standard Remote Control log file is stored at the following
	location:
	
	  %windir%\MS\SMS\LOGS\RemCtrl.log
	
	This "live" Remote Control log file is a more detailed file that logs nearly
	every action the client side Remote Control system carries out. Among the many
	detailed items it records are:
	
	- Operating system and local client languages.
	
	- Actions taken by the Hardware Munger.
	
	- Actions taken by the periodic Security Munger.
	
	- Active sites participating in site setting reconciliation.
	
	- Installation and De-installation triggers.
	
	This log file is essential in tracking down any sort of Remote Control,
	installation, or removal problem.
	
	As for installation, the existence of both the Install.log file and the
	completion message at the bottom of the Remctrl.log file indicates the success
	of the Remote Control installation.
	
	WUSER logging features can be enabled by setting the following registry key or
	.ini file. In each case, logging can be disabled by either removing the entry or
	setting it to FALSE (0). Take care when using this feature, because logging will
	continue indefinitely, and the client-side agent will be slowed while this
	special type of low-level logging is active.
	
	For 32-bit clients (WUSER32), set (or create) a registry setting in the following
	key:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\SMS\Client\Client Components\Remote Control
	
	Name this value LogToFile (be sure to match the capitalization exactly; the case
	is important!) as a REG_DWORD set to 1. Changes to the Windows NT WUSER32 agent
	are dynamic, so within a moment of setting the registry setting, a Wuser32.log
	file should start being created. This Wuser32.log file will be located in the
	%WinNT%\MS\SMS\Clicomp\Remctrl directory.
	
	For 32-bit (WUSER32) client computers running Windows 95 or Windows 98, set (or
	create) a registry setting in the following key:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\SMS\Client\Client Components\Remote Control
	
	Name this value LogToFile (be sure to match the capitalization exactly; the case
	is important!) as a REG_DWORD set to 1. This is not dynamic, so you must shut
	down and restart the Windows 95 or Windows 98 WUSER32 agent. When the computer
	restarts, look for a resulting log file called Wuser32.log. This Wuser32.log
	file will be located in the %WinNT%\MS\SMS\Clicomp\Remctrl directory.
	
	For Windows 3.1 or Windows for Workgroups 3.11 16-bit clients (WUSER), add an
	entry to the [Client Components - Remote Control] section of the Smsrc16.ini
	file that reads "LogToFile=1". You must shut down and restart the agent before
	WUSER logging will begin. After the computer restarts, look for a log file
	called Wuser.log.
	
	Because of the way Win16 Client Services handles .ini files, this setting will be
	overwritten each time initial or full-maintenance cycle of Client Services runs.
	To prevent this, either disable logon scripts or make sure no Manual Discovery
	(SMSMAN16) is performed on this workstation during the time logging is in
	effect. Note that this is true only for Win16.
	
	Enabling WUSER logging will result in either a Wuser32.log (on computers running
	Windows NT, Windows 95, or Windows 98) or Wuser.log (on computers running
	Windows 3.1x) being created somewhere in the local (client) file system. This
	log file will be overwritten (started anew) with each restart of the WUSER
	agent, so be sure to preserve any WUSER log files before shutting down (or
	stopping) and restarting the client agent.
	
	Additional query words: prodsms turn turned on off win win95 win98 win9x 95 98 9x
	
	======================================================================
	Keywords          : _IK964 kbsms200 kbRemoteProg 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
