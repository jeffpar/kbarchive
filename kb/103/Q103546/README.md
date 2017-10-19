---
layout: page
title: "Q103546: Interactive Boot Displays AUTOEXEC.BAT Messages Twice"
permalink: /kb/103/Q103546/
---

## Q103546: Interactive Boot Displays AUTOEXEC.BAT Messages Twice

	Article: Q103546
	Product(s): Microsoft Disk Operating System
	Version(s): 6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	You can use the /Y parameter with MS-DOS 6.2 COMMAND.COM to interactively
	process any batch file. (The /Y parameter is ON by default for AUTOEXEC.BAT
	when performing an interactive boot). The following list includes some of
	the behaviors that using the /Y parameter produces:
	
	- If you have ECHO ON, each line is displayed twice. To avoid this, add ECHO
	  OFF as the first line of your AUTOEXEC.BAT file and press Y when you are
	  prompted to process that line.
	
	- When a batch file line is displayed for prompting, replaceable parameters
	  (%1, %2, and so forth) and environment variables are already replaced with
	  their values. This can be useful for debugging batch files.
	
	- You can easily prompt for user input without using the CHOICE command. For
	  example, if a batch file includes "command /y /c scandisk /all," you are
	  prompted with "scandisk /all (Y/N)?"
	
	Additional query words: 6.20 tcpip netbt
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : :6.2,6.22
	
	=============================================================================
	
