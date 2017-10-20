---
layout: page
title: "Q105214: Windows NT 3.1 to HP LM/X 1.4 Long Filename Problems"
permalink: /kb/105/Q105214/
---

## Q105214: Windows NT 3.1 to HP LM/X 1.4 Long Filename Problems

{% raw %}

	Article: Q105214
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Microsoft Windows NT 3.1 systems cannot see any files in a directory on a
	Hewlett-Packard (HP) LM/X 1.4 server if any file in the directory contains a
	period (or "dot") followed by more than seven characters. If you use the "dir"
	command to check the contents of the directory, you will receive the following
	message:
	
	  File Not Found.
	
	CAUSE
	=====
	
	HP LM/X 1.4 systems negotiate to Server Message Block (SMB) Specification Ext
	2.0 (LAN Manager 1.x), which doesn't support long filenames. When speaking this
	down-level protocol, Windows NT 3.1 does not set bit 4 of Byte 9 of its SMBs.
	This bit is defined as follows:
	
	  flags (smb_flg) bit 4:
	
	  "When on, all paths sent to the server by the consumer are already in
	  the canonicalized format used by OS/2. This means that file/directory
	  names are in upper case, are valid characters and backslashes are used
	  as separators."
	
	STATUS
	======
	
	A fixed, untested version of the RDR.SYS driver is available from Microsoft
	Product Support Services.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :
	
	=============================================================================
	

{% endraw %}
