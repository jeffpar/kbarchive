---
layout: page
title: "Q153720: Cannot Compress a Drive with Little Free Space"
permalink: /kb/153/Q153720/
---

## Q153720: Cannot Compress a Drive with Little Free Space

	Article: Q153720
	Product(s): Microsoft Windows NT
	Version(s): 3.51 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to compress a volume that is very low on free space, the
	following dialog box may be displayed:
	
	  Compression Error File Manager/Explorer cannot change compress attributes
	  for: "path\filename"
	
	Or, if you are running Compact from the command line, the following message may
	appear:
	
	  "path\filename": There is not enough space on the disk.
	
	CAUSE
	=====
	
	This behavior is by design. The system needs some additional free space to do a
	compression. The system is not designed to manipulate the data in place on the
	disk. Additional space is needed to buffer the user data and to possibly hold
	additional file system meta data. The amount of additional free space required
	will depend on the cluster size, file size and available space.
	
	Additional query words: Compact
	======================================================================
	Keywords          : kbusage 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : 3.51 4.0
	
	=============================================================================
	
