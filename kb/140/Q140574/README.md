---
layout: page
title: "Q140574: How to Set Global Environment Variables in Windows 95"
permalink: kb/140/Q140574/
---

## Q140574: How to Set Global Environment Variables in Windows 95

	Article: Q140574
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to set global environment variables within Windows
	95.
	
	MORE INFORMATION
	================
	
	The CD-ROM version of Windows 95 includes a tool called Winset.exe. This tool is
	designed to set environment variables in Microsoft Windows NT login scripts, but
	you can also use it to set global environment variables in Windows 95. The
	syntax for Winset.exe is the same as for the SET command.
	
	For example, to set a global TEMP environment variable within Windows 95, follow
	these steps:
	
	1. Copy the Winset.exe file from the Admin\Apptools\Envvars folder on the
	  Windows 95 CD-ROM to the Windows folder on your hard disk.
	
	2. Click the Start button, and then click Run.
	
	3. Type the following line in the Open box, and then click OK:
	
	  " winset temp=c:\temp " (without the quotation marks)
	
	Note that running the Winset.exe tool at a command prompt has no effect in the
	current instance of the command prompt. A new command prompt must be launched
	before the change is apparent.
	
	For additional information, please see the Readme.txt file in the
	Admin\Apptools\Envvars folder on the Windows 95 CD-ROM.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
