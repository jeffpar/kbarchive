---
layout: page
title: "Q152667: NTFS Uses CPU 100% While Allocating File Space"
permalink: kb/152/Q152667/
---

## Q152667: NTFS Uses CPU 100% While Allocating File Space

	Article: Q152667
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You are copying large files (of 50 MB or more) from a computer running Windows
	95 to a computer running Windows NT installed. You are moving the files with a
	drag-and-drop operation, using the Network Neighborhood tool or the My Computer
	tool in Windows 95. Windows NT CPU use increases to 100 percent, resulting in
	performance degradation and client disconnections.
	
	CAUSE
	=====
	
	The Network Neighborhood and My Computer tools in Windows 95 issue an SMBwrite
	of zero bytes at a file's new end-of-file (EOF) offset before actually writing
	data to the file. On large file systems that are highly fragmented, copying a
	large file can cause the Windows NT file system (NTFS) to use 100 percent of the
	CPU for an extended period of time. This can result in other threads being
	starved of CPU time, causing performance degradation and client disconnections.
	
	This problem exists whenever a write of zero bytes occurs at a large offset
	beyond EOF on a highly fragmented file system as NTFS tries to allocate space to
	satisfy the request.
	
	Using COPY/XCOPY from the DOS-PROMPT or copying to a FAT partition does not
	result in this behavior.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5, 3.51
	and 4.0. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
