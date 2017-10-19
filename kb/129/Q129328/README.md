---
layout: page
title: "Q129328: Cannot View Files and Directories on a Compressed NTFS Partition"
permalink: /kb/129/Q129328/
---

## Q129328: Cannot View Files and Directories on a Compressed NTFS Partition

	Article: Q129328
	Product(s): Microsoft Windows NT
	Version(s): 
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
	
	SYMPTOMS
	========
	
	After you connect from Windows NT version 3.1 or 3.5 to a network share that is
	a compressed NTFS drive on Windows NT version 3.51 , the following message
	appears in File Manager:
	
	  No files found.
	
	RESOLUTION
	==========
	
	To temporarily work around this problem, run the MS-DOS Command Prompt and
	change to the network drive. Only the MS-DOS Command Prompt displays the files
	and directories of compressed NTFS drives.
	
	If you are running Windows NT 3.1, you can permanently resolve this problem by
	upgrading to Windows NT 3.51, or by upgrading to Windows NT 3.5 and then
	installing Windows NT 3.5 Service Pack 2.
	
	If you are running Windows NT 3.5, you can permanently resolve this problem by
	installing Microsoft Windows NT 3.5 Service Pack 2, or by upgrading to Windows
	NT 3.51.
	
	
	Additional query words: prodnt 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	
