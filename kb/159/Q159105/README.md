---
layout: page
title: "Q159105: Cannot Open Truncated File Names from Compact Discs"
permalink: /kb/159/Q159105/
---

## Q159105: Cannot Open Truncated File Names from Compact Discs

	Article: Q159105
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbother kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Long file names shortened to the 8.3 format on a compact disc that contain an A
	through F character as an unique identifier can not be opened. For example if
	there are many files named hippopotomi1.pic, hippopotomi2.pic, and so on. The
	abbreviated 8.3 format would read as hippo~1.pic, the second hippo~2.pic and so
	forth, until you reach hippo~A1.pic. If this file, hippo~A1.pic, is placed on a
	compact disc it cannot be opened.
	
	WORKAROUND
	==========
	
	This problem is fixed in Cdfs.sys in Windows NT 4.0 Service Pack 2 and later.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.00. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 4.00. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: CD-ROM disk disc prodnt
	======================================================================
	Keywords          : kbother kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
