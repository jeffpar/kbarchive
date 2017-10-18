---
layout: page
title: "Q169037: Win31Upgrade Switch May Not Work Properly At Unattend Setup"
permalink: kb/169/Q169037/
---

## Q169037: Win31Upgrade Switch May Not Work Properly At Unattend Setup

	Article: Q169037
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During an unattended installation of Windows NT 4.0 with the Win31upgrade=
	option set to 1, Windows NT 4.0 may still prompt you with the following dialog
	box:
	
	  Setup has found a previous version of Microsoft Windows in the directory you
	  have chosen for installing Microsoft Windows NT. Setup recommends installing
	  into this directory since Microsoft Windows NT can interoperate with the
	  previous version of Windows.
	
	- To install Windows NT in the same directory, press ENTER.
	
	- To select a different directory for Windows NT, press ESC.
	
	This dialog box should only appear if the Win31upgrade= entry is set to 0.
	
	CAUSE
	=====
	
	This problem can occur if the path statement in the Autoexec.bat does not
	contain an entry for the directory that is being upgraded.
	
	RESOLUTION
	==========
	
	Make sure the directory that is being upgraded is included in the path statement
	in the Autoexec.bat file of the boot drive.
	
	MORE INFORMATION
	================
	
	During an unattended installation with the Win31upgrade=1 switch set, setup
	parses the Autoexec.bat file for the path environment variable. This parsing
	occurs after the first restart and if the path entry does not contain a valid
	path to the Windows directory that is being upgraded, the above condition
	occurs.
	
	For additional information on Windows NT 4.0 deployment/unattended installation
	consult the Microsoft Knowledge Base at http://www.microsoft.com/kb and download
	the Windows NT 4.0 Deployment Guide from
	http://www.microsoft.com/ntworkstation.
	
	NOTE: The Deployment Guide is valid for both Windows NT Workstation and Windows
	NT Server.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
