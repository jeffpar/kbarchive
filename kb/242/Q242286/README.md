---
layout: page
title: "Q242286: BETA-HOWTO: Update an Existing Windows 2000 Migration DLL"
permalink: /kb/242/Q242286/
---

## Q242286: BETA-HOWTO: Update an Existing Windows 2000 Migration DLL

	Article: Q242286
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
	
	A Windows 2000 Migration DLL can be installed on your Windows 95/98 computer by
	installing the Migration DLL in its own directory and pointing to it from the
	registry. Windows 2000 setup automatically calls the Migration DLL if you ever
	decide to upgrade to Windows 2000 Professional. After installing an
	application's Migration DLL, how can any updates or changes to the Migration DLL
	be made on that computer?
	
	The best strategy is to make the updated Migration DLL available on a Web site
	for download. Although you could write a setup to find and replace the existing
	Migration DLL, this is unnecessary. Instead, use the DLLVersion parameter in the
	QueryVersion function to increase the version of the new Migration DLL. You can
	then place this Migration DLL in any directory on the computer. You point to
	this new Migration DLL when setup requests Upgrade Packs. When Windows 2000
	Setup calls two Migration DLLs that return the same ProductId, Setup then checks
	the number returned by DLLVersion. Setup will only continue to process the
	Migration DLL with the higher version number. The higher DLLVersion number on
	the new Migration DLL prevents the original DLL from processing.
	
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
	
