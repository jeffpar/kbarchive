---
layout: page
title: "Q151192: Configuring the Default Wallpaper with CPS"
permalink: /kb/151/Q151192/
---

## Q151192: Configuring the Default Wallpaper with CPS

	Article: Q151192
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article tells you how to change the default wallpaper to a company logo or
	other Bitmap graphic (BMP). Windows NT Workstation uses WINNT.BMP or
	WINNT256.BMP as the default wallpaper. Windows NT Server uses LANMAN.BMP or
	LANMA256.BMP as the default wallpaper. The number of colors used by the video
	adapter determines which BMP is used. Systems set to 16 colors use WINNT.BMP for
	Workstation and LANMAN.BMP for Server. Systems set to 256 colors use
	WINNT256.BMP for Windows NT Workstation and LANMA256.BMP for Windows NT Server.
	
	MORE INFORMATION
	================
	
	Do the modifications required for Computer Profile Setup (CPS) in the
	%SystemRoot%\System32\Profile.inf of the image created with Uplodprf.exe. The
	BMP file you use must be in the %SystemRoot% (WINNT35) directory when you run
	Uplodprf.exe.
	
	Original PROFILE.INF:
	
	Ifstr(i) $(!STF_PRODUCT) == "WINNT"
	   ReplaceIniKeyValue "Win.ini", DeskTop,  Wallpaper, "winnt.bmp "
	Else
	   ReplaceIniKeyValue "Win.ini", DeskTop,  Wallpaper, "winnt256.bmp "
	Endif
	
	Example:
	
	Ifstr(i) $(!STF_PRODUCT) == "WINNT"
	   ReplaceIniKeyValue "Win.ini", DeskTop,  Wallpaper, "BMP16.bmp"
	Else
	   ReplaceIniKeyValue "Win.ini", DeskTop,  Wallpaper, "BMP256.bmp"
	Endif
	
	You can specify the same BMP filename for both lines if desired.
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
