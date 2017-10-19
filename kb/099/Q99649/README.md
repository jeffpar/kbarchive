---
layout: page
title: "Q99649: Amstrad Notebook Computer Hangs at &quot;Starting MS-DOS...&quot; Prompt"
permalink: /kb/099/Q99649/
---

## Q99649: Amstrad Notebook Computer Hangs at &quot;Starting MS-DOS...&quot; Prompt

	Article: Q99649
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands
	and filenames.
	
	SYMPTOMS
	========
	
	Your Amstrad ANB 386 PC notebook computer may appear to stop responding (hang)
	at the "Starting MS-DOS..." prompt, but pressing a key allows the machine to
	continue booting.
	
	WORKAROUND
	==========
	
	You can work around this problem by using MS-DOS Editor (EDIT.COM) to add
	SWITCHES =/F to your CONFIG.SYS file.
	
	If you are using MS-DOS 6.2 and DoubleSpace, you also need to add SWITCHES = /F
	to your DBLSPACE.INI file. To do this, type the following at the MS-DOS command
	prompt and then press ENTER:
	
	  " DBLSPACE /SWITCHES=F" (without the quotation marks)
	
	MORE INFORMATION
	================
	
	SWITCHES=/F disables the two-second delay after the "Starting MS-DOS..." message
	appears during startup.
	
	
	Additional query words: 6.00 6.20 machine
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	
