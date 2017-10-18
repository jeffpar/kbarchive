---
layout: page
title: "Q138116: NTBACKUP Cannot Catalog and Restore Compressed Data from Tape"
permalink: kb/138/Q138116/
---

## Q138116: NTBACKUP Cannot Catalog and Restore Compressed Data from Tape

	Article: Q138116
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	If you back up data to tape with Arcada Backup Exec for Windows 95 you can
	catalog and restore the data with Windows NT Backup (NTBACKUP.EXE).
	However, if you use the data compression feature of Arcada Backup Exec for
	Windows 95 to backup data to tape, the following error message appears in
	NTBACKUP.EXE when you try to catalog and restore the data with
	NTBACKUP.EXE:
	
	  This set is compressed and cannot be viewed or restored.
	
	Windows NT Backup is a standard backup utility that does not have the
	additional features Arcada Backup Exec for Windows NT or Windows 95 has
	available, such as the software data compression. Arcada Backup Exec for
	Windows NT and Windows 95 use the Microsoft Tape Format (MFT) standard.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	
	=============================================================================
	
