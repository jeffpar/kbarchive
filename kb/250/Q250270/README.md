---
layout: page
title: "Q250270: Windows NT Unavailable on PartitionMagic Dual Boot After Upgrade"
permalink: /kb/250/Q250270/
---

## Q250270: Windows NT Unavailable on PartitionMagic Dual Boot After Upgrade

{% raw %}

	Article: Q250270
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use PartitionMagic by PowerQuest to partition your hard disk and you
	dual boot Microsoft Windows 95 and Microsoft Windows NT Workstation 4.0, and you
	then upgrade from Windows 95 to Microsoft Windows 98, you may no longer be able
	to gain access to Windows NT 4.0.
	
	CAUSE
	=====
	
	This behavior can occur because Windows 98 marks its own partition as the active
	partition, leaving PartitionMagic unable to function. Using the Fdisk.exe
	utility from Windows 95 or 98 to mark the PartitionMagic partition as active
	does not resolve the issue.
	
	RESOLUTION
	==========
	
	Perform a parallel installation of Windows NT 4.0. In the original installation,
	use Disk Administrator, mark the PartitionMagic partition as active. Delete the
	parallel installation.
	
	To work around this behavior, perform a parallel installation of Windows NT 4.0
	and use Disk Administrator to mark the PartitionMagic partition in the original
	installation as active. Delete the parallel installation.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: Windows NT Workstation
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
