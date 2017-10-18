---
layout: page
title: "Q242776: INFO: Redistribute Files with a Windows 2000 Migration DLL"
permalink: kb/242/Q242776/
---

## Q242776: INFO: Redistribute Files with a Windows 2000 Migration DLL

	Article: Q242776
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
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Often the differences between a Windows 95/98 application and a Windows 2000
	application involve files that target each platform. Sometimes a Migration DLL
	needs to distribute Windows 2000 specific versions of certain application files.
	This article describes how to distribute files that the Migration DLL needs.
	
	MORE INFORMATION
	================
	
	Each Migration DLL should have its own directory on the users computer. That
	directory can also contain any files that the Migration DLL needs in order to
	migrate the Windows 95/98 application to Windows 2000 Professional. The entire
	contents of this directory is copied to a temporary working directory during the
	Windows 2000 Professional upgrade. This directory is the WorkingDirectory string
	passed to the Initialize9x and InitializeNT functions. By storing the location
	to this directory in a global variable, the Migration DLL will have access to
	the files it needs to update the application.
	
	Note that the Migration DLL directory should not contain any unnecessary files or
	folders. This would increase the amount of time and space it takes to process
	the DLL during Windows 2000 Setup.
	
	REFERENCES
	==========
	
	For more information on Migration DLLs, see following in the MSDN Library:
	
	  Platform SDK; Management Services; Setup; Migration-Extension Interface
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbmigrate kbOSWin2000 kbSDKPlatform kbMigWin9xtoWin2k kbMigrationDLL kbFAQ kbDSupport kbGrpDSTools kbMigrationDLLFAQ 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch
	Version           : WINDOWS:
	Issue type        : kbinfo
	
	=============================================================================
	
