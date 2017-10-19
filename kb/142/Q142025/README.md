---
layout: page
title: "Q142025: PRB: NTBackup and Beam &amp; Whiteside NFS Generate DR. Watson"
permalink: /kb/142/Q142025/
---

## Q142025: PRB: NTBackup and Beam &amp; Whiteside NFS Generate DR. Watson

	Article: Q142025
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use NTbackup to back up a shared NFS volume over the network by using
	Beam & Whiteside's NFS software, NTbackup may cause a DR Watson error when
	starting to backup the NFS volume. For example:
	
	  The application error states that the instruction at 0x79f94867 cannot read
	  memory at 00000000.
	
	CAUSE
	=====
	
	Version 3.6 of Beam & Whitside software that works with 3.51 does not allow
	NTbackup to back up NFS volumes. The version for 3.5 allows you to do so, but
	you must also back down to Windows NT 3.5 in order for this version to work. The
	only other workaround is to attach a backup device to the machine containing the
	NFS volume.
	
	STATUS
	======
	
	Beam & Whiteside tech support is aware of this problem and currently working
	on a fix. You can reach their Tech support at 416-496-2200.
	
	The products included here are manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.50 prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
