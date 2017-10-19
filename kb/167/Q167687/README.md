---
layout: page
title: "Q167687: PAX Command Gives Error &quot;Bad Magic Number&quot;"
permalink: /kb/167/Q167687/
---

## Q167687: PAX Command Gives Error &quot;Bad Magic Number&quot;

	Article: Q167687
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Windows NT posix utility portable archive exchange (pax) gives the following
	error when an archive created on a UNIX computer is retrieved.
	
	  pax: [offset 98]: Bad magic number
	  pax: <filename> : May be corrupt
	  pax: [offset 176]: Apparently resynchronized
	  pax: <filename> : Continuing
	
	CAUSE
	=====
	
	The above error is obtained when the rsh command is used to remotely carry out
	pax on a UNIX host and redirect the output file to the local Windows NT
	computer.
	
	
	RESOLUTION
	==========
	
	To work around this problem, use the rcp command to copy the archived file from
	the remote UNIX host to the local Windows NT computer.
	
	1. Use the following command to create the archive file on the remote host:
	
	  Rsh unixhost -l root -n pax -w -x cpio -f archive.file file*
	
	2. Use rcp to copy the archive file from the remote host in binary format:
	
	  rcp -b host.user:archive.file .
	
	3. Use pax to retrieve files:
	
	  Pax -r -f archive.file
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5, 3.51,
	and 4.0. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: tar ustar archive
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	
