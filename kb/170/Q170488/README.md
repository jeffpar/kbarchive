---
layout: page
title: "Q170488: List of SCSI Adapters Not Found When Adding New SCSI Adapter"
permalink: /kb/170/Q170488/
---

## Q170488: List of SCSI Adapters Not Found When Adding New SCSI Adapter

{% raw %}

	Article: Q170488
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	- When you use the Windows NT 4.0 SCSI Adapters utility in Control Panel to add
	  a new SCSI adapter, the list of SCSI adapters is not displayed and no error
	  messages appear.
	
	  -or-
	
	- When you use the Windows NT 3.51 Add/Remove SCSI Adapter feature of Windows
	  NT Setup, you may receive the following error message:
	
	  Setup was unable to locate or load an INF file
	  Failed to initialize hardware options
	  Badly formed setup Script Command 'goto end'
	
	CAUSE
	=====
	
	These problems may occur if the file Scsi.inf is missing, corrupted, or
	overwritten by a third-party Scsi.inf file.
	
	RESOLUTION
	==========
	
	To resolve this problem, use the Windows NT Expand utility to expand the
	Scsi.inf file from the Windows NT CD-ROM to the proper folder. For Windows NT
	4.0, place the file in the %SystemRoot%\Inf folder. For Windows NT 3.51, place
	the file in the %SystemRoot%\System32 folder.
	
	For example:
	
	Expand d:\i386\SCSI.IN_ c:\winnt40\inf\Scsi.inf
	
	The list of SCSI devices is now available.
	
	MORE INFORMATION
	================
	
	Additionally, a third-party SCSI driver can be installed from the disk or CD-ROM
	provided with the adapter, through the Have Disk option.
	
	Additional query words: loading driver empty
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	
	=============================================================================
	

{% endraw %}
