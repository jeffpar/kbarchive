---
layout: page
title: "Q149306: Unable to Open Oemnadd3.inf During Update of Service Packs"
permalink: /kb/149/Q149306/
---

## Q149306: Unable to Open Oemnadd3.inf During Update of Service Packs

	Article: Q149306
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51
	Operating System(s): 
	Keyword(s): kberrmsg kbusage
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to run the self-extracting executable file for Windows NT 3.51
	Service Pack 4 and Service Pack 5, you may encounter a warning:
	
	  PKSFX: (W18) Warning! OEMNADAP.INF already exists. Overwrite (y/n)?
	
	If you continue, the extraction will complete but, subsequently, while running
	Update.exe from the source just extracted, you may receive the following error
	message:
	
	  Noncritical Error
	
	  An error has occurred.
	
	  Unable to open the file <drive>:\<directory>\NTAS\OEMNADD3.INF
	
	where <drive> and <directory> are the drive letter and directory name
	from which the Service Pack 4 and Service Pack 5 files were extracted.
	
	CAUSE
	=====
	
	The service packs were not properly extracted with the -d option. The -d option
	extracts subdirectories needed for the update to function correctly.
	
	RESOLUTION
	==========
	
	To extract the service packs, copy the self-extracting executable file to a
	directory on your hard disk drive and type either of the following commands:
	
	  <USERINPUT>sp4_351i.exe -d</USERINPUT>
	  <USERINPUT>sp5_351i.exe -d</USERINPUT>
	
	NOTE: This example applies to the x86 (Intel) Service Packs.
	
	After you correctly expand the service pack files, run Update.exe again to
	replace files that may have been missed during the first application.
	
	Additional query words: prodnt servpack SP4 bug fix
	======================================================================
	Keywords          : kberrmsg kbusage 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51
	
	=============================================================================
	
