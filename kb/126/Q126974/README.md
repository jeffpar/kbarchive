---
layout: page
title: "Q126974: STOP 0x24 Generated With NTFS"
permalink: /kb/126/Q126974/
---

## Q126974: STOP 0x24 Generated With NTFS

	Article: Q126974
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have large number of files in a single directory on an Windows NT file
	system (NTFS) partition, the following error message appears:
	
	  STOP: 0x00000024
	
	
	CAUSE
	=====
	
	Running NTFS under heavy disk activity can create an uninitialize record package
	if BitmapScb for the directory is invalid.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.5. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt VCN LCN trap 0x24
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
