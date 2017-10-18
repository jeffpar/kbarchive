---
layout: page
title: "Q162664: Spool Directory Not Found During Upgrade of WinNT 3.51 to 4.0"
permalink: kb/162/Q162664/
---

## Q162664: Spool Directory Not Found During Upgrade of WinNT 3.51 to 4.0

	Article: Q162664
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the print spooler has been moved to another hard drive by editing the
	registry and the system is upgraded from Windows NT 3.5X to Windows NT 4.0, the
	spooler files on the remote drive will not get updated. Subsequently, you may
	receive following error during startup of the computer:
	
	  The procedure entry point loaddriverfiletoconvertdevmode could not be located
	  in the dynamic link library Spoolss.dll.
	
	In addition to the above error, you may experience that a number of services will
	fail to start.
	
	CAUSE
	=====
	
	During an upgrade of Windows NT 3.51 to Windows NT 4.0, the spool directory will
	be created in its default location under %SystemRoot%\System32\Spool. This
	directory will contain all the updated Windows NT 4.0 code and print drivers.
	However, the registry will continue to point to the spool directory on the
	remote drive. Because the remote spool directory still contains code and drivers
	for Windows NT 3.51, the errors annotated above will be reported.
	
	For information about procedures to move the default spool directory to a
	different hard drive by editing the Windows NT registry, please see the
	following Microsoft Knowledge Base article:
	
	  ARTICLE-ID: Q123747
	  TITLE : Moving the Windows NT Default Paging and Spool File
	
	WORKAROUND
	==========
	
	Prior to the upgrade, use the Microsoft Knowledge Base article above to edit the
	Windows NT registry, pointing the spool directory back to the system drive, that
	is, the %SystemRoot%\System32\Spool directory.
	
	If the upgrade has already occurred, copy the contents of the
	%SystemRoot%\System32\Spool directory including all subdirectories to the remote
	spool directory.
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	
	=============================================================================
	
