---
layout: page
title: "Q105250: Cannot use UNC Pathname for Working Directory in Windows NT"
permalink: kb/105/Q105250/
---

## Q105250: Cannot use UNC Pathname for Working Directory in Windows NT

	Article: Q105250
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Windows NT, you cannot specify a UNC (universal naming convention) pathname
	for the working directory of an icon for a 16-bit application. If you set a UNC
	pathname as a working directory, you will not receive an error message
	indicating that the working directory is invalid, but the directory specified
	will not be the working directory.
	
	WORKAROUND
	==========
	
	To work around this limitation, use the NT 3.x File Manager or NT 4.0 Network
	Neighborhood icon to make a full connection to the desired share and specify
	that drive as the working directory.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Using NT 3.x File Manager or NT 4.0 Explorer, share a directory either on the
	  local computer or a remote computer.
	
	2. In NT 3.x Program Manager, create an icon with the following properties:
	
	  Command Line: WRITE.EXE Working Directory: \\computername\sharename
	
	  - or -
	
	3. On the NT 4.0 desktop, create a shortcut with the following properties:
	
	  Target: %WINDIR%\WINHELP.EXE Start in: \\computername\sharename
	
	4. Start the application using the new icon and choose Open from the File menu.
	
	In the Directories list of the Open dialog box, you will not see the path to the
	working directory specified in the Program Item Properties using the UNC
	pathname, even though you did not receive any error messages.
	
	Additional query words: prodnt 3.x 3.5x 16bit
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5 3.51 4.0
	
	=============================================================================
	
