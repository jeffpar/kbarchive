---
layout: page
title: "Q173313: Ntbackup Can Read Tapes Created by Third-Party Backup Programs"
permalink: kb/173/Q173313/
---

## Q173313: Ntbackup Can Read Tapes Created by Third-Party Backup Programs

	Article: Q173313
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In some cases, Ntbackup.exe can read tapes created by third-party tape backup
	utilities. This can be useful in situations in which the third-party backup
	software is not readily available for some reason, such as when a computer has
	been rebuilt. For Ntbackup.exe to read the tape successfully, the software used
	to create the tape must support the Microsoft tape format (MTF), and it must not
	compress the data.
	
	MORE INFORMATION
	================
	
	It is possible that Ntbackup.exe may not be able to read a catalog of files
	written on a tape by third-party backup software, because the on-tape catalog
	(OTC) is not present or is not compatible with Ntbackup.exe. In this case, the
	tape will not be recognized as part of a set. To resolve this part of the
	problem, Ntbackup.exe needs to be started with the /missingtape command line
	switch, using the steps below:
	
	1. Click Start, and then click Run.
	
	2. Type the following command and then press ENTER:
	
	  Ntbackup /missingtape
	
	The /missingtape switch allows the tape to be read as an individual tape (as
	opposed to being part of a set), which will allow Ntbackup.exe to catalog the
	tape. After the tape is catalogued, files on it will become accessible.
	
	In addition, tapes created in one manufacturer's tape drive may not be compatible
	with another manufacturer's tape drive. If this is the case, you will not be
	able to continue without the third-party software or an identical tape drive.
	
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	ARTICLE-ID: Q162972
	TITLE : Troubleshooting Tape Backup Issues in Windows NT 4.0
	
	Additional query words: arcada backupexec exec seagate
	======================================================================
	Keywords          : kb3rdparty kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
