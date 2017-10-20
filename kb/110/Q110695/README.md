---
layout: page
title: "Q110695: Err Msg: Setup is Unable to Locate the Hard Drive..."
permalink: /kb/110/Q110695/
---

## Q110695: Err Msg: Setup is Unable to Locate the Hard Drive...

{% raw %}

	Article: Q110695
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	During Windows NT Setup, just after Setup restarts your computer, the
	following error message may appear:
	
	  Setup is unable to locate the hard drive partition prepared by the MS-DOS
	  portion of setup.
	
	Setup (WINNT.EXE) by default places temporary files on the first available
	drive with enough free space, but because WINNT.EXE can see drives that
	Windows NT may or may not support, sometimes these temporary files become
	inaccessible to Setup. (Unsupported drives may be compressed drives,
	unsupported SCSI drives, or drives on secondary IDE or ESDI controllers.)
	
	To work around this problem, use the /T switch with the WINNT command. The
	/T switch specifies the target drive to which temporary files will be
	stored by Setup.
	
	For additional information, please see the following article(s) in the
	Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q132739
	  TITLE : Setup Disks Created With WINNT /O Fail To Find Hard Disk
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5
	
	=============================================================================
	

{% endraw %}
