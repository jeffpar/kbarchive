---
layout: page
title: "Q117724: Err Msg: Disk Full [-34] w/Quark Xpress for Macintosh"
permalink: kb/117/Q117724/
---

## Q117724: Err Msg: Disk Full [-34] w/Quark Xpress for Macintosh

	Article: Q117724
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using Quark Xpress and you save a file from a Macintosh to a
	Windows NT Advanced Server with Services for Macintosh, the error message "Disk
	Full [-34]" may appear even though there is plenty of disk space on the server.
	
	CAUSE
	=====
	
	According to Quark, Quark Xpress cannot accurately get the correct amount of
	disk space if the volume is more than 2 gigabytes (GB).
	
	WORKAROUND
	==========
	
	To work around this problem, try doing one of the following:
	
	- Save the document to the local Macintosh hard disk, and then copy it to the
	  Windows NT Advanced Server.
	
	  -or-
	
	- Partition the Windows NT Services for Macintosh volumes of 2 GB or less.
	
	For more information, call Quark technical support at (303) 894-8899.
	
	Additional query words: sfm prodnt QuarkExpress Express err msg xpress
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNT310Search
	Version           : 3.1 3.5 3.51
	
	=============================================================================
	
