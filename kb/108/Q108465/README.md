---
layout: page
title: "Q108465: Saving Changes to a File on an SFM Volume Fails"
permalink: /kb/108/Q108465/
---

## Q108465: Saving Changes to a File on an SFM Volume Fails

	Article: Q108465
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This problem may occur in other applications in addition to those tested. Adobe
	Illustrator, Aldus Freehand, and Microsoft Powerpoint were tested. When you try
	to save a file from a Windows NT server (running Services for Macintosh) to a
	Macintosh computer, error -123 appears.
	
	NOTE: In Aldus Freehand, the error message states that a disk write failed.
	
	You can use the Save As option under the File menu, and the first time you save a
	file, the save is successful. The error only occurs when saving to an existing
	file.
	
	CAUSE
	=====
	
	This problem is caused by the failure of Services for Macintosh to support the
	Macintosh API command FpExchangeFiles.
	
	WORKAROUND
	==========
	
	To work around this problem, copy the file to the hard disk on the Macintosh,
	edit the file and save changes, then copy the updated file back to the SFM
	volume of the Windows NT Advanced Server computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. This problem was corrected in the latest U.S.
	Service Pack for Windows NT and Windows NT Advanced Server version 3.1. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : 3.1
	
	=============================================================================
	
