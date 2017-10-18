---
layout: page
title: "Q168960: Err Msg: An Error Occurred Accessing the Security-Settings File"
permalink: kb/168/Q168960/
---

## Q168960: Err Msg: An Error Occurred Accessing the Security-Settings File

	Article: Q168960
	Product(s): Microsoft Windows NT
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup
	Last Modified: 15-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Network Client for MS-DOS version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After installing the Network Client version 3.0 for MS-DOS and starting the
	computer, you may get these messages while running Autoexec.bat, typically after
	NET START or NET INITIALIZE is run:
	
	  Error 2: The specified file was not found.
	
	-or-
	
	  An error occurred accessing the security-settings file.
	
	Networking functionality will be lost. System settings in System.ini and
	Protocol.ini are correct, as are settings in Config.sys and Autoexec.bat.
	
	CAUSE
	=====
	
	During setup, the file Wfwsys.cfg is copied to your setup directory (typically,
	C:\NET). The Shares.pwl file is built using security information that is tied to
	the Wfwsys.cfg file. If the Wfwsys.cfg file is damaged or missing, the network
	will not start, and you will receive these error messages.
	
	RESOLUTION
	==========
	
	Copy the Wfwsys.cfg file from the clients\msclient\netsetup directory on the
	Windows NT Server compact disc to your network client installation directory
	(for example, C:\NET) and delete the existing Shares.pwl file. When you restart
	the computer, a new Shares.pwl file will be created using the Wfwsys.cfg file.
	
	If you replace the Wfwsys.cfg file without deleting the Shares.pwl file, you will
	receive an ACCESS DENIED message during system startup.
	======================================================================
	Keywords          : kbnetwork kbsetup 
	Technology        : kbAudDeveloper kbZNotKeyword kbNetworkClientSearch kbNetworkClient300DOS
	Version           : 3.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
