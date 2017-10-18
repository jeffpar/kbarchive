---
layout: page
title: "Q151180: Configuring the BOOT.INI TIMEOUT value with CPS or UNATTEND"
permalink: kb/151/Q151180/
---

## Q151180: Configuring the BOOT.INI TIMEOUT value with CPS or UNATTEND

	Article: Q151180
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In some cases you may want to change the TIMEOUT value in the BOOT.INI from the
	default value of 30 seconds. There are two values that can be used that have a
	significant effect: 0 and -1. A value of 0 starts Windows NT immediately based
	on the DEFAULT variable in the BOOT.INI. A value of -1 disables the timer.
	
	From within the UI of Control Panel / System, the range that can be used is 0 to
	999 for the Operating System dialog box indicating the number of seconds. In an
	effort to set the value for all systems during setup you will have to modify the
	Initial.inf for normal installs of Windows NT or when using the /u unattended
	setup method. For Computer Profile Setup (CPS) you first have to upload the
	image using Uplodprf.exe from the Windows NT Resource Kit and modify the
	Profile.inf located in the SYSTEM32 directory of the image.
	
	The following is an example of a BOOT.INI for a multiboot system:
	
	[boot loader]
	timeout=30
	default=multi(0)disk(0)rdisk(0)partition(1)\WINNT35
	[operating systems]
	multi(0)disk(0)rdisk(0)partition(1)\WINNT35="NT 3.51"
	multi(0)disk(0)rdisk(0)partition(1)\WINNT="NT 3.51 [VGA mode]"
	/basevideo /sos
	C:\="MS-DOS"
	
	MORE INFORMATION
	================
	
	Modify the Initial.inf variable ChangeBootIniTimeout as described below. The
	default value is 30 seconds. You may use the following -1-999 as valid values.
	
	NOTE: This only works with unattended and attended installs of Windows NT.
	
	[Install-IsValidNetName]
	
	LibraryProcedure STATUS,$(!LIBHANDLE),NetNameCheck $(Name)
	
	exit
	
	[Install-SetBootIniTimeout]
	
	; The original value is 30 seconds
	; ChangeBootIniTimeout 30
	; The value has now been change to 90 seconds
	
	ChangeBootIniTimeout 90
	exit
	
	[Install-ScreenSaver]
	
	ReplaceIniKeyValue "Win.ini", DeskTop, ScreenSaveActive, 1
	
	ReplaceIniKeyValue "Win.ini", DeskTop, SCRNSAVE.EXE,
	$(STF_WINDOWSSYSPATH)\log
	
	To change the TIMEOUT value with CPS, the changes are done in the
	Profile.inf not the Initial.inf of the image. The default value is 30
	seconds. You may use the following -1-999 as valid values.
	
	Else
	   ReplaceIniKeyValue "Win.ini", DeskTop,  Wallpaper, "lanmannt.bmp"
	Endif
	exit
	[Install-SetBootIniTimeout]
	
	; The original value is 30 seconds
	; ChangeBootIniTimeout 30
	; The value has now been change to 90 seconds
	
	ChangeBootIniTimeout 90
	exit
	[SetAcls]
	   Debug-Output "PROFILE.INF: SetAcls Entered"
	   set Status = STATUS_FAILED
	   set Convert_C     = $($0)
	   set Convert_Winnt = $($1)
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
