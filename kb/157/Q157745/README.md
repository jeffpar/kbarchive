---
layout: page
title: "Q157745: Command Extensions Cause Access Violation in Cmd.exe"
permalink: /kb/157/Q157745/
---

## Q157745: Command Extensions Cause Access Violation in Cmd.exe

	Article: Q157745
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenvkbbuglist kbfixlist
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run CMD or BAT files that use the Windows NT command extension syntax,
	access violations in Cmd.exe may occur.
	
	For example, create the following Test.cmd file:
	
	  FOR /R C:\ %%f in (iexplore.exe, patchdll.dll, srv.sys) do if exist %%f
	  echo %%f
	
	An error message will be displayed:
	
	  Application Error: The instruction at "0x77f646ce" referenced memory at
	  "0x0073006f". The memory could not be read.
	
	NOTE: The address values may be different on your system.
	
	Results may vary, depending on what group of files is contained in the set. A Dr.
	Watson error may be one such occurrence. Usually, there is no error if the set
	contains only a single file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: 4.00 prodnt cmd command extensions
	
	======================================================================
	Keywords          : kbenv kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
