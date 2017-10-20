---
layout: page
title: "Q123814: Win NT Err Msg: MBR Checksum Error: A Virus May Be Present..."
permalink: /kb/123/Q123814/
---

## Q123814: Win NT Err Msg: MBR Checksum Error: A Virus May Be Present...

{% raw %}

	Article: Q123814
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If Windows NT detects a problem with the Master Boot Record (MBR), the following
	message appears:
	
	  MBR checksum error: a virus may be present. Verify Master Boot Record
	  integrity.
	
	
	MORE INFORMATION
	================
	
	MBR problems are frequently caused by boot sector viruses. Microsoft has
	confirmed that versions of the Stoned and Josh viruses can cause the MBR
	checksum error message.
	
	This problem most often occurs when you have set up Windows NT using WINNT.EXE.
	The floppy disks for a CD-ROM installation can become infected when you run DIR
	from an infected MS-DOS computer.
	
	If the MBR checksum error message occurs during setup, Windows NT Setup does not
	continue. If this happens, run an anti-virus program to remove the virus.
	
	
	Additional query words: prodnt NT infected
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	

{% endraw %}
