---
layout: page
title: "Q150009: WinNT System Shutdown/Power Off Causes Boot-Sector Corruption"
permalink: /kb/150/Q150009/
---

## Q150009: WinNT System Shutdown/Power Off Causes Boot-Sector Corruption

{% raw %}

	Article: Q150009
	Product(s): Microsoft Windows NT
	Version(s): ; winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you have Windows NT installed on a partition using the FAT file system, the
	boot sector may become corrupted after performing a shutdown.
	
	After you indicate you want to shut down Windows NT, the operating system begins
	closing applications and network connections and performing file- system
	shutdown functions. During this last process you will see the message:
	
	  Please wait while the system writes unsaved data to the disk
	
	As soon as the status is returned that each of these functions has been
	completed, Windows NT displays the following message:
	
	  It is now safe to turn off your computer.
	
	If you immediately turn off your computer, disk corruption may occur that can
	prevent the computer from restarting.
	
	CAUSE
	=====
	
	The operating system thinks the file-system shutdown functions have completed
	successfully, but there is still an asynchronous thread running that has not yet
	completed its I/O to the volume. This process is used to mark the volume clean
	by updating information on the disk. If the computer is powered off while this
	last write is in progress, disk corruption may occur.
	
	
	RESOLUTION
	==========
	
	If you look closely at the disk access light of a drive running Windows NT and
	using the FAT file system, you will see that approximately 7 seconds after the
	message is posted stating it is safe to turn off the computer, further disk
	activity takes place on the drive.
	
	To prevent disk corruption, wait for approximately 10 seconds after the last
	message is posted--or observe the disk access light and wait for the last write
	to take place--before you turn off the computer.
	
	This behavior occurs only on partitions formatted using the FAT file system;
	partitions formatted using the NTFS file system do not exhibit this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.1, 3.5,
	and 3.51. This problem was corrected in the latest Windows NT 3.51 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :; winnt:3.5,3.51
	
	=============================================================================
	

{% endraw %}
