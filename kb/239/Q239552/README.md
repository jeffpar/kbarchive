---
layout: page
title: "Q239552: Debugging a TSE Memory.dmp File if Winstation Space Unavailable"
permalink: /kb/239/Q239552/
---

## Q239552: Debugging a TSE Memory.dmp File if Winstation Space Unavailable

	Article: Q239552
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a crash occurs in Win32k.sys and you attempt to debug a Terminal Server 4.0
	Memory.dmp file, the winstation space is usually not available. Although you can
	usually resolve this problem by doing a live debug and using the .pagein
	command, you can avoid this problem using the techniques described below.
	
	MORE INFORMATION
	================
	
	To avoid down time that can occur when you perform a live debug, use the
	following steps:
	
	1. Install the latest Microsoft Windows 2000 kernel debugger and related files
	  on a Windows 2000-based computer.
	
	2. Load the Terminal Server Memory.dmp file in the kernel debugger.
	
	3. View the stack of the crashing thread. You can now see all of the function
	  calls and parameters, even if the pages that contain the code are not
	  accessible.
	
	
	4. To view the data in the winstation space, use the !vtop and the !dd commands.
	  You can get the DirBase value using the !process command.
	
	
	5. Because you cannot unassemble the information in the winstation space using
	  the kernel debugger, use the Dumpbin tool:
	
	  a. Locate a copy of Win32k.sys that is identical to the one used in the dump.
	
	  b. At a command prompt, type the following command:
	
	  dumpbin /disasm win32k.sys /out:win32k.txt
	
	This creates a disassembly of Win32k.sys in the Win32k.txt file. You can then
	search the text file for the address of each function in the stack.
	
	
	Dumpbin.exe
	-----------
	
	The Dumpbin tool is included with the following products:
	
	- Visual Studio
	
	- Visual C++
	
	- Microsoft IDW build tools
	
	- Microsoft Windows Software Development Kit (SDK) or Device Driver Kit (DDK)
	  tools
	
	Additional query words: winstation
	
	======================================================================
	Keywords          : kbenv 
	Component         : Debugger
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
