---
layout: page
title: "Q142906: Visual Basic FileLen Returns Zero Bytes For File Size"
permalink: kb/142/Q142906/
---

## Q142906: Visual Basic FileLen Returns Zero Bytes For File Size

	Article: Q142906
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
	
	When you attempt to access the file size of an 8.3 format file on a Windows NT
	3.51 Service Pack 2 Macintosh volume (NTFS partition) from Visual Basic, the
	value returned from the FileLen function is zero.
	
	
	WORKAROUND
	==========
	
	To work around this problem, create another directory on the Macintosh volume
	and copy the entire directory contents from the previous directory to the new
	directory.
	
	NOTE: Services for Macintosh allows Macintosh client computers access to the new
	volume directory for files. In addition, correct file size information is
	reported for the Visual Basic FileLen function.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	
	Additional query words: prodnt Mac Excel Fox sfm
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
