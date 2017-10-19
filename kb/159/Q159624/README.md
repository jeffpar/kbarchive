---
layout: page
title: "Q159624: PRB: Incorrect Arguments. Consult the Windows NT..."
permalink: /kb/159/Q159624/
---

## Q159624: PRB: Incorrect Arguments. Consult the Windows NT...

	Article: Q159624
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup kbOPK kbSBKkbfaq
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Sysdiff.exe tool, you may receive one of the following error
	messages:
	
	  Incorrect arguments. Consult the Windows NT OEM Preinstall Kit documentation
	  for a description of the arguments to this application.
	
	-or-
	
	  Unable to load Sysdiff.inf C:\RESKET\Sysdiff.inf. This file is required in
	  SNAP and DIFF modes. Consult the Windows NT OEM Preinstall Kit documentation
	  for more information.
	
	CAUSE
	=====
	
	This behavior can occur if one of the following conditions exists:
	
	- You run the Sysdiff.exe tool included with the Windows NT 4.0 Resource Kit.
	  The Windows NT 4.0 Resource Kit does not include the Sysdiff.inf file, which
	  is required for the Sysdiff.exe tool to work properly.
	
	- You run the Sysdiff.exe command without required switches.
	
	RESOLUTION
	==========
	
	To resolve this issue, use one or more of the following methods:
	
	- Use the Sysdiff.exe tool located in the Support\Deptools\<platform>
	  folder on your Windows NT 4.0 CD-ROM.
	
	- Copy the Sysdiff.inf file from your Windows NT 4.0 CD-ROM to the folder on
	  your hard disk from which you run the Sysdiff.exe tool.
	
	- Add required switches to the Sysdiff.exe command line.
	
	
	MORE INFORMATION
	================
	
	The prototype form of the Sysdiff.exe command line is as follows:
	
	SYSDIFF.EXE [/snap | /diff | /apply | /dump | /inf]
	[/log:log_file][switches]
	
	To run the Sysdiff.exe tool successfully, you must specify one of the following
	switches on the Sysdiff.exe command line:
	
	- /snap
	
	- /diff
	
	- /apply
	
	- /dump
	
	- /inf
	
	Additional query words: unattended snap diff SBK Preinstall OPK
	
	======================================================================
	Keywords          : kbsetup kbOPK kbSBK kbfaq
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
