---
layout: page
title: "Q218974: Cannot Boot off of a SCSI Device Other Than LUN 0"
permalink: kb/218/Q218974/
---

## Q218974: Cannot Boot off of a SCSI Device Other Than LUN 0

	Article: Q218974
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Attempting to install Windows NT to a SCSI mass storage device other than
	Logical Unit Number (LUN) 0 is not recomended and is not supported.
	
	MORE INFORMATION
	================
	
	There are many constraints that affect the boot sequence and there are different
	error messages that can be encountered. During the installation of Windows NT,
	hard drives on LUNs other than 0 may be displayed. If you attempt to install
	Windows NT to one of these partitions you may get the following error message:
	
	  The hard disk containing the partition or free space you chose has a Logical
	  Unit Number (LUN) greater than 0, and is not assessable to your computer's
	  setup program. Setup cannot install Windows NT on this hard disk.
	
	  Please contact your computer or hard disk controller manufacturer for more
	  information.
	
	  Press ENTER to continue.
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q168105 WinNT Fails to Create a Memory.dmp On Any Other LUN Than 0
	
	  Q162471 WinNT 4.0 May Not Recognize SCSI Devices Using Nonzero LUNs
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351xsearch kbWinNT400xsearch kbWinNTW351xsearch kbWinNTW351 kbWinNTSsearch kbWinNTS400xsearch kbWinNTS400 kbWinNTS351 kbWinNTS351xsearch
	Version           : winnt:3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
