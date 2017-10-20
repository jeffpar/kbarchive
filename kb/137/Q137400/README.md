---
layout: page
title: "Q137400: Changing Default Permissions Causes STOP 0xC000021A"
permalink: /kb/137/Q137400/
---

## Q137400: Changing Default Permissions Causes STOP 0xC000021A

{% raw %}

	Article: Q137400
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you start Microsoft Windows NT the following STOP error message appears:
	
	  STOP 0xC000021A {Fatal System Error}
	  The Windows Logon Process system process terminated
	  unexpectedly with a status of 0xC0000022 (0x00000000 0x00000000)
	  The system has been shutdown.
	
	After Windows NT dumps system memory to disk, the computer restarts and the same
	STOP message reappears.
	
	CAUSE
	=====
	
	The file and directory permissions may have been changed on the system root
	(%SystemRoot%) directory or its subdirectories. Several combinations of
	permissions may cause this behavior. For example, if you set file permissions to
	Read/Execute or Read-only in the system root directory and all its
	subdirectories, the behavior above occurs.
	
	RESOLUTION
	==========
	
	To correct this behavior:
	
	1. Install Windows NT to another directory and start the new version of Windows
	  NT.
	
	2. Reset the file and directory permissions of the original Windows NT
	  %SystemRoot% directory to the following default permissions:
	
	  NTFS Partition
	  --------------
	
	  Change for the Everyone Group
	
	3. Quit the second installation of Windows NT.
	
	4. Restart the original version of Windows NT.
	
	5. Remove the second installation of Windows NT.
	
	Additional query words: prodnt setup user right trap 0xc21a
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51
	
	=============================================================================
	

{% endraw %}
