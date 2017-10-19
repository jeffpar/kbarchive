---
layout: page
title: "Q164545: ErrMsg: The Directory Name Is Invalid"
permalink: /kb/164/Q164545/
---

## Q164545: ErrMsg: The Directory Name Is Invalid

	Article: Q164545
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Pipe I/O redirection command ("|" without the quotes) in a batch
	file or in an MS-DOS session from within Windows NT, the following error may
	occur:
	
	  The directory name is invalid.
	
	CAUSE
	=====
	
	The environment size value for the Comspec variable was explicitly set to a
	value greater than 2048.
	
	For example:
	
	Under System Variables, the value for Comspec appears as follows:
	
	  ComSpec %SystemRoot%\system32\cmd.exe /e:xxxx
	
	Where %SystemRoot% will be the drive and directory name where NT is installed,
	and xxxx is a value equal to or greater than 2048.
	
	WORKAROUND
	==========
	
	To work around this problem, perform one of the following:
	
	- Remove the /e:xxxx switch from the Comspec environment variable.
	
	  The ComSpec environment variable is dynamic for Windows. Removing the /e:
	  switch and its value may allow proper execution of the command.
	
	  -or-
	
	- Use the redirection symbol (">" (without the quotation marks)) to perform
	  the equivalent command.
	
	  Example:
	
	  DIR *.* | MORE <enter>
	
	  This command is equivalent to
	
	  DIR *.* > PIPE0 <enter>
	  MORE < PIPE0 <enter>
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51 and 4.0.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: Pipe redirection invalid
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	
