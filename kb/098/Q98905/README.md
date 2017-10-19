---
layout: page
title: "Q98905: Anti-Virus for Windows Err Msg: Cannot Find CPAVDLG.DLL"
permalink: /kb/098/Q98905/
---

## Q98905: Anti-Virus for Windows Err Msg: Cannot Find CPAVDLG.DLL

	Article: Q98905
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you download Anti-Virus signature updates from the Central Point Software
	bulletin board service (BBS) and follow the installation instructions, you may
	receive the following error message when you run Microsoft Anti-Virus for
	Windows:
	
	  File Error: Cannot find CPAVDLG.DLL
	
	RESOLUTION
	==========
	
	To correct this error, copy and rename the file using the MS-DOS COPY command by
	typing the following at the MS-DOS command prompt and then pressing ENTER:
	
	  copy c:\dos\mwavdlg.dll c:\dos\cpavdlg.dll
	
	
	Additional query words: MWAV 6.00 BBS
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	
