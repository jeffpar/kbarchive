---
layout: page
title: "Q85190: WINMATIC.SHH File Is Created by SETUP /H"
permalink: kb/085/Q85190/
---

## Q85190: WINMATIC.SHH File Is Created by SETUP /H

	Article: Q85190
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using Microsoft Windows SETUP /H with a SETUP.SHH file (or *.SHH file), a
	file called WINMATIC.SHH is created in the user's directory. This file is a copy
	of the SETUP.SHH file that was used during the installation.
	
	To confirm what options were used to set up Windows, you can examine the entries
	in this file. This file is not necessary for Windows to run, so it can be
	deleted.
	
	MORE INFORMATION
	================
	
	The Windows Automated Setup option (also called Batch Mode Setup), allows you to
	write a script file for Setup (an example called SETUP.SHH comes with Windows
	3.1), which automates the Setup and requires little user input. You can
	configure Setup to automatically install certain printers, applications,
	hardware options, and other options. The following is an example of the command
	line:
	
	     SETUP /H X:\NETWIN\SETUP.SHH /N
	
	Note: SETUP.SHH is an example; you can use any acceptable filename with an
	extension of .SHH.
	
	For more information on this feature, refer to pages 75-82 of the "Microsoft
	Windows Resource Kit" guide for operating system version 3.1.
	
	Additional query words: 3.10 3.1 3.11 network novell
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
