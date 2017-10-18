---
layout: page
title: "Q214401: Speed of File Creation Slows Down Linearly with Number of Files"
permalink: kb/214/Q214401/
---

## Q214401: Speed of File Creation Slows Down Linearly with Number of Files

	Article: Q214401
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The speed of file creation slows down linearly with the number of files on the
	volume. When you use a clean volume, it takes about 3 seconds to create 1,024
	files; about 12 seconds with 1.2 million existing files; about 40 seconds with
	4.4 million existing files; about 53 seconds with 5.9 million existing files;
	and about 85 seconds to create 1,024 files with 9.73 million files.
	
	CAUSE
	=====
	
	The cause was determined to be some ineffeciencies in the NTFS Master File Table
	(MFT) file creation process.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was first corrected in Windows NT version 4.0 Service Pack 5.
	
	Additional query words: sfm services for macintosh
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
