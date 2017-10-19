---
layout: page
title: "Q134798: Screen Saver Causes STOP 0XC000021A Under Windows NT"
permalink: /kb/134/Q134798/
---

## Q134798: Screen Saver Causes STOP 0XC000021A Under Windows NT

	Article: Q134798
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a screen saver is configured to start automatically for any user logged in
	that has an environment of approximately 2000 bytes or larger, Winlogon
	terminates with an access violation of 0xC0000005. Windows NT displays STOP
	0xC000021A.
	
	CAUSE
	=====
	
	A invalid pointer to the environment of the process being created cause the
	Winlogon access violation.
	
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Do not run a screen saver to run automatically.
	
	  -or-
	
	- Reduce the size of the environment to approximately 2000 bytes or less.
	
	To reduce the environment size, either shorten the path statements or reduce the
	number of environment variables (SET commands) used. The path statements and
	environment variables can be set in Control Panel System and the AUTOEXEC.BAT
	file.
	
	To run a screen saver manually:
	
	1. Run Control Panel.
	
	2. Click Desktop.
	
	3. Select the screen saver and then click Test.
	
	The screen saver will continue to run until you move the mouse or press any
	keyboard key.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: 3.51 trap blue screen screensaver
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	
	=============================================================================
	
