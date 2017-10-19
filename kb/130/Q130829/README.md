---
layout: page
title: "Q130829: &quot;Bad Command or Filename&quot; Starting Program with DOSSHELL"
permalink: /kb/130/Q130829/
---

## Q130829: &quot;Bad Command or Filename&quot; Starting Program with DOSSHELL

	Article: Q130829
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run DOSSHELL in a Windows 95 MS-DOS command prompt session, you receive
	the following error message when you try to start a program from DOSSHELL:
	
	  Bad Command or Filename
	
	CAUSE
	=====
	
	The version of COMMAND.COM included with Windows 95 is incompatible with
	DOSSHELL.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	This problem occurs because DOSSHELL calls the executable program file as a 9.3
	filename, which COMMAND.COM truncates to an 8.3 filename and processes. The
	version of COMMAND.COM that is included with Windows 95 cannot perform this
	particular truncation.
	
	This problem does not occur if you have configured your computer so that you can
	boot a previous operating system and you boot your computer to this previous
	operating system and run DOSSHELL.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
