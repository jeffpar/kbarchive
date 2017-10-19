---
layout: page
title: "Q114349: File and Dir. Names with Caps Show Both 8.3 and Long Filenames"
permalink: /kb/114/Q114349/
---

## Q114349: File and Dir. Names with Caps Show Both 8.3 and Long Filenames

	Article: Q114349
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	On a FAT disk partition, file and directory names containing uppercase
	characters (for example, Test, teSt, and TEST) show up in File Manager as both a
	long filename and a DOS 8.3 filename. The DOS 8.3 filename is visible when the
	DOS Filename option is enabled from the Partial File Details option of the View
	menu or when the All File Details option is chosen from the View menu.
	
	MORE INFORMATION
	================
	
	The MS-DOS FAT file system normally only stores names in uppercase. When you
	create a file or directory with mixed case, Windows NT stores that name in the
	long name space to preserve the case. This necessitates the creation of a short
	name. To illustrate, from a command prompt, type:
	
	  copy con TeSt.TXT
	  This is a test file. <Ctrl-Z>
	  dir /x
	
	you will see:
	
	  ..............  TEST.TXT         TeSt.TXT
	
	Additional query words: lfn prodnt
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.5
	
	=============================================================================
	
