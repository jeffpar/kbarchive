---
layout: page
title: "Q154831: Arcinst Not Available for PPC"
permalink: /kb/154/Q154831/
---

## Q154831: Arcinst Not Available for PPC

{% raw %}

	Article: Q154831
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows NT for the PowerPC on a system without a valid system
	partition, you will receive the following message:
	
	  No valid system partitions are defined on this computer, or all system
	  partitions are full. Windows NT requires 750 kilobytes (1 KB = 1024) of free
	  disk space on a valid system partition.
	
	  A system partition is an area of a hard disk that your computers uses to store
	  operating system startup files and diagnostic, configuration, or other
	  manufacturer-supplied programs.
	
	  System partitions are created and managed by a manufacturer-supplied
	  configuration program. If you do not know of such a program, you can use a
	  program called ARCINST.EXE, which is supplied on the Windows NT CD- ROM.
	
	  How you invoke this program depends on your computer type. Typically you
	  select a "Run a program" option from your computer's startup menu.
	
	  Setup cannot continue. Press F3 to exit.
	
	When you try to run ARCINST in the manner suggested, you will receive the
	following message:
	
	  Error: The file or device does not exist, press any key to continue
	
	CAUSE
	=====
	
	Unlike on the MIPS and ALPHA platforms, this program does not exist in the PPC
	directory.
	
	WORKAROUND
	==========
	
	The Motorola Power Stack computers come with this program on a disk. If this
	program is not available, the manufacturer should be contacted for a copy.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	
	Additional query words: prodnt Motorola PowerStack
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
