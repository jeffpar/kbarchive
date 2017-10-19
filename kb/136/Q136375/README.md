---
layout: page
title: "Q136375: NTFS directory corruption with more than 100,000 files"
permalink: /kb/136/Q136375/
---

## Q136375: NTFS directory corruption with more than 100,000 files

	Article: Q136375
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If a large number of files exist in a directory on a Windows NT file system
	(NTFS) volume, directory corruption may be reported in a File Manager message
	box when additional files are copied to the directory. If the COPY command is
	used to place the additional files in the directory, the following error
	appears:
	
	  The file or directory <dir name> is corrupt, please run chkdsk
	
	
	RESOLUTION
	==========
	
	To correct this problem, upgrade to Windows NT 3.51 (if you have not already
	done so) and install the latest U.S. Service Pack for Windows NT version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. This problem has been corrected in the latest U.S. Service Pack for
	Windows NT version 3.51. For information on obtaining the Service Pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51
	
	=============================================================================
	
