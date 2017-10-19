---
layout: page
title: "Q172710: How to Use the OH Tool on the Windows NT 4.0 Resource Kit"
permalink: /kb/172/Q172710/
---

## Q172710: How to Use the OH Tool on the Windows NT 4.0 Resource Kit

	Article: Q172710
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses the OH monitoring tool OH (Oh.exe) that is included in
	the Microsoft Windows NT Server 4.0 Resource Kit Supplement Two. The OH utility
	can help monitor which files, registry keys, and directories are in use by
	certain services at any given time.
	
	MORE INFORMATION
	================
	
	This command-line tool shows the handles of all open windows. Alternatively, you
	can constrain the OH display to show only information relating to a particular
	process, object type, or object name. This feature is useful when a sharing
	violation occurs because you can find the process that has a file open at the
	time of violation.
	
	To function properly, OH requires that an option internal to the Windows NT
	kernel be enabled. This option maintains a linked list of all objects by object
	type. If OH detects that this option is not set, OH sets it and sends a message
	that the user must restart the computer before the option will take effect.
	After restarting, OH can give useful results.
	
	This linked list costs 8 bytes of overhead for each object. If desired, this
	option can later be disabled with Gflags.exe (in the Windows NT 4.0 Resource
	Kit) by clearing the check box for" Maintain a list of objects for each type" in
	the Global Flags window, then restarting the system.
	
	The most convenient way to use OH is to have it pipe the data to a text file. At
	the command prompt type:
	
	  Oh >***.txt {where *** is the name you provide}
	
	To view the data, open the file with Notepad.
	
	REFERENCES
	==========
	
	For additional information about the OH utility, type the following line at a
	command prompt type, and then press ENTER:
	
	  Use OH /?
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
