---
layout: page
title: "Q168891: Err Msg: Hotfix Internal Consistency Error: Invalid Tree Pointer"
permalink: /kb/168/Q168891/
---

## Q168891: Err Msg: Hotfix Internal Consistency Error: Invalid Tree Pointer

	Article: Q168891
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbtool
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install a hotfix for Windows NT version 4.0 using the Hotfix.exe tool,
	the following error message may occur:
	
	  Hotfix:The fix is already installed. Hotfix:Internal consistency error:
	  Invalid Tree pointer = <xxx>
	
	CAUSE
	=====
	
	This error message occurs when the hotfix has already been applied or a hotfix
	with an identical name has been installed. The Hotfix.exe tool cannot write the
	information in the registry because the key already exists.
	
	RESOLUTION
	==========
	
	Remove the previous installation before reapplying a hotfix. To remove the
	previous installation, follow these steps:
	
	1. Click the Start button, point to Programs, and then click Command Prompt.
	
	2. Change to the folder in which the hotfix you want to remove is located.
	
	3. Type either of the following lines:
	
	   - hotfix.exe /remove
	
	   - hotfix.exe /r
	
	
	MORE INFORMATION
	================
	
	The Hotfix.exe tool creates a Hotfix folder in the Winnt folder. In that folder,
	each hotfix has its own folder containing the replaced file or files.
	
	Hotfix.exe is a tool that makes the installation, tracking, and maintenance of
	hotfixes easier.
	
	The command syntax for Hotfix.exe is:
	
	Hotfix [ /H /R /V ] [<hotfix name>]
	Hotfix /I  [source dir]
	Hotfix [\\computername] [ /L /F ] [<hotfix name>]
	
	  /Full    or /F  Specifies a full listing. Default is brief.
	  /Help /H or /?  Displays this message.
	  /Install or /I  Installs the hotfix identified by the Hotfix.ini file
	                  in the <source dir>, or the current directory in the
	                  <source dir> was not specified. The fix is installed
	                  on the local computer.
	  /List    or /L  Displays a list of all installed hotfixes. If a
	                  hotfix name is specified, a detailed listing of the
	                  specific hotfix is displayed.
	  /Remove  or /R  Removes the specified hotfix from the local computer.
	  /Verify  or /V  Verifies that the specified hotfix is correctly
	                  installed on the local computer. If no hotfix name is
	                  specified, all installed hotfixes will be checked.
	  \\computername  The name of a remote Windows NT computer that will be
	                  the target of the command.  This can only be used with
	                  the /LIST command option.
	  <hotfix name>   The name of the hotfix.
	  <source dir>    Source directory containing the corrected files
	                  and the Hotfix.ini file for the hotfix.
	
	Additional query words: hot fix
	
	======================================================================
	Keywords          : kberrmsg kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
