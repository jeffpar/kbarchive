---
layout: page
title: "Q186412: SMS: How to Disable the Restart Now/Don't Restart Now Message"
permalink: /kb/186/Q186412/
---

## Q186412: SMS: How to Disable the Restart Now/Don't Restart Now Message

	Article: Q186412
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	After applying a Systems Management Server Service Pack Upgrade, or forcing site
	wide upgrades, Microsoft Windows NT Server Systems Management Server clients
	receive a dialog box which prompts them to Restart Now or Don't Restart Now.
	
	MORE INFORMATION
	================
	
	The message displays because services are started that keep a lock on files that
	need to be upgraded. During the upgrade process, a temporary file is placed in
	the directory. You must restart your system because after you restart, the
	temporary file becomes the active file that the service utilizes and the
	temporary file disappears.
	
	Example
	-------
	
	If Wuser32.exe is in use during the upgrade, a temporary file, called
	Wuser32.exe$sms00$, is placed in the Windows NT directory. After the reboot has
	occurred, the file is gone.
	
	Disabling the Window
	--------------------
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	To prevent the window from appearing on the clients, you must edit the following
	registry key on the site server:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SMS\components
	  \SMS_CLIENT_CONFIG_MANAGER registry key.
	
	  Value = Prompt For Restart.
	  A setting of 1 (default) will force the message to appear.
	  Changing this value to 0 will eliminate the prompt for reboot.
	
	CAUTION: This change will actually make a change in the client's registry under
	HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Sms\Client Services\Reboot Required. There
	is a value for Prompt For Restart that is created based on the Site Server
	setting at the time that the client was installed or upgraded.
	
	The upgrade can be run from the \\SMS Logon Server\Sms_Shr\Upgrade.bat file. For
	additional information about forcing site-wide updates to upgrade all clients,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q166771 SMS: How to Force Site-Wide Client Updates
	
	Additional query words: prodsms reboot restart
	
	======================================================================
	Keywords          :  
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbinfo
	
	=============================================================================
	
