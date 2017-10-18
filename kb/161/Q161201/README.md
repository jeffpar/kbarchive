---
layout: page
title: "Q161201: NTBackup.exe from WinNT 3.51 SP5 Causes Verify Errors"
permalink: kb/161/Q161201/
---

## Q161201: NTBackup.exe from WinNT 3.51 SP5 Causes Verify Errors

	Article: Q161201
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After installing Service Pack 5 on Windows NT 3.51, you may start to see verify
	errors in NTBackup. The errors you see, in either your NTbackup screen or
	Backup.log, will have the following format:
	
	  *File information found on tape:
	  *%FileName% %Size% %Date% %Time%
	  *File information found on disk:
	  *%FileName% %Size% %Date% %Time%
	  *Difference encountered in alternate file data.
	  *The file %FileName% is different.
	
	The problem seems to occur more frequently on Macintosh or large NTFS volumes.
	
	CAUSE
	=====
	
	This is caused by NTBackup checking the stream size of the data which may change
	every time you run backup.
	
	RESOLUTION
	==========
	
	This problem seems to be more of a nuisance than actual file problems, but can
	cause NTBackup to degrade in performance, especially on large volumes. So far,
	we have not seen any cases which actually showed file corruption. You can simply
	choose not to verify after backup or apply the Hotfix available as mentioned
	below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 4.0. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt Mac volumes verify macfile sfm
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	
	=============================================================================
	
