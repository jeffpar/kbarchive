---
layout: page
title: "Q230205: Out of Environment Space Error Message in MS-DOS Programs"
permalink: kb/230/Q230205/
---

## Q230205: Out of Environment Space Error Message in MS-DOS Programs

	Article: Q230205
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 1,2,2.1,2.5
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 18-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 1, 2, 2.1, 2.5 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to run an MS-DOS program in Windows, you may receive the
	following error message:
	
	  Out of environment space.
	
	CAUSE
	=====
	
	This issue can occur if you do not have enough memory in the MS-DOS environment
	to set an environment variable.
	
	RESOLUTION
	==========
	
	To resolve this issue, increase the default environment space available for
	MS-DOS programs. To do this, use one of the following methods.
	
	Modify the Environment for All MS-DOS Programs
	----------------------------------------------
	
	To increase the default environment space for all MS-DOS programs running in
	Windows, edit the Shell command in the Config.sys file. To do this, follow these
	steps:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "sysedit" (without the quotation marks), and then click
	  OK.
	
	3. Click the Config.sys window.
	
	4. At the beginning of the Shell= line, type "REM" (without the quotation
	  marks), and then press the SPACEBAR.
	
	  If the Shell= line does not exist, proceed to the next step.
	
	5. Press the HOME key.
	
	6. Type the following line to create a new Shell= line, and then press ENTER:
	
	  SHELL=C:\COMMAND.COM /E:4096 /P
	
	7. On the File menu, click Save.
	
	8. On the File menu, click Exit.
	
	9. Restart the computer.
	
	Modify the Environment for a Specific MS-DOS Program
	----------------------------------------------------
	
	To increase the default environment space for a specific MS-DOS program, follow
	these steps:
	
	1. Right-click the MS-DOS program icon, and then click Properties.
	
	2. Click the Memory tab.
	
	3. In the Initial Environment box, type the number of kilobytes (KB) that the
	  program requires, and then click OK.
	
	  NOTE: The maximum amount of memory that you can allocate for an MS-DOS program
	  is 4096 KB.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbWin95search kbWin98search kbOPKSearch kbZNotKeyword3 kbWin98 kbWin95OPKOSR2 kbWin95OPKOSR25 kbWin95OPKOSR1 kbWin95OPKOSR210
	Version           : :1,2,2.1,2.5
	Issue type        : kbprb
	
	=============================================================================
	
