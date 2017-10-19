---
layout: page
title: "Q142555: Installing IIS FTP over Microsoft Windows NT FTP Service"
permalink: /kb/142/Q142555/
---

## Q142555: Installing IIS FTP over Microsoft Windows NT FTP Service

	Article: Q142555
	Product(s): Microsoft Windows NT
	Version(s): winnt:1.0,4.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses installing the Internet Information Server (IIS) FTP
	service when the Microsoft Windows NT FTP service is already installed.
	
	MORE INFORMATION
	================
	
	Microsoft recommends that you remove the installation of Microsoft Windows NT
	FTP service before you install the IIS FTP service.
	
	However, if you try to install IIS over Microsoft Windows NT FTP service, the IIS
	Setup program detects the Windows NT FTP service and gives you the following
	option message:
	
	  Setup has detected Microsoft Windows NT FTP service in the system. In order
	  for Microsoft Internet Information Server's FTP service to function properly
	  you need to disable the Microsoft Windows NT FTP Service. Do you wish to
	  disable the service now?
	
	If you select Yes, the Microsoft Windows NT FTP service is disabled, and the IIS
	FTP service is enabled. If you select No, the Microsoft Windows NT FTP service
	remains enabled, and the IIS FTP service is disabled.
	
	If you select Yes and later want to re-enable the original Microsoft Windows NT
	FTP service, you must first remove the IIS FTP service and re-enable the
	Microsoft Windows NT FTP service from Control Panel, Services, Startup.
	
	Additional query words: prodiis1
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbiisSearch kbiis100
	Version           : winnt:1.0,4.0
	
	=============================================================================
	
