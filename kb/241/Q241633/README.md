---
layout: page
title: "Q241633: PRB: Windows 2000 Migration DLLs Time Out and Are Unloaded"
permalink: kb/241/Q241633/
---

## Q241633: PRB: Windows 2000 Migration DLLs Time Out and Are Unloaded

	Article: Q241633
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbsetup kbmigrate kbOSWin2000 kbSDKPlatform kbMigWin9xtoWin2k kbMigrationDLL kbFAQ kbDS
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Win32 Software Development Kit (SDK) 
	-------------------------------------------------------------------------------
	
	This article discusses a Beta release of a Microsoft product. The 
	information in this article is provided as-is and is subject to change
	without notice.
	
	No formal product support is available from Microsoft for this Beta 
	product. For information about obtaining support for a Beta release, 
	please see the documentation included with the Beta product files, or 
	check the Web location from which you downloaded the release.
	
	SYMPTOMS
	========
	
	While the Windows 2000 Setup program processes a Migration Dynamic-Link Library
	(DLL) during GUI-mode setup, the following error occurs unexpectedly:
	
	  Error: Setup cannot process the [Product Name] upgrade pack from [Company
	  Name].
	
	CAUSE
	=====
	
	Any fatal errors in the Migration DLL cause this message.
	
	A less obvious cause is a time out. On the Windows 2000 side of setup, each
	Migration DLL has 60 seconds to process. If processing takes longer than 60
	seconds, Setup will unload the DLL and report that an error has occurred. This
	is especially undesirable when debugging, because stepping through the code
	almost always takes longer than the time-out period.
	
	RESOLUTION
	==========
	
	When debugging a Migration DLL, the time out can be avoided by starting Windows
	2000 Setup from the command line, as follows:
	
	  winnt32.exe /#u:testdlls
	
	In addition to eliminating the time out, the /#u:testdlls parameter causes the
	Migration DLL to load into the Windows 2000 Setup program's process space. Both
	of these features are necessary for successful debugging of the Migration DLL on
	the Windows 2000 side of setup.
	
	Note that the /#u:testdlls parameter should only be used for debugging. A
	Migration DLL should not take longer than one minute to process on the Windows
	2000 side of setup. Efficiency is required, because multiple Migration DLLs may
	need to be processed during the upgrade.
	
	If it is necessary to perform tasks that take longer than one minute, consider
	placing a patch that will do this work on the computer after the upgrade. Use
	the [MOVED] section of the Migrate.inf file to indicate that your application's
	executable is being renamed to the name of your patch. Setup will change all
	shortcut links on the Start menu and Desktop that point to your application's
	executable to now point to the patch. By using this method, when the user
	launches your application after upgrading, they will be presented with a utility
	that will update the application for Windows 2000.
	
	An alternative is to have the stub executable initiate an uninstall of the
	product if it is not possible to update it for Windows 2000.
	
	STATUS
	======
	
	This behavior is by design.
	
	REFERENCES
	==========
	
	For more information on Migration DLLs, see following in the MSDN Library:
	
	  Platform SDK; Management Services; Setup; Migration-Extension Interface
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbmigrate kbOSWin2000 kbSDKPlatform kbMigWin9xtoWin2k kbMigrationDLL kbFAQ kbDSupport kbGrpDSTools kbMigrationDLLFAQ 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWin32SDKSearch kbAudDeveloper kbSDKSearch kbWinAdvServSearch kbWin32sSearch
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
