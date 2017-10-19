---
layout: page
title: "Q236166: Using NET STOP and NET START Commands with IIS Services"
permalink: /kb/236/Q236166/
---

## Q236166: Using NET STOP and NET START Commands with IIS Services

	Article: Q236166
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Windows NT version 4.0 Option Pack 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you make changes to the registry that affect IIS and its dependent
	services, you must stop and restart those services in order to force them to
	re-read the registry.
	
	As an alternative to stopping and starting those services using the Services
	applet in Control Panel, you can use the NET STOP and NET START commands.
	
	MORE INFORMATION
	================
	
	Stopping IISADMIN and its dependent services:
	
	To stop all IIS-related services, type "NET STOP IISADMIN /Y" (without the
	quotation marks) at a command prompt. This will stop the IIS Admin Service and
	all dependent services. Below is an example of the output you will see after
	issuing this command (the dependent services listed on your computer may vary):
	
	  
	
	  The following services are dependent on the IIS Admin Service service.
	  Stopping the IIS Admin Service service will also stop these services.
	
	  FTP Publishing Service
	  Microsoft NNTP Service
	  Microsoft SMTP Service
	  World Wide Web Publishing Service
	
	You will then see a message displayed as each service is successfully stopped.
	
	Starting the IIS-related services:
	
	Use the NET START command to restart the IIS-related services you use. For
	example, to restart the World Wide Web service, type "NET START W3SVC" (without
	the quotation marks).
	
	Determining service names:
	
	To determine the service names, start Registry Editor (type Regedit.exe or
	Regedt32.exe) and go to the following registry key:
	
	  
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services
	
	Under Services, the service name that works with the NET STOP and NET START
	commands is listed.
	
	NOTE: For each service, there is also a DisplayName value, which is the name
	listed in the Services applet in Control Panel and in the messages displayed
	after the NET STOP and NET START commands are run. However, these Display Names
	cannot be used as a parameter with the NET STOP and NET START commands.
	
	Common IIS-related services:
	
	+--------------------------------------------------+
	| Service Name | Display Name                      | 
	+--------------------------------------------------+
	| Iisadmin     | IIS Admin Service                 | 
	+--------------------------------------------------+
	| Msftpsvc     | FTP Publishing Service            | 
	+--------------------------------------------------+
	| Nntpsvc      | Microsoft NNTP Service            | 
	+--------------------------------------------------+
	| Smtpsvc      | Microsoft SMTP Service            | 
	+--------------------------------------------------+
	| W3svc        | World Wide Web Publishing Service | 
	+--------------------------------------------------+
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Kevin
	Zollman, Microsoft Corporation.
	
	
	Additional query words: ftpsvc ftpsrv wwwsvc wwwsrv w3srv nntpsrv smtpsrv msftpsrv iissrv iissvc howto how to akz
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbiisSearch kbiis400 kbWinNT400OptionPack
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
