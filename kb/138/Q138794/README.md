---
layout: page
title: "Q138794: Out of Memory Error Installing Windows NT 3.51 Service Pack 2"
permalink: /kb/138/Q138794/
---

## Q138794: Out of Memory Error Installing Windows NT 3.51 Service Pack 2

	Article: Q138794
	Product(s): Microsoft Windows NT
	Version(s): 3.51 SP2,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51 SP2, 4.0 
	- Microsoft Windows NT Server version 3.51 SP2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you run Windows NT 3.51 Service Pack 2 UPDATE.EXE, the following error
	message appears and the upgrade halts:
	
	  External Library Procedure
	  ForceFileNoCompress reported the following error:
	  Out of Memory Could not configure
	
	
	CAUSE
	=====
	
	This problem occurs if you move the original location of the NTLDR file from the
	root of drive C or if you've renamed your boot drive letter to a letter other
	than C.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- Create a temporary directory and copy the contents of the Service Pack. Edit
	  the UPDATE.INF file by changing the following line:
	
	  set STF_OSLDEST = <C:\ or changed boot drive>
	
	  -or-
	
	- Change the boot partition back to drive C.
	
	
	RESOLUTION
	==========
	
	This problem has been corrected in the latest Service Pack for Windows NT
	version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51 Service
	Pack 2. This problem was corrected in the latest Windows NT 3.51 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt 3.51 sp2
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTSsearch kbWinNTS351sp2 kbWinNTW351SP2
	Version           : :3.51 SP2,4.0
	
	=============================================================================
	
