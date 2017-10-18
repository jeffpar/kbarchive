---
layout: page
title: "Q168148: How To Clear Path Entries In The Map Network Drive Dialog Box"
permalink: kb/168/Q168148/
---

## Q168148: How To Clear Path Entries In The Map Network Drive Dialog Box

	Article: Q168148
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbui kbhowto
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information is a procedure that will empty the drop down path
	history from the Map Network Drive dialog box.
	
	MORE INFORMATION
	================
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Start Registry Editor (Regedt32.exe), and find the following entries:
	
	     HKEY_CURRENT_USER\Software\Microsoft\WindowsNT\CurrentVersion\ 
	        Network\Persistent Connections\ 
	
	2. Observe the computer and share names that are preceded by a letter of the
	  alphabet. This is the actual list of shares that appear in the drop down box.
	  The value named order indicates the sorting order of the list.
	
	  Name of the value: a Path: \\<Computer1>\<Share1>
	  Name of the value: b Path: \\<Computer2\<Share2>
	  Name of the value: c Path: \\<Computer3>\<Share3>
	  Order = cba
	  SaveConnections = Yes
	
	  The a, b, and c entries are the actual paths listed by the drop down arrow.
	  The Order entry specifies the order in which the a, b, and c etc. entries are
	  listed. To clear the list, delete the a, b, and c etc. and the Order entries,
	  or delete the entire Persistent Connections key. The list could be modified
	  at this point as well, by modifying the Order or a, b, and c etc. values.
	
	Additional query words: Explorer File Manager My Computer
	======================================================================
	Keywords          : kbnetwork kbui kbhowto 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:4.0
	
	=============================================================================
	
