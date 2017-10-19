---
layout: page
title: "Q304512: Err Msg: The Procedure Entry Point UnMapLS Could Not Be..."
permalink: /kb/304/Q304512/
---

## Q304512: Err Msg: The Procedure Entry Point UnMapLS Could Not Be...

	Article: Q304512
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you install Microsoft Management Console (MMC) version 1.2 on a Windows NT
	4.0-based computer, you may receive the following error message:
	
	  Setup.exe - Entry Point Not Found.
	
	  The procedure entry point UnMapLS could not be located in the dynamic link
	  library Kernel32.dll
	
	CAUSE
	=====
	
	This error message may occur if the Microsoft Windows 98 version of the
	Msvfw32.dll file (version 4.10.0.1998) is located in the %SystemRoot%\System32
	folder or in the path. The correct version of the Msvfw32.dll file for Windows
	NT 4.0 is version 4.0.1371.1.
	
	
	RESOLUTION
	==========
	
	To resolve this issue, expand the Msvfw32.dl_ file from the Windows NT 4.0
	CD-ROM to the hard disk. Use the following command, where <cdrom_drive> is
	the drive letter for the CD-ROM drive that contains the Windows NT 4.0 CD-ROM:
	
	  expand -r <cdrom_drive>:\i386\msvfw32.dl_ %systemroot%\system32
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
