---
layout: page
title: "Q167900: Error Attempting to Save System Policy File"
permalink: kb/167/Q167900/
---

## Q167900: Error Attempting to Save System Policy File

	Article: Q167900
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork kbother
	Last Modified: 22-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use System Policy Editor and attempt to save a policy file on a
	computer running Windows NT, you may receive the following error message:
	
	  An error occurred writing the registry. The file cannot be saved.
	
	CAUSE
	=====
	
	To save a policy file using System Policy Editor on a computer running Windows
	NT, you must be a member of the administrators group. The reason for this
	limitation is that, even when you are only saving a .pol file to the local
	system, you need to access registry settings to complete the operation.
	
	
	MORE INFORMATION
	================
	
	The specified policy file will be saved to the system. The size of the file will
	be 0 KB. If you attempt to open this file you receive an error message similar
	to the following:
	
	  Unable to open c:\ntconfig.pol:
	  A required privilege is not held by the client.
	
	When you try the same procedure using an administrator-equivalent account you
	will receive an error message similar to the following:
	
	  Unable to open c:\ntconfig.pol:
	  The configuration registry database is corrupt.
	
	Additional query words: system policy editor save as rights poledit
	
	======================================================================
	Keywords          : kbenv kbnetwork kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
