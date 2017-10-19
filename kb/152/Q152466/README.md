---
layout: page
title: "Q152466: SMS: Restoring SMS Services to the Registry"
permalink: /kb/152/Q152466/
---

## Q152466: SMS: Restoring SMS Services to the Registry

	Article: Q152466
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbDatabase kbsms100 kbsms110 kbsms120 smsdatabase
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If for any reason you find that the Systems Management Server registry entries
	have been removed from HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services, and
	there are no backups in HKEY_LOCAL_MACHINE\SYSTEM\ControlSet00x\Services and you
	have not taken backups of these registry keys, you can still restore them using
	INSTSRV.
	
	MORE INFORMATION
	================
	
	INSTSRV is a utility contained on the Systems Management Server compact disc in
	the Debug\X86.bin directory. To begin the service re-creation, perform the steps
	below.
	
	1. Copy INSTSRV from the compact disc to the \Sms\Site.Srv\x86.bin directory.
	
	2. Open a command prompt window.
	
	3. Run INSTSRV (it is an MS-DOS Menu tool).
	
	4. Select '1. Install'.
	
	5. Enter the service name 'SMS_SITE_CONFIG_MANAGER'.
	
	6. Enter the domain name\account name to start the service (for example,
	  thekop\smsadmin).
	
	7. Type the password for the user.
	
	  NOTE: The password will be displayed on the screen.
	
	8. Enter the Systems Management Server site server name (for example,
	  \\BOOTROOM).
	
	9. Enter the path to the service:
	
	  c:\Sms\Site.Srv\X86.Bin\Siteins.exe
	
	10. Autostart the service during startup - 'Y'.
	
	11. Restart the server, or go to Control Panel Services and restart the service.
	
	12. Site Configuration Manager should re-create the remaining Systems Management
	  Server services in the registry (SMS_HEIRACHY_MANAGER, SMS_EXECUTIVE,
	  SMS_INVENTORY_AGENT, and SMS_PACKAGE_COMMAND_MANAGER).
	
	13. After you have your services restored, go into the Registry Editor REGEDT32
	  and make backups of each of these keys by saving them to a file.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbDatabase kbsms100 kbsms110 kbsms120 smsdatabase 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	Issue type        : kbinfo
	
	=============================================================================
	
