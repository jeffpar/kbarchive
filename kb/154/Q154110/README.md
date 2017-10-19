---
layout: page
title: "Q154110: Mastering Visual C++: Windows 95 Registry Entries"
permalink: /kb/154/Q154110/
---

## Q154110: Mastering Visual C++: Windows 95 Registry Entries

	Article: Q154110
	Product(s): Microsoft Mastering Series
	Version(s): 1.0; WINDOWS:95
	Operating System(s): 
	Keyword(s): kbmm kbsetup
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Mastering Microsoft Visual C++ ISBN 1-55615-914-5, version 1.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following article lists Windows 95 registry entries made by Mastering
	Microsoft Visual C++.
	
	MORE INFORMATION
	================
	
	Entries Made Using AddRegData In Setup.stf
	------------------------------------------
	
	HKEY_CLASSES_ROOT\Microsoft.Visual.C++.4\DefaultIcon
	
	  Default              =   "C:\MVC\mastervc.exe,0"
	
	HKEY_CURRENT_USER\Software\VB and VBA Program Settings\Mseries\Mastering
	Microsoft Visual C++ 4
	
	  Database Name        =   "D:\mastvc.mdb"
	  List Path            =   "C:\MVC\lists"
	  Media Path           =   "D:\media\"
	
	HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\Uninstall\ 
	MasterVC4
	
	  DisplayName          =   "Microsoft Mastering Visual C++ 4"
	  UninstallString      =   "C:\MVC\setup\setup.exe"
	
	HKEY_LOCAL_MACHINE\Software\Microsoft\MVC\1.0\Location
	
	  Default              =   "C:\MVC\mastervc.exe"
	
	HKEY_LOCAL_MACHINE\Software\Microsoft\Shared Tools\cmdialog32_ocx\Clients
	
	  C:\MVC\MASTERVC.EXE  =   ""
	
	Entries Made Using InstallShared In Setup.stf
	---------------------------------------------
	
	HKEY_LOCAL_MACHINE\Software\Microsoft\Shared Tools\(Replace this text)\ 
	Clients
	
	  C:\MVC\MASTERVC.EXE =   ""
	
	NOTE: There are 21 registry entries made using the InstallShared command in the
	Setup.stf file. To create them replace the bold text above with the following
	entries:
	
	  cmdialog32_ocx          comctl32_ocx             DAO
	  dblist32_ocx            mci32_ocx                medv14n_ocx
	  medv141n_ocx            mfc40                    mvbk14n
	  mvfs14n                 mvix14n                  mvmc14n
	  mvmg14n                 mvsr14n                  mvtl14n
	  msvcrt40_dll            olepro32                 setupkit32
	  threed32_ocx            vbdb32                   vbr40032
	
	Entry Made By Acme Setup Using Header Information In Setup.stf
	--------------------------------------------------------------
	
	HKEY_LOCAL_MACHINE\Software\Microsoft\MS Setup (ACME)\Table Files
	
	  "Mastering Microsoft Visual C++ 4"@v95.12.11.01 (1033)
	= "C:\MVC\setup\setup.stf"
	
	Additional query words: 1.0 multi media multimedia multi-media mmtitles
	
	======================================================================
	Keywords          : kbmm kbsetup 
	Technology        : kbMSPressSearch kbWin95search kbZNotKeyword2 kbZNotKeyword3
	Version           : :1.0; WINDOWS:95
	
	=============================================================================
	
