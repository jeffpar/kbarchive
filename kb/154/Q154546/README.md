---
layout: page
title: "Q154546: MS-DOS Buffersize Could Cause Problem Opening Command Prompt"
permalink: kb/154/Q154546/
---

## Q154546: MS-DOS Buffersize Could Cause Problem Opening Command Prompt

	Article: Q154546
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When you use Control Panel Console to increase the command prompt screen buffer
	size, you may have difficulty accessing the command prompt the next time you
	try. You may either experience a long delay between the time you select the
	command prompt icon and the time the command window is loaded, or you may
	receive the following error message:
	
	  Initialization of the dynamic link library <%systemrooot%>\Kernel32.dll
	  failed. The process is terminating abnormally.
	
	CAUSE
	=====
	
	When you set the height and width of the screen buffer size to 9999, you are
	asking Kernel32.dll to allocate 190 MB of memory per command window. This can
	fail if you do not set your paging file to grow to more than 190 MB.
	
	RESOLUTION
	==========
	
	Set your paging file to accommodate the size required for the buffer size.
	
	-or-
	
	Set the buffer to a smaller number.
	
	MORE INFORMATION
	================
	
	In Windows NT 4.0, a warning will appear below the Windows Preview window
	stating how much memory each Console window will use, if the settings use one MB
	of memory or more.
	
	Additional query words: prodnt DOS
	
	======================================================================
	Keywords          : kbenv kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
