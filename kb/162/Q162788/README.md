---
layout: page
title: "Q162788: RDISK Error: &quot;One Or More Configuration Files Were Not Found&quot;"
permalink: /kb/162/Q162788/
---

## Q162788: RDISK Error: &quot;One Or More Configuration Files Were Not Found&quot;

	Article: Q162788
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to create an emergency repair disk (ERD) using the Rdisk.exe
	utility, you may get the following error message:
	
	  Repair disk utility could not copy all files to the Emergency Repair Disk.
	  One or more configuration files were not found.
	
	CAUSE
	=====
	
	The hidden file Setup.log may be missing from the %SystemRoot%\Repair
	subdirectory on the computer's hard drive.
	
	RESOLUTION
	==========
	
	Setup.log must be replaced by copying it from a very recent tape backup. Using
	Rdisk.exe to "Update Repair Information" does not replace this hidden file if it
	has been deleted.
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
