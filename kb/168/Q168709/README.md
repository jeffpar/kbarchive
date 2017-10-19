---
layout: page
title: "Q168709: ConfirmHardware In an Unattend.txt File Appears Not to Work"
permalink: /kb/168/Q168709/
---

## Q168709: ConfirmHardware In an Unattend.txt File Appears Not to Work

	Article: Q168709
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During an unattended installation of Windows NT 4.0 with the ConfirmHardware
	option set at Yes, Windows NT 4.0 may not prompt you to confirm the hardware
	settings.
	
	For example:
	
	[Unattended]
	ConfirmHardware = yes
	NtUpgrade = no
	Win31Upgrade = no
	TargetPath = "\winnt"
	OverwriteOemFilesOnUpgrade = no
	OemPreinstall = yes
	FileSystem = LeaveAlone
	ExtendOEMPartition = 0
	NoWaitAfterTextmode = 1
	NoWaitAfterGuiMode = 1
	.
	.
	.
	
	RESOLUTION
	==========
	
	This problem will occur if the OemPreinstall = Yes. In order to use the
	ConfirmHardware option, the OemPreinstall entry must be set to no.
	
	NOTE: If you do set the OemPreinstall option at no, keep in mind that setup will
	no longer use the $OEM$ directory or Cmdlines.txt file.
	
	[Unattended]
	ConfirmHardware = yes
	NtUpgrade = no
	Win31Upgrade = no
	TargetPath = "\winnt"
	OverwriteOemFilesOnUpgrade = no
	OemPreinstall = no
	FileSystem = LeaveAlone
	ExtendOEMPartition = 0
	NoWaitAfterTextmode = 1
	NoWaitAfterGuiMode = 1
	.
	.
	.
	
	MORE INFORMATION
	================
	
	For additional information on Windows NT 4.0 deployment and unattended
	Installation, consult the Microsoft Knowledge Base at:
	
	  http://www.microsoft.com/kb
	
	and download the Windows NT 4.0 Deployment Guide.
	
	Also, you can find the Guide to Automating Windows NT Setup from:
	
	  http://www.microsoft.com/ntworkstation
	
	NOTE: The Deployment Guide is valid for both Windows NT Workstation and Windows
	NT Server.
	
	Additional query words: unattend
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	
	=============================================================================
	
