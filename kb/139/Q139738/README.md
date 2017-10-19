---
layout: page
title: "Q139738: ROUTE Command Prints Help Text to STDERR"
permalink: /kb/139/Q139738/
---

## Q139738: ROUTE Command Prints Help Text to STDERR

	Article: Q139738
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The ROUTE command is a Windows NT console utility used to display or alter the
	TCP/IP routing table on a computer running Windows NT. If you issue the route
	command without any command line parameters, it displays information on how the
	command is used. The text of the message scrolls off of the screen so that you
	cannot see all of the information. If you try to pipe the output to the MORE
	command, the text still scrolls off of the screen.
	
	
	CAUSE
	=====
	
	The ROUTE command is writing the text of the help message to STDERR instead of
	STDOUT. Redirecting the output through a pipe to another command only works if
	the first program writes to STDOUT.
	
	
	WORKAROUND
	==========
	
	To work around this problem, increasing the size of the Screen Buffer Height in
	the MS-DOS Command Prompt window to 50 lines. This will allow you to see the
	text that has gone off-screen by scrolling up. If you change the Window Size
	Height to be 50 lines as well, then you will not have to scroll back at all.
	
	To change the window size attributes:
	
	1. Start a Command Prompt.
	
	2. From the System Menu, choose Properties.
	
	3. Select the Screen Size And Position tab.
	
	4. Change the Screen Buffer Height to 50 and then click OK.
	
	5. Choose "Apply properties to current window only" and click OK.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
