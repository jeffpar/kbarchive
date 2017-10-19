---
layout: page
title: "Q228930: How to Replace Currently Locked Files with Inuse.exe"
permalink: /kb/228/Q228930/
---

## Q228930: How to Replace Currently Locked Files with Inuse.exe

	Article: Q228930
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 31-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, on platform(s):
	   - the hardware: Intel x86 
	- Microsoft Windows NT Workstation version 4.0, on platform(s):
	   - the hardware: Intel x86 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0, on platform(s):
	   - the hardware: Intel x86 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Inuse.exe provides individuals and administrators with "on-the-fly" capability
	to replace files that are currenly in use by the operating system. Although this
	behavior is generally accomplished by running a program's setup program or a
	service pack's upgrade program, the setup and upgrade process tends to replace
	multiple files. However, for troubleshooting purposes, you may need to replace
	an individual file on your computer versus an entire set of files. The Inuse
	program provides this level of administrative flexibility.
	
	You can obtain InUse from the following Microsoft Web site:
	
	  http://download.microsoft.com/download/winntsrv40/Utility/1.3/NT4/EN-US/inuse.exe
	
	Disclaimer
	----------
	
	Please understand that this is an unsupported utility and typical safeguards
	should be taken when using the utility, such as ensuring that you have a copy of
	the DLL from the original installation source. This is "use at your own risk"
	and support for the utility is not available from Microsoft at this time.
	
	MORE INFORMATION
	================
	
	InUse is a Win32-based command-line utility that can be used by and within
	automated tasks, scripts, or other programs.
	
	Syntax
	------
	
	c:\inuse.exe /?
	InUse - version 1.3
	---------------------------------------------------------------------------
	Copyright (c) 1994-1999 Microsoft Corporation. All rights reserved
	
	Replaces files that are currently locked by the OS
	
	INUSE  source  destination  [/y]
	
	source         Specifies the updated file
	destination    Specifies the existing file to be replaced
	/y             Suppresses confirmation prompt to replace file
	/?             Displays syntax help
	
	Source and destination must include the complete physical or UNC pathname
	
	In Windows 2000 the version of the Inuse.exe program is 1.4. The tool works the
	same way but the Help window has changed slightly. Instead of source they use
	the term replacement.
	
	Comments
	--------
	
	The destination is the currently locked file that you want to replace on the
	local drive. Please note that after you commit INUSE to replace a file, you
	cannot run it again to reverse the transaction. This may be considered in a
	newer version.
	
	Examples
	--------
	
	Basic operation of INUSE is quite simple; just tell it the file you want to
	replace and where it's updated replacement is located. It also has an additional
	parameter that allows the supression of the actual copy comfirmation. This may
	be useful if you intend to use INUSE as part of some automated processes. The
	following examples shows simulated INUSE output as well as its operation in both
	a local and also a network-based file replacement scenario.
	
	Example 1: Promptless Install:
	
	c:\tools\inuse.exe \\server\updates\prodmod.dll c:\program files\prodsys\prodmod.dll /y
	InUse - version 1.3
	----------------------------------------------------------
	InUse is about to replace the following file
	
	Existing:    c:\program files\prodsys\prodmod.dll
	Version:     1.31
	
	Replacement: \\server\updates\prodmod.dll
	Version:     1.34
	
	\\server\updates\prodmod.dll is replacing --> c:\program files\prodsys\prodmod.dll
	
	Changes do not take affect until you reboot<BR/>
	
	Example 2: Prompted Install:
	
	c:\tools\inuse.exe \\server\updates\prodmod.dll c:\program files\prodsys\prodmod.dll
	InUse - version 1.3
	----------------------------------------------------------
	InUse is about to replace the following file
	
	Existing:    c:\program files\prodsys\prodmod.dll
	Version:     1.31
	
	Replacement: \\server\updates\prodmod.dll
	Version:     1.34
	
	Do you want to continue?(y/n)
	
	\\server\updates\prodmod.dll is replacing --> c:\program files\prodsys\prodmod.dll
	
	Changes will not take affect until you reboot
	
	You will notice the only difference with the examples is the fact the user will
	be prompted to confirm or cancel the operation on the latter.
	
	Example 3: Batch Operation:
	
	The following example represents how an administrator can nest multiple updates
	in a single script:
	
	  batch.cmd
	  @echo off
	  inuse test.dll c:\winnt\system32\test.dll /y
	  inuse test2.dll c:\winnt\system32\test2.dll /y
	  inuse test3.dll c:\winnt\system32\test3.dll /y
	
	Note that this executable actually does an edit to the registry to perform a
	"PendingFileRenameOperations" on the next reboot.
	
	REFERENCES
	==========
	
	For more information about the InUse utility, see the following Microsoft
	TechNet article:
	
	  http://www.microsoft.com/technet/columns/inside/6-7-99.asp
	
	Additional query words: ntsetup update install setup service pack
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbWinNTsearch kbWinNTSsearch
	Version           : :2000,4.0
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	
