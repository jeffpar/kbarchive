---
layout: page
title: "Q165456: STOP 0x0000000A in Ntoskrnl.exe"
permalink: /kb/165/Q165456/
---

## Q165456: STOP 0x0000000A in Ntoskrnl.exe

{% raw %}

	Article: Q165456
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You may receive a STOP 0x0000000A with the following parameters:
	
	  00000000, 0000001c, 00000000, 801156f4
	
	This problem can also appear as a process that is trying to write out a file but
	has stopped responding.
	
	CAUSE
	=====
	
	The NTFS file system driver is attempting to perform I/O to a fragmented file
	and does not correctly clear a required field, causing either a STOP 0xA or a
	deadlock condition, which causes the process to stop responding.
	
	
	RESOLUTION
	==========
	
	Apply the hotfix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt 0xa 0x0a
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
