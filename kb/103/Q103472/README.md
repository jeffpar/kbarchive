---
layout: page
title: "Q103472: No Network Option Doesn't Stop Mail and Schedule+ Installation"
permalink: /kb/103/Q103472/
---

## Q103472: No Network Option Doesn't Stop Mail and Schedule+ Installation

	Article: Q103472
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	-------------------------------------------------------------------------------
	
	In Windows NT, selecting the No Network option during the installation
	will not prevent Mail and Schedule+ from being installed. Unlike
	Windows for Workgroups, there is no option to remove Mail or Schedule+
	with the Add/Remove Windows Components option of Windows NT Setup.
	
	To remove Mail and Schedule+ from a Windows NT installation, delete
	the corresponding icons from the Main group and then delete the
	following files from the WINNT\SYSTEM32 subdirectory:
	
	ab32.dll (M,S)
	
	demil32.dll (M,S)
	
	frame32.dll (M,S)
	
	impexp32.dll (M)
	
	mailnt32ap.dll (M,S)
	
	mailsp32.exe (M,S)
	
	mapisrv.exe (M)
	
	mapixx.dll (M)
	
	msmail32.exe (M)
	
	msrmnd32.exe (S)
	
	mspell32.dll (M)
	
	msschd32.dll (S)
	
	mssfs32.dll (M,S)
	
	pabnsp32.dll (M,S)
	
	schdpl32.exe (S)
	
	schmsg32.dll (M)
	
	sendfl32.dll (M)
	
	store32.dll (M,S)
	
	trnsch32.dll (S)
	
	vfornt32ap.dll (M)
	
	wgpomg32.dll (M)
	
	NOTE: If Mail and Schedule+ are removed, the only method to reinstall
	them is to re-expand the above files into the WINNT\SYSTEM32
	directory and recreate the icons.
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.1.
	We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: wfw wfwg prodnt
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	
