---
layout: page
title: "Q106212: Breaking Out of GREP May Return You to Command Prompt"
permalink: kb/106/Q106212/
---

## Q106212: Breaking Out of GREP May Return You to Command Prompt

	Article: Q106212
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.1,3.5
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 15-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Windows NT Resource Kit, versions 3.1, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run GREP--"Global Regular Expression Print," a POSIX-based tool included
	in the Windows NT Resource Kit--using the command line parameter "/" (or the
	more commonly attempted "/?" for help on the GREP command), the cursor is placed
	on the next screen line without a prompt (GREP is waiting for input from you).
	If you then attempt breaking out of the GREP command by using CTRL+C, you are
	returned to the command prompt, but when you attempt to close the command prompt
	window (such as when you type 'exit' and then press ENTER at the command
	prompt), the command prompt window does not close and you are unable to close
	the window using any other means (such as by choosing End Task from the Task
	List, choosing Terminate from the Settings menu in the Control Box, or choosing
	Logoff or Shutdown).
	
	Windows NT is unable to log off or shut down because this window is open,
	resulting in the need to manually reset the computer if you want to log off or
	shut down.
	
	RESOLUTION
	==========
	
	For help on the GREP command, use the command line parameter -H instead of /?.
	Also, when you attempt to break out of GREP, use CTRL+Z, instead of CTRL + C.
	This allows GREP to close normally and will not result in the application
	locking up.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in GREP.EXE from the Windows NT
	Resource Kit. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbMSPressSearch kbZNotKeyword6 kbZNotKeyword2
	Version           : :3.1,3.5
	
	=============================================================================
	
