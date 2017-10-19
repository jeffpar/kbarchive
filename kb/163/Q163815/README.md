---
layout: page
title: "Q163815: NTBACKUP Reports Verify Errors on Files in Mac Volume After SP5"
permalink: /kb/163/Q163815/
---

## Q163815: NTBACKUP Reports Verify Errors on Files in Mac Volume After SP5

	Article: Q163815
	Product(s): Microsoft Windows NT
	Version(s): 3.51 SP5,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 SP5 
	- Microsoft Windows NT Workstation versions 3.51 SP5, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During a verification of a Macintosh volume, the Backup Status window shows
	following error:
	
	  *File information found on tape:
	  *%FileName% %Size% %Date% %Time%
	  *File information found on disk:
	  *%FileName% %Size% %Date% %Time%
	  *Difference encountered in alternate file data.
	  *The file %FileName% is different.
	
	The name, size, date, and time information is identical on the tape and disk
	information.
	
	This problem did not occur under Windows NT 3.51 Service Pack 4.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51.
	
	A supported fix is now available, but has not been fully regression- tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words: SFM sp sp4
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTSsearch kbWinNTS351search kbWinNTS351sp5 kbWinNTW351sp5
	Version           : :3.51 SP5,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
