---
layout: page
title: "Q156276: Cmd.exe Does Not Support UNC Names as the Current Directory"
permalink: /kb/156/Q156276/
---

## Q156276: Cmd.exe Does Not Support UNC Names as the Current Directory

{% raw %}

	Article: Q156276
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you call out CreateProcess on Cmd.exe, for example:
	
	  CreateProcess(NULL, "cmd /c copy file1 file2", ....),
	
	and the current directory has been set to a universal naming convention (UNC),
	Cmd.exe returns the following message:
	
	  '<UNC path>' is an invalid current directory path. UNC paths are not
	  supported.
	  Defaulting to Windows directory.
	
	CAUSE
	=====
	
	Cmd.exe checks to verify if a UNC name is used for the current directory. It
	does this because a UNC name may cause problems with child processes launched
	from such a console when that console is exited or halted. Microsoft Windows NT
	versions prior to 4.0 did not check this; thus it was possible to use a UNC name
	as a current directory.
	
	
	RESOLUTION
	==========
	
	Obtain the updated Cmd.exe. You must also make a registry entry to be able to
	use a UNC path as the current directory.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	Under the registry path:
	
	  HKEY_CURRENT_USER
	     \Software
	        \Microsoft
	           \Command Processor
	
	add the value DisableUNCCheck REG_DWORD and set the value to 0 x 1 (Hex).
	
	WARNING: If you enable this feature and start a Console that has a current
	directory of an UNC name, start applications from that Console, and then close
	the Console, it could cause problems in the applications started from that
	Console.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
