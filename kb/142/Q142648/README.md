---
layout: page
title: "Q142648: STOP 0x00000024 in Ntfs.sys"
permalink: /kb/142/Q142648/
---

## Q142648: STOP 0x00000024 in Ntfs.sys

{% raw %}

	Article: Q142648
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After a user-mode application attempts to open certain internal Windows NT File
	System (NTFS) meta-files, Windows NT may halt with the kernel mode trap screen
	STOP 0x00000024 in Ntfs.sys or STOP 0x0000001e in Ntoskrnl. The internal system
	files in question are not visible to applications and the errors described above
	would not be expected to occur for the reason stated here under normal usage.
	Only if an application knows the names and locations of the files and there is a
	deliberate attempt to access them will the system halt.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.51 and
	4.0. This problem was corrected in the latest Windows NT 3.51 U.S. Service Pack
	and in the latest Windows NT 4.0 U.S. Service Pack. For information on obtaining
	the Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: prodnt 0x1e 0x24 bug check ntoskrnl.exe
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	
	=============================================================================
	

{% endraw %}
