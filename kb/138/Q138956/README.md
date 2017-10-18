---
layout: page
title: "Q138956: Adaptec 2742 Controller Fails with Second SCSI Host Adapter"
permalink: kb/138/Q138956/
---

## Q138956: Adaptec 2742 Controller Fails with Second SCSI Host Adapter

	Article: Q138956
	Product(s): Microsoft Windows NT
	Version(s): 3.1,3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51 
	- Microsoft Windows NT Workstation versions 3.1, 3.5, 3.51 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On your Windows NT computer using two SCSI adapters, one of which is the Adaptec
	2742 controller card, your computer's first drive partition is missing. That is,
	the first drive letter corresponds to the second partition on CDFS or NTFS
	partitions when viewed with File Manager or Disk Administrator.
	
	Additionally, your computer cannot boot if the system partition resides on a disk
	controlled by the Adaptec card.
	
	
	RESOLUTION
	==========
	
	Download the latest Windows NT driver for AHA-274x and AHA-284x from the Adaptec
	BBS or Adaptec's web site (WWW.ADAPTEC.COM)
	
	  File: 7700WNT.EXE
	  Date: 10/13/95
	  Size: 33,661
	
	
	Additional query words: prodnt 3.10 3.50 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :3.1,3.5,3.51
	
	=============================================================================
	
