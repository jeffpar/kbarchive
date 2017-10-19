---
layout: page
title: "Q172877: Shortcuts Missing from Start Menu After Windows Setup"
permalink: /kb/172/Q172877/
---

## Q172877: Shortcuts Missing from Start Menu After Windows Setup

	Article: Q172877
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbsetup kbtool win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Windows 95, various shortcuts (possibly including Calculator,
	Character Map, Disk Defragmenter, DriveSpace, MS-DOS Prompt, Notepad, Phone
	Dialer, and Windows Explorer) may be missing from the Start menu. Removing and
	reinstalling these components does not create the shortcuts, nor does running
	the group converter tool (GRPCONV.EXE /S).
	
	CAUSE
	=====
	
	When you ran Setup, the PATH environment variable did not include the Windows
	folder, or the PATH environment variable was changed after the initial reboot
	during Setup. A likely cause of this issue is a network login script that sets
	the PATH variable. To check this, type "set" (without the quotation marks) at a
	command prompt. This command lists the current environment variables, including
	the PATH setting.
	
	RESOLUTION
	==========
	
	Correct the "SET PATH=" statement in the local Autoexec.bat file and/or the
	network login script as necessary. Make sure that the "SET PATH=" statement
	includes the Windows folder (for example, C:\Windows). Then, run Setup again.
	When you are prompted, choose the "Restore Windows files that are changed or
	corrupted" option.
	
	Additional query words: logon
	
	======================================================================
	Keywords          : kbsetup kbtool win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
