---
layout: page
title: "Q106168: Windows NT Multi-Boot Support Limitations"
permalink: /kb/106/Q106168/
---

## Q106168: Windows NT Multi-Boot Support Limitations

{% raw %}

	Article: Q106168
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): 
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
	
	Windows NT supports dual-booting between one or more instances of Windows NT and
	optionally one additional operating system. The only additional operating
	systems that are currently supported are MS-DOS and OS/2 1.x.
	
	MORE INFORMATION
	================
	
	Microsoft only supports dual-booting between Windows NT and MS-DOS or Windows NT
	and OS/2 version 1.x. The mechanism used by NTLDR.EXE, the program that controls
	the Windows NT boot process, permits as many instances of Windows NT as desired
	to be included in the boot menu plus one other operating system. When the other
	operating system is selected, NTLDR.EXE loads the BOOTSECT.DOS file that was
	created during installation and transfers processor control to that image. This
	results in the other operating system booting as if NTLDR had not intervened. In
	the case of MS-DOS, the boot sector code looks for IO.SYS; in the case of OS/2
	1.x, the boot sector looks for OS2LDR.EXE. In both cases, the BOOTSECT.DOS file
	is created when Windows NT is installed by copying the existing boot sector that
	was present before installation.
	
	This scheme breaks down when OS/2 2.x or other operating systems are installed
	because these operating systems use a different mechanism for controlling their
	own multi-boot functionality or use a file system that is not supported by
	Windows NT. Briefly, in the case of OS/2 2.x, a small boot manager partition is
	installed, which is made the active partition. The boot code in this partition
	can then transfer control to the boot code in one of the inactive partitions on
	the disk, effectively booting the operating system installed to that partition.
	Because the boot code for OS/2 2.x is not located in the same partition as the
	boot code for Windows NT, the mechanism used by Windows NT is not able to
	correctly select OS/2 2.x as a boot option. In the case of other operating
	systems, the operating system in question often utilizes its own file system and
	must be installed from a different partition than Windows NT for that reason,
	thus also rendering the boot mechanism used by Windows NT ineffective.
	
	For more information about the Windows NT boot sequence query on the following
	words in the Microsoft Knowledge Base:
	
	  ntldr and boot and sequence
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	

{% endraw %}
