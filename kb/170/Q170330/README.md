---
layout: page
title: "Q170330: HOTFIX /V Command Returns Errors"
permalink: /kb/170/Q170330/
---

## Q170330: HOTFIX /V Command Returns Errors

	Article: Q170330
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you type "hotfix.exe /v" at a command prompt to verify a successful
	installation of the Security Fix for Windows NT 4.0 with Service Pack 2, you
	receive the following error message:
	
	  Hotfix Version V1.4 Copyright (c) Microsoft Corporation.
	  \\MachineName is Windows NT version 4.0, Build 1381, Service Pack 2
	
	  Hotfix: Error retrieving Installed By.
	  Hotfix: Error retrieving Installed On.
	  Hotfix: Error retrieving Fix Description.
	  Hotfix: Error opening Archive file key File 1.
	  The system cannot find the file specified.
	
	  Verifying SecurityFix - Passed
	
	CAUSE
	=====
	
	The Security Fix (Secfix_i.exe) is designed to update files only and does not
	make modifications to the Windows NT registry.
	
	MORE INFORMATION
	================
	
	The Secfix_i.exe file expands automatically and copies files to the Temp folder.
	It then applies the fix to the computer. During the reboot after installation,
	it removes temporary files used during the installation and does not create the
	Hotfix folder in %Systemroot%\Hotfix\Hf000<x> (where <x> is an
	incremented number of all the hotfixes applied to the computer to date). The
	files are instead copied to the %Systemroot%\ $NtUninstallSecurityFix$ folder.
	
	NOTE: The previous method to install a hotfix differed from this method. The
	syntax outlined in the Readme.txt file for verifying a hotfix installation was
	to type "hotfix /install" in the folder containing the extracted files.
	
	REFERENCES
	==========
	
	For additional information about the Security Fix, see the following articles in
	the Microsoft Knowledge Base:
	
	  Q143474 Restricting Information Available to Anonymous Logon Users
	
	  Q143475 Windows NT System Key Permits Strong Encryption of the SAM
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
