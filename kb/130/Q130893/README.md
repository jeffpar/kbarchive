---
layout: page
title: "Q130893: &quot;Not Recognized&quot; Error Using PKZIP.EXE with Ampersand (&amp;) Switch"
permalink: /kb/130/Q130893/
---

## Q130893: &quot;Not Recognized&quot; Error Using PKZIP.EXE with Ampersand (&amp;) Switch

	Article: Q130893
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51
	Operating System(s): 
	Keyword(s): kb3rdparty kbusage
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use PKZIP.EXE with the ampersand (&) switch to span multiple floppy
	disks, the following error message appears:
	
	  The name specified is not recognized as an internal or external command,
	  operable program or batch file.
	
	CAUSE
	=====
	
	The ampersand switch is not interpreted by the Command Prompt (CMD.EXE) because
	it is a reserved command character, used to separate multiple commands on one
	line. Therefore, the characters following the ampersand are interpreted as a bad
	name.
	
	WORKAROUND
	==========
	
	To work around this problem, use the carrot character (^), above the "6" key,
	which allows you to input command characters as text. For example, to compress
	the C:\DATA directory over multiple floppy disks on the A drive, you would use
	the following command:
	
	  PKZIP A:\DATA.ZIP C:\DATA\*.* -^&
	
	Alternatively, you can surround the ampersand character with quotes such as
	follows:
	
	  PKZIP A:\DATA.ZIP C:\DATA\*.* "-&"
	
	PKZIP is manufactured by a vendor independent of Microsoft; we make no warranty,
	implied or otherwise, regarding these products' performance or reliability.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kb3rdparty kbusage 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5 3.51
	
	=============================================================================
	
