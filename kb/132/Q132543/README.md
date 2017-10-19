---
layout: page
title: "Q132543: Dogs: Changes Made to Windows 95 Registry and .INI Files"
permalink: /kb/132/Q132543/
---

## Q132543: Dogs: Changes Made to Windows 95 Registry and .INI Files

	Article: Q132543
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.00
	Operating System(s): 
	Keyword(s): kbenv kbmm kbsetup
	Last Modified: 12-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Dogs for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Dogs makes additions and changes to the Windows 95/98 Registry and to
	Windows and MS-DOS .ini files. This article lists those changes.
	
	MORE INFORMATION
	================
	
	Additions to the Registry
	-------------------------
	
	NOTE: Indented lines signify that they are a continuation of the line above and
	are entered as one continuous line in the Windows 95/98 Registry.
	
	HKEY_LOCAL_MACHINE\SOFTWARE\Classes\AutoRun
	HKEY_LOCAL_MACHINE\SOFTWARE\Classes\AutoRun\3
	HKEY_LOCAL_MACHINE\SOFTWARE\Classes\AutoRun\3\Shell
	HKEY_LOCAL_MACHINE\SOFTWARE\Classes\AutoRun\3\Shell\AutoRun
	HKEY_LOCAL_MACHINE\SOFTWARE\Classes\AutoRun\3\Shell\AutoRun\command
	HKEY_LOCAL_MACHINE\SOFTWARE\Classes\AutoRun\3\insert
	HKEY_LOCAL_MACHINE\SOFTWARE\Classes\AutoRun\3\DefaultIcon
	
	HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Microsoft_Dogs
	HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Microsoft_Dogs\DefaultIcon
	
	HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall
	HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall
	    \Microsoft_Dogs
	
	HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\AudioCompressManager
	HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\AudioCompressManager
	    \DriverCache
	HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\AudioCompressManager
	    \DriverCache\msacm.imaadpcm
	HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\AudioCompressManager
	    \DriverCache\msacm.msadpcm
	HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\AudioCompressManager
	    \DriverCache\msacm.msgsm610
	HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\AudioCompressManager
	    \DriverCache\msacm.msg711
	HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\AudioCompressManager
	    \DriverCache\msacm.trspch
	
	HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\ReferenceTitles
	HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\ReferenceTitles\DogsUSA
	
	HKEY_USERS\.Default\Software\Microsoft\Mulitmedia\Video For Windows
	HKEY_USERS\.Default\Software\Microsoft\Mulitmedia\Video For Windows
	    \MCIAVI
	
	HKEY_USERS\.Default\Software\Microsoft\Windows\CurrentVersion\Explorer
	    \Streams\1
	HKEY_USERS\.Default\Software\Microsoft\Windows\CurrentVersion\Explorer
	    \Streams\2
	HKEY_USERS\.Default\Software\Microsoft\Windows\CurrentVersion\Explorer
	    \Streams\3
	
	Modified Keys in the Registry:
	
	HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion
	    \SharedDLLs
	HKEY_LOCAL_MACHINE\System\CurrentControlSet\control\SessionManager
	    \Known16DLLs
	HKEY_LOCAL_MACHINE\System\CurrentControlSet\control\MediaResources
	    \acm\msacm.msadpcm
	
	HKEY_USERS\.Default\Control Panel\Desktop
	
	HKEY_USERS\.Default\Software\Microsoft\Windows\CurrentVersion\Explorer
	HKEY_USERS\.Default\Software\Microsoft\Windows\CurrentVersion\Explorer
	    \RecentDocs
	HKEY_USERS\.Default\Software\Microsoft\Windows\CurrentVersion\Explorer
	    \StreamMRU
	HKEY_USERS\.Default\Software\Microsoft\Windows\CurrentVersion\Explorer
	    \Streams\0
	HKEY_USERS\.Default\Software\Microsoft\Windows\CurrentVersion\Explorer
	    \Streams\1
	HKEY_USERS\.Default\Software\Microsoft\Windows\CurrentVersion\Explorer
	    \Tips
	
	Additions and Changes to .Ini Files
	-----------------------------------
	
	Win.ini:
	
	[DrawDib]
	pnpdrvr.drv 640x480x8(0)=55,0,0,0
	
	System.ini:
	
	[boot]
	SCRNSAVE.EXE=DOGBOD16.SCR (or prints16.scr)
	
	Control.ini:
	
	[ScreenSaver.DogPaws]
	Trails=50
	
	Additional query words: kbhowto multi media multimedia multi-media mmtitles kbmm ini register inny
	
	======================================================================
	Keywords          : kbenv kbmm kbsetup 
	Technology        : kbHomeProdSearch kbDogs100
	Version           : 1.00
	Issue type        : kbhowto kbinfo
	
	=============================================================================
	
