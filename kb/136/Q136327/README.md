---
layout: page
title: "Q136327: How to Enable Autologon During an Automated Setup"
permalink: kb/136/Q136327/
---

## Q136327: How to Enable Autologon During an Automated Setup

	Article: Q136327
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes how to enable autologon for an automated Windows NT
	Setup. Page 97 of the "Windows NT 3.5 Resource Kit, Volume 1" describes a method
	to add registry entries by modifying Txtsetup.sif. However, page 96 notes that
	during a fresh installation of Windows NT, the registry hives are copied in
	their entirety to the new registry. Only during an upgrade of Windows NT are
	portions of the template hives copied to the existing registry as described on
	page 97 in the section "Using the TXTSETUP.SIF File to Update the Registry."
	
	MORE INFORMATION
	================
	
	The following entries in the registry for winlogon need to be set to enable
	autologon:
	
	DefaultUserName
	DefaultPassword
	AutoAdminlogon
	
	Unattended Setup:
	-----------------
	
	The INITIAL.INF file needs to be modified as follows to set these values:
	
	NOTE: A network or local hard disk installation is required because the
	INITIAL.INF file can not be modified and saved to the compact disc.
	
	1. Expand INITIAL.IN_ to INITIAL.INF
	
	2. Rename INITIAL.IN_ INITIAL.OR_
	
	3. Change INITIAL.INF to read as follows:
	
	  [Install-Win-Ini-Alter-1]
	  ReplaceIniKeyValue "Win.ini", Winlogon, DefaultUserName, administrator
	  ReplaceIniKeyValue "Win.ini", Winlogon, DefaultPassword, ""
	  ReplaceIniKeyValue "Win.ini", Winlogon, AutoAdminLogon,"1"
	
	Computer Profile Setup:
	-----------------------
	
	If you have not run Uplodprf.exe yet, you can modify ~Profile.inf in the CPS
	directory. If you have already uploaded your profile, you should modify
	%Systemroot\System32\Profil.inf on the distribution system.
	
	[Install-Win-Ini-Alter]
	;ReplaceIniKeyValue "Win.ini", Winlogon, DefaultUserName, $(!STF_USERNAME)
	
	ReplaceIniKeyValue "Win.ini", Winlogon, DefaultUserName, "Administrator"
	ReplaceIniKeyValue "Win.ini", Winlogon, DefaultPassword, ""
	ReplaceIniKeyValue "Win.ini", Winlogon, AutoAdminLogon,"1"
	
	Ifstr(i) $(!STF_PRODUCT) == "WINNT"
	
	  ReplaceIniKeyValue "Win.ini", DeskTop, Wallpaper, "winnt.bmp"
	
	Else
	
	  ReplaceIniKeyValue "Win.ini", DeskTop, Wallpaper, "lanmannt.bmp"
	
	Endif
	exit
	
	NOTE: For more information on Unattended and Computer Profile Setup, read Volume
	1, Chapter 3 of the Windows NT Resource Kit.
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q157361
	  TITLE : How to Automatically Log On After an Unattended Setup
	
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5 3.51
	
	=============================================================================
	
