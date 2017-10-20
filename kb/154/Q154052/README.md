---
layout: page
title: "Q154052: Explanation of X86 Boot Drive Limitations"
permalink: /kb/154/Q154052/
---

## Q154052: Explanation of X86 Boot Drive Limitations

{% raw %}

	Article: Q154052
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	During Setup, Windows NT can only be installed within the first 1,024 cylinders
	of the boot drive. This is due to Interrupt 13 limitations on x86 computers.
	
	MORE INFORMATION
	================
	
	When starting an x86 based computer, Ntdetect.com retrieves and stores Interrupt
	13 information. This information is supplied by the computer's BIOS. Only
	information for the first two disks in the system is saved. This information
	about the drive layout is then passed to the operating system during
	initialization. The amount of space that the operating system files can use to
	boot the system is limited in Windows NT to the first 1,024 cylinders of disk 0.
	This means that Ntldr, Boot.ini, Ntdetect.com and the Windows NT operating
	system files must be within this boundary.
	
	If the disk controller is using a 32 sector/64 head translation scheme, this
	boundary will be 1 GB. If the controller uses 63 sector/255 head translation,
	the limit will be 4 GB. If there is a secondary controller that does not have
	BIOS enabled, Windows NT will default to 32 sectors/64 heads. In some cases,
	such as duplexing, this may cause identical drives on different controllers to
	be interpreted as being slightly different in size.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	

{% endraw %}
