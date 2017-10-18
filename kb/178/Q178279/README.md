---
layout: page
title: "Q178279: Service Pack Update Prompts for Windows NT Workstation CD"
permalink: kb/178/Q178279/
---

## Q178279: Service Pack Update Prompts for Windows NT Workstation CD

	Article: Q178279
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When run from a compact disc, Update.exe from Service Pack 4 and 5 will prompt
	for the Windows NT Workstation compact disc. It will not install the service
	pack.
	
	CAUSE
	=====
	
	The Update.inf file that determines what media is recognized during the
	installation is defined in the following section:
	
	     [Source Media Descriptions]
	     1 = "Windows NT Workstation CD-ROM" , TAGFILE = cdrom.w
	
	The installation program is looking for the I386 directory or Cdrom.w directly
	off the root of the compact disc. If the I386 directory is renamed or it is
	created as a subdirectory on the drive, it will not recognize the compact disc
	as valid media and prompt for the Windows NT Workstation compact disc.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- Copy the I386 folder to the local hard disk or a network drive by using the
	  following steps:
	
	  To copy to the local hard drive, at a command prompt change to the CD-ROM
	  drive by typing the drive letter and pressing ENTER. Type the following
	  command, and then press ENTER:
	
	  E:>xcopy I386 c:\
	
	  To copy to a network drive, substitute the mapped drive letter for drive C in
	  the command listed above.
	
	- Copy the I386 directory to the local hard disk or network drive and run
	  Update.exe from this location.
	
	- Burn the CD-ROM so that the I386 directory is on the root of the drive or
	  place a file called Cdrom.w to the root of the drive.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q170261
	  TITLE : Cannot Reapply Service Pack 5 from November 1996 MSDN
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51
	Issue type        : kbprb
	
	=============================================================================
	
