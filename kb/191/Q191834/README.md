---
layout: page
title: "Q191834: Network Problems That Occur When Logging Off May Corrupt Profile"
permalink: /kb/191/Q191834/
---

## Q191834: Network Problems That Occur When Logging Off May Corrupt Profile

	Article: Q191834
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 SP3 
	- Microsoft Windows NT Server version 4.0 SP3 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	User profiles that are stored on the server (roaming user profiles) may become
	corrupted if contact with the remote server is terminated during the copy
	process. This may happen in, but is not limited to, the following scenarios:
	
	- The user prematurely turns the workstation off.
	
	- The network connection from the workstation to the server is severed, for
	  example, the cable is disconnected from the network card.
	
	CAUSE
	=====
	
	This problem occurs when Ntuser.dat contains only part of the profile
	information.
	
	MORE INFORMATION
	================
	
	It should be noted that this hotfix does not resolve the underlying cause of the
	profile corruption. It merely prevents the user's NTUSER.DAT on the server from
	being overwritten by the uploaded version, until the upload completes
	successfully. If the profile does fail to copy successfully, then one of two
	things will occur, depending on the user.
	
	If the User Does Not Roam from Computer to Computer
	---------------------------------------------------
	
	The user will be prompted at the next logon to select between the local profile
	and the remote profile. Because the upload process failed at the last logoff,
	the date/time stamp on the remote Ntuser.dat file is older than the date/time
	stamp on the local Ntuser.dat file. This causes Windows NT to prompt the user to
	prevent a loss of data on the local workstation. If the user selects the remote
	profile then any changes made to the user profile in the last session -- colors,
	wallpaper, or other settings -- will be lost.
	
	If the User Does Roam from Computer to Computer
	-----------------------------------------------
	
	Any changes made to the user profile in the last session -- colors, wallpaper, or
	other settings -- session will be lost.
	
	This does not affect any files saved to the Desktop, Personal folder, or other
	profile folders.
	
	RESOLUTION
	==========
	
	A change has been made that causes profile information to be stored in a
	temporary file (Ntuser.dat.tmp) and then renamed to Ntuser.dat when logging
	off.
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	Additional query words: corrupt user domain
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp3 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400sp3 kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
