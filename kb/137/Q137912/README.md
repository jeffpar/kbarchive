---
layout: page
title: "Q137912: File Permissions on &#92;SYSTEM32 Affect All Subdirectories"
permalink: /kb/137/Q137912/
---

## Q137912: File Permissions on &#92;SYSTEM32 Affect All Subdirectories

	Article: Q137912
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
	
	You install Windows NT version 3.51 and choose to convert your %systemroot%
	partition to Windows NT file system (NTFS). You then install Service Pack 2 and
	run File Manager and set the permissions on the %systemroot%\system32 directory
	to read-only. When you attempt to print via LPR, the print job fails.
	
	
	It appears that Service Pack 3 and Service Pack 4 also exhibit this behavior. For
	additional information, articles Q138593 and Q128352 both address this issue
	further.
	
	CAUSE
	=====
	
	The directory ACLs are not set correctly on the \SYSTEM32 directory (and
	subdirectories) during Setup because of errors in WINPERMS.TXT. If you then set
	the permissions in File Manager on \SYSTEM32 for Everyone to Read without
	selecting the Replace Permissions on Subdirectories check box, the file
	permissions for all files in the \SYSTEM32 directory and all subdirectories are
	set to read-only (because they were not set correctly in the first place).
	
	Because Everyone has only read access to the \system32\spool\printers directory,
	you cannot print via LPR. For additional information, please see the following
	article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q138593
	  TITLE : Unable to Print to Windows NT LPR Printers after Applying SP2
	
	WORKAROUND
	==========
	
	After the file permissions for all files in the \SYSTEM32 directory and all
	subdirectories are set to read-only, the ACLs are set correctly. You can change
	the file permissions for all files back to Full Control, and then set the file
	permissions for the \SYSTEM32 directory to Read without changing the file
	permissions for all subdirectories.
	
	Additional query words: prodnt LPRMON
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
